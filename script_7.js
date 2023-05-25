ask = prompt("Pose une question au Bot Adolescent (il est excécrable): ");
ask = ask.trim();

last = ask.length - 1;

if (ask[last] === "?") {
  console.log("Ouais Ouais...");
} else if(ask === ask.toUpperCase() && ask !== "") {
  console.log("Pwa, calme-toi...");
} else if(ask.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
} else if(ask == "") {
  console.log("t'es en PLS ?");
} else {
  console.log("balek.");
}