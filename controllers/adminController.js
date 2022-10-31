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
    },
    editProduk: async(req, res) => {
        const { id, nama_produk, keterangan, harga, jumlah } = req.body;
        const produk = await Produk.findOne({ _id: id });
        // console.log(id)
        produk.nama_produk = nama_produk;
        produk.keterangan = keterangan;
        produk.harga = harga;
        produk.jumlah = jumlah;
        await produk.save();
        res.redirect('produk');

        // console.log(produk);
    },
    deleteProduk: async(req, res) => {
        const { id } = req.params;
        const produk = await Produk.findOne({ _id: id })
        await produk.remove();
        res.redirect('/admin/produk');
    }
}