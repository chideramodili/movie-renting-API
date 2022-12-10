alert("welcome");

let list = [
  "anaconda",
  "konfu panda",
  "flash",
  "homecoming",
  "all american",
  "lord of the rings",
  "chunli",
  "megatron",
  "one piece",
  "naruto",
  "god of highschool",
  "bleech",
  "jujutsu kaison"
];
alert(`here are the available movies at the store ${list}`);

function form() {
  let rentersChoice = prompt("which movie would you like to rent? ");
  if (
    rentersChoice === "anaconda" ||
    rentersChoice === "konfu panda" ||
    rentersChoice === "flash" ||
    rentersChoice === "homecoming" ||
    rentersChoice === "all american" ||
    rentersChoice === "lord of the rings" ||
    rentersChoice === "chunli" ||
    rentersChoice === "megatron" ||
    rentersChoice === "one piece" ||
    rentersChoice === "naruto" ||
    rentersChoice === "god of highschool" ||
    rentersChoice === "bleech" ||
    rentersChoice === "jujutsu kaison"
  ) {
  } else {
    alert("not avialable in store");
    return form();
  }

  let issuedDate = prompt("Date issued ( day / month/ year)");

  let yourAddress = prompt("what is your address please? ");
  let nameOfTheRenter = prompt(
    "what is your name please?",
    "DANIEL, MICHELSON"
  );
  let returningDate = prompt("Date to be returned  (day / month/ year)");
  let yournumber = prompt("please insert your phone number");
  let yourNIN = prompt("please insert national identification number");
  class movieRenting {
    constructor(
      movieName,
      rentersName,
      dateToBeReturned,
      phoneNumber,
      address,
      NIN,
      dateIssued
    ) {
      this.movieName = rentersChoice;
      this.dateIssued = issuedDate;
      this.rentersName = nameOfTheRenter;
      this.dateToBeReturned = returningDate;
      this.address = yourAddress;
      this.phoneNumber = yournumber;
      this.NIN = yourNIN;
    }
  }

  let renter = new movieRenting();

  console.log(renter);

  let letter = confirm(
    `Dear ${nameOfTheRenter.toUpperCase()} you are here to rent the movie ${rentersChoice.toUpperCase()}, to be held by you from ${issuedDate} to ${returningDate}. 
  PLEASE IF THERE IS ANY MISTAKE ANY WHERE PLEASE CANCEL TO RESTART YOU RENTING PROCESS`
  );

  function mistake() {
    if (letter === true) {
    } else {
      return form();
    }
  }

  mistake();
}

form();
