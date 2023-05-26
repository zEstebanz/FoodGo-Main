import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (process.env.NODE_ENV === 'development') {
  process.env.MONGODB_URI = process.env.MONGODB_URI_LOCAL;
}

if (!clientPromise) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
