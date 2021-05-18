let myLibrary = ['test1','test2','test3'];
const newAuthor = document.querySelector('#author');
const newTitle = document.querySelector('#title');
const newPages = document.querySelector('#pages');
const newRead = document.querySelector('#read');
const submitButton = document.querySelector('.btn');
const cancelButton = document.querySelector('.btn-cancel')
const bookUL = document.querySelector('ul');

const bookInfo = document.createElement('input');
submitButton.addEventListener("submit", addBookToLibrary())

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;

  // add prototype function remove entry (pop?) from lis
  // and then remove from html/shift up

  // add prototype function to change read status
  // and then change on html
}

function addBookToLibrary() {
  const newBook = new Book(newAuthor.value, newTitle.value, newPages.value, newRead.value);
  myLibrary.push(newBook);
  
  const bookLI = document.createElement('li');
  bookLI.textContent = newBook;
  bookUL.appendChild(bookLI);
  
  newAuthor.value = '';
  newTitle.value = '';
  newPages.value = '';
  newRead.value = '';
}








function addL() {
  for (let book in myLibrary) {
    const bookLI = document.createElement('li');
    const bookInfo = document.createElement('input');
    bookInfo.type = 'text'
    bookInfo.placeholder = 'Enter book name'
    bookLI.append(bookInfo)
    bookLI.textContent = myLibrary[book];
    bookUL.appendChild(bookLI);
  }
}




function add_down() {

  var node = document.createElement("LI");
  var element = document.createElement("input");
  element.type = 'text';
  element.placeholder = "Enter Name";
  node.append(element);

  document.getElementById("start").appendChild(node);

}