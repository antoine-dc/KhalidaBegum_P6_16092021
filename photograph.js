import { loadData, convertStringToHTML } from "./common.js";

//DOM elements
const modalBackground = document.querySelector(".background");
const modalBtn = document.querySelectorAll(".btn-contact");
const lightboxBackground = document.querySelector(".lightbox");

// Launch Modal

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

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

  //console.log(lightboxPics);
  lightboxPics.forEach((img) =>
    img.addEventListener("click", (e) => {
      let indexMedia = e.target.getAttribute("data-id");

      let containerMedia = document.querySelector(".lightbox-image");

      containerMedia.innerHTML = lightboxPics[indexMedia].innerHTML;

      lightboxBackground.style.display = "block";
    })
  );

  const closeBox = lightboxBackground.querySelector(".lightbox-close");

  closeBox.addEventListener("click", closeLightbox);
});

// Launch sort menu
const dropBtn = document.querySelectorAll(".close-menu");

dropBtn.forEach((btn) => btn.addEventListener("click", sortMenu));

const contentClose = document.querySelector(".dropbtn");
contentClose.addEventListener("click", closeMenu);

const closeBtn = modalBackground.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

// Functions

function closeLightbox() {
  lightboxBackground.style.display = "none";
}

function launchLightbox(e) {
  console.log(e.target);
  lightboxBackground.style.display = "block";
}
//e.target.getAttribute("data-id");

function launchModal() {
  modalBackground.style.display = "block";
}

function closeModal() {
  modalBackground.style.display = "none";
}

function sortMenu() {
  dropMenu.style.display = "block";
}

function closeMenu() {
  dropMenu.style.display = "none";
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

const getVideo = (media, index) => {
  return `  
  <article class="portfolio-pics">
   <div>
   <a href="#">
     <video controls data-id="${index}">
       <source
         src="Sample Photos/${media.photographerId}/${media.video}"
         type="Video" alt="${media.title}"
       />
     </video>
     </a>
<div class="portfolio-text" data-id="${index}">
     <span class="title">${media.title}</span>
     <span class="portfolio-likes">${media.likes} ❤</span>
     </div>
   </div>
 </article>
`;
};
const getImage = (media, index) => {
  return `
    <article class="portfolio-pics">
      <div>
        <a href="#"><img 
          src="Sample Photos/${media.photographerId}/${media.image}"
          alt="${media.title}"
          data-id="${index}"
        /></a>
        <div class="portfolio-text" data-id="${index}">
        <span class="title">${media.title}</span>
        <span class="portfolio-likes">${media.likes} ❤</span>   
        </div> 
      </div>
    </article>
  `;
};

const getMedia = (media, index) => {
  if (media.video) {
    return getVideo(media, index);
  }
  return getImage(media, index);
};

const getMedias = (medias) => {
  return convertStringToHTML(
    medias.map((media, index) => getMedia(media, index)).join("")
  );
};
/*
const diaporamaPic = document.querySelectorAll(".portfolio-pics");
const nbSlide = diaporamaPic.length;
const next = document.querySelector("#nav-right");
const prev = document.querySelector("#nav-left");
let count = 0;

diaporamaPic.forEach((img) =>
  img.addEventListener("click", (e) => {
    let indexMedia = e.target.getAttribute("data-id");

    let containerMedia = document.querySelector(".lightbox-image");

    containerMedia.innerHTML = diaporamaPic[indexMedia].innerHTML;
  })
);

function slideNext() {
  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  console.log(diaporamaPic);
}
next.addEventListener("click", slideNext);

function slidePrev() {
  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  console.log(diaporamaPic);
}
prev.addEventListener("click", slidePrev);

*/
/*
const like = new URLSearchParams(window.location.search).get("likes");
const numberOfLikes = document.querySelector(".sort-popularite");



const getLikes = (media) => {
  return convertStringToHTML(
    media.likes
      .map((media) => {
        return `<span class="portfolio-likes">${media.likes} ❤</span>  `;
      })
      .join("")
  );
};

loadData()
  .then((data) => {
    if (like) {
      return data.media.sort((media) => media.likes.includes(like));
    }
    return data.media;
  });

numberOfLikes.addEventListener("click", getLikes);
*/
const numberOfLikes = ["likes"];
numberOfLikes.sort("likes");
console.log(numberOfLikes);

function sortLikes() {
  return numberOfLikes;
}
numberOfLikes.addEventListener("click", sortLikes);
