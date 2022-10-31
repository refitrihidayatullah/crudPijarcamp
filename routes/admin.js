const router = require('express').Router();
const adminController = require('../controllers/adminController');
router.get('/produk', adminController.viewProduk);
router.post('/produk', adminController.addProduk);
module.exports = router;