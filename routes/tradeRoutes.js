const express = require('express');
const multer = require('multer');
const { uploadCSV } = require('../controllers/tradeController');
const { getAssetBalance } = require('../controllers/balanceController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), uploadCSV);
router.post('/balance', getAssetBalance);
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
})

module.exports = router;
