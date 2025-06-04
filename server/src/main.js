import express from "express";
import dotenv from "dotenv";
import twilio from "twilio";

const app = express();
dotenv.config();

const client = twilio(
  process.env.TWILIO_TOKEN_SID,
  process.env.TWILIO_TOKEN_SECRET,
  {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
  }
);

const sendTestMessage = async () => {
  client.messages
    .create({
      body: "Hello, world!",
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.MY_NUMBER,
    })
    .then((message) => {
      console.log(message);
    })
    .catch((err) => {
      console.log(err);
    });
};

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
