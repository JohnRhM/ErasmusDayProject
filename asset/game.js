const selectors = {
  boardContainer: document.querySelector(".board-container"),
  board: document.querySelector(".board"),
  moves: document.querySelector(".moves"),
  timer: document.querySelector(".timer"),
  start: document.querySelector("button"),
  win: document.querySelector(".win"),
};

const state = {
  gameStarted: false,
  flippedCards: 0,
  totalFlips: 0,
  totalTime: 0,
  loop: null,
};

const shuffle = (array) => {
  const clonedArray = [...array];

  for (let index = clonedArray.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const original = clonedArray[index];

    clonedArray[index] = clonedArray[randomIndex];
    clonedArray[randomIndex] = original;
  }

  return clonedArray;
};

const pickRandom = (array, items) => {
  const clonedArray = [...array];

  const randomPicks = [];

  for (let index = 0; index < items ; index++) {
    console.log(items);
    const randomIndex = Math.floor(Math.random() * clonedArray.length);

    randomPicks.push(clonedArray[randomIndex]);
    clonedArray.splice(randomIndex, 1);
  }

  return randomPicks;
};

const generateGame = () => {
  const dimensions = selectors.board.getAttribute("data-dimension");

  if (dimensions % 2 !== 0) {
    throw new Error("The dimension of the board must be an even number.");
  }

  const emojis = [
    "Peniche",
    "Eden",
    "Almourol",
    "Nazare",
    "Belem",
    "Fatima",
    "Monastero",
    "Arco do Trionfo",
  ];
  const images = [
    `<img src="img/luoghi_interesse/almourol.webp" alt="Almourol" style="width: 100%; height:100%">Almourol`,
    `<img src="img/luoghi_interesse/belem.jpeg" alt="Belem" style="width: 100%; height:100%">Belem`,
    `<img src="img/luoghi_interesse/eden.jpeg" alt="Eden" style="width: 100%; height:100%">Eden`,
    `<img src="img/luoghi_interesse/fatim.jpeg" alt="Fatima" style="width: 100%; height:100%">Fatima`,
    `<img src="img/luoghi_interesse/peniche.jpeg" alt="Peniche" style="width: 100%; height:100%">Peniche`,
    `<img src="img/luoghi_interesse/nazare.avif" alt="Nazare" style="width: 100%; height:100%">Nazare`,
    `<img src="img/luoghi_interesse/monastero.jpeg" alt="Nazare" style="width: 100%; height:100%">Monastero`,
    `<img src="img/luoghi_interesse/arco.jpeg" alt="Nazare" style="width: 100%; height:100%">Arco do Trionfo`,
  ];
  const picks = pickRandom(emojis, (dimensions * dimensions) / 2);
  const picks1 = pickRandom(images, (dimensions * dimensions) / 2);
  const items = shuffle([...picks, ...picks1]);
  const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items
              .map(
                (item) => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back" style="font-size:10px;">${item}</div>
                </div>
            `
              )
              .join("")}
       </div>
    `;

  const parser = new DOMParser().parseFromString(cards, "text/html");

  selectors.board.replaceWith(parser.querySelector(".board"));
};

const startGame = () => {
  state.gameStarted = true;
  selectors.start.classList.add("disabled");

  state.loop = setInterval(() => {
    state.totalTime++;

    selectors.moves.innerText = `${state.totalFlips} moves`;
    selectors.timer.innerText = `time: ${state.totalTime} sec`;
  }, 1000);
};

const flipBackCards = () => {
  document.querySelectorAll(".card:not(.matched)").forEach((card) => {
    card.classList.remove("flipped");
  });

  state.flippedCards = 0;
};

const flipCard = (card) => {
  state.flippedCards++;
  state.totalFlips++;

  if (!state.gameStarted) {
    startGame();
  }

  if (state.flippedCards <= 2) {
    card.classList.add("flipped");
  }

  if (state.flippedCards === 2) {
    const flippedCards = document.querySelectorAll(".flipped:not(.matched)");
    console.log(flippedCards[0].innerText);
    console.log(flippedCards[1].innerText);
    if (flippedCards[0].innerText === flippedCards[1].innerText) {
      flippedCards[0].classList.add("matched");
      flippedCards[1].classList.add("matched");
    }

    setTimeout(() => {
      flipBackCards();
    }, 1000);
  }

  // If there are no more cards that we can flip, we won the game
  if (!document.querySelectorAll(".card:not(.flipped)").length) {
    setTimeout(() => {
      selectors.boardContainer.classList.add("flipped");
      selectors.win.innerHTML = `
                <span class="win-text">
                    You won!<br />
                    with <span class="highlight">${state.totalFlips}</span> moves<br />
                    under <span class="highlight">${state.totalTime}</span> seconds
                </span>
            `;

      clearInterval(state.loop);
    }, 1000);
  }
};

const attachEventListeners = () => {
  document.addEventListener("click", (event) => {
    const eventTarget = event.target;
    const eventParent = eventTarget.parentElement;

    if (
      eventTarget.className.includes("card") &&
      !eventParent.className.includes("flipped")
    ) {
      flipCard(eventParent);
    } else if (
      eventTarget.nodeName === "BUTTON" &&
      !eventTarget.className.includes("disabled")
    ) {
      startGame();
    }
  });
};

generateGame();
attachEventListeners();
