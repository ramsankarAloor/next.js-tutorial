// pages/api/meetups.js

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      `mongodb+srv://ramsankaraloor:${process.env.MONGODB_PASSWORD}@cluster0.xggjwq1.mongodb.net/meetups`
    );

    try {
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const meetups = await meetupsCollection.find().toArray();
      return res.status(200).json(meetups);
    } catch (error) {
      return res.status(500).json({ error: "Error in meetups fetch." });
    } finally {
      client.close();
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
