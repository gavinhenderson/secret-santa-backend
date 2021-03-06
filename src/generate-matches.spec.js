const { generateMatches } = require("./generate-matches");

it("assigns every person another person", () => {
  // Act
  const people = [
    { name: "person1", id: 1, exceptions: [] },
    { name: "person2", id: 2, exceptions: [] },
    { name: "person3", id: 3, exceptions: [] },
    { name: "person4", id: 4, exceptions: [] },
    { name: "person5", id: 5, exceptions: [] },
    { name: "person6", id: 6, exceptions: [] },
  ];

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
  const people = [
    { name: "person1", id: 1, exceptions: [] },
    { name: "person2", id: 2, exceptions: [] },
    { name: "person3", id: 3, exceptions: [] },
    { name: "person4", id: 4, exceptions: [] },
    { name: "person5", id: 5, exceptions: [] },
    { name: "person6", id: 6, exceptions: [] },
  ];

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

it("nobody is given their exceptions", () => {
  // Act
  const people = [
    { name: "person1", id: 1, exceptions: ["2", "3"] },
    { name: "person2", id: 2, exceptions: ["1"] },
    { name: "person3", id: 3, exceptions: ["4"] },
    { name: "person4", id: 4, exceptions: ["3"] },
    { name: "person5", id: 5, exceptions: ["6"] },
    { name: "person6", id: 6, exceptions: ["5", "1"] },
  ];

  // Arrange
  const matches = generateMatches(people);

  // Assert
  expect(matches[1].id).not.toBe(2);
  expect(matches[1].id).not.toBe(3);
  expect(matches[2].id).not.toBe(1);
  expect(matches[3].id).not.toBe(4);
  expect(matches[4].id).not.toBe(3);
  expect(matches[5].id).not.toBe(6);
  expect(matches[6].id).not.toBe(5);
  expect(matches[6].id).not.toBe(1);
});
