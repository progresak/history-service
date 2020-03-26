import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import DB from './configuration';
import resolvers from './schema/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({
    app,
    onHealthCheck: () =>
        new Promise((resolve, reject) => {
            if (DB.readyState > 0) {
                resolve();
            } else {
                reject();
            }
        }),
});

// TODO Logging into file
// TODO loggs into global service manager

DB.on('error', console.error.bind(console, 'connection error:'));

DB.once('open', () => {
    app.listen({ port: 4000 }, () =>
        console.log(
            `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
        )
    );
});
