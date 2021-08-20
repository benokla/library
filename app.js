let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    if(this.read == true) {
        this.read = false;
    } else {
        this.read = true;
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks(books) {
    const bookWrapper = document.querySelector(".bookWrapper");

    for(let i = 0; i < books.length; i++) {
        const book = document.createElement("div");
        book.classList.add("book");

        const title = document.createElement("h3");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        const readSwitch = document.createElement("input");
        const deleteBtn = document.createElement("input");

        deleteBtn.setAttribute("type", "button");
        deleteBtn.classList.add("deleteBtn")
        readSwitch.classList.add("readSwitch")
        readSwitch.setAttribute("type", "checkbox");
        readSwitch.style.marginLeft = "20px"
        title.style.textAlign = "center"
        read.style.display = "inline"

        deleteBtn.value = "Delete"
        title.textContent = `${books[i].title}`
        author.textContent = `Author: ${books[i].author}`
        pages.textContent = `Pages: ${books[i].pages}`

        deleteBtn.dataset.index = i;
        readSwitch.dataset.index = i;

        if(books[i].read) {
            readSwitch.checked = true;
            read.textContent = "Already read"
        } else {
            readSwitch.checked = false;
            read.textContent = "Not read yet"
        }

        book.appendChild(title)
        book.appendChild(author)
        book.appendChild(pages)
        book.appendChild(read)
        book.appendChild(readSwitch)
        book.appendChild(deleteBtn)

        bookWrapper.appendChild(book)
    }
    const deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            myLibrary.splice(e.target.dataset.index, 1)
            const bookWrapper = document.querySelector(".bookWrapper");
            bookWrapper.innerHTML = "";
            displayBooks(myLibrary)
    })

    const readSwitches = document.querySelectorAll(".readSwitch");
    readSwitches.forEach((readSwitch) => {
        readSwitch.addEventListener("change", (e) => {
            myLibrary[e.target.dataset.index].toggleRead()
            const bookWrapper = document.querySelector(".bookWrapper");
            bookWrapper.innerHTML = "";
            displayBooks(myLibrary)
        })
    })
})
}

addBookToLibrary("buch1", "max1", 111, true);
addBookToLibrary("buch2", "max2", 222, false);

displayBooks(myLibrary)


const newBookBtn = document.querySelector("#newBook");
newBookBtn.addEventListener("click", createInputForm);

function createInputForm() {
    const inputWrapper = document.querySelector(".inputWrapper")
    const inputFormContainer = document.createElement("div");

    if(inputWrapper.childElementCount === 0) {
        inputFormContainer.classList.add("inputFormContainer");
        inputFormContainer.innerHTML = 
            ` <label class="inputLabel" for="titleInput">Title</label>
            <input type="text" class="input" id="titleInput">
            <br><br>
            <label class="inputLabel" for="authorInput">Author</label>
            <input type="text" class="input"id="authorInput">
            <br><br>
            <label class="inputLabel" for="pagesInput">Pages</label>
            <input type="number" class="input" id="pagesInput">
            <br><br>
            <form id="radioForm">
                <input type="radio" id="read" name="read" value="true" checked>
                <label for="read">Read</label>
                    
                <input type="radio" id="notRead" name="read" value="false">
                <label for="notRead">Not Read</label>
            </form>
            <button id="addBook">Add</button>`;
        inputWrapper.appendChild(inputFormContainer);

        const addBookBtn = document.querySelector("#addBook");
        addBookBtn.addEventListener("click", () => {
            let title = document.querySelector("#titleInput").value
            let author = document.querySelector("#authorInput").value
            let pages = document.querySelector("#pagesInput").value
            
            const radioForm = document.querySelector("#radioForm");
            if(radioForm[0].checked) {
                read = true;
            } else {
                read = false;
            }

            addBookToLibrary(title, author, pages, read);

            const bookWrapper = document.querySelector(".bookWrapper");
            bookWrapper.innerHTML = "";
            displayBooks(myLibrary)
        })
    } else {
        return
    }
    
}