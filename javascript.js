
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
        return(`${title} by ${author}, ${pages} pages, ${read}.`);
    }
}

const theHobbit = new book('The Hobbit', 'J.R.R Tolken', 295, false);
console.log(theHobbit.info());
