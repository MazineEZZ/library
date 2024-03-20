const myLibrary = {
    "The Book": {
      author: "The weeknd",
      pages: "69",
      read: true
    },
};

const bookWrapper = document.getElementById("bookWrapper");
// Modal
const openAddBookModalBtn = document.getElementById("openAddBookModalBtn")
const addBookModal = document.getElementById("addBookModal");
const bookTitleInput= document.getElementById("bookTitle");
const bookAuthorInput = document.getElementById("bookAuthor");
const bookPagesInput = document.getElementById("bookPages");
const bookReadSelect = document.getElementById("isBookRead");
const closeaddBookModal = document.getElementById("closeAddBookModal");
const addBook = document.getElementById("addBook");

addBook.addEventListener("click", () => {
  console.log(bookReadSelect.value)
  addBookToLibrary(
    bookTitleInput.value,
    bookAuthorInput.value,
    bookPagesInput.value,
    bookReadSelect.value
  )
  displayBooks();
  addBookModal.close();
});

openAddBookModalBtn.addEventListener("click", () => {
  addBookModal.showModal();
});

closeaddBookModal.addEventListener("click", () => {
  addBookModal.close();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  read = (read === "Read") ? true : false;

  myLibrary[title] = {
    author: author,
    pages: pages,
    read: read
  };
}

function displayBooks() {
  bookWrapper.innerHTML = "";
  for (let book in myLibrary) {
    let bookDiv = createElementWithClasses("div", "book");
    let bookTitle = createElementWithClasses("div", "book-title")
    let bookDetails = createElementWithClasses("div", "book-details")
    let bookAuthor = createElementWithClasses("div", "author");
    let bookPages = createElementWithClasses("div", "pages");
    let authorTitle = createElementWithClasses("div", "title");
    let authorName = createElementWithClasses("div", "value")
    let pagesTitle = createElementWithClasses("div", "title");
    let pagesValue = createElementWithClasses("div", "value");

    bookTitle.textContent = book;

    authorTitle.textContent = "author: ";
    authorName.textContent = myLibrary[book].author;
    pagesTitle.textContent = "pages: ";
    pagesValue.textContent = myLibrary[book].pages;
  
    let readClass = (myLibrary[book].read) ? "read" : "not-read"

    let readBtn = createElementWithClasses("button", readClass);
    readBtn.setAttribute("id", "readToggleBtn");

    readBtn.addEventListener("click", (btn) => {
      toggleReadBtn(btn, book);
    })

    let delBtn = createElementWithClasses("button", "delete");
    delBtn.setAttribute("id", "deleteBtn");
    let delBtnImg = document.createElement("img");
    delBtnImg.setAttribute("src", "assets/icons/delete.png");
    delBtnImg.setAttribute("alt", "delete")
    delBtn.appendChild(delBtnImg);

    delBtn.addEventListener("click", () => {
      deleteBook(book);
    })

    // Appending children to bookDiv
    bookPages.appendChild(pagesTitle);
    bookPages.appendChild(pagesValue);
    bookAuthor.appendChild(authorTitle);
    bookAuthor.appendChild(authorName);
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookPages);
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(readBtn);
    bookDiv.appendChild(delBtn);
    bookWrapper.appendChild(bookDiv);
  }
}

function deleteBook(bookName) {
  delete myLibrary[bookName];
  displayBooks();
}

function toggleReadBtn(button, bookName) {
  button.target.classList.toggle("read")
  button.target.classList.toggle("not-read");
  myLibrary[bookName].read = (button.target.classList[0] === "read") ? true : false;
}

function createElementWithClasses(type, ...classes) {
  element = document.createElement(type);
  for (cl of classes) {
    element.classList.add(cl);
  }
  return element;
}

displayBooks()