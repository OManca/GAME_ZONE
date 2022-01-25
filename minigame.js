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
const rewardText = document.getElementById("reward-text");
const continueButton = document.getElementById("continue");

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
  "balloon fight",
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
  "blazblue",
  "Lemmings",
  "Little nightmares",
  "Luigi's mansion",
  "Mafia 2",
  "Super Mario bros 3",
  "Mario kart 64",
  "Mario party 5",
  "Super Mario Sunshine",
  "Super Mario World",
  "Super meat boy",
  "Megaman 2",
  "Mickey Mania",
  "Mirror's edge",
  "super monkey ball",
  "Mortal kombat",
  "Northgard",
  "Outlast",
  "Overwatch",
  "Payday 2",
  "Perfect Dark",
  "Phantasy Star online episode 1",
  "brink",
  "touch detective",
  "buck bumble",
  "castle crushers",
  "Castlevania Simon’s quest",
  "Champion online",
  "Chrono Trigger",
  "Chuchu rocket",
  "Civilization 5",
  "paladins",
  "Counter strike go",
  "Cyberpunk 2077",
  "Dead by daylight",
  "Dead or alive 4",
  "deceit",
  "Deus ex human revolution",
  "Dishonered",
  "System Shock 2",
  "doom",
  "dota 2",
  "Double dragon 2",
  "pitfall",
  "Dragon’s lair",
  "duck hunt",
  "Duke Nukem",
  "starwing",
  "earthworm jim",
  "Evoland",
  "Excitebike",
  "f zero gx",
  "Fall Guys",
  "fallout",
  "final fantasy 6",
  "watch dogs 2",
  "Fire emblem",
  "For honor",
  "grandia 2",
  "gta 4",
  "Harry potter",
  "hedz",
  "Hitman absolution",
  "Ice climbers",
  "Illusion of time",
  "Pilotwings",
  "pong",
  "prey",
  "rayman 2",
  "Roger Rabbit",
  "rogue galaxy",
  "le roi lion",
  "runbow",
  "saint row 2",
  "scribble it",
  "secret of evermore",
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
  "shenmue 2",
  "Street fighters 2",
  "zelda ocarina of time",
  "styx master of shadow",
  "super ghouls ‘n ghosts",
  "Super metroid",
  "super smash bros",
  "Super Turrican",
  "super Mario 64",
  "resident evil 0",
  "tales of symphonia",
  "Tetris",
  "Team fortress 2",
  "taiko no tatsujin",
  "the witcher 3",
  "Timesplitters 2",
  "Tomb raider",
  "Tonic Trouble",
  "tortue ninja",
  "trine 2",
  "turok",
  "Ultimate chicken horse",
  "Unreal tournament",
  "Viewtiful joe 2",
  "Warcraft 3",
  "wcw vs nwo",
  "Yoshi’s island",
  "Zelda Twilight Princess",
  "Zelda the wind Waker",
  "megaman soccer",
  "mario kart double dash",
  "nostale",
  "mystical ninja",
  "league of legends",
  "observer system redux",
  "phantom doctrine",
  "red dead redemption 2",
  "paper mario la porte millenaire",
  "resident evil 7",
  "resident evil 3",
  "resident evil 2 remake",
  "samba de amigo",
  "shadow of the colossus",
  "the mean green",
  "tony hawk pro skater 2",
  "wario ware touch",
  "marsupilami",
  "zelda",
  "metroid",
  "les ottifants",
  "super mario bros",
  "armello",
  "baten kaitos",
  "batman arkham city",
  "dofus",
  "cooking mama",
  "Donkey Kong 64",
  "Doshin the giant",
  "Chibi Robo",
  "Final Fantasy 9",
  "Goldeneye 64",
  "Gears of war 3",
  "Heartstone",
  "Gof of war",
  "Guitar hero",
  "Far cry",
  "Baten Kaitos origins",
  "Swords and serpents",
  "street gangs",
  "beyond good and evil",
  "killer 7",
  "kirby air ride",
  "limbo",
  "lost odyssey",
  "mario bros",
  "mass effect",
  "medievil",
  "metal gear solid 5",
  "metroid fusion",
  "minecraft",
  "new super mario bros",
  "ninja gaiden",
  "oboro muramasa",
  "odin sphere",
  "okami",
  "pacman",
  "pn 03",
  "prince of persia sands of time",
  "punch out",
  "puyo pop fever",
  "rainbow 6 siege",
  "ratchet and clank",
  "rocket league",
  "sea of thieves",
  "sekiro die twice",
  "shinobi",
  "sims",
  "sonic adventures 2 battle",
  "splinter cell",
  "spyro",
  "super mario galaxy",
  "tekken 3",
  "the last of us 2",
  "titanfall 2",
  "uncharted 4",
  "worms",
  "batman forever",
  "bioshock",
  "bioshock 2",
  "bloodborne",
  "catherine",
  "crash bandicoot",
  "crazy taxi",
  "cuphead",
  "dark souls",
  "dead space",
  "death stranding",
  "destiny 2",
  "detroit become human",
  "devil may cry",
  "donkey kong",
  "donkey kong country",
  "dr mario",
  "earthbound",
  "final fantasy x 10",
  "fire emblem 7",
  "fortnite",
  "geist",
  "golden sun",
  "gran tourismo",
  "gris",
  "guild wars 2",
  "guilty gears",
  "halo 2",
  "ikaruga",
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

  boxCharacterContainer.classList.remove("sad-box");
  // boxCharacterContainer.classList.add("neutral-box");
}

function startTimer() {
  timer = 60;
  timerId = setInterval(function () {
    timer--;
    chrono.innerText = timer;
    if (timer === 0) {
      clearInterval(timerId);
      gameContainer.style.display = "none";
      gameOverScreen.style.display = "flex";
      setExp(scoreGame);
      displayMedals(gameOverMedal);
      displayReward();
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

function startGame() {
  gameOverScreen.style.display = "none";
  gameContainer.style.display = "flex";
  startButton.style.display = "none";
  const gameZoneLogo = document.getElementById("gamezone-logo");
  gameZoneLogo.style.display = "none";
  experience = 0;
  confirmCounter = 0;
  setExp(experienceCounter);
  displayPicture();
  startTimer();
}

startButton.addEventListener("click", startGame);
continueButton.addEventListener("click", startGame);

function incrementLevel() {
  confirmCounter++;
  levelNumber.innerHTML = "Niveau " + confirmCounter;
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
  element.style.display = "block";
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
    element.style.display = "none";
  }
}

function displayReward() {
  if (experience >= 800) {
    rewardText.innerHTML = "bravo";
  } else if (experience >= 600) {
    rewardText.innerHTML = "pas mal";
  } else if (experience >= 400) {
    rewardText.innerHTML = "bof";
  } else if (experience >= 200) {
    rewardText.innerHTML = "pas top";
  } else if (experience < 200) {
    rewardText.innerHTML = "naze";
  }
}

function displaySkippedMessage() {
  skippedMessage.style.display = "block";
  setTimeout(function () {
    skippedMessage.style.display = "none";
  }, 800);
}

skipButton.addEventListener("click", function () {
  boxCharacterContainer.classList.add("sad-box");
  boxCharacterContainer.classList.remove("neutral-box");

  experience = experience - 100;
  if (experience < 0) {
    experience = 0;
  }
  inputField.value = "";
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
