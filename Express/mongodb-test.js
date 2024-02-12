const { MongoClient } = require('mongodb');

// Replace 'mongodb://localhost:27017' with your MongoDB connection string if different
const url = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function testConnection() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');
        
        // Optionally, list the databases in your MongoDB server
        const databasesList = await client.db().admin().listDatabases();
        console.log("Databases:", databasesList.databases.map(db => db.name));
    } catch (err) {
        console.error('Connection failed:', err);
    } finally {
        await client.close();
    }
}

testConnection();
