import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Symbol {
        id: ID!
        symbol: String
        name: String
    }

    type Candle {
        id: ID!
        open: Float
        close: Float
        low: Float
        high: Float
        volume: Float
        symbol: Symbol
        timestamp: Int
    }

    type Query {
        getAllData: [Candle]
    }
`;

export default typeDefs;
