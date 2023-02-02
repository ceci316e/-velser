const minPlayliste = ["Two of Us", "Let It Be", "I've Got a Felling", "Dig a pony", "Across the Universe", "I Me Mine", "Dig It", "Maggie Mae", "One After 909", "The Long and Winding Road", "For You Blue", "Get Back"];

minPlayliste.forEach(visEnAfGangen);

function visEnAfGangen(enSang) {
  console.log(enSang + " er god");
  document.querySelector("#display").innerHTML += `<p>${enSang}</p>`;
}
