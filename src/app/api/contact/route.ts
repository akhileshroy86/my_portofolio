// src/pages/api/contact.ts or src/app/api/contact/route.ts

import type { NextApiRequest, NextApiResponse } from "next";

// Replace with your real email logic or integration
async function sendEmail({ name, email, message }: { name: string; email: string; message: string }) {
  console.log("Email content:", name, email, message);
  // Example: integrate with Nodemailer, SendGrid, etc.
  return true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).end("Missing fields");

  try {
    const success = await sendEmail({ name, email, message });
    if (success) res.status(200).end("OK");
    else throw new Error("Email failed");
  } catch (err) {
    console.error(err);
    res.status(500).end("Internal Server Error");
  }
}
