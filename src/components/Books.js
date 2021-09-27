import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const nextIndex = books.length;
  const dispatch = useDispatch();
  const [bookState, setBookState] = useState({ id: nextIndex });
  const titleInput = document.getElementById('title');
  const categoryInput = document.getElementById('category');

  const handleChange = (e) => {
    setBookState((bookState) => ({
      ...bookState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = () => {
    dispatch(addBook({ bookState }));
    titleInput.value = '';
    categoryInput.value = '';
  };
  return (
    <div>
      <ul>
        {
          books.map((book) => (
            <li
              key={book.id}
            >
              Book title:
              {' '}
              {book.title}
              {' '}
              -
              Category:
              {' '}
              {book.category}
              {' '}
              -
              <button
                type="button"
                onClick={() => dispatch(removeBook(book))}
              >
                Remove book
              </button>
            </li>
          ))
}
      </ul>
      <form>
        <h3>Add new book</h3>
        <input name="title" type="text" placeholder="Book title" id="title" onChange={handleChange} />
        <input name="category" type="text" placeholder="category" id="category" onChange={handleChange} />
        <button
          type="button"
          onClick={handleClick}
        >
          Add book
        </button>
      </form>
    </div>

  );
};

export default Books;