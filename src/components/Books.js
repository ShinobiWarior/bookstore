import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooksThunk } from '../redux/books/books';
import Book from './Book';
import Form from './Form';
import '../styling/Books.css';

const Books = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksThunk());
  }, [dispatch]);

  return (
    <div className="books">
      <ul className="books-list">
        {
          books.map((book) => (
            <Book
              bookTitle={book.title}
              bookCategory={book.category}
              key={book.id}
              id={book.id}
            />
          ))
        }
      </ul>
      <hr />
      <Form />
    </div>
  );
};

export default Books;
