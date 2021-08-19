let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(read == true) {
        this.read = "already read";
    } else {
        this.read = "not read yet"
    }
}

Book.prototype.info = function() {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`; 
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks(books) {
    for(let i = 0; i < books.length; i++) {
        console.log(books[i]);
    }
}

addBookToLibrary("buch1", "max1", 111, true);
addBookToLibrary("buch2", "max2", 222, false);

const newBookBtn = document.querySelector("#newBook");
newBookBtn.addEventListener("click", createInputForm);

function createInputForm() {
    let inputFormContainer = document.querySelector(".inputFormContainer");
    
}