import { loadData, convertStringToHTML } from "./common.js";

//DOM elements
const modalBackground = document.querySelector(".background");
const modalBtn = document.querySelectorAll(".btn-contact");
const lightboxBackground = document.querySelector(".lightbox");
const next = document.querySelector("#nav-right");
const prev = document.querySelector("#nav-left");
let containerMedia = document.querySelector(".lightbox-image");
const closeBox = lightboxBackground.querySelector(".lightbox-close");
closeBox.addEventListener("click", closeLightbox);
const urlPhotographerId = +new URLSearchParams(location.search).get(
  "photographerId"
);
// Launch sort menu
const dropBtn = document.querySelectorAll(".close-menu");

const contentClose = document.querySelector(".dropbtn");
contentClose.addEventListener("click", closeMenu);

const closeBtn = modalBackground.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

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
        return `<span> <li><a href="index.html?tag=${tag}">#${tag}</a></li></span> `;
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
<a href="photograph.html?title=${media.title}"> <span class="titles">${media.title}</span></a>
<a href="photograph.html?likes=${media.likes}"> <span class="portfolio-likes">${media.likes} ❤</span> </a> 
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
       <a href="photograph.html?title=${media.title}"> <span class="titles">${media.title}</span></a>
       <a href="photograph.html?likes=${media.likes}"> <span class="portfolio-likes">${media.likes} ❤</span> </a>  
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

// Launch Modal

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
  let count = 0;
  //console.log(lightboxPics);
  lightboxPics.forEach((img) =>
    img.addEventListener("click", (e) => {
      count = e.target.getAttribute("data-id");

      let containerMedia = document.querySelector(".lightbox-image");

      containerMedia.innerHTML = lightboxPics[count].innerHTML;

      lightboxBackground.style.display = "block";
    })
  );

  next.addEventListener("click", () => {
    count = parseInt(count) + 1;

    console.log(count);
    if (count > lightboxPics.length - 1) {
      count = 0;
    }
    containerMedia.innerHTML = lightboxPics[count].innerHTML;
  });

  prev.addEventListener("click", () => {
    count = parseInt(count) - 1;
    console.log(count);
    if (count < 0) {
      count = lightboxPics.length - 1;
    }

    containerMedia.innerHTML = lightboxPics[count].innerHTML;
  });
});

// Functions
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

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
dropBtn.forEach((btn) => btn.addEventListener("click", sortMenu));

//sort

const urlLikes = +new URLSearchParams(location.search).get("likes");
const byPopularity = document.querySelector(".sort-popularity");
const numberOfLikes = [urlLikes];
numberOfLikes.sort();
console.log(numberOfLikes);
byPopularity.addEventListener("click", numberOfLikes);

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);
