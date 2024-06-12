import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Book } from '../redux/libraryAction';


const Library = () => {
    const books = useSelector((state: RootState) => state.library.books);
    const dispatch = useDispatch();
    const [newBook, setNewBook] = useState<Book>({ title: '', year: 0, author: '' });
    const [editBook, setEditBook] = useState<Book>({ isbn: '', title: '', year: 0, author: '' });

    const addBookToLibrary = () => {
        dispatch({ type: 'library/add', payload: newBook });
        setNewBook({ title: '', year: 0, author: '' });
    };

    const editBookInLibrary = () => {
        dispatch({ type: 'library/edit', payload: editBook });
        setEditBook({ isbn: '', title: '', year: 0, author: '' });
    };

    const deleteBookFromLibrary = (isbn: string) => {
        dispatch({ type: 'library/delete', payload: isbn });
    };

    return (
        <div className='libraryDiv'>
            <h2>Our library:</h2>
            <ul>
                {books.map(book => (
                    <li key={book.isbn}>
                        ISBN: {book.isbn} , {book.title} by {book.author} ({book.year})
                        <button onClick={() => deleteBookFromLibrary(book.isbn || '')}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <h3>Add a new book:</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Year"
                    value={newBook.year}
                    onChange={(e) => setNewBook({ ...newBook, year: parseInt(e.target.value) })}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                />
                <button onClick={addBookToLibrary}>Add book to library</button>
            </div>
            <div>
                <h3>Edit a book:</h3>
                <input
                    type="text"
                    placeholder="ISBN"
                    value={editBook.isbn}
                    onChange={(e) => setEditBook({ ...editBook, isbn: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={editBook.title}
                    onChange={(e) => setEditBook({ ...editBook, title: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Year"
                    value={editBook.year}
                    onChange={(e) => setEditBook({ ...editBook, year: parseInt(e.target.value) })}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={editBook.author}
                    onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
                />
                <button onClick={editBookInLibrary}>Edit information about book</button>
            </div>
        </div>
    );
};

export default Library;
