// Grabbing DOM elements
const mainSection = document.querySelector("main");
const playerMovesCount = document.getElementById("playerMovesCount");

// Variables
let playerMoves = 0;

// List of objects
const imgList = [
  { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", id: 6, name: "lep zeppelin" },
  { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
  { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
];

// setting initial value of player lives
playerMovesCount.textContent = playerMoves;

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
      card.classList.toggle("toggle");
      checkCards(e);
    });
  });
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
};

const restartGame = () => {
  // first set the player moves to 0
  // second remove the toggle and flipped class from all elements
  // third bring back the pointer events on matched cards

  imgData = randomize();
  playerMoves = 0;
  const cards = document.querySelectorAll(".card");
  const faces = document.querySelectorAll(".face");

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

cardGenerator();
