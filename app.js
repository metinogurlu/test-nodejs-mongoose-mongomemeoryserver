const db = require('./src/models');
const bookService = require('./src/services/book');

const getBooks = async () => {
    await db.connect();
    const books = await bookService.findPublishedBetween(
         new Date('2009-01-01'),
         new Date('2010-01-01'),
         0,
         400);
    console.log(books);
}

getBooks();