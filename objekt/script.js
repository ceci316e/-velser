const superhelte = [
  {
    navn: "Clark Kent",
    styrke: ["Stærk", "Flyve", "Slowmotion syn"],
    yndlingsfarve: "Blå & rød",
    hårfarve: "Sort",
    billede: "superman.png",
  },
  {
    navn: "Spider-Man",
    styrke: ["Stærk", "Forøget fart", "Smidighed", "edderkoppesans"],
    yndlingsfarve: "Blå & rød",
    hårfarve: "Mørke brunt",
    billede: "spiderman.png",
  },
  {
    navn: "Wonder Woman",
    styrke: ["Superfart", "Superhørelse", "Flyve"],
    yndlingsfarve: "Blå & rød",
    hårfarve: "Sort",
    billede: "wonderwomen.pgn",
  },
];
console.log(superhelte.navn); //Clark Kent
console.log(superhelte.styrke[0]); //Stærk
const besked = `Min yndlings superhelt er ${superhelte.navn}`;
const styrke = `Supermans tredje styrke er ${superhelte.styrke[0]}`;

const superhelte1 = document.querySelector("#superhelte1");
superhelte1.querySelector("h1").textContent = superhelte.navn;
superhelte1.querySelector("div").textContent = superhelte.styrke;
superhelte1.querySelector("p").textContent = superhelte.yndlingsfarve;
superhelte1.querySelector("img").src = superhelte.billede;
