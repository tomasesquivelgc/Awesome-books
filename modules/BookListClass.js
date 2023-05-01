import Book from './BookClass.js';

class BookList {
  constructor() {
    this.bookList = [];
    if (localStorage.getItem('data')) {
      this.bookList = JSON.parse(localStorage.getItem('data'));
    }
    this.addBtn = document.querySelector('.addBttn');
    this.bookBody = document.querySelector('.bookList-container');
    this.title = document.querySelector('.book-title');
    this.author = document.querySelector('.book-author');
    this.removeButtons = document.querySelectorAll('.removeBttn');
    this.printBooks();
  }

  printBooks() {
    this.bookBody.innerHTML = '';
    for (let i = 0; i < this.bookList.length; i += 1) {
      const shelf = document.createElement('div');
      shelf.className = 'shelfBox';
      shelf.innerHTML = `<div class="book-title-box">
                <h2 class="book-title">'${this.bookList[i].title}'</h2>
                <span> by </span>
                <h2 class="book-author">${this.bookList[i].author}</h2>
            </div>
            <button class="removeBttn">Remove</button>`;
      this.bookBody.appendChild(shelf);
    }
  }

  addBook() {
    const newObj = new Book(this.title.value, this.author.value);
    this.bookList.push(newObj);
    localStorage.setItem('data', JSON.stringify(this.bookList));
    this.printBooks();
    this.title.value = '';
    this.author.value = '';
  }

  removeBook(event) {
    const button = event.target;
    if (button.classList.contains('removeBttn')) {
      const shelf = button.parentElement;
      const indexToRemove = Array.from(this.bookBody.children).indexOf(shelf);
      this.bookList.splice(indexToRemove, 1);
      localStorage.setItem('data', JSON.stringify(this.bookList));
      this.bookBody.removeChild(shelf);
    }
  }

  initialize() {
    this.addBtn.addEventListener('click', this.addBook.bind(this));
    this.bookBody.addEventListener('click', this.removeBook.bind(this));
    this.printBooks();
  }
}

export default BookList;