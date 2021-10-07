// Grabbing DOM elements
const homeBtn = document.querySelector(".home_btn");
const mainSection = document.querySelector("main");
const playerMovesCount = document.getElementById("playerMovesCount");
const time = document.querySelector(".time");
const minutes = time.querySelector(".minutes");
const seconds = time.querySelector(".seconds");
const selectionPage = document.querySelector(".selection_page");
const form = document.getElementById("selection_form");
const radios = document.querySelectorAll('input[type="radio"]');
const playingPage = document.querySelector(".playing_page");
const resultPage = document.querySelector(".result_page");
const playAgainBtn = document.getElementById("play_again");
const changeDifficultyBtn = document.getElementById("change_btn");

// Variables
let minute = 00;
let second = 00;
let secondInterval;
let pairs = 0;
let playerMoves = 0;
let imgList = [];

homeBtn.addEventListener("click", () => {
  clearInterval(secondInterval);
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  playingPage.style.display = "none";
  form.reset();
  mainSection.innerHTML = "";
  selectionPage.style.display = "grid";
  resetVariables();
});

radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    const name = radio.getAttribute("id");
    chooseMode(name);
    selectionPage.style.display = "none";
    playingPage.style.display = "grid";
  });
});

const chooseMode = (mode) => {
  if (mode === "extreme") {
    mainSection.classList.add("extreme");
    imgList = [
      { imgSrc: "./images/brand1.png", id: 1, name: "react" },
      { imgSrc: "./images/brand2.png", id: 2, name: "google" },
      { imgSrc: "./images/brand3.png", id: 3, name: "snapchat" },
      { imgSrc: "./images/brand4.png", id: 4, name: "sketch" },
      { imgSrc: "./images/brand5.png", id: 5, name: "figma" },
      { imgSrc: "./images/brand6.png", id: 6, name: "in" },
      { imgSrc: "./images/brand7.png", id: 7, name: "adobe xd" },
      { imgSrc: "./images/brand8.png", id: 8, name: "spotify" },
      { imgSrc: "./images/brand9.png", id: 9, name: "flying ship" },
      { imgSrc: "./images/brand10.png", id: 10, name: "office" },
      { imgSrc: "./images/brand11.png", id: 11, name: "salesforce" },
      { imgSrc: "./images/brand23.png", id: 12, name: "excel" },
      { imgSrc: "./images/brand13.png", id: 13, name: "dribble" },
      { imgSrc: "./images/brand14.png", id: 14, name: "word" },
      { imgSrc: "./images/brand15.png", id: 15, name: "slack" },
      { imgSrc: "./images/brand16.png", id: 16, name: "telegram" },
      { imgSrc: "./images/brand17.png", id: 17, name: "line" },
      { imgSrc: "./images/brand28.png", id: 18, name: "evernote" },
      { imgSrc: "./images/brand19.png", id: 19, name: "drive" },
      { imgSrc: "./images/brand21.png", id: 20, name: "analytics" },
      { imgSrc: "./images/brand1.png", id: 21, name: "react" },
      { imgSrc: "./images/brand2.png", id: 22, name: "google" },
      { imgSrc: "./images/brand3.png", id: 23, name: "snapchat" },
      { imgSrc: "./images/brand4.png", id: 24, name: "sketch" },
      { imgSrc: "./images/brand5.png", id: 25, name: "figma" },
      { imgSrc: "./images/brand6.png", id: 26, name: "in" },
      { imgSrc: "./images/brand7.png", id: 27, name: "adobe xd" },
      { imgSrc: "./images/brand8.png", id: 28, name: "spotify" },
      { imgSrc: "./images/brand9.png", id: 29, name: "flying ship" },
      { imgSrc: "./images/brand10.png", id: 30, name: "office" },
      { imgSrc: "./images/brand11.png", id: 31, name: "salesforce" },
      { imgSrc: "./images/brand23.png", id: 32, name: "excel" },
      { imgSrc: "./images/brand13.png", id: 33, name: "dribble" },
      { imgSrc: "./images/brand14.png", id: 34, name: "word" },
      { imgSrc: "./images/brand15.png", id: 35, name: "slack" },
      { imgSrc: "./images/brand16.png", id: 36, name: "telegram" },
      { imgSrc: "./images/brand17.png", id: 37, name: "line" },
      { imgSrc: "./images/brand28.png", id: 38, name: "evernote" },
      { imgSrc: "./images/brand19.png", id: 39, name: "drive" },
      { imgSrc: "./images/brand21.png", id: 40, name: "analytics" },
    ];
  } else if (mode === "hard") {
    mainSection.classList.add("hard");
    imgList = [
      { imgSrc: "./images/brand4.png", id: 1, name: "sketch" },
      { imgSrc: "./images/brand7.png", id: 2, name: "adobe xd" },
      { imgSrc: "./images/brand8.png", id: 3, name: "spotify" },
      { imgSrc: "./images/brand9.png", id: 4, name: "flying ship" },
      { imgSrc: "./images/brand13.png", id: 5, name: "dribble" },
      { imgSrc: "./images/brand14.png", id: 6, name: "word" },
      { imgSrc: "./images/brand15.png", id: 7, name: "slack" },
      { imgSrc: "./images/brand16.png", id: 8, name: "telegram" },
      { imgSrc: "./images/brand28.png", id: 9, name: "evernote" },
      { imgSrc: "./images/brand21.png", id: 10, name: "analytics" },
      { imgSrc: "./images/brand4.png", id: 11, name: "sketch" },
      { imgSrc: "./images/brand7.png", id: 12, name: "adobe xd" },
      { imgSrc: "./images/brand8.png", id: 13, name: "spotify" },
      { imgSrc: "./images/brand9.png", id: 14, name: "flying ship" },
      { imgSrc: "./images/brand13.png", id: 15, name: "dribble" },
      { imgSrc: "./images/brand14.png", id: 16, name: "word" },
      { imgSrc: "./images/brand15.png", id: 17, name: "slack" },
      { imgSrc: "./images/brand16.png", id: 18, name: "telegram" },
      { imgSrc: "./images/brand28.png", id: 19, name: "evernote" },
      { imgSrc: "./images/brand21.png", id: 20, name: "analytics" },
    ];
  } else if (mode === "medium") {
    mainSection.classList.add("medium");
    imgList = [
      { imgSrc: "./images/brand4.png", id: 1, name: "sketch" },
      { imgSrc: "./images/brand7.png", id: 2, name: "adobe xd" },
      { imgSrc: "./images/brand9.png", id: 3, name: "flying ship" },
      { imgSrc: "./images/brand13.png", id: 4, name: "dribble" },
      { imgSrc: "./images/brand16.png", id: 5, name: "telegram" },
      { imgSrc: "./images/brand28.png", id: 6, name: "evernote" },
      { imgSrc: "./images/brand4.png", id: 7, name: "sketch" },
      { imgSrc: "./images/brand7.png", id: 8, name: "adobe xd" },
      { imgSrc: "./images/brand9.png", id: 9, name: "flying ship" },
      { imgSrc: "./images/brand13.png", id: 10, name: "dribble" },
      { imgSrc: "./images/brand16.png", id: 11, name: "telegram" },
      { imgSrc: "./images/brand28.png", id: 12, name: "evernote" },
    ];
  } else if (mode === "easy") {
    mainSection.classList.add("easy");
    imgList = [
      { imgSrc: "./images/brand4.png", id: 1, name: "sketch" },
      { imgSrc: "./images/brand9.png", id: 2, name: "flying ship" },
      { imgSrc: "./images/brand28.png", id: 3, name: "evernote" },
      { imgSrc: "./images/brand4.png", id: 4, name: "sketch" },
      { imgSrc: "./images/brand9.png", id: 5, name: "flying ship" },
      { imgSrc: "./images/brand28.png", id: 6, name: "evernote" },
    ];
  }
  cardGenerator();
};

