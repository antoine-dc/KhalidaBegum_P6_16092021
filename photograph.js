import {
  loadData,
  convertStringToHTML
} from "./common.js";

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
  const lightboxPics = document.querySelectorAll(".portfolio-pics a");

  /*
  lightboxPics.forEach((img) => img.addEventListener("click", (e) => {
    console.log(e.target)
  }));
*/
  lightboxPics.forEach((img) => img.addEventListener("click", (e) => {
    //launchLightbox(e);
    let indexMedia = e.target.getAttribute('data-id');
    /*console.log(indexMedia);
    console.log(lightboxPics[indexMedia])

    let mediaHTML = lightboxPics[indexMedia].innerHTML;

    console.log(mediaHTML);*/

    let containerMedia = document.querySelector('.lightbox-image');
    containerMedia.innerHTML = lightboxPics[indexMedia].innerHTML;


    lightboxBackground.style.display = "block";
  }));




  const closeBox = lightboxBackground.querySelector(".lightbox-close");

  closeBox.addEventListener("click", closeLightbox);


});

// Launch sort menu
const dropBtn = document.querySelectorAll(".close-menu");

dropBtn.forEach((btn) => btn.addEventListener("click", sortMenu));

const contentClose = document.querySelector(".dropbtn");
contentClose.addEventListener("click", closeMenu);


const lightboxImage = document.querySelectorAll(".portfolio-pics");
const next = document.querySelector("#nav-right");
const prev = document.querySelector("#nav-left");
const current = 0;

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

const links = document.querySelectorAll("portfolio-pics").forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    new links(e.currentTarget.getAttribute("src"));
  })
);

const closeBtn = modalBackground.querySelector(".close");

closeBtn.addEventListener("click", closeModal);


/* ************** FUNCTIONS ******************** */
function closeLightbox() {
  lightboxBackground.style.display = "none";
}

function launchLightbox(e) {
  console.log(e.target);
  //lightboxBackground.style.display = "block";
}

function launchModal() {
  modalBackground.style.display = "block";
}



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

const getVideo = (media, index) => {
  return `  
  <article class="portfolio-pics">
   <div>
   <a href="#">
     <video controls  data-id="${index}">
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
const getImage = (media, index) => {
  return `
    <article class="portfolio-pics">
      <div>
        <a href="#"><img 
          src="Sample Photos/${media.photographerId}/${media.image}"
          alt="${media.title}"
          data-id="${index}"
        /></a>
        <div class="portfolio-text">
        <span>${media.title}</span>
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
  return convertStringToHTML(medias.map((media, index) => getMedia(media, index)).join(""));
};



function sortMenu() {
  dropMenu.style.display = "block";
}



function closeMenu() {
  dropMenu.style.display = "none";
}



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