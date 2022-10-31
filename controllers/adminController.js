const Produk = require('../models/Produk');

module.exports = {
    viewProduk: async(req, res) => {
        const produk = await Produk.find();
        // console.log(produk)
        res.render('produk/view_produk', { produk });
    },
    addProduk: async(req, res) => {
        const { nama_produk, keterangan, harga, jumlah } = req.body;
        // console.log(name_produk, keterangan, harga, jumlah)
        await Produk.create({ nama_produk, keterangan, harga, jumlah });
        res.redirect('produk');
    }
}