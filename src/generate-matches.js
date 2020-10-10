const generateMatches = (people) => {
  const ids = Object.keys(people);
  const numberOfPeople = ids.length;

  const matches = {};
  const alreadyAssigned = [];

  // generate match for each person
  for (let currentId of ids) {
    const unassigned = setSubtraction(new Set(ids), new Set(alreadyAssigned));
    const possiblePeople = setSubtraction(unassigned, new Set([currentId]));
    const currentSelection = getRandomItem(possiblePeople);

    // set matches
    matches[currentId] = people[currentSelection];
    alreadyAssigned.push(currentSelection);
  }

  if (Object.values(matches).includes(undefined)) {
    return generateMatches(people);
  } else {
    return matches;
  }
};

const getRandomItem = (set) => {
  let items = Array.from(set);
  return items[Math.floor(Math.random() * items.length)];
};

const setSubtraction = (setA, setB) => {
  return new Set([...setA].filter((x) => !setB.has(x)));
};

module.exports = { generateMatches };
