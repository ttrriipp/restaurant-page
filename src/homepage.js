import chef from "./images/chef.png";

export default function generateHomepageContent() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const chefImage = document.createElement("img");
  chefImage.src = chef;
  chefImage.classList.add("chef");
  content.appendChild(chefImage);

  const headLine = document.createElement("h1");
  headLine.textContent = "WELCOM 2 MY RESTORANT!1";
  content.appendChild(headLine);

  const description = document.createElement("p");
  description.textContent =
    "MY RESTORANT IS D BEST! IT HAZ BES MEATz IN D WORLDZ!!1!. TRYY IT 0UTT NOWW!!!111!.";
  content.appendChild(description);
}
