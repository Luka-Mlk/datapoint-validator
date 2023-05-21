const fs = require("fs");
const input =
  "J8100034	A3031-A3030         	IGRA^KA ZA DOM.MILENICI    A3031-A3030	60J6402507	CLSY106123VA        	АРОМАТИЗЕР-АНТИТОБАКО 30гр ВАНИЛА	192J5700024	WMH0350            	VE]NIK METALEN-METAL	48J6400123	P66N-G@66NS         	ZAKA^ALKA ZA OBLEKA DRVENA METALNI [TIPK	40J6405043	YHA1040B            	СЕТ ПАТОСНИЦИ ЗА ВО АВТОМОБИЛ 4пар 	10J6405129	L026               	CEDILKA METALNA MALA 10sm	40J6400185	JUM-BA101-58        	FUTROLA ZA OBLEKA PLATNENA 35h30h20	36J6400186	NS30073@JUM-BA102-58	FUTROLA ZA OBLEKA PLATNENA 50h35h20	36J6400188	JUM-BA104-58        	FUTROLA ZA OBLEKA 100h50h20 PLATNENA art	48J6400189	JUM-BC101-57        	FUTROLA PLATNENA 3 POLICI VISE^KA 30h30h	20J1600153	T001               	ОНЕЦ	192J1600154	JT001               	JA@E 80m  JT001	144J6402672	PT001-R             	JA@E PVC 100m CRVENO	72J6400256	JYP51543@ST-SU001   	SET ZAKA^ALKI 2/1 OBLO@ENI SO SATEN	24"
    // .replace(/\s+/g, " ") /* Regex that identifies repeating whitespace */ for formatting reasons i dont use it
    .trim();
// console.log(input.split("\t"));
function getIdAndCount(input) {
  // const cutString1 = String(input.split(" "));
  // const cutString2 = String(cutString1.split("J"));
  // const cutString3 = cutString2.split(",");
  //   const reg = /^\d+$/; // reggex to identify only numbers
  // const documentIds = cutString1.filter((str) => {
  //   return reg.test(str);
  // });
  // return documentIds;
}
const fileFilter = (inputs) => {
  //   console.log(inputs);
  const articleIds = inputs.articleId.split("\r\n");
  const veroIds = inputs.veroId.split("\r\n");
  const codes = inputs.code.split("\r\n");
  const articleNames = inputs.articleName.split("\r\n");
  const amounts = inputs.amount.split("\r\n");
  const allItemsArr = [];
  for (let i = 0; i < articleIds.length; i++) {
    const singleObj = {
      articleId: articleIds[i],
      veroId: veroIds[i],
      code: codes[i],
      articleName: articleNames[i],
      amount: amounts[i],
    };
    allItemsArr.push(singleObj);
  }
  console.log(allItemsArr);
};
// const nums = getIdAndCount(input);
// console.log(nums);
// console.log(nums.length);
// const files = fs.readdirSync("./Rolna");
// for (let i = 0; i < files.length; i++) {
//   for (let j = 0; j < nums.length; j++) {
//     if (files[i].includes(`J${nums[j]}`)) {
//       console.log(`--File--${files[i]}`);
//       console.log(`--ID--${nums[j]}`);
//       console.log("Hooray its a match");
//     }
//   }
// }
module.exports = {
  fileFilter,
};
