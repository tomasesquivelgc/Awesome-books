// class for Awesome books

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
    const newObj = {
      title: this.title.value,
      author: this.author.value,
    };
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
const myBookList = new BookList();
myBookList.initialize();

const currentDate = new Date().toLocaleString('default', {
  month: 'long', year: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true,
});
document.getElementById('date').innerHTML = currentDate;

// nav controls

const listNav = document.getElementById('list-page');
const addNewNav = document.getElementById('add-list');
const contactNav = document.getElementById('conctact-list');

const booklistSection = document.getElementById('landing-page');
const addbookSection = document.getElementById('add-book');
const contactSection = document.getElementById('contact-section');

const showList = () => {
  booklistSection.classList.remove('hide');
  addbookSection.classList.add('hide');
  contactSection.classList.add('hide');
};

const showAddbook = () => {
  booklistSection.classList.add('hide');
  addbookSection.classList.remove('hide');
  contactSection.classList.add('hide');
};

const showContact = () => {
  booklistSection.classList.add('hide');
  addbookSection.classList.add('hide');
  contactSection.classList.remove('hide');
};

listNav.addEventListener('click', showList);
addNewNav.addEventListener('click', showAddbook);
contactNav.addEventListener('click', showContact);