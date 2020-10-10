const { generateMatches } = require("./generate-matches");

it("assigns every person another person", () => {
  // Act
  const people = {
    1: { name: "person1", id: 1 },
    2: { name: "person2", id: 2 },
    3: { name: "person3", id: 3 },
    4: { name: "person4", id: 4 },
    5: { name: "person5", id: 5 },
    6: { name: "person6", id: 6 },
  };

  // Arrange
  const matches = generateMatches(people);

  // Assert
  expect(matches[1].id).toBeDefined();
  expect(matches[2].id).toBeDefined();
  expect(matches[3].id).toBeDefined();
  expect(matches[4].id).toBeDefined();
  expect(matches[5].id).toBeDefined();
  expect(matches[6].id).toBeDefined();
});

it("nobody has themselves", () => {
  // Act
  const people = {
    1: { name: "person1", id: 1 },
    2: { name: "person2", id: 2 },
    3: { name: "person3", id: 3 },
    4: { name: "person4", id: 4 },
    5: { name: "person5", id: 5 },
    6: { name: "person6", id: 6 },
  };

  // Arrange
  const matches = generateMatches(people);

  // Assert
  expect(matches[1].id).not.toBe(1);
  expect(matches[2].id).not.toBe(2);
  expect(matches[3].id).not.toBe(3);
  expect(matches[4].id).not.toBe(4);
  expect(matches[5].id).not.toBe(5);
  expect(matches[6].id).not.toBe(6);
});
