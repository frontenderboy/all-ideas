import ideas from "./ideas.js";
import makets from "./makets.js";
import localIdeas from "./local-ideas.js";


const containerIdeas = document.querySelector('[data-container="ideas"]')
const containerMakets = document.querySelector('[data-container="makets"]')
const containerLocalIdeas = document.querySelector('[data-container="local-ideas"]')

ideas.forEach(idea => {
    const { id, title, description, source, imgSource, date } = idea
    const item = `
    <div class="block" id="${id}">
        <div class="block__image-inner block__image-inner--ideas">
            <a href="${source}" target="_blank">
                <img src="${imgSource}" alt="" class="block__image">
            </a>
        </div>
        <div class="block__wrapper">
            <h2 class="block__title">${title}</h2>
            <p class="block__desc">${description}</p>

            <time datetime="${date}" class="time">${formatDate(date)}</time>
        </div>
        <a href="${source}" class="block__button" target="_blank">CodePen
            <svg class="arrow-link" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z" fill="#FF3F3A"/>
            </svg>
        </a>
    </div>
    `

    containerIdeas.insertAdjacentHTML('beforeend', item)
})
makets.forEach(maket => {
    const { id, source, imgSource } = maket
    
    const item = `
    <div class="block" id="${id}">
                <div class="block__image-inner block__image-inner--makets">
                    <a href="${source}" target="_blank">
                        <img src="${imgSource}" alt="" class="block__image">
                    </a>
                </div>
                <a href="${source}" class="block__button" target="_blank">Figma
                    <svg class="arrow-link" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z" fill="#FF3F3A"/>
                    </svg>
                </a>
    </div>
    `
    containerMakets.insertAdjacentHTML('beforeend', item)
})

function formatDate(inputDate) {
    const parts = inputDate.split("-");
    const year = parts[0];
    const month = parseInt(parts[1]);
    const day = parts[2];
   
    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря"
    ];
  
    const formattedDate = `${day} ${monthNames[month - 1]} ${year}`;
    return formattedDate;
}

// Tabs
const listTabs = document.querySelectorAll('[data-tab]');
const contents = document.querySelectorAll('[data-tab-content]');

listTabs.forEach(tab => 
    tab.addEventListener('click', event => {
    
    const tabsTitleTarget = event.target.getAttribute('data-tab');
    listTabs.forEach(element => element.classList.remove('active-tab'));

    contents.forEach(card => card.classList.add('hidden'));

    tab.classList.add('active-tab');

    document.getElementById(tabsTitleTarget).classList.remove('hidden');

}));

document.querySelector('[data-tab="tab-1"]').classList.add('active-tab')
document.querySelector('#tab-1').classList.remove('hidden');