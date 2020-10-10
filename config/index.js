require("dotenv").config();

module.exports = {
  twilioToken: process.env.TWILIO_TOKEN,
  twilioSid: process.env.TWILIO_SID,
  twilioFrom: process.env.TWILIO_FROM,
};
