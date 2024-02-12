const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(url);

// Database Name
const dbName = 'nodejs_express';


async function connect() {
    try {
        await client.connect();
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
        process.exit(1);
    }
}


module.exports = connect;