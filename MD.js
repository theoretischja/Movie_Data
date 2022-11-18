// 1 Understanding the problem
// What is it asking you to do? what’s the input and the output?
// The goal is to create a user interface that displays a JS object and lets the user interact with it.

// 2 Write pseudocode
// Break problem down into key steps
// a) create html framework that can display the object
// b) create js file that contains object
// c) display the object on the website using DOM manipulation (look up looping through objects)
// d) build js that allows user to sort films by rating
// e) build js that allows user to add new film

// 3 Write JS for each step following the pseudocode
// console.log() to check code at each step

// 4 Refactor
// How can you change your code to make it more efficient? how might you solve the problem differently?


//Object
let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };


  //Creating variables
  let text = document.getElementById("text");
  let values = document.getElementById("values");


  //Iterating through keys
  let object = ""; 
  for (x in movieData) {
      object += x + "<br>";
  }


  //Alternative way to iterate through keys
  //let keys = Object.keys(movieData);

   //Manipulating DOM
   text.innerHTML = object;
   values.innerHTML = objectValues;

 
  
  