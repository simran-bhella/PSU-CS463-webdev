let starships = [];

const init = async () => {
  try {
    starships = await fetchData("https://swapi.dev/api/starships/");
  } catch (error) {
    console.error("Error initializing starships:", error);
  }
};

init();
const fetchData = async (url) => {
  // REtrieve the data from the API
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section");
  container.classList.add("ship-component");

  const topLine = document.createElement("div");
  topLine.classList.add("top-line");

  const name = document.createElement("p");
  name.classList.add("ship-name");
  name.innerHTML = `<strong>${spaceship.name}</strong>`;

  const credits = document.createElement("p");
  credits.classList.add("ship-credits");
  const formattedCredits = parseInt(spaceship.cost_in_credits).toLocaleString();
  credits.innerHTML = `<strong>${formattedCredits} credits</strong>`;

  topLine.appendChild(name);
  topLine.appendChild(credits);

  container.appendChild(topLine);

  const manufacturer = document.createElement("p");
  manufacturer.textContent = `Manufactued by ${spaceship.manufacturer}`;
  container.appendChild(manufacturer);

  const statsLine = document.createElement("div");
  statsLine.classList.add("stats-line");

  const maxAtmospheringSpeed = document.createElement("p");
  const formattedMaxAtmospheringSpeed = parseInt(
    spaceship.maxAtmospheringSpeed
  ).toLocaleString();
  maxAtmospheringSpeed.innerHTML = `<strong>${formattedMaxAtmospheringSpeed}</strong> Max Atmosphering Speed`;

  const divider = document.createElement("div");
  divider.classList.add("divider");

  const cargoCapacity = document.createElement("p");
  const formattedcargoCapacity = parseInt(
    spaceship.cargo_capacity
  ).toLocaleString();
  cargoCapacity.innerHTML = `<strong> ${formattedcargoCapacity}</strong> Cargo Capacity`;

  statsLine.appendChild(maxAtmospheringSpeed);
  statsLine.appendChild(divider);
  statsLine.appendChild(cargoCapacity);

  container.appendChild(statsLine);

  return container;
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  return starships.filter((ship) => ship.passengers < 10 && ship.crew > 1);
};

const reduceStarships = (input) => {
  const totalCost = starships.reduce((acc, ship) => {
    const cost = parseInt(ship.cost_in_credits);
    return isNaN(cost) ? acc : acc + cost;
  }, 0);

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", async () => {
  try {
    starships = await fetchData("https://swapi.dev/api/starships/");
    displayShipComponents(starships);
  } catch (error) {
    console.error("Error:", error);
  }
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship of starships) {
    const shipComponent = createSpaceshipComponent(ship);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
