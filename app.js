//I despise that I'm still using this repulsive language

const BOOTUP_SFX = new Audio("Assets/Bootup.mp3");
const CLICK_SFX = new Audio("Assets/KeyClick.mp3");
const ENTER_SFX = new Audio("Assets/EnterKey.mp3");
const BLOCK_CURSOR = document.getElementById("BlockCursorImage");


var startTime = Date.now();
var interactedWithPage = false;
var loopContinue = false;

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

async function Typewriter(messageStr, delay, nameElement, nameState){  
  nameElement.innerHTML = nameState;
 
  for (const letter of messageStr){ 
    nameElement.innerHTML += letter;
    new Audio(CLICK_SFX.src).play();

    await Wait(delay);
 }
}

async function BootSequence() {
  //needed so duration isn't null
  await new Promise((resolve) => {
    BOOTUP_SFX.addEventListener("loadedmetadata", resolve, { once: true });
  });
  await Wait(BOOTUP_SFX.duration * 1000);

  document.querySelector(".navbar").classList.remove("hidden");
}

async function Main(){
  //code from Brian for typewriter effect
  const NAME_STR = "Patrick Mayer";
  const TYPEWRITER_TIME = 150;
  var nameElement = document.getElementById("name");
  let nameState = "C:\\Users\\GoodMorning>~";
  //let nameState = "~\t";
  //nameElement += "~\t"
  await Typewriter(NAME_STR, TYPEWRITER_TIME, nameElement, nameState);


  //Render CPU Usage Number (make this look fancier so it looks more like a terminal)
  setInterval(() => {
    let cpuUsage = document.getElementById("cpuDisplay");
    const RAND_NUM = Math.ceil(Math.random() * 100)
    cpuUsage.innerHTML = ("CPU USAGE: " + RAND_NUM + "%");

    if (RAND_NUM < 25){
      cpuUsage.style = "color:gray";
    }else if (RAND_NUM < 50){
      cpuUsage.style = "color:yellow";
    }else{
      cpuUsage.style = "color:red";
    }
  }, 2000);
    

  await Wait(1000);

  //all other enter code will go here. You'll want to shift the cursor down to the bottom where it's supposed to be
  new Audio(ENTER_SFX.src).play();



  BOOTUP_SFX.addEventListener;
}



//driver code that calls Main()
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

Main();