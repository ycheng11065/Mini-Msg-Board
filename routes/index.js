const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

router.post("/new", (req, res, next) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.username,
    added: new Date(),
  };

  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
