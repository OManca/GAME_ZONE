const startButton = document.getElementById("start-button");
const gamePicture = document.getElementById("picture");
const inputField = document.getElementById("game-name");
const confirmButton = document.getElementById("confirm-button");
const boxCharacterContainer = document.getElementById(
  "box-character-container"
);
const successFailureContainer = document.getElementById(
  "success-failure-container"
);
const experienceCounter = document.getElementById("experience-counter");
const skipButton = document.getElementById("skip-button");
const medalContainer = document.getElementById("medal-container");
const skippedMessage = document.getElementById("skipped-message");
const levelNumber = document.getElementById("level-number");
const gameOverScreen = document.getElementById("game-over");
const gameContainer = document.getElementById("game-container");
const scoreGame = document.getElementById("score-game");
const gameOverMedal = document.getElementById("medal-game");

let confirmCounter = 0;
let experience = 0;
let randomNumber = -1;
let timer = 60;
let timerId = 0;
const chrono = document.getElementById("chrono");
chrono.innerText = timer;

const gameNameArray = [
  "Aladdin",
  "Alien Isolation",
  "Among us",
  "Assassin's creed origins",
  "Asterix",
  "Bahamut lagoon",
  "balloon  fight",
  "Breath of fire 2",
  "beholder",
  "Bioshock infinite",
  "Borderlands",
  "Brawlhalla",
  "Jet Force gemini",
  "Jet set Radio future",
  "Kameo elements of power",
  "Killer instinct",
  "Kingdom hearts 2",
  "La legende de Thor",
  "pokemon",
  "zelda 1",
  "Lemmings",
  "Little nightmares",
  "Luigi's mansion",
  "Mafia 2",
  "Super Mario bros 3",
  "Mario kart 64",
  "Mario party 5",
  "Super Mario Sunshine",
  // "Super Mario World",
  // "Super meat boy",
  // "Megaman",
  "Mickey Mania",
  "Mirror's edge",
  "super monkey ball",
  // "Mortal kombat 3",
  "Northgard",
  "Outlast",
  "Overwatch",
  "Payday 2",
  "Perfect Dark",
  "Phantasy Star online episode 1",
  // ici
  "brink",
  // "brutal legend",
  "buck bumble",
  "castle crushers",
  "Castlevania Simon’s quest",
  "Champion online",
  "Chrono Trigger",
  "Chuchu rocket",
  "Civilization 5",
  "contra 3 the alien war",
  "Counter strike go",
  // "Cyberpunk 2077",
  "Dead by daylight",
  "Dead or alive 4",
  "deceit",
  "Deus ex human revolution",
  "Dishonered",
  "Donkey Kong",
  "doom",
  "dota 2",
  "Double dragon 2",
  "Ice Climbers", // a changer 61
  "Dragon’s lair",
  // "duck hunt", 63
  "Duke Nukem",
  "Earthbound", // a changer 65
  // "earthworm jim", 66
  "Evoland",
  "Excitebike",
  "f zero gx",
  "Fall Guys",
  "fallout",
  "final fantasy 6",
  "Final fantasy 7", // a changer 73
  "Fire emblem", // a changer 74
  "For honor",
  // "Goldeneye", 76
  "grandia 2",
  "gta 4",
  "Harry potter et la chambre des secrets",
  "hedz",
  "Hitman absolution",
  "Ice climbers",
  "Illusion of time",
  //"Pilotwings" image 84
  "pong",
  "prey",
  // "rayman 2",image 87
  //"Roger Rabbit" image 88
  "rogue galaxy",
  "le roi lion",
  "runbow",
  "saint row 2",
  "scribble it",
  // "secret of evermore",94
  "secret neighbor",
  "secret of mana",
  "Shogun 2 total wars",
  "Skies of arcadia",
  "Sonic",
  "Soulcalibur 2",
  "Space channel 5",
  "splatoon 2",
  "starFox",
  "star gladiator",
  "starcraft 2",
  "starwing",
  "Street fighters 2",
  "street of rage 3",
  "styx : master of shadow",
  "super ghouls ‘n ghosts",
  "Super metroid",
  "super smash bros ultimate",
  "Super Turrican",
  "Mario Sunshine",
  "Swords and serpents",
  "tales of symphonia",
  "Tetris",
  "Team fortress 2",
  "the punisher",
  "the witcher 3",
  // "Timesplitters",
  "Tomb raider",
  "Tonic Trouble",
  "tortue ninja",
  "trine 2",
  "turok",
  "Ultimate chicken horse",
  "Unreal tournament",
  "Viewtiful joe",
  "Warcraft 3",
  "wcw vs nwo",
  "Yoshi’s island",
  "Zelda Twilight Princess",
  "Zelda the wind Waker",
];
//chargement des images dans le cache
function preload() {
  new Promise((resolve, reject) => {
    for (let i = 0; i < gameNameArray.length; i++) {
      const img = new Image();
      img.src = "images/games-picture/image" + i + ".jpg";
    }
    resolve();
  });
}
preload();

function displaySuccess() {
  successFailureContainer.classList.add("success");
  setTimeout(function () {
    successFailureContainer.classList.remove("success");
  }, 2000);
}

function displayFailure() {
  successFailureContainer.classList.add("failure");
  setTimeout(function () {
    successFailureContainer.classList.remove("failure");
  }, 2000);
}

function displayPicture() {
  let newNumber = Math.floor(Math.random() * gameNameArray.length);
  while (newNumber === randomNumber) {
    newNumber = Math.floor(Math.random() * gameNameArray.length);
  }
  randomNumber = newNumber;
  const displayGamePicture =
    "images/games-picture/image" + randomNumber + ".jpg";
  gamePicture.src = displayGamePicture;
  boxCharacterContainer.classList.remove("happy-box");
  boxCharacterContainer.classList.remove("sad-box");
  boxCharacterContainer.classList.add("neutral-box");
}

function startTimer() {
  timerId = setInterval(function () {
    timer--;
    chrono.innerText = timer;
    if (timer === 0) {
      clearInterval(timerId);
      gameContainer.style.display = "none";
      gameOverScreen.style.display = "flex";
      setExp(scoreGame);
      displayMedals(gameOverMedal);
    }
  }, 1000);
}

function setExp(element) {
  const extStr = experience.toString();
  const numberOfZeros = 6 - extStr.length;
  let zeros = "";
  for (let i = 1; i <= numberOfZeros; i++) {
    zeros += "0";
  }
  element.innerHTML = zeros + extStr;
}

startButton.addEventListener("click", function () {
  gameContainer.style.display = "flex";
  startButton.style.display = "none";
  const gameZoneLogo = document.getElementById("gamezone-logo");
  gameZoneLogo.style.display = "none";
  setExp(experienceCounter);
  displayPicture();
  startTimer();
});

function incrementLevel() {
  confirmCounter++;
  levelNumber.innerHTML = "Niveau" + confirmCounter;
  levelNumber.style.display = "block";
  setTimeout(function () {
    levelNumber.style.display = "none";
  }, 3000);
}

function addTime() {
  timer += Math.floor(6000 / (experience + 400));
}

function incrementExperience() {
  experience = experience + 200;
  setExp(experienceCounter);
  addTime();
}

function displayMedals(element) {
  if (experience >= 800) {
    element.classList.add("platine-medal");
    element.classList.remove("gold-medal");
  } else if (experience >= 600) {
    element.classList.remove("platine-medal");
    element.classList.add("gold-medal");
    element.classList.remove("silver-medal");
  } else if (experience >= 400) {
    element.classList.remove("gold-medal");
    element.classList.add("silver-medal");
    element.classList.remove("bronze-medal");
  } else if (experience >= 200) {
    element.classList.remove("silver-medal");
    element.classList.add("bronze-medal");
  } else if (experience < 200) {
    element.classList.remove("bronze-medal");
  }
}

// function displayReward() {
//   if (experience >= 800) {

//   } else if (experience >= 600) {

//   } else if (experience >= 400) {

//   } else if (experience >= 200) {

//   } else if (experience < 200) {

//   }
// }

function displaySkippedMessage() {
  skippedMessage.style.display = "block";
  setTimeout(function () {
    skippedMessage.style.display = "none";
  }, 800);
}

skipButton.addEventListener("click", function () {
  experience = experience - 100;
  if (experience < 0) {
    experience = 0;
  }
  setExp(experienceCounter);
  displaySkippedMessage();
  displayMedals(medalContainer);
  displayPicture();
});

confirmButton.addEventListener("click", function () {
  if (
    inputField.value.toLowerCase() === gameNameArray[randomNumber].toLowerCase()
  ) {
    inputField.value = "";
    boxCharacterContainer.classList.add("happy-box");
    incrementLevel();
    incrementExperience();
    displaySuccess();
    displayMedals(medalContainer);
    displayPicture();
  } else {
    displayFailure();
  }
});
