// Function used for learning but didint use in app
function hashStringToInt(string, tableSize) {
  let hash = 17;

  for (let i = 0; i < string.length; i++) {
    hash = (13 * hash * string.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(5);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    if (this.getItem(key)) {
      console.log(`Key with value: ${key} already exists`);
      return;
    }

    this.numItems++;

    const loadFactor = this.numItems / this.table.length;

    if (loadFactor >= 0.8) {
      this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);

    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      return null;
    }
    return this.table[idx].find((x) => x[0] === key);
  };
}

module.exports = {
  HashTable,
  hashStringToInt,
};

// Testing 👇
// const myTable = new HashTable();

// console.log(`starting table lengh ${myTable.table.length}`);

// myTable.setItem("J185", {
//   articleId: 1,
//   veroId: "J185",
//   code: "185",
//   articleName: "185",
//   amount: 55,
// });

// myTable.setItem("J122", {
//   articleId: 1,
//   veroId: "J185",
//   code: "185",
//   articleName: "185",
//   amount: 55,
// });

// console.log(`ending num items ${myTable.numItems}`);

// myTable.setItem("J133", {
//   articleId: 1,
//   veroId: "J185",
//   code: "185",
//   articleName: "185",
//   amount: 55,
// });

// myTable.setItem("J195", {
//   articleId: 2,
//   veroId: "J195",
//   code: "195",
//   articleName: "195",
//   amount: 15,
// });

// myTable.setItem("J195", {
//   articleId: 2,
//   veroId: "J195",
//   code: "195",
//   articleName: "195",
//   amount: 15,
// });

// console.log(myTable.getItem("J185"));
// console.log(myTable.getItem("J195"));
// console.log(`ending table size ${myTable.table.length}`);
