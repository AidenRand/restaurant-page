function createHome() {
  //  Create front page square
  const home = document.createElement('div');

  const frontPage = document.createElement("div");
  frontPage.className = "frontPage";

  const frontText1 = document.createElement("p");
  frontText1.textContent = "Best coffee in the universe and beyond";
  frontText1.className = "frontText1";

  const frontEst = document.createElement("p");
  frontEst.className = "frontEst";
  frontEst.textContent = "Est in year 0";

  // Add image of mug
  const frontImg = document.createElement("img");
  frontImg.src =
    "photos/DALL·E 2022-10-06 10.37.24 - a coffee bean planet floating in space photo realistic.jpg";
  frontImg.className = "frontImg";

  const frontText2 = document.createElement("p");
  frontText2.textContent =
    "Order through space mail or visit us on planet Coffea in galatic system Genus";
  frontText2.className = "frontText2";

  frontPage.appendChild(frontText1);
  frontPage.appendChild(frontEst);
  frontPage.appendChild(frontImg);
  frontPage.appendChild(frontText2);
  home.appendChild(frontPage);
  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;
