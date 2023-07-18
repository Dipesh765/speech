import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  id: number;
  amount: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  const shouldSendTransaction = Math.random() < 0.6; // 80% chance of sending a transaction

  if (shouldSendTransaction) {
    const id = Math.floor(Math.random() * 1000) + 1; // Generate a random id between 1 and 1000
    const amount = (Math.random() * 100).toFixed(2); // Generate a random amount between 0 and 100 with 2 decimal places
    const data: Data = {
      id,
      amount,
    };
    res.status(200).json(data);
  } else {
    res.send("No Transaction"); // No content to send (no transaction)
  }
}
