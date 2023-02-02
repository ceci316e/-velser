const superman = {
  navn: "Clark Kent",
  styrke: ["Stærk", "Flyve", "Slowmotion syn"],
  yndlingsfarve: "Blå & rød",
  hårfarve: "Sort",
};

console.log(superman.navn); //Clark Kent
console.log(superman.styrke[0]); //Stærk
const besked = `Min yndlings superhelt er ${superman.navn}`;
const styrke = `Supermans tredje styrke er ${superman.styrke[2]}`;
