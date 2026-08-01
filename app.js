//I despise that I'm still using this repulsive language

const BOOTUP_SFX = new Audio("Assets/Bootup.mp3");
const BLOCK_CURSOR = document.getElementById("BlockCursorImage");

var startTime = Date.now();
var interactedWithPage = false;

function copyToClipboard(input) {
  //for email cause HTML reads '@' as special character
  if (input === "e") {
    navigator.clipboard.writeText("patrick.mayer2003@protonmail.com");
    alert("Coppied to clipboard");
  } else {
    navigator.clipboard.writeText(input);
    alert("Coppied to clipboard");
  }
}

function Wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function BootSequence() {
  //needed so duration isn't null
  await new Promise((resolve) => {
    BOOTUP_SFX.addEventListener("loadedmetadata", resolve, { once: true });
  });
  await Wait(BOOTUP_SFX.duration * 1000);

  document.querySelector(".navbar").classList.remove("hidden");
}

//main()
document.addEventListener("DOMContentLoaded", () => {
  BOOTUP_SFX.preload = "auto";
  //BLOCK_CURSOR.style.left = "400px";
  //BLOCK_CURSOR.style.top = "400px";

  BootSequence(); //needs to be it's own function cause of async
});

document.addEventListener("click", async () => {
  if (interactedWithPage) {
    return;
  }

  const MILLISECONDS_PER_SECOND = 1000;
  var deltaTime = (Date.now() - startTime) / MILLISECONDS_PER_SECOND;
  BOOTUP_SFX.addEventListener("loadedmetadata", () => {
    BOOTUP_SFX.currentTime = Math.min(deltaTime, BOOTUP_SFX.duration);
    BOOTUP_SFX.play();
  });
  BOOTUP_SFX.load();

  interactedWithPage = true;
});

const nameEl = document.getElementById("name");
let nameState = "";
nameEl.innerHTML = nameState;
const nameLetters = ["P", "a", "t", "r", "i", "c", "k"];

const intervalId = setInterval(() => {
  nameState += nameLetters.shift();
  nameEl.innerHTML = nameState;

  if (nameLetters.length === 0) {
    clearInterval(intervalId);
  }
}, 1000);

BOOTUP_SFX.addEventListener;
