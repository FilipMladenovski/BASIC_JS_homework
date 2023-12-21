function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;

  this.displayStatus = function () {
    if (this.readingStatus) {
      console.log(`Already read '${this.title}' by ${this.author}.`);
    }
    else {
      console.log(`You still need to read '${this.title}' by ${this.author}.`);
    }
  }
}

let book1 = new Book("The Robots of dawn", "Isaac Asimov", true);
let book2 = new Book("Mockingjay: The Final Book of The Hunger Games", "Suzanne Collins", false);

book1.displayStatus();
book2.displayStatus();