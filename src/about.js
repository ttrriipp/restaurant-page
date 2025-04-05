import sous from "./images/sous.jpg";

export default function generateAboutContent() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const aboutText = document.createElement("p");
  const about =
    "i made dis resto bcuz i luv meat so very much 4 life!!1 XD here's my sous chef btw: ";
  aboutText.textContent = about;

  const sousImage = document.createElement("img");
  sousImage.src = sous;
  sousImage.classList.add("sous");

  content.appendChild(aboutText);
  content.appendChild(sousImage);
}
