# Twilio SMS Booking System 📱

A **modern appointment booking system** built with **Node.js**, **Express**, and **Twilio**, featuring SMS-based interactions, session management, and automated booking flow.

## 🔍 Description

This project is a full-stack booking system that leverages Twilio's SMS capabilities to create an interactive booking experience. Users can book appointments through SMS messages, with the system guiding them through a step-by-step process.

The system supports booking for:
- Gym visits
- Personal trainer sessions
- Massage appointments

## 📁 Project Structure

```
.
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── main.js        # Main application entry
│   │   └── bookingHelper.js # Booking flow logic
│   ├── .env              # Environment variables
│   └── package.json
```

## 🚀 Features

- **SMS-based Booking Flow** with Twilio integration
- **Step-by-Step Guidance** for appointment booking
- **Session Management** for tracking user progress
- **Multiple Service Types** (gym, personal trainer, massage)
- **Automated Responses** using TwiML
- **Environment Variable Configuration** for secure deployment

## 🛠️ Tech Stack

### Backend

- **Node.js**
- **Express 5**
- **Twilio SDK** (SMS handling)
- **Express Session** (session management)
- **Dotenv** (environment variables)
- **Nodemon** (development)

## ⚙️ Installation

### 1. Clone the Repo

```bash
git clone https://github.com/andrew-dev-p/twilio-nodejs-booking-system
cd twilio-nodejs-booking-system
```

### 2. Install Dependencies

```bash
cd server
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
PORT=3000
SESSION_SECRET=your-session-secret
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_TOKEN_SID=your-twilio-token-sid
TWILIO_TOKEN_SECRET=your-twilio-token-secret
TWILIO_PHONE_NUMBER=your-twilio-phone-number
MY_NUMBER=your-phone-number
```

### 4. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 📱 Features in Detail

### SMS Booking Flow
- Interactive SMS-based booking process
- Step-by-step guidance for users
- Support for multiple service types
- Automated confirmation messages

### Session Management
- Tracks user progress through booking flow
- Maintains booking state between messages
- Secure session handling

### Booking Types
- Gym visits
- Personal trainer sessions
- Massage appointments

## 🧪 Development

### Running the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm start
```

## 📬 Deployment

The application can be deployed on:
- **Heroku**
- **DigitalOcean**
- **AWS**
- Any Node.js hosting platform

### Deployment Requirements

1. Set up all environment variables
2. Configure Twilio webhook URL to point to your deployed endpoint
3. Ensure proper SSL/TLS for secure communication

## 🔐 Security Considerations

- All sensitive credentials are stored in environment variables
- Session management is configured with a secure secret
- Twilio webhook endpoints are protected
