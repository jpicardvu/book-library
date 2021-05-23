let bookshelf = [];
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

Book.prototype.readBook = function() {
  this.read = 'read';
}

Book.prototype.unreadBook = function() {
  this.read = 'unread';
}

function addBookToLibrary() {
  if (newAuthor.value === '' || 
      newTitle.value === '' || 
      newPages.value === '' || 
      newRead.value === '') {
        return;
      }
  
  const newBook = new Book(newAuthor.value, newTitle.value, newPages.value, newRead.value);
  bookshelf.push(newBook);
  
  const bookLI = document.createElement('li');
  const bookContent = document.createElement('div');
  bookContent.classList.add('book-content');
  bookContent.textContent = Object.values(newBook);
  bookLI.appendChild(bookContent);
  bookUL.appendChild(bookLI);

  const readLabel = document.createElement('label');
  readLabel.classList.add('read-label');
  bookLI.appendChild(readLabel);
  
  const readInput = document.createElement('input');
  readInput.classList.add('read-input') 
  readInput.type = 'checkbox';
  if (newBook.read === 'read') {
    readInput.checked = true;
  }
  else {
    readInput.checked = false;
  }
  readInput.addEventListener('change',function() {
    if (this.checked) {
      newBook.readBook()
      bookContent.textContent = Object.values(newBook);
    } else {
      newBook.unreadBook();
      bookContent.textContent = Object.values(newBook);
    }
  });
  readLabel.appendChild(readInput);
  
  const readSlider = document.createElement('span');
  readSlider.classList.add('read-slider')
  readLabel.appendChild(readSlider)

  const deleteBookLI = document.createElement('button');
  deleteBookLI.classList.add('delete-book')
  deleteBookLI.textContent = 'X';
  bookLI.appendChild(deleteBookLI);
  
  newAuthor.value = '';
  newTitle.value = '';
  newPages.value = '';
  newRead.value = '';
}