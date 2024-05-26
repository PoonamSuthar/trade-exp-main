const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const Trade = require('../models/Trade');

const uploadCSV = async (req, res) => {
    const filePath = path.join(__dirname, '../uploads/', req.file.filename);

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', async (row) => {
            const [baseCoin, quoteCoin] = row.Market.split('/');
            const trade = new Trade({
                utcTime: new Date(row.UTC_Time),
                operation: row.Operation.toUpperCase(),
                baseCoin,
                quoteCoin,
                amount: parseFloat(row['Buy/Sell Amount']),
                price: parseFloat(row.Price),
            });
            await trade.save();
        })
        .on('end', () => {
            fs.unlinkSync(filePath);
            res.status(200).json({ message: 'CSV file successfully processed' });
        })
        .on('error', (error) => {
            res.status(500).json({ message: 'Error processing CSV file', error });
        });
};

module.exports = { uploadCSV };
