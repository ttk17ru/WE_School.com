// Written by Abdo Essam

// Main Variables
const screen = document.getElementById("mainCon");
let projectName = document.getElementById("projectName");
let paragraph = document.getElementById("paragraph");
let firstImg = document.getElementById("firstImg");
let secImg = document.getElementById("secImg");
let videoShow = document.getElementById("video_show");
let firstImgLink = document.getElementById("firstImgLink");
let secImgLink = document.getElementById("secImgLink");
let num = 0;

// Scrolling Buttons
const leftBtn = document.getElementById("leftArrow");
const rightBtn = document.getElementById("rightArrow");

// Variables
let projectNames = [
  "WE Student Hacker App", "Malware Hub Web App", "Caesar Cipher",
  "Private Messaging App", "RAT App"
];
let paragraphs = [
  "This app is for teaching the student some linux basics. It has Terminal UI. I didn't finish the app yet.",
  "Malware Hub project is big web app for people how want to communicate and learn about malwares and malware development.",
  "Caesar Cipher one of the oldest ways for text encryption. It's easy to learn every one can use it to make unreadable text.",
  "Private Messaging App is made using Python. It's used as it's name for messaging people private using TCP server. The GUI made using PyQt6.",
  "RAT is a type of malware. It's used to controll the target's device anonymously. I made for it installer the installer install the RAT and make it run on boot and install watchdog made using CPP."
];
let imgFirstCollection = [
  "assets\\WE_IMG1.png", "assets\\Malware_Hub1.png",
  "assets\\Caesar_Cipher1.png", "assets\\PMA1.png",
  "assets\\RAT1.png"
];
let imgSecondCollection = [
  "assets\\WE_IMG2.png", "assets\\Malware_Hub2.png",
  "assets\\Caesar_Cipher2.png", "assets\\PMA2.png",
  "assets\\RAT2.png"
];
let VIDSCollection = [
  "assets\\WE_VID.mp4", "assets\\Malware_Hub_VID.mp4",
  "assets\\Caesar_Cipher_VID.mp4", "assets\\PMA_VID.mp4",
  "assets\\RAT_VID.mp4"
];

// functions
function pageMaker(num, PN, P, FIMG, SIMG, VID, FIMGV, SIMGV) {
  PN.textContent = projectNames[num];
  P.textContent = paragraphs[num];
  FIMG.src = imgFirstCollection[num];
  SIMG.src = imgSecondCollection[num];
  VID.src = VIDSCollection[num];
  FIMGV.href = imgFirstCollection[num];
  SIMGV.href = imgSecondCollection[num];
}

pageMaker(0, projectName, paragraph, firstImg, secImg, videoShow, firstImgLink, secImgLink)

function scrollLeft() {
  if (num === 0){
    num = 4;
  } else {
    num --;
  }
  pageMaker(num, projectName, paragraph, firstImg, secImg, videoShow, firstImgLink, secImgLink);
}

function scrollRight() {
  if (num === 4){
    num = 0;
  } else {
    num ++;
  }
  pageMaker(num, projectName, paragraph, firstImg, secImg, videoShow, firstImgLink, secImgLink);
}

leftBtn.onclick = scrollLeft;
rightBtn.onclick = scrollRight;

/*
let projectNames = [
  "WE Student Hacker App", "Malware Hub Web App", "Caesar Cipher",
  "Private Messaging App", "RAT App"
];

let paragraphs = [
  "This app is for teaching the student some linux basics. It has Terminal UI. I didn't finish the app yet.",
  "Malware Hub project is big web app for people how want to communicate and learn about malwares and malware development.",
  "Caesar Cipher one of the oldest ways for text encryption. It's easy to learn every one can use it to make unreadable text.",
  "Private Messaging App is made using Python. It's used as it's name for messaging people private using TCP server. The GUI made using PyQt6.",
  "RAT is a type of malware. It's used to controll the target's device anonymously. I made for it installer the installer install the RAT and make it run on boot and install watchdog made using CPP."
];

let imgFirstCollection = [
  "assets\\WE_IMG1.png", "assets\\Malware_Hub1.png",
  "assets\\Caesar_Cipher1.png", "assets\\PMA1.png",
  "assets\\RAT1.png"
];

let imgSecondCollection = [
  "assets\\WE_IMG2.png", "assets\\Malware_Hub2.png",
  "assets\\Caesar_Cipher2.png", "assets\\PMA2.png",
  "assets\\RAT2.png"
];


let firstCollection = ["assets\\WE_IMG1.png", "assets\\WE_IMG2.png", "assets\\WE_VID.mp4"];
let seconedCollection = ["assets\\Malware_Hub1.png", "assets\\Malware_Hub2.png", "assets\\Malware_Hub_VID.mp4"];
let thirdCollection = ["assets\\Caesar_Cipher1.png", "assets\\Caesar_Cipher2.png", "assets\\Caesar_Cipher_VID.mp4"];
let forthCollection = ["assets\\PMA1.png", "assets\\PMA2.png", "assets\\PMA_VID.mp4"];
let fifthCollection = ["assets\\RAT1.png", "assets\\RAT2.png", "assets\\RAT_VID.mp4"];


let VIDSCollection = [
  "assets\\WE_VID.mp4", "assets\\Malware_Hub_VID.mp4",
  "assets\\Caesar_Cipher_VID.mp4", "assets\\PMA_VID.mp4",
  "assets\\RAT_VID.mp4"
];

let num = 1;
projectName.textContent = projectNames[num];
paragraph.textContent = paragraphs[num];
firstImg.src = imgFirstCollection[num];
secImg.src = imgSecondCollection[num];
*/