import express from "express";
import dotenv from "dotenv";
import twilio from "twilio";
import session from "express-session";
import { MessagingResponse } from "twilio";
import bookingHelper from "./bookingHelper.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
  })
);

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

// called by a twilio webhook
app.post("/receive-sms", (req, res) => {
  const messageContent = req.body.Body.toLowerCase();

  const step = req.session.step;

  let message;

  if (!step) {
    req.session.step = 1;

    message = `Hi, do you want to book an appointment to: \n
    see the gym \n
    book a personal trainer \n
    book a massage`;
  } else {
    switch (step) {
      case 1:
        message = bookingHelper.matchType(req, messageContent);
        break;
      case 2:
        message = bookingHelper.matchDay(req, messageContent);
        break;
      case 3:
        message = bookingHelper.matchTime(req, messageContent);
        break;
      case 4:
        message = bookingHelper.confirmBooking(req);
      default:
        console.log(`Could not find the step for value: ${step}`);
    }
  }

  const twiml = new MessagingResponse();
  twiml.message(message);

  res.set("Content-Type", "text/xml");
  res.send(twiml.toString());
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
