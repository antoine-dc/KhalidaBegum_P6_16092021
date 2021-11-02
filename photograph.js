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
  const lightboxBackground = document.querySelector(".lightbox");
  function launchLightbox() {
    lightboxBackground.style.display = "block";
  }
  const closeBox = lightboxBackground.querySelector(".lightbox-close");

  closeBox.addEventListener("click", closeLightbox);
  function closeLightbox() {
    lightboxBackground.style.display = "none";
  }
});

// Launch sort menu
const dropBtn = document.querySelectorAll(".dropbtn");

dropBtn.forEach((btn) => btn.addEventListener("click", sortMenu));

function sortMenu() {
  dropMenu.style.display = "block";
}

const contentClose = document.querySelector(".sort-content");
contentClose.addEventListener("click", closeMenu);

function closeMenu() {
  dropMenu.style.display = "none";
}

// Diaporama
/*
const lightboxPics = document.querySelectorAll(".portfolio-pics");

lightboxPics.forEach((image) => {
  image.addEventListener("click", e => {
    if (e.target !== e.currentTarget)return
    const img = document.createElement("img");
    img.src = image.src;
    lightbox.appendChild(img);
  });
});
*/
/*
const nbSlide = diaporama.length;

const lightboxPics = (media) => {
  return convertStringToHTML(`
<div class="lightbox" id="lightbox">
        <span class="lightbox-close"></span>

        <div class="nav-arrow">
          <button
            id="nav-left"
            class="fas fa-arrow-left"
            onclick="prevImage()"
          ></button>
          <button
            id="nav-right"
            class="fas fa-arrow-right"
            onclick="nextImage()"
          ></button>
        </div>
        <div class="lightbox-container">
          <div class="lightbox-image">
            <img
              src="Sample Photos/${media.photographerId}/${media.image}"
              alt="${media.title}"
            />
          </div>
          <div class="lightbox-text">
            <span> ${media.title}</span>
          </div>
        </div>
        </div>`);
};*/

/*

//slider arrows
const next = document.querySelector("#nav-right");
const prev = document.querySelector("#nav-left");
let count = 0; // Compteur permettra de savoir sur quelle slide nous sommes

function slideNext() {
  // Incrémente le compteur
  count++;
  if (count == nbSlide) {
    // Si on dépasse la fin du diaporama, on "rembobine"
    count = 0;
  }
}
next.addEventListener("click", slideNext);

function slidePrev() {
  //Décrémente le compteur
  count--;
  if (count < 0) {
    // Si on dépasse le début du diaporama, on repart à la fin
    count = nbSlide - 1;
  }
}
prev.addEventListener("click", slidePrev);

class lightbox {
  constructor(element, options = {}) {
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
      },
      options
    );
    this.children = [].slice.call(element.children);
    let root = this.createDivWithClass("lightbox");
    let container = this.createDivWithClass("lightbox-container");
    root.appendChild(container);
    this.element.appendChild(root);
    this.children.forEach(function (child) {
      container.appendChild(child);
    });
  }
  createDivWithClass(className) {
    let div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new lightbox(document.querySelector("#lightbox"), {
    slidesToScroll: 1,
    slidesVisible: 1,
  });
});
*/
/*




class lightbox  {
  constructor (element, options = {})
};
document.addEventListener('DOMContentLoaded, function(){

})
/*
 static init() {
    const links = document
      .querySelectorAll('img[src$=".jpg"],video[src$=".mp4"]')
      .forEach((link) =>
        link.addEventListener("click", (e) => {
          e.preventDefault();
          new Lightbox(e.currentTarget.getAttribute("src"));
        })
      );
  }*/

/*function afficheImage() {
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

const lightboxImage = document.querySelectorAll(".portfolio-pics");
const next = document.querySelector("#nav-right");
const prev = document.querySelector("#nav-left");
const current = 0;

function reset() {
  for (let i = 0; i < lightboxImage.length; i++) {
    lightboxImage[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  lightboxImage[0].style.display = "block";
}

function slideLeft() {
  reset();
  lightboxImage[current - 1];
  current--;
}

function slideRight() {
  reset();
  lightboxImage[current + 1];
  current++;
}

prev.addEventListener("click", function () {
  if (current === 0) {
    current = lightboxImage.length;
  }
  slideLeft();
});

next.addEventListener("click", function () {
  if (current === lightboxImage.length - 1) {
    current = -1;
  }
  slideRight();
});

let image = ".portfolio-pics";
let i = image.length;

function nextImage() {
  if (i > image.length) {
    i = i + 1;
  } else {
    i = 1;
  }
  sliderContent.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
}
function prevImage() {
  if (i < image.length + 1 && i > 1) {
    i = i - 1;
  } else {
    i = image.length;
  }
  sliderContent.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
}
const links = document.querySelectorAll("portfolio-pics").forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    new links(e.currentTarget.getAttribute("src"));
  })
);
