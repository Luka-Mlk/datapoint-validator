const { HashTable } = require("../pkg/hasher/hashTable");
const { inputFormatter } = require("../pkg/formatter/inputFormatter");
const { fileFormatter } = require("../pkg/formatter/fileFormatter");

const home = (req, res) => {
  res.render("home");
};

const filter = async (req, res) => {
  const directory = req.body.directory;
  const inputsObj = {
    articleId: req.body.articleId,
    veroId: req.body.veroId,
    code: req.body.code,
    articleName: req.body.articleName,
    amount: req.body.amount,
  };

  const itemsArr = inputFormatter(inputsObj);

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
  // console.log("Available");
  // console.log(availableArr);
  // console.log("Unavailable");
  // console.log(unavailableArr);
  res.render("home", { available: availableArr, unavailable: unavailableArr });
};

module.exports = {
  home,
  filter,
};
