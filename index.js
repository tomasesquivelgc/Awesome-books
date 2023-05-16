import { showAddbook, showContact, showList } from './modules/navBar_controls.js';
import BookList from './modules/BookListClass.js';
import getDate from './modules/date.js';

const myBookList = new BookList();
myBookList.initialize();


// nav controls

const listNav = document.getElementById('list-page');
const addNewNav = document.getElementById('add-list');
const contactNav = document.getElementById('conctact-list');

listNav.addEventListener('click', showList);
addNewNav.addEventListener('click', showAddbook);
contactNav.addEventListener('click', showContact);
setInterval(getDate, 1000);