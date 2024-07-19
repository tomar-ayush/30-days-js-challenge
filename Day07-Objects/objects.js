let book = {
  title: "A book abut life",
  author: "Ayush",
  year: 2020,
};

// console.log(book);
// console.log(book.title);

// Object Methods

function objValues(obj) {
  return "Author of " + obj.title + " is " + obj.author;
}

// console.log(objValues(book))

function updateyear(updatedYear) {
  book.year = updatedYear;
  console.log(book.year);
}

updateyear(2019);

// nested Objects

let library = {
  library1: ["End of world", "Rise of new World"],
  library2: ["Rise of global warming", "More Rise of Global Warming"],
  library3: ["Primitive Humans", "Interplanatery Humans"],

  returnTitles: function (libName){
    return this[libName] || "No Library Found";
  }

};

// console.log(library.returnTitles("library2"))
// console.log(library)
// console.log(library.library1)


/// Object Iteration

for (let obj in library) {
  console.log(obj + ": " + library[obj])
}

console.log(Object.keys(library))
console.log(Object.values(library))