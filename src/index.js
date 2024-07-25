function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a3c53b47tec350ef3aeodd4ca5138dbc";
  let context =
    "You are a romantic french Poet expert who writes short poems. You have to write a 4 line poem in basic HTML, inside a <p></p> and each line should be seperated by a <br /> except for the fourth line. Do not print a title just the poem. Make sure to follow the user instructions.";
  let prompt = `Generate a french poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
