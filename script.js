const myLibrary = {
    "The Hobbit": {
      author: "J. R. R. Tolkien",
      pages: 295
    },
    "Atomic habits": {
      author: "James Clear",
      pages: 320
    }
};

const bookWrapper = document.getElementById("bookWrapper");

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
  bookDiv = document.createElement("div");
  bookDiv.classList.add("book")
  bookTitle = document.createElement("div");
  bookTitle.classList.add("book-title");
  bookDetails = document.createElement("div");
  bookDetails.classList.add("book-details")
  bookAuthor = document.createElement("div");
  bookAuthor.classList.add("author")
  bookPages = document.createElement("div");
  bookPages.classList.add("pages")

  for (let book in myLibrary) {
    bookTitle.textContext = book;
    myLibrary[book].author;
    myLibrary[book].pages
  }
}