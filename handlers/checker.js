const { fileFilter } = require("../pkg/validator");

const home = (req, res) => {
  res.render("home");
};

const filter = (req, res) => {
  const inputsObj = {
    directory: req.body.directory,
    articleId: req.body.articleId,
    veroId: req.body.veroId,
    code: req.body.code,
    articleName: req.body.articleName,
    amount: req.body.amount,
  };
  fileFilter(inputsObj);
  res.render("home", {});
};

module.exports = {
  home,
  filter,
};
