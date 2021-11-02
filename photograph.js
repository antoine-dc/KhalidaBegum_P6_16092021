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
const dropBtn = document.querySelectorAll(".close-menu");

dropBtn.forEach((btn) => btn.addEventListener("click", sortMenu));

function sortMenu() {
  dropMenu.style.display = "block";
}

const contentClose = document.querySelector(".dropbtn");
contentClose.addEventListener("click", closeMenu);

function closeMenu() {
  dropMenu.style.display = "none";
}

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
