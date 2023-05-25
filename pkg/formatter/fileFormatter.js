const fs = require("fs");

const fileFormatter = (directory) => {
  const reg = /[jJ]\d{7}/gm; // regex that identifies J[or]j and 7 numbers after
  const returnObj = {};
  const filteredList = [];
  console.log(directory);
  const files = fs.readdirSync(directory);

  // function that fills the filtered list so data can be accessed
  files.forEach((file) => {
    const h1 = String(file.split(" "));
    const h2 = String(h1.split("_"));
    const h3 = String(h2.split("/n"));
    const h4 = h3.replace(/,+/gm, " ");
    const h5 = h4.toUpperCase();
    const final = h5;

    // console.log(final);

    let matches = final.matchAll(reg);

    filteredList.push(...matches);
  });

  // console.log(filteredList[filteredList.length - 1]);

  // sets field of obj to its name
  for (match of filteredList) {
    returnObj[match[0]] = match[0];
  }

  // console.log(returnObj);

  return returnObj;
};

module.exports = { fileFormatter };
