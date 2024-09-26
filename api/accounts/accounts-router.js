const router = require("express").Router();
const Accounts = require("./accounts-model");
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
} = require("./accounts-middleware");

router.get("/", (req, res) => {
  // DO YOUR MAGIC
  Accounts.getAll().then((accounts) => {
    res.status(200).json(accounts);
  });
});

router.get("/:id", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  res.json(req.account);
});

router.post(
  "/",
  checkAccountPayload,
  checkAccountNameUnique,
  async (req, res, next) => {
    // DO YOUR MAGIC
    const newAccount = {
      name: req.body.name.trim(),
      budget: req.body.budget,
    };
    Accounts.create(newAccount).then((acc) => {
      res.status(201).json(acc);
    });
    // try{
    //   const created = await Accounts.create(newAccount)

    // }
    // catch(err){
    //   next(err)
    // }
  }
);

router.put("/:id", checkAccountId, checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id;

  Accounts.updateById(id, req.body).then((acc) => {
    res.status(200).json(acc);
  });
});

router.delete("/:id", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id;
  Accounts.deleteById(id).then((acc) => {
    res.status(200).json(acc);
  });
});

router.use((err, req, res) => {
  res.status(err.status || 500).json({
    message: "something went wrong inside the accounts router",
    errMessage: err.message,
  });
});

module.exports = router;
