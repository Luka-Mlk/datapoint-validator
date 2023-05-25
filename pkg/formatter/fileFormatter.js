const fs = require("fs");

const fileFormatter = (directory) => {
  const reg = /[jJ]\d{7}/gm; // regex that identifies J[or]j and 7 numbers after
  const returnObj = {};
  const filteredList = [];

  const files = fs.readdirSync(directory);

  // function that fills the filtered list so data can be accessed
  files.forEach((file) => {
    const h1 = String(file.split(" "));
    const h2 = h1.replace(/,+/gm, " ");
    const h3 = String(h2.split("/n"));
    const final = String(h3);
    const matches = final.matchAll(reg);
    filteredList.push(...matches);
  });

  // sets field of obj to its name
  for (match of filteredList) {
    returnObj[match[0]] = match[0];
  }

  return returnObj;
};

module.exports = { fileFormatter };
