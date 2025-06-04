import express from "express";
import dotenv from "dotenv";
import twilio from "twilio";

const app = express();
dotenv.config();

const client = twilio(process.env.TOKEN_SID, process.env.TOKEN_SECRET, {
  accountSid: process.env.ACCOUNT_SID,
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
