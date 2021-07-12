const express = require("express");

const server = express();

server.use(express.json());

const AccountsRouter = require("./accounts/accounts-router");
server.use("/api/accounts", AccountsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
