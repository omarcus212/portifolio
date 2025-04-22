'use Strict'
import Cards from './card.js'

const createCard = () => {

    var container = document.getElementById("container-project")
    var cardDiv = ""

    Cards.forEach(element => {

        cardDiv +=

            `
            <a href="${element.respositorio}" class="card-project">
            <div class="card" id=${element.id}>
            <span class="card-img" > 
            <img
              class="img-project"
              src="${element.image}"
              alt="loading!"
            />
            </span>
            <p class="text-name-project">${element.nome}</p>
             </a>
          </div>
    `
    });

    container.innerHTML = cardDiv

}

createCard()


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight;
}

function handleScroll() {
    const sections = document.getElementById('about');
    const projeto = document.getElementById('project');

    const projetoSection = document.getElementById('container-project');

    if (isInViewport(projetoSection)) {

        projeto.style.backgroundColor = '#1B2A41'
        sections.style.backgroundColor = '#1B2A41'


    } else {
        projeto.style.backgroundColor = ''
        sections.style.backgroundColor = ''
        footer.style.backgroundColor = ''
    }
}

window.addEventListener('scroll', handleScroll);

handleScroll();