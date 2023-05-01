
import { showAddbook, showContact, showList } from './modules/navBar_controls.js';
import BookList from './modules/BookListClass.js';

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

listNav.addEventListener('click', showList);
addNewNav.addEventListener('click', showAddbook);
contactNav.addEventListener('click', showContact);