/* eslint-disable import/named */
import BookClass from './bookClass.js';
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
class Books {
  constructor() {
    this.bookList = document.getElementById('bookList');
    this.bookTitle = document.getElementById('titleInput');
    this.bookAuthor = document.getElementById('authorInput');
    this.form = document.getElementById('form');
    this.booksArray = [];
    if (localStorage.getItem('Atif')) {
      this.booksArray = JSON.parse(localStorage.getItem('Atif'));
      this.displayBooks();
    }
  }

  addBook = () => {
    const title = this.bookTitle.value;
    const author = this.bookAuthor.value;
    const book = new BookClass(title, author);
    this.booksArray.push(book);
    this.displayBooks();
    this.saveToLocalStorage();
    this.bookAuthor.value = '';
    this.bookTitle.value = '';
  }

  saveToLocalStorage = () => {
    localStorage.setItem('Atif', JSON.stringify(this.booksArray));
  };

  displayBooks = () => {
    this.bookList.innerHTML = '';
    this.booksArray.forEach((book) => {
      const li = document.createElement('li');
      li.innerHTML = `"${book.title}" by ${book.author}`;
      const remBtn = document.createElement('button');
      remBtn.innerHTML = 'Remove';
      remBtn.addEventListener('click', () => this.removeBook(book));
      li.appendChild(remBtn);
      this.bookList.appendChild(li);
    });
  }

  removeBook = (book) => {
    this.booksArray = this.booksArray.filter((a) => a !== book);
    this.saveToLocalStorage();
    this.displayBooks();
  };
}

const books = new Books();
const form = document.getElementById('form');
form.addEventListener('submit', () => {
  books.addBook();
});