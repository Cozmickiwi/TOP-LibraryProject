const indexContainer = document.querySelector('.booksContainer');
let newBook;
let bookcount = 0;
const myLibrary = [];
function book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read === 'read' || read == 'have read' || read == true){
            read = 'have read';
        }
        else {
            read = 'not read yet';
        }
        myLibrary.push(this);
        addLibraryToPage();
    }
}
let newArray = [];
function addLibraryToPage(){
    for (const books of myLibrary){
        if(!newArray.includes(books) && newBookTime == true){
        bookcount++;
        newBook = document.createElement('div');
        let newBookTitle = document.createElement('h3');
        let newBookAuthor = document.createElement('h3');
        let newBookPages = document.createElement('h3');
        let newBookTitleHeader = document.createElement('h3');
        let newBookAuthorHeader = document.createElement('h3');
        let newBookPagesHeader = document.createElement('h3');
        let buttons = document.createElement('div');
        let deleteButton = document.createElement('button');
        let readButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        buttons.setAttribute('class', 'buttonContainer');
        deleteButton.setAttribute('id', (`button${bookcount}`));
        deleteButton.setAttribute('class', (`delButton`));
        newBookTitleHeader.textContent = 'Title:';
        newBookAuthorHeader.textContent = 'Author:';
        newBookPagesHeader.textContent = 'Pages:';
        newBook.setAttribute('class', 'bookEntry');
        newBook.setAttribute('id', (`${bookcount}`));
        newBookTitle.textContent = (books.title);
        newBookAuthor.textContent = (books.author);
        newBookPages.textContent = (books.pages);
        newBookTitle.style.fontWeight = ('400');
        newBookAuthor.style.fontWeight = ('400');
        newBookPages.style.fontWeight = ('400');
        newBook.appendChild(newBookTitleHeader);
        newBook.appendChild(newBookTitle);
        newBook.appendChild(newBookAuthorHeader);
        newBook.appendChild(newBookAuthor);
        newBook.appendChild(newBookPagesHeader);
        newBook.appendChild(newBookPages);
        buttons.appendChild(deleteButton);
        let readStatus;
        if(radioSelection == 'Read'){
            readButton.textContent = radioSelection;
            readButton.style.backgroundColor = ('#69d2e7');
            readStatus = 'read';
        }
        else{
            readButton.textContent = radioSelection;
            readButton.style.backgroundColor = ('#ffdf6d');
            readStatus = 'notread';
            readButton.style.fontSize = ('.45em');
        }
        buttons.appendChild(readButton);
        newBook.appendChild(buttons);
        readButton.addEventListener('click', ()=>{
            if (readStatus == 'read'){
                readButton.textContent = 'Not read';
                readButton.style.backgroundColor = ('#ffdf6d');
                readStatus = 'notread';
            }
            else{
                readButton.textContent = 'Read';
                readButton.style.backgroundColor = ('#69d2e7');
                readStatus = 'read';
                readButton.style.fontSize = ('.45em')
            }
        })
        indexContainer.appendChild(newBook);
        document.getElementById(`button${bookcount}`).addEventListener('click', ()=> {
            let deleteBook = (deleteButton.id).split("");
            deleteBook = deleteBook[deleteBook.length - 1];
            document.getElementById(deleteBook).remove();

        });
        newArray.push(books);
        newBookTime = false;
        }
    }
}
let radioSelection;
const bookForm = document.querySelector('.bookForm');
const addBookButton = document.querySelector('.addBookButton');
const submitButton = document.querySelector('.submitButton');
const titleInput = document.getElementById('bookTitle');
const authorInput = document.getElementById('author');
const pageCount = document.getElementById('pageCount');
const radioSec = document.querySelector('.pagesRadio');
let newBookTime = false;
function handleForm(event) { 
    event.preventDefault(); 
    if(newBookTime == true){
        
        if(document.getElementById('yes').checked) {
            radioSelection = 'Read';
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
    bookForm.addEventListener('submit', (handleForm));
})