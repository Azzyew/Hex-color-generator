const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

window.onload=function(){    
  let btn = document.getElementById("btn");
  btn.addEventListener("click", gerar);
}

function gerar(){
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  console.log(hexColor);

  document.getElementById("color").textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
};

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}