// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export interface Data {
  image: string;
  title: string;
  address: string;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const data: Data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}${process.env.MONGODB_CLUSTER}`
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json(result);
  }
}
