const router = require('express').Router();
const adminController = require('../controllers/adminController');
router.get('/produk', adminController.viewProduk);
router.post('/produk', adminController.addProduk);
router.put('/produk', adminController.editProduk);
router.delete('/produk/:id', adminController.deleteProduk);
module.exports = router;