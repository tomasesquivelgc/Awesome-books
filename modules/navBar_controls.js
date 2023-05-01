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

export { showList, showAddbook, showContact };