const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  return db("accounts");
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db("accounts").where({ id }).first();
};

const create = async (account) => {
  // DO YOUR MAGIC
  const [newAccount] = await db("accounts").insert(account, "id");
  const acc = await getById(newAccount);
  return acc;
};

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db("accounts").where({ id }).update(account);
  return getById(id);
};

const deleteById = async (id) => {
  // DO YOUR MAGIC
  const deleted = await db("accounts").where({ id }).del();
  return deleted;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
