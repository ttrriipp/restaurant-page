import bestMeat from "./images/best-meat.jpg";
import otherMeat from "./images/other-meat.jpg";
import diffMeat from "./images/meat-but-diff.jpg";

export default function generateMenuContent() {
  const content = document.querySelector("#content");
  content.textContent = "";

  //create menu container
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  content.appendChild(menuContainer);

  const bestSellerTitle = document.createElement("h2");
  bestSellerTitle.textContent = "BEST SELLER";
  menuContainer.appendChild(bestSellerTitle);

  const bestSellerContainer = document.createElement("div");
  bestSellerContainer.classList.add("best");
  menuContainer.appendChild(bestSellerContainer);

  const otherSellerTitle = document.createElement("h2");
  otherSellerTitle.textContent = "OTHER SELLER";
  menuContainer.appendChild(otherSellerTitle);

  const otherSellerContainer = document.createElement("div");
  otherSellerContainer.classList.add("other-food");
  menuContainer.appendChild(otherSellerContainer);

  const bestMeatName = "MEAT";
  const bestMeatDescription = "diz meat yummy fr fr typeshi";

  const otherMeatName = "OTHER MEAT";
  const otherMeatDescription = "iz aight";

  const diffMeatName = "MEAT BUT DIFF";
  const diffMeatDescription = "idk bout dis one";

  createCard(bestSellerContainer, bestMeat, bestMeatName, bestMeatDescription);
  createCard(
    otherSellerContainer,
    otherMeat,
    otherMeatName,
    otherMeatDescription
  );
  createCard(otherSellerContainer, diffMeat, diffMeatName, diffMeatDescription);
}

function createCard(container, image, name, description) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.src = image;
  card.appendChild(cardImage);

  const cardName = document.createElement("h3");
  cardName.textContent = name;
  card.appendChild(cardName);

  const cardDescription = document.createElement("p");
  cardDescription.textContent = description;
  card.appendChild(cardDescription);

  container.appendChild(card);
}
