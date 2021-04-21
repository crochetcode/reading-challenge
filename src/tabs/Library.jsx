import React from 'react';
import { LibraryStyle } from '../styling/library.js';

const books = [
    {
        category: 'An #OwnVoices Book',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1577054808l/52195151._SX318_SY475_.jpg'
    },
    {
        category: 'A book where humans are not the main characters',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1484065830l/33831800._SY475_.jpg'
    },
    {
        category: 'A book based on its cover',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576620266l/49372579._SY475_.jpg'
    },
    {
        category: 'A book not set on Earth',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg'
    },
    {
        category: 'An epistolary novel',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519229648l/38712577.jpg'
    },
    {
        category: 'A "classic" you\'ve always wanted to read',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510032003l/36550380._SY475_.jpg'
    },
    {
        category: 'A book by a 2021 AViD author',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582478051l/51608211._SY475_.jpg'
    },
    {
        category: 'A book recommended by a Book Chat librarian',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367312709l/17406279.jpg'
    },
    {
        category: 'A nonfiction book inspired by a significant historical event',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327859562l/8213519.jpg'
    },
    {
        category: 'A travelouge or road trip book',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503260997l/36078223._SY475_.jpg'
    },
    {
        category: 'A book of short stories or essays',
        name: 'Axiomatic'
    },
    {
        category: 'A book you enjoyed in school or college',
        name: 'Calling B for Butterfly'
    }
]

const booksRead = books.filter(book => book.cover).length;
const percentage = ((booksRead / 12) * 100).toFixed(1);

export const Library = () => {
    return (
        <div className='container tab'>
            <LibraryStyle>
                <h1>Reading Challenge</h1>
                <h2>{booksRead} of 12 ({percentage}%)</h2>
                <div className='container books'>
                    {books.map(book => {
                        const isRead = book.cover ? 'black' : 'white';
                        return (
                            <div className={`panel ${isRead}`}>
                                {book.cover ? (<>
                                    <img src={book.cover} alt="" />
                                    <h3>{book.category}</h3>
                                </>)
                                    : (<>
                                        <h3>{book.category}</h3>
                                        {book.name && <h4>{book.name}</h4>}
                                        {book.title && <h4><span>{book.title}</span></h4>}
                                    </>)
                                }
                            </div>
                        )
                    })}
                </div>
            </LibraryStyle>
        </div>
    )
}