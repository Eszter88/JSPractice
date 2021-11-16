function log(msg){
  let div = document.createElement("div");
  div.innerText = msg;
  document.body.append(div);
}

function main(){
  log("Practice JS");
  let age = 30;
  log("Type of age is " + typeof age);

  let male = true;
  log("Type of male is " + typeof male);

  let favLanguage = "JavaScript"; 
  log("Type of favLanguage is " + typeof favLanguage);

  {
    let name;
    log("Type of name is " + typeof name);
    name = "Adam";
    log("Type of name is " + typeof name);
  }

  log("Adam ihat?");
  if (age >= 18) {
    log("igen");
  } else {
    log("nem");
    return;
  }

  let beers = Number(window.prompt("Hany sört innal?", 5));
  if (isNaN(beers)){ //tipusellenorzes
    log("Ez nem egy szam.");
    return;
  }
  
  for (let i = 0; i < beers; i++) { //block scope
    log(i + ". Sör."); //tipuskenyszerites
  }

}

window.addEventListener("load", main);
