const universes = [
  {
    id: 1,
    universe_name: "Blart",
    your_name: "",
    your_country: "Switzerland",
    your_occupation: "Program Manager",
    your_hobbies: "Playing the guitar",
    personality_type: "",
    image_path: "https://bit.ly/2FJzgjg"
  },
  {
    id: 2,
    universe_name: "Zoonie",
    your_name: "",
    your_country: "Sudan",
    your_occupation: "Hotel Owner",
    your_hobbies: "Archery",
    personality_type: "",
    image_path: "image"
  },
  {
    id: 3,
    universe_name: "Adrianna2054",
    your_name: "",
    your_country: "Saudi Arabia",
    your_occupation: "Chef",
    your_hobbies: "Playing Super Smash Bros",
    personality_type: "",
    image_path: "image"
  },
  {
    id: 4,
    universe_name: "H-World",
    your_name: "",
    your_country: "China",
    your_occupation: "Scientist",
    your_hobbies: "Karaoke",
    personality_type: "",
    image_path: "image"
  },
  {
    id: 5,
    universe_name: "Daniellalle",
    your_name: "",
    your_country: "Canada",
    your_occupation: "Electrical Engineer",
    your_hobbies: "Watching anime",
    personality_type: "",
    image_path: "image"
  },
  {
    id: 6,
    universe_name: "Derps",
    your_name: "",
    your_country: "Mexico",
    your_occupation: "Nurse",
    your_hobbies: "Martial arts",
    personality_type: "",
    image_path: "image"
  },
  {
    id: 7,
    universe_name: "Brops",
    your_name: "",
    your_country: "Pakistan",
    your_occupation: "Musician",
    your_hobbies: "Eating",
    personality_type: "",
    image_path: "image"
  },
  {
    id: 8,
    universe_name: "Props",
    your_name: "",
    your_country: "Poland",
    your_occupation: "Restaurant Manager",
    your_hobbies: "Metal detecting",
    personality_type: "",
    image_path: "image"
  },
  {
    id: 9,
    universe_name: "Place-ia",
    your_name: "",
    your_country: "Colombia",
    your_occupation: "Barista",
    your_hobbies: "Building websites",
    personality_type: "",
    image_path: "image"
  },
  {
    id: 10,
    universe_name: "Soup",
    your_name: "",
    your_country: "Costa Rica",
    your_occupation: "Math Teacher",
    your_hobbies: "Running marathons",
    personality_type: "",
    image_path: "image"
  }
];

let id = 11;

//This has CRUD methods
module.exports = {
  //Read
  getUniversesDerp: (req, res, next) => {
    // console.log(universes)
    res.status(200).send(universes);
  },
  //Create
  userAddUniverse: (req, res) => {
    const {
      universe_name,
      your_country,
      your_occupation,
      your_hobbies,
      personality_type
    } = req.body;
    console.log("working", req.body);
    const newUniverse = {
      id: id,
      universe_name: universe_name,
      your_name: "",
      your_country: your_country,
      your_occupation: your_occupation,
      your_hobbies: your_hobbies,
      personality_type: personality_type
    };
    universes.push(newUniverse);
    console.log(universes);
    id++;
    res.status(200).send(universes);
  },

  //Update
  updateUniverse: (req, res, next) => {
    let { id, your_name } = req.params;
    let index = universes.findIndex(universe => universe.id === parseInt(id));
    if (index !== -1) {
      universes[index].your_name = your_name;
      res.status(200).send(universes);
    } else {
      res.status(100).send("id not dfound");
    }
  },
  // Delete
  universeDelete: (req, res) => {
    let { id } = req.params;
    let index = universes.findIndex(universe => universe.id === parseInt(id));
    if (index !== -1) {
      universes.splice(index, 1);
      res.status(200).send(universes);
    } else {
      res.status(100).send("id not found");
    }
  }
};