// setting initial value of player lives
playerMovesCount.textContent = playerMoves;

// updates time
const updateTime = () => {
  secondInterval = "";
  console.log("ran update time");
  minute = 0;
  second = 0;
  secondInterval = setInterval(() => {
    if (second === 59) {
      second = 0;
      minute++;
    } else {
      second++;
    }
    if (second.toString().split("").length === 1) {
      seconds.innerHTML = `0${second}`;
    } else {
      seconds.innerHTML = second;
    }
    if (minute.toString().split("").length === 1) {
      minutes.innerHTML = `0${minute}`;
    } else {
      minutes.innerHTML = minute;
    }
  }, 1000);
};

// shuffles the image's data array
const randomize = () => imgList.sort(() => Math.random() - 0.5);

// generates the HTML cards
const cardGenerator = () => {
  const imgData = randomize();

  //loops through the shuffled array and makes a card element with one image and a backface inside of it for every item
  imgData.forEach((item) => {
    //generating elements
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");

    // adding classes
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    // setting attributes of elements
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);

    // appending elements
    mainSection.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.add("toggle");
      checkCards(e);
    });
  });
  updateTime();
};

const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  if (flippedCards.length == 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
      pairs++;
      playerMoves++;
      playerMovesCount.textContent = playerMoves;
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => {
          card.classList.remove("toggle");
        }, 700);
      });
      setTimeout(() => {
        playerMoves++;
        playerMovesCount.textContent = playerMoves;
      }, 700);
    }
  }
  if (pairs === imgList.length / 2) {
    setTimeout(() => {
      playingPage.style.display = "none";
      resultPage.style.display = "grid";
    }, 500);
    playAgainBtn.addEventListener("click", () => {
      clearInterval(secondInterval);
      console.log(time.textContent);
      seconds.innerHTML = "00";
      minutes.innerHTML = "00";
      mainSection.innerHTML = "";
      resetVariables();
      cardGenerator();
      resultPage.style.display = "none";
      playingPage.style.display = "grid";
    });
    changeDifficultyBtn.addEventListener("click", () => {
      clearInterval(secondInterval);
      seconds.innerHTML = "00";
      minutes.innerHTML = "00";
      resultPage.style.display = "none";
      form.reset();
      mainSection.innerHTML = "";
      selectionPage.style.display = "grid";
      resetVariables();
    });
  }
};

const restartGame = () => {
  // first set the player moves to 0
  // second remove the toggle and flipped class from all elements
  // third bring back the pointer events on matched cards

  imgData = randomize();
  playerMoves = 0;
  pairs = 0;
  const cards = document.querySelectorAll(".card");
  const faces = document.querySelectorAll(".face");

  updateTime();
  playerMovesCount.textContent = playerMoves;
  imgData.forEach((img, i) => {
    faces[i].src = img.imgSrc;
    cards[i].setAttribute("name", img.name);
  });

  cards.forEach((card) => {
    card.classList.remove("toggle");
    card.classList.remove("flipped");
    card.style.pointerEvents = "all";
  });
};
const resetVariables = () => {
  imgData = randomize();
  playerMoves = 0;
  pairs = 0;
  minute = 0;
  second = 0;

  playerMovesCount.textContent = playerMoves;
};
