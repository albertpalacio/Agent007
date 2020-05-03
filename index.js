let readlineSync = require("readline-sync");
function intro() {
  console.log("Wake up Agent 007!");
  console.log("Your mission, should you choose to accept it...");
  console.log("is to help find a cure.");
  console.log(
    "The world isn't the same. A virus has destroyed most of humanity..."
  );
  console.log("We have the location. All up to you.");
  console.log("How do you reply?");
}
function choiceOpt(resp) {
  switch (resp) {
    case 0:
      acceptedMission();
      break;
    case 1:
      declinedMission();
      break;
  }
}
function followUpGame(opt) {
  switch (opt) {
    case 0:
      userJumped();
      break;
    case 1:
      UserMissedJump();
      break;
    default:
      console.log("You failed us!");
  }
}
function whichDoor(desi) {
  switch (desi) {
    case 0:
      doorRed();
      break;
    case 1:
      doorGreen();
      break;
    case 2:
      doorBlue();
      break;
    default:
      console.log("You were so close!");
  }
}
function vaccRoom(desi2) {
  switch (desi2) {
    case 0:
      upperCabinet();
      break;
    case 1:
      underCouch();
      break;
    case 2:
      tableDesk();
      break;
    case 3:
      bookShelf();
      break;
    default:
      console.log("Close but not cigar!");
  }
}

function timeToLeave(exitTime) {
  switch (exitTime) {
    case 0:
      exitOcean();
      break;
    case 1:
      exitGrass();
      break;
    case 2:
      exitDoor();
      break;
    case 3:
      exitRoof();
      break;
    default:
      console.log("Close but not cigar!");
  }
}

function acceptedMission() {
  console.log("Thank you 007! You won't regret it!");
  newArea();
  planeDesi();
}
function gameOver() {
  console.log("Game Over!");
}
function newArea() {
  console.log("I'm sending the jet! You're heading to Madagascar!");
}
function planeDesi() {
  console.log("There's the compound right there! Get ready to jump!");
}
function declinedMission() {
  console.log("007, screwed us! 007 gave us a fake number!");
  gameOver();
}
function userJumped() {
  console.log("You jumped and landed safely!");
  inTown();
}
function inTown() {
  console.log(
    "You enter a building and are presented with 3 colored doors. Choose one."
  );
}
function UserMissedJump() {
  console.log(
    "We missed the drop. I hope it was worth it. You didn't even share..."
  );
  gameOver();
}
function doorRed() {
  console.log("As you open the door it squeeks and alerts the guards!");
}
function doorGreen() {
  console.log(
    "As you open the door you see your shadow and scare yourself, alerting the guards."
  );
}
function doorBlue() {
  console.log("You were able to sneak in undetected!");
}
function upperCabinet() {
  console.log(
    "As you open the cabinet doors, multiple plates fall on your head. You were knocked out and caught!"
  );
}
function tableDesk() {
  console.log(
    "As you approach the table, you stub your toe on the couch. You begin to cry in pain. Guards Alerted."
  );
}
function bookShelf() {
  console.log(
    "You find the one book on the shelf, open it. A spider jumps out at you. You cry and cry. Guards Alerted."
  );
  gameOver();
}
function underCouch() {
  console.log(
    "You decide to look under the couch and see a broken vial with some liquid in it. You found it! Don't let it spill!"
  );
  foundVacc();
}
function foundVacc() {
  console.log("You decide to leave the room before anyone catches you.");
}

function exitOcean() {
  console.log(
    "You jump in to the ocean, but begin to remember you can't swim and drown!"
  );
  gameOver();
}
function exitGrass() {
  console.log(
    "You rush into the tall grass not noticing a hungry lion had been waiting for you."
  );
  gameOver();
}
function exitDoor() {
  console.log("Did you really just try that? -_-");
  gameOver();
}
function exitRoof() {
  console.log(
    "You made it to the roof and the helicopter has picked you up! You made it! You saved us!"
  );
}

intro();

const options = ["Count on me!", "New # who dis?"];
const selectedOpt = readlineSync.keyInSelect(options, "Choose a response:");

let answer = false;

choiceOpt(selectedOpt);

if (selectedOpt !== 1) {
  const decision = ["Jump now!", "Finish eating your Chik-Fil-A."];
  const followUpOpt = readlineSync.keyInSelect(decision, "Choose a response:");
  followUpGame(followUpOpt);

  if (followUpOpt !== 1) {
    const pickADoor = ["Red", "Green", "Blue"];
    const doorOpt = readlineSync.keyInSelect(pickADoor, "Choose a response:");
    whichDoor(doorOpt);

    if (doorOpt === 2) {
      const vacRoom = [
        "Upper Cabinets",
        "Under The Couch",
        "The Work Desk",
        "The Book Shelf",
      ];
      const searchRoom = readlineSync.keyInSelect(
        vacRoom,
        "Choose a response:"
      );
      vaccRoom(searchRoom);
      if (searchRoom === 1) {
        const toTheChopper = [
          "Through the ocean",
          "Through the tall grass",
          "Out the front door",
          "Go up to the roof",
        ];
        const escapeOpt = readlineSync.keyInSelect(
          toTheChopper,
          "Choose a response:"
        );
        timeToLeave(escapeOpt);
      }
    }
  }
}
