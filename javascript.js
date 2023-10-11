let indexContainer = document.querySelector('.booksContainer')
let newBook;
let bookcount = 0;
const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read == 'read' || read == 'have read' || read == true){
            read = 'have read';
        }
        else {
            read = 'not read yet';
        }
        //myLibrary.push(`${title} ${author} ${pages} ${read}`);
        myLibrary.push(this);
        
        addLibraryToPage();
    }
}

function addBookToLibrary() {

}
let newArray = [];
function addLibraryToPage() {
    for (const books of myLibrary){
        if(!newArray.includes(books) && newBookTime == true){
        bookcount++;
        newBook = document.createElement('div');
        newBook.setAttribute('class', 'bookEntry');
        newBook.setAttribute('id', (`book${bookcount}`));
        newBook.textContent = (`${books.title} ${books.author} ${books.pages} ${books.read}`);
        indexContainer.appendChild(newBook);
        newArray.push(books);
        newBookTime = false;
        }
    }
}
/*
const theHobbit = new book('The Hobbit', 'J.R.R Tolken', 295, false);
const theHobbit2 = new book('The Hobbit2', 'J.R.R Tolkennn', 1295, true);
theHobbit.info();
theHobbit2.info();
const theHobbit3 = new book('The Hobbit3', 'J.R.R Tolkennn', 1295, true);
theHobbit3.info();
function bookInput() {
    const newBook = new book(prompt("book:"));
    myLibrary.push(newBook);
    addLibraryToPage();
}
*/
const bookForm = document.querySelector('.bookForm');
const addBookButton = document.querySelector('.addBookButton');
const submitButton = document.querySelector('.submitButton');
const titleInput = document.getElementById('bookTitle');
const authorInput = document.getElementById('author');
const pageCount = document.getElementById('pageCount');
const radioSec = document.querySelector('.pagesRadio');
//const radioY = document.getElementById("yes").value = "no";
let newBookTime = false;
function handleForm(event) { 
    event.preventDefault(); 
    if(newBookTime == true){
        let radioSelection;
        if(document.getElementById('yes').checked) {
            radioSelection = 'Have read';
        }
        else if (document.getElementById('no').checked) {
            radioSelection = 'Not read';
        }
        const newBook = new book((titleInput.value), (authorInput.value), (pageCount.value), (radioSelection));
        bookForm.style.display = 'none';
        bookForm.style.zIndex = '0';
        bookForm.reset();
        myLibrary.push(newBook);
        addLibraryToPage();
        
    } 
}
addBookButton.addEventListener('click', ()=>{
    newBookTime = true;
    bookForm.style.display = 'flex';
    bookForm.style.zIndex = '2';
    bookForm.addEventListener('submit', (handleForm))
})
    
