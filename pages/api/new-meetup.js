import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    if (!data) {
      return res.status(400).json({ error: "Request body is missing." });
    }

    const client = await MongoClient.connect(
      `mongodb+srv://ramsankaraloor:${process.env.MONGODB_PASSWORD}@cluster0.xggjwq1.mongodb.net/meetups`
    );

    try {
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      await meetupsCollection.insertOne(data);
      return res.status(201).json({ message: "Meetup created!" });
    } catch (error) {
      return res.status(500).json({ error: "Error in meetup creation." });
    } finally {
      client.close();
    }
  }

  return res.status(405).end(); // Method Not Allowed
}

export default handler;

