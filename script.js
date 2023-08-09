const myLibrary = [];
const bookData = document.querySelectorAll('input');
const button = document.querySelector('button');
const library = document.querySelector('.library');


function Book (name, author, pages, genre, readStatus){
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.genre = genre,
    this.readStatus = readStatus
};

Book.prototype = {
    read : function (readStatus){ return readStatus ? 'read' : 'not read'}
};

function libraryShelf(book){
    const newCard = document.createElement('div');
    const resume = document.createElement('p');
    const newCardDelete = document.createElement('img')
    newCardDelete.src = ( "./resources/trash_icon.svg");


    library.appendChild(newCard);
    newCard.appendChild(resume);
    newCard.appendChild(newCardDelete)

    resume.textContent = `${book.name}, written by ${book.author} in a ${book.genre} style, has ${book.pages} that I have ${book.read(book.readStatus)}.`;
 
    newCardDelete.addEventListener('click',()=>{
        library.removeChild(newCard);
        myLibrary.splice(book);
    });

};

function clearInputs(){
    bookData.forEach((object)=>{object.value = ''})
}


button.addEventListener('click', ()=> {
    const book = new Book (bookData[0].value, bookData[1].value, bookData[2].value, bookData[3].value, bookData[4].checked);
    myLibrary.push(book);
    libraryShelf(book);
    clearInputs();
    
});