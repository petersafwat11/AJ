import { MongoClient } from "mongodb";

export default async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client.db();
}
