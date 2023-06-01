const { HashTable } = require("../pkg/hasher/hashTable");
const { inputFormatter } = require("../pkg/formatter/inputFormatter");
const { fileFormatter } = require("../pkg/formatter/fileFormatter");

const home = (req, res) => {
  res.render("home");
};

const filter = async (req, res) => {
  if (!req.body.directory) res.status(502).send("Directory required");
  const directory = req.body.directory;
  const inputsObj = {
    br: req.body.br,
    articleId: req.body.articleId,
    veroId: req.body.veroId,
    code: req.body.code,
    articleName: req.body.articleName,
    amount: req.body.amount,
    origin: req.body.origin,
  };
  const itemsArr = inputFormatter(inputsObj);
  console.log(itemsArr);
  const files = fileFormatter(directory);
  const availableArr = [];
  const unavailableArr = [];

  itemsArr.forEach((item) => {
    if (files[item.veroId]) {
      availableArr.push(item);
    } else {
      unavailableArr.push(item);
    }
  });
  // console.log("Available \r\r");
  // console.log(availableArr);
  // console.log("Unavailable \r\r");
  // console.log(unavailableArr);
  res.render("home", { available: availableArr, unavailable: unavailableArr });
};

module.exports = {
  home,
  filter,
};
