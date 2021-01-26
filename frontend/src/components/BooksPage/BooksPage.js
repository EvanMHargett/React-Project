import Book from './Book'
import {  useSelector } from 'react-redux';

export default function BooksPage(){
    const booksObj = useSelector(state => state.book)
    const books = Object.values(booksObj)

    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <Book book={book}></Book>
                </li>
            ))}
        </ul>
 
    )
}