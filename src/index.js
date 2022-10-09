import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  // Create header div
  const header = document.createElement("div");
  header.classList += "header";

  // Create title
  const title = document.createElement("h1");
  title.innerHTML = "Cosmic Diner";
  title.classList += "title";

  // Create header links
  const links = document.createElement("div");

  const homeBtn = document.createElement("button");
  homeBtn.innerHTML = '<a href="#">HOME</a>';
  homeBtn.classList.add("link");
  links.appendChild(homeBtn);
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveBtn(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = '<a href="#">MENU</a>';
  menuBtn.classList.add("link");
  links.appendChild(menuBtn);
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveBtn(menuBtn);
    loadMenu();
  });

  const contactBtn = document.createElement("button");
  contactBtn.innerHTML = '<a href="#">CONTACT</a>';
  contactBtn.classList.add("link");
  links.appendChild(contactBtn);
  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveBtn(contactBtn);
    loadContact();
  });

  header.appendChild(title);
  header.appendChild(links);

  return header;
}

function setActiveBtn(button) {
  const btns = document.querySelectorAll(".link");

  button.classList += "active";

  btns.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList += "footer";
  footer.innerHTML = "Made by Aiden Rand 2023";
  return footer;
}

function loadSite() {
  const content = document.querySelector("#content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  setActiveBtn(document.querySelector(".link"));
  loadHome();
}
loadSite();
