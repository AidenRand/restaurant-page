function createMenu() {
  const menu = document.createElement("div");
  menu.classList += "menu";

  menu.appendChild(
    createMenuItems(
      "Gorbon Goop",
      "Gorbon juices, calcidian seasoning, glass"
    )
  );
  menu.appendChild(
    createMenuItems("Fusion Tea", "hydrogen, helium, X-rays, gamma rays")
  );
  menu.appendChild(createMenuItems("Kerr Biscuit", "light, mass"));
  menu.appendChild(
    createMenuItems(
      "Solarian Snickerdoodle",
      "Bostookin meat, erdin drip, roskonian milk"
    )
  );
  menu.appendChild(
    createMenuItems("Balazonian Bagel", "silicon, ceramic, thorium")
  );
  menu.appendChild(
    createMenuItems(
      "Auoran Donut",
      "Vogspherian glaze, Terra grass, liodian yeast"
    )
  );
  menu.appendChild(
    createMenuItems("Meladisian Macarons", "Mel cream, radon, gargok cheese")
  );
  menu.appendChild(
    createMenuItems(
      "Carbon based breakfast sandwich",
      "Molten rock, amino acid, water"
    )
  );
  return menu;
}

function createMenuItems(name, desc) {
    const menuItem = document.createElement("div");
    menuItem.classlist += "menuItem";

    const foodName = document.createElement("h2");
    foodName.textContent = name;
    foodName.classList += "foodName";

    const foodDesc = document.createElement("p");
    foodDesc.textContent = desc;
    foodDesc.classList += "foodDesc";

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDesc);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;
