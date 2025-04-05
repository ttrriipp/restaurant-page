import "./styles.css";
import generateHomepageContent from "./homepage";
import generateMenuContent from "./menu";
import generateAboutContent from "./about";

generateHomepageContent();

const navigation = document.querySelector("nav");
navigation.addEventListener("click", (event) => {
  let choice = event.target.id;

  switch (choice) {
    case "home":
      generateHomepageContent();
      break;
    case "menu":
      generateMenuContent();
      break;
    case "about":
      generateAboutContent();
      break;
  }
});
