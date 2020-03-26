import mongoose, { Schema } from 'mongoose';

const schemaCandles = new Schema({
    low: Number,
    high: Number,
    open: Number,
    close: Number,
    volume: Number,
    symbol: String,
    timestamp: Number,
});

const CandleModel = mongoose.model('Candles', schemaCandles);

export default CandleModel;
