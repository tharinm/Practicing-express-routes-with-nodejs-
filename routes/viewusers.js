const express = require('express');

const router = express.Router();
const usersfile=require('./add-user')

router.get("/", (req, res, next) => {
    const storeuser = usersfile.users;
  res.render("users", { docTitle: "View Users", users: storeuser });
});

module.exports = router;