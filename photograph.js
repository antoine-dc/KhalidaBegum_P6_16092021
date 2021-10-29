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
      <div>
        <a href="#"><img 
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
  const lightboxPics = document.querySelectorAll(".portfolio-pics");
  console.log(lightboxPics);
  lightboxPics.forEach((img) => img.addEventListener("click", launchLightbox));
});

//sort menu

const sortContent = document.querySelector(".sort-content");
const dropBtn = document.querySelectorAll(".dropbtn");

//const dropMenu= document.getElementById("#dropMenu");
////const modalBackground = document.querySelector(".background");
//const modalBtn = document.querySelectorAll(".dropbtn");

// Launch Modal

dropBtn.forEach((btn) => btn.addEventListener("click", sortMenu));

function sortMenu() {
  dropMenu.style.display = "block";
}

//const closeContent = dropBtn.querySelector();
//const closeContent = sortContent.querySelector('body');

btn.addEventListener("click", closeContent);
function closeContent() {
  dropMenu.style.display = "none";
}

/*
let i;
for (i = 0; i < dropdowns.length; i++) {
  let openDropdown = dropdowns[i];
  if (openDropdown.classList.contains("show")) {
    openDropdown.classList.remove("show");
  }
}*/

/*
//lightbox
const lightbox = document.querySelector(".portfolio");
const diaporama = document.querySelectorAll(".portfolio-pics");

//recover arrows

const next = document.querySelector("#nav-right");
const prev = document.querySelector("#nav-left");
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
/*
function slidePrev() {
  // On décrémente le compteur
  compteur--;

  // Si on dépasse le début du diaporama, on repart à la fin
  if (compteur < 0) {
    compteur = slides.length - 1;
  }
}

*/

// lightbox open/close

const lightboxBackground = document.querySelector(".lightbox");

function launchLightbox() {
  lightboxBackground.style.display = "block";
}

const closeBox = lightboxBackground.querySelector(".lightbox-close");

closeBox.addEventListener("click", closeLightbox);
function closeLightbox() {
  lightboxBackground.style.display = "none";
}

const links = document;
//.querySelectorAll('img[src$=".jpg"],video[src$=".mp4"]')
document
  .querySelector("#portfolio")
  .appendChild(getMedias(media))
  .forEach((link) =>
    link.addEventListener("click", (e) => {
      links(e.currentTarget.getAttribute("src"));
    })
  );

//slider arrows
const next = document.querySelector("#nav-right");
const prev = document.querySelector("#nav-left");
next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);

/*
const diaporama = () => {
  return `<button><div class="lightbox-close"></div></button>
  <div class="nav-arrow">
    <button><i id="nav-left" class="fas fa-arrow-left"></i></button>
    <button><i id="nav-right" class="fas fa-arrow-right"></i></button>
  </div>
  <div class="lightbox-container">
          <div class="lightbox-image">
            <img
              src="Sample Photos/${media.photographerId}/${media.image}"
              alt="lightbox-image"
            />
          </div>
          <div class="lightbox-text">
            <span> ${media.title}</span>
          </div>
        </div>`;
};*/

/* 
 constructor (url) {
    this.element = this.buildDom(url)
    document.body.appendChild(this.element)
  }
 loadImage(url){
    
    const container = this.element.querySelector('.lightbox-container');
    container.innerHTML =''
    this.url=url;
    container.appendChild(image);
    image.src = url;
}

close(e)
  e.preventDefault()
  this.element.classList.add('fadeOut')
  window.setTimeout(()=>{
    this.element.parentElement.removeChild(this.element)
  },500);
  next (e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image === this.url)
    if (i === this.images.length - 1) {
      i = -1
    }
    this.loadImage(this.images[i + 1])
  };
  prev (e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image === this.url)
    if (i === 0) {
      i = this.images.length
    }
    this.loadImage(this.images[i - 1])
  }


buildDom(url);
const dom = document.createElement("div");
dom.classList.add("lightbox");
dom.innerHTML = `<button><div class="lightbox-close"></div></button>
  <div class="nav-arrow">
    <button><i id="nav-left" class="fas fa-arrow-left"></i></button>
    <button><i id="nav-right" class="fas fa-arrow-right"></i></button>
  </div>
  <div class="lightbox-container">
    <img
    src="Sample Photos/${media.photographerId}/${media.image}"
      alt="${media.title}"
    />
  </div>`;
dom
  .querySelector(".lightbox-close")
  .addEventListener("click", this.close.bind(this));
dom
  .querySelector(".lightbox__next")
  .addEventListener("click", this.next.bind(this));
dom
  .querySelector(".lightbox__prev")
  .addEventListener("click", this.prev.bind(this));
return dom;

class Lightbox {
  static init() {
    const links = document
      .querySelectorAll('img[src$=".jpg"],video[src$=".mp4"]')
      .forEach((link) =>
        link.addEventListener("click", (e) => {
          e.preventDefault();
          new Lightbox(e.currentTarget.getAttribute("src"));
        })
      );
  }
}
*/
