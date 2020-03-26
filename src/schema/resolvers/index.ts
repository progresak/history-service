import { CandleModel } from '../../models';

const resolvers = {
    Query: {
        getAllData: async () => CandleModel.find({}).exec(),
    },
};

export default resolvers;
/*
    const Candlicka = new CandleModel({
        low: 123.123423,
        high: 13444.9239839389,
        open: 12,
        close: 23,
        volume: 0.1,
        timestamp: 1232332232,
    });

    Candlicka.save((err, data) => {
        if (err) return console.error(err);
        console.log('Saved', data);
    });
*/
