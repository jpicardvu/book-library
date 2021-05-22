let myLibrary = ['test1','test2','test3'];
const newAuthor = document.querySelector('#author');
const newTitle = document.querySelector('#title');
const newPages = document.querySelector('#pages');
const newRead = document.querySelector('#read');
const submitButton = document.querySelector('.btn');
const cancelButton = document.querySelector('.btn-cancel');
const bookUL = document.querySelector('ul');

const bookInfo = document.createElement('input');
submitButton.addEventListener("click", addBookToLibrary)

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  //this.readUnread() = if checked then this.read = 'read' else 'unread'
                      // bookLI.textContent = Object.values(newBook)

  // add prototype function remove entry (pop?) from lis
  // and then remove from html/shift up

  // add prototype function to change read status
  // and then change on html
}

function addBookToLibrary() {
  if (newAuthor.value === '' || 
      newTitle.value === '' || 
      newPages.value === '' || 
      newRead.value === '') {
        return;
      }
  
  const newBook = new Book(newAuthor.value, newTitle.value, newPages.value, newRead.value);
  myLibrary.push(newBook);
  
  const bookLI = document.createElement('li');
  bookLI.textContent = Object.values(newBook);
  bookUL.appendChild(bookLI);

  const readLabel = document.createElement('label');
  readLabel.classList.add('read-label');
  bookLI.appendChild(readLabel);
  
  const readInput = document.createElement('input');
  readInput.classList.add('read-input')
  readInput.type = 'checkbox';
  //if (4th item, read/unread = read Then checked = true else false)
    readInput.checked = true;
  // readInput.addEventListener("on check/uncheck click?", this.read/unread function)
  
  readLabel.appendChild(readInput);
  
  const readSpan = document.createElement('span');
  readSpan.classList.add('read-span')
  readLabel.appendChild(readSpan)

  const deleteBookLI = document.createElement('button');
  deleteBookLI.classList.add('delete-book')
  deleteBookLI.textContent = 'X';
  bookLI.appendChild(deleteBookLI);
  
  newAuthor.value = '';
  newTitle.value = '';
  newPages.value = '';
  newRead.value = '';
}








/*


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

*/