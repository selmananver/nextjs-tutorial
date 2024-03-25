import { MongoClient } from 'mongodb';

const uri = process.env.DB_URL;

export async function connectToDatabase() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected to the database');
    return {
      client,
      db: client.db(),
    };
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}