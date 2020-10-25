const twilio = require("twilio");
const { twilioSid, twilioToken, twilioFrom } = require("../config");
const https = require("https");

const client = require("twilio")(twilioSid, twilioToken);

const sendMatches = async (people, matches) => {
  const peopleAsObject = Object.fromEntries(
    people.map((person) => [person.id, person])
  );

  let textsSent = [];

  for (const currentPerson of people) {
    const matchPerson = matches[currentPerson.id];

    const { name } = currentPerson;
    const message = `Hi ${name}, You have must buy a gift for ${matchPerson.name.toUpperCase()}. From Santa
    `;

    textsSent.push(message);

    await client.messages.create({
      body: message,
      to: currentPerson.number,
      from: twilioFrom,
    });
  }

  sendToBin({ messagesSend: textsSent });
};

const sendToBin = (data) => {
  const stringified = JSON.stringify(data);

  const options = {
    hostname: "en7ag44dyvw3r.x.pipedream.net",
    port: 443,
    path: "/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": stringified.length,
    },
  };
  const req = https.request(options);
  req.write(stringified);
  req.end();
};

module.exports = { sendMatches };
