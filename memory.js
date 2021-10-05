// Grabbing DOM elements
const mainSection = document.querySelector("main");
const playerLivesCount = document.getElementById("playerLivesCount");

// Variables
let playerLives = 6;

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
playerLivesCount.textContent = playerLives;

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

    // setting src of images
    face.src = item.imgSrc;

    // appending elements
    mainSection.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
  });
};

cardGenerator();
