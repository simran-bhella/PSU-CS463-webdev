document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector("main");

  // Create a container div
  const container = document.createElement("div");
  container.classList.add("container");
  main.appendChild(container);

  // Create an h1 element
  const h1 = document.createElement("h1");
  h1.textContent = "Exercise 01 - Hello";
  container.appendChild(h1);

  // Create an image element
  const img = document.createElement("img");
  img.classList.add("img");
  img.setAttribute("src", "../images/simran.jpg");
  img.setAttribute("width", "200");
  img.setAttribute(
    "alt",
    "Picture of Simranjit Bhella smiling in a garden with pink flowers"
  );
  container.appendChild(img);

  // Create a p element for bio
  const bio = document.createElement("p");
  bio.classList.add("bio");
  bio.innerHTML =
    "My name is Simranjit Bhella, but I go by Simran. I have very little experience with web development, but I am looking to change that with this course. I am excited to learn about websites, how they work, and how to make them.";
  container.appendChild(bio);

  const firstSentence = bio.textContent.substring(
    0,
    bio.textContent.indexOf(".") + 1
  );
  const remainingText = bio.textContent.substring(
    bio.textContent.indexOf(".") + 1
  );
  bio.innerHTML = `<span class="bold">${firstSentence}</span>${remainingText}`;
});
