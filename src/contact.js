function createContact() {
    const contact = document.createElement('div');

    const contDiv = document.createElement('div');
    contDiv.className = 'contactDiv';

    const text1 = document.createElement('p');
    text1.classList += 'contText1'
    text1.textContent = 'Contact us at 3-C8H-10N-4O2'

    const contImg = document.createElement('img');
    contImg.src = 'photos/M63-HST-Subaru-S1024.jpg'
    contImg.classList += "contImg";

    const text2 = document.createElement('p');
    text2.classList += 'contText2'
    text2.textContent = "We are located in galactic sector 3 on planet Coffea in system Genus"

    contDiv.appendChild(text1);
    contDiv.appendChild(contImg);
    contDiv.appendChild(text2);
    contact.appendChild(contDiv);
    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = ''
    main.appendChild(createContact());
}

export default loadContact;