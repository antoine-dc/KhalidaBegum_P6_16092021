import { loadData, convertStringToHTML } from "./common.js";

//DOM elements
const modalBackground = document.querySelector(".background");
const modalBtn = document.querySelectorAll(".btn-contact");

// Launch Modal

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalBackground.style.display = "block";
}

const closeBtn = modalBackground.querySelector(".close");

closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modalBackground.style.display = "none";
}

//photographer bio

const getPhotographerBio = (photographer) => {
  return convertStringToHTML(`
  <div class="profile-text">
    <h1>${photographer.name}</h1>
  
    <span>${photographer.city}, ${photographer.country}</span>
    <p>${photographer.tagline}</p>
  </div>
  <span class="profile-pic">
    <img
      src="Sample Photos/Photographers ID Photos/${photographer.portrait}"
      alt="Portrait de ${photographer.name}"
    />
  </span>
  
`);
};
const getTags = (photographer) => {
  return convertStringToHTML(
    photographer.tags
      .map((tag) => {
        return `<span> <li><a href="#">#${tag}</a></li></span> `;
      })
      .join("")
  );
};

const getVideo = (media) => {
  return `  
  <article class="portfolio-pics">
   <div>
   <a href="#">
     <video controls>
       <source
         src="Sample Photos/${media.photographerId}/${media.video}"
         type="Video" alt="${media.title}"
       />
     </video>
     </a>
<div class="portfolio-text">
     <span>${media.title}</span>
     <span>${media.likes} ❤</span>
     </div>
   </div>
 </article>
`;
};
const getImage = (media) => {
  return `
    <article class="portfolio-pics">
    <span class="close-lightbox></span>
      <div>
        <a href="#><img 
          src="Sample Photos/${media.photographerId}/${media.image}"
          alt="${media.title}"
        /></a>
        <div class="portfolio-text">
        <span>${media.title}</span>
        <span class="portfolio-likes">${media.likes} ❤</span>   
        </div> 
      </div>
    </article>
  `;
};

const getMedia = (media) => {
  if (media.video) {
    return getVideo(media);
  }
  return getImage(media);
};

const getMedias = (medias) => {
  return convertStringToHTML(medias.map((media) => getMedia(media)).join(""));
};

const urlPhotographerId = +new URLSearchParams(location.search).get(
  "photographerId"
);

loadData().then((data) => {
  const photographer = data.photographers.find((photographer) => {
    return photographer.id === urlPhotographerId;
  });
  const media = data.media.filter((media) => {
    return media.photographerId === urlPhotographerId;
  });

  document.title = photographer.name;
  document
    .querySelector("#photographer_bio")
    .appendChild(getPhotographerBio(photographer));

  document
    .querySelector("#photographer_tags")
    .appendChild(getTags(photographer));

  document.querySelector("#portfolio").appendChild(getMedias(media));
});

//sort menu

const sortMenu = () => {
  document.getElementById("dropMenu").classList.toggle("show");
};

const dropBtn = document.querySelectorAll(".dropbtn");

dropBtn.forEach((btn) => btn.addEventListener("click", dropdowns));

const dropdowns = document.getElementsByClassName("sort-content");
/*
let i;
for (i = 0; i < dropdowns.length; i++) {
  let openDropdown = dropdowns[i];
  if (openDropdown.classList.contains("show")) {
    openDropdown.classList.remove("show");
  }
}*/

//lightbox

const diaporama = document.querySelector(".lightbox");

//recover arrows

let next = document.querySelector("#nav-right");
let prev = document.querySelector("#nav-left");
next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);

let compteur = 0; // Compteur qui permettra de savoir sur quelle slide nous sommes

function slideNext() {
  // On incrémente le compteur
  compteur++;

  // Si on dépasse la fin du diaporama, on "rembobine"
  if (compteur == slides.length) {
    compteur = 0;
  }
}

/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
function slidePrev() {
  // On décrémente le compteur
  compteur--;

  // Si on dépasse le début du diaporama, on repart à la fin
  if (compteur < 0) {
    compteur = slides.length - 1;
  }
}
