const express = require('express');
const itemcontroller = require('../controllers/itemcontrollers');

const router = express.Router();

router.get('/itemlist',itemcontroller.itemlist);
router.get('/singleitemlist/:id',itemcontroller.singleitemlist);
router.delete('/deleteitem/:id',itemcontroller.deleteitem);
router.put('/updateitem/:id',itemcontroller.updateitem);
router.post('/additem',itemcontroller.additem);

module.exports = router;