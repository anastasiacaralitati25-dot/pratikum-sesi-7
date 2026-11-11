const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Halaman Utama');
});

app.get('/about', (req, res) => {
    res.send('Halaman Tentang Kami');
});

app.get('/contact', (req, res) => {
    res.send('Hubungi kami di routing-app');
});

app.get('/produk/:kode', (req, res) => {
    res.send('produk dengan kode: ' + req.params.kode);
});

app.post('/users', (req, res) => {
    res.send('Tambah data user baru');
});

app.put('/users/:id', (req, res) => {
    res.send('Update data user dengan ID: ' + req.params.id);
});

app.delete('users/:id', (req, res) => {
    res.send('Hapus user dengan ID: ' + req.params.id);
})
app.listen(3000, () => console.log('Server berjalan di http://lokalhost:3000'));

app.get('/produk/:kode', (reg, res) =>{
    res.send('produk dengan kode: ' + reg.params.kode);
});
app.post('/user', (reg, res) => {
    res.send('Tambah data user baru');
});

app.put('/user/:id',(reg, res) => {
    res.send('Update data user dengan ID: ' + reg.params.id);
});

app.delete('/user/:id', (reg, res) => {
    res.send('Hapus user dengan ID: ' + reg.params.id);
});

