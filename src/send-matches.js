const twilio = require("twilio");
const { twilioSid, twilioToken, twilioFrom } = require("../config");

const client = require("twilio")(twilioSid, twilioToken);

const sendMatches = async (people, matches) => {
  //const peopleIds = Object.keys(people);
  const peopleAsObject = Object.fromEntries(
    people.map((person) => [person.id, person])
  );

  for (const currentPerson of people) {
    const matchPerson = matches[currentPerson.id];

    const { name } = currentPerson;
    const message = `Hi ${name}, You have must buy a gift for ${matchPerson.name.toUpperCase()}. From Santa
    `;

    await client.messages.create({
      body: message,
      to: currentPerson.number,
      from: twilioFrom,
    });
  }
};

module.exports = { sendMatches };
