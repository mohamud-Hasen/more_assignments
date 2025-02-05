jokeData = {
  setup: "why developers don't like nature?",
  delivery: "because it has a lot bugs",
};
function createJokeCard(joke) {
  const jokeDiv = document.createElement("div");
  jokeDiv.className = "joke-card";

  // Create paragraph
  const setup = document.createElement("p");
  setup.className = "joke-setup";
  setup.texContent = joke.setup;
  jokeDiv.append(setup);

  //joke delivery paragraph
  const delivery = document.createElement("p");
  delivery.className = "joke-delivery";
  delivery.textContent = joke.delivery;
  jokeDiv.append(delivery);

  return jokeDiv;
}
console.log(createJokeCard(jokeData));
