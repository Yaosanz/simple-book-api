const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

app.use(bodyParser.json());

// Data buku (simulasi database)
let books = [];

// Menyimpan buku
app.post('/api/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Menampilkan keseluruhan buku
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Menampilkan detail buku berdasarkan ID
app.get('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    res.status(404).json({ message: 'Buku tidak ditemukan' });
  } else {
    res.json(book);
  }
});

// Mengubah data buku berdasarkan ID
app.put('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;
  const index = books.findIndex((book) => book.id === bookId);

  if (index === -1) {
    res.status(404).json({ message: 'Buku tidak ditemukan' });
  } else {
    books[index] = updatedBook;
    res.json(updatedBook);
  }
});

// Menghapus buku berdasarkan ID
app.delete('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  const index = books.findIndex((book) => book.id === bookId);

  if (index === -1) {
    res.status(404).json({ message: 'Buku tidak ditemukan' });
  } else {
    books.splice(index, 1);
    res.json({ message: 'Buku berhasil dihapus' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
