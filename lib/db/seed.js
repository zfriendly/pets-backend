const ClassToBeDetermined = require("./models.js");
const petData = require("./data.json");
const petData = petData.map(item => {
  //declaring ld to be a map of cd item.
  const bis = {
    name: item.name,
    type: item.type,
    breed: item.breed,
    age: item.age
  };

  return petData;
});
console.log(petData);

ClassToBeDetermined.deleteMany({}).then(() => {
  ClassToBeDetermined.create(petData).then(petData => {
    console.log();
    process.exit();
  });
});
