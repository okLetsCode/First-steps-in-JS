const colorMap = ["#5B88BD", "#A40014", "#8FF897"];
let state = 0;

function growingWord() {
  let word = document.getElementById("growingWord");

  if(word === null){
    throw new Error("Error!");
  }

  let fontSize = window
  .getComputedStyle(word)
  .fontSize
  .replace("px", "");

  if(state >= colorMap.length){
    state = 0;
  }

  word.style.color = colorMap[state];
  state++;

  //word.style.fontSize = (fontSize === "0" ? "2" : fontSize *2) + "px";

  if(fontSize === "0"){
    word.style.fontSize = 2 + "px";
  }else{
    word.style.fontSize = fontSize *2 + "px";
  }

}