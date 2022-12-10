function form() {
  alert("welcome");
  let rentersChoice = prompt("which movie would you like to rent? ");

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
