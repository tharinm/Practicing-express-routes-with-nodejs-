const express = require("express");

const router = express.Router();

const users = [];

router.get("/add", (req, res, next) => {
  res.render("add-user", { docTitle: "Add User" });
});

router.post("/add", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/");
});

exports.routes = router;
exports.users = users;
