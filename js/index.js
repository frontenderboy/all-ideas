import projects from "./projects.js";


const container = document.querySelector('.container')

projects.forEach(project => {
    const { id, title, description, source, imgSource, date } = project
    const item = `
    <div class="block" id="${id}">
        <a href="${source}" target="_blank"><img src="${imgSource}" alt="" class="block__image"></a>
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

    container.insertAdjacentHTML('beforeend', item)
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