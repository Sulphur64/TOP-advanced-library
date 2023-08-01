const myLibrary = [];
const bookData = document.querySelectorAll('input');
const button = document.querySelector('button');
const library = document.querySelector('.library');

const newCard = document.createElement('div');
const resume = document.createElement('p');
const newCardDelete = document.createElement('button')


function Book (name, author, pages, genre, readStatus){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.readStatus = readStatus
};

function libraryShelf(book){

    library.appendChild(newCard);
    newCard.appendChild(resume);
    resume.textContent = `${book.name}, written by ${book.author} in a ${book.genre} style, has ${book.pages} that I have ${book.readStatus}`;
};


button.addEventListener('click', ()=> {
    const book = new Book (bookData[0].value, bookData[1].value, bookData[2].value, bookData[3].value, bookData[4].value)
    myLibrary.push(book);
    myLibrary.forEach((book)=>libraryShelf(book));
    
    
});