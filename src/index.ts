type Card = 1 | 2 | 3 | 4 | 5 | 6;

function run() {
  const decideBtn = document.getElementById("decideBtn") as HTMLButtonElement;
  decideBtn.onclick = (e) => {
    decide();
  };
}
run();

function decide() {
  const playedCards = getPlayed();
  const myCards = getMyCards();

  const firstCardScore = getScore(myCards[0]);
  const secondCardScore = getScore(myCards[1]);

  const decition = firstCardScore > secondCardScore ? myCards[0] : myCards[1];
  out(`کارت ${decition} رو بازی کن`);
}

function getPlayed(): Card[] {
  const playedCardsElement = document.getElementById(
    "playedCards"
  ) as HTMLInputElement;

  return playedCardsElement.value.split("").map((x) => +x as Card);
}

function getMyCards(): any {
  console.log("sasas");
  const myCardsElement = document.getElementById("myCards") as HTMLInputElement;
  return myCardsElement.value.split("").map((x) => +x);
}

function out(message: string): void {
  const messages = document.getElementById("messages") as HTMLTextAreaElement;
  messages.value += message + "\n";
  messages.scrollTop = messages.scrollHeight;
}

function getScore(card: Card): number {
  switch (card) {
    case 1:
      return getScore1();
    case 2:
      return getScore2();
    case 3:
      return getScore3();
    case 4:
      return getScore4();
    case 5:
      return getScore5();
    case 6:
      return getScore6();
  }
}

function getScore1() {
  return 1;
}
function getScore2() {
  return 2;
}
function getScore3() {
  return 3;
}
function getScore4() {
  return 4;
}
function getScore5() {
  return 5;
}
function getScore6() {
  return 6;
}
