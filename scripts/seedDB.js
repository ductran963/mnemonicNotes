const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactclientlist"
);

const clientSeed = [
  {
    name: "Homer Simpson",
    location: "Springfield",
    contactInfo:
      "Works at Springfield Nuclear",
    specialNotes: "Loves donuts. Drives Pink Car. Loves Duff Beer. Met at Moe's",
    date: new Date(Date.now())
  },
  {
    name: "Tim Harley",
    location: "San Diego, CA",
    contactInfo:
      "858-245-5464",
    specialNotes: "Rides motorcycles. Software Developer. Plays golf at Aviara",
    date: new Date(Date.now())
  },
  {
    name: "Samantha Goodwing",
    location: "Encinitas, CA",
    contactInfo:
      "619-213-9090 Silver Consulting Inc.",
    specialNotes: "Accounting specialist. Working on a pilot's license. Best overall services for price point on accounting service contract. ",
    date: new Date(Date.now())
  },
  {
    name: "Tim Richards",
    location: "Ocean Beach, San Diego, Ca",
    contactInfo:
      "858-121-4145 Organic Greens",
    specialNotes: "Goes by Timmy The Tooth. Drives a VW Bus. Surfer.",
    date: new Date(Date.now())
  }
];

db.Client
  .remove({})
  .then(() => db.Client.collection.insertMany(clientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  // still need to build database and rename for clients.