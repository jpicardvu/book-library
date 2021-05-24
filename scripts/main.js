const newAuthor = document.querySelector('#author');
const newTitle = document.querySelector('#title');
const newPages = document.querySelector('#pages');
const newRead = document.querySelector('#read');
const submitButton = document.querySelector('.btn');
const clearButton = document.querySelector('.btn-clear');
const bookUL = document.querySelector('ul');
const bookInfo = document.createElement('input');

submitButton.addEventListener('click', addBookToLibrary)
clearButton.addEventListener('click', function() {
  document.querySelector('.form-container').reset();
})

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
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
  //let bookshelf = [];
  //bookshelf.push(newBook);
  
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
  })
  readLabel.appendChild(readInput);
  
  const readSlider = document.createElement('span');
  readSlider.classList.add('read-slider')
  readLabel.appendChild(readSlider)

  const xButton = document.createElement('button');
  xButton.classList.add('delete-book')
  xButton.textContent = 'X';
  xButton.addEventListener('click', function() {
    bookLI.remove();
  })
  bookLI.appendChild(xButton);
  
  newAuthor.value = '';
  newTitle.value = '';
  newPages.value = '';
  newRead.value = '';
}