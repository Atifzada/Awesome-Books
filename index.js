/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const form = document.getElementById('form');
const bookList = document.getElementById('bookList');
const btn = document.getElementById('btn');
let books = JSON.parse(localStorage.getItem('Atif')) || [];

function displayBooks() {
  bookList.innerHTML = '';
  books.forEach((book) => {
    const li = document.createElement('li');
    li.innerHTML = `${book.title} <br> by ${book.author} <br>`;
    const remBtn = document.createElement('button');
    const hr = document.createElement('hr');
    remBtn.innerHTML = 'Remove';
    remBtn.addEventListener('click', () => removeBook(book));
    li.appendChild(remBtn);
    bookList.appendChild(li);
    bookList.appendChild(hr);
  });
}
function addBook(title, author) {
  const book = { title, author };
  books.push(book);
  localStorage.setItem('Atif', JSON.stringify(books));
  displayBooks();
}

function removeBook(book) {
  books = books.filter((a) => a !== book);
  localStorage.setItem('Atif', JSON.stringify(books));
  displayBooks();
}
displayBooks();
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');
  addBook(titleInput.value, authorInput.value);
  titleInput.value = '';
  authorInput.value = '';
});