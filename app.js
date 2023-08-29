//impor modul express
const express = require('express');
// membuat app dengan express
const app = express();
//membuat port yang akan digunakan
const port = 3000; 

//memerintah aplikasi untuk mendengarkan permintaan masuk ke port
app.listen(port, () => {
    //mencetak pesan konsol bahwa server telah berjalan di port yang dituju
    console.log(`Server berjalan di http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Halo, dunia!');
});

// Middleware yang akan dijalankan untuk setiap permintaan
app.use((req, res, next) => {
    console.log('Middleware dijalankan');
    next(); // Lanjutkan ke middleware atau penanganan berikutnya
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
    const inputData = req.body;
    // Lakukan sesuatu dengan data yang diambil dari formulir
});

app.use(express.static('public'));

app.use((req, res, next) => {
    const error = new Error('Halaman tidak ditemukan');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send(error.message);
});
