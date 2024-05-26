const Trade = require('../models/Trade');

const getAssetBalance = async (req, res) => {
    const { timestamp } = req.body;
    const date = new Date(timestamp);

    try {
        const trades = await Trade.find({ utcTime: { $lte: date } });
        console.log('Trades found:', trades);
        const balances = {};

        trades.forEach((trade) => {
            const { baseCoin, amount, operation } = trade;
            if (!balances[baseCoin]) balances[baseCoin] = 0;
            balances[baseCoin] += operation === 'BUY' ? amount : -amount;
        });

        console.log('Balances:', balances);
        res.status(200).json(balances);
    } catch (error) {
        console.error('Error retrieving balance:', error);
        res.status(500).json({ message: 'Error retrieving balance', error });
    }
};

module.exports = { getAssetBalance };
