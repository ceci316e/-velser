//************************ forskellige superhelte ************************//
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

/* For at få fat i min skabelon og indholdet, få den vist i konsollen */
const skabelon = document.querySelector("#minSkabelon").content;

/* Få vist en helt af gangen */
superhelte.forEach(vishelte);

function vishelte(helte) {
  /* Laver en klon af skabelonen, hvor man kan ændre indeholdet i */
  const klon = skabelon.cloneNode(true);
  /* fiske hvert element ud */
  klon.querySelector("h1").textContent = helte.navn;
  klon.querySelector("div").textContent = helte.styrke;
  /* appender den til den container vi har lavet i HTML */
  document.querySelector("main").appendChild(klon);
}
