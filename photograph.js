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
      let count = e.target.getAttribute("data-id");

      let containerMedia = document.querySelector(".lightbox-image");

      containerMedia.innerHTML = lightboxPics[count].innerHTML;

      lightboxBackground.style.display = "block";
    })
  );

  const closeBox = lightboxBackground.querySelector(".lightbox-close");

  closeBox.addEventListener("click", closeLightbox);

  const next = document.querySelector("#nav-right");
  const prev = document.querySelector("#nav-left");

  //const nbSlide = Array.from(lightboxPics);
  //const slide = lightboxPics.length;

  let count = 0; //current
  let newCount = count;
  //let countPlus = parseInt()+1;
  //let countMinus = count --;
  let containerMedia = document.querySelector(".lightbox-image");

  next.addEventListener("click", () => {
    // newCount =(e.target.getAttribute("data-id")) +1;

    //newCount ++;
    //1 - recover count index

    //  fin du diaporama, on "rembobine"
    newCount = parseInt(newCount) + 1;
    //console.log(count);
    //2 - add 1 to count

    //newCount = parseInt(next.getAttribute("data-id"))+1;
    console.log(newCount);
    containerMedia.innerHTML = lightboxPics[newCount].innerHTML;
  });

  prev.addEventListener("click", () => {
    // Si on dépasse le début du diaporama, on repart à la fin

    //1 - recover count index
    //console.log(count);
    //2 - subtract 1 from count
    newCount = parseInt(newCount) - 1;
    console.log(newCount);

    containerMedia.innerHTML = lightboxPics[newCount].innerHTML;
  });

  // sort
  const byTitle = document.querySelector(".sort-title");
  const title = new URLSearchParams(location.search).get("title");
  const getTitle = (media) => {
    return convertStringToHTML(
      media.title
        .map((media) => {
          return ` <span class="title">${media.title}</span>`;
        })
        .join("")
    );
  };
 

  //const like = new URLSearchParams(window.location.search).get("likes");
  loadData().then((data) => {
    if (title) {
      return data.media.filter((title) => media.title.includes(title));
    }
    return data.media;
  });
  byTitle.addEventListener("click", getTitle);
  console.log(getTitle);
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

//const like = new URLSearchParams(getLikes);

//byPopularity.addEventListener("click", sortedLikes);
//console.log(like);

//const getLikes = +new URLSearchParams(location.search).value('likes');
//const titles = new URLSearchParams(window.location.search).sort(['title']);
//const titles = new URLSearchParams(window.location.search).get("title");
//const title = "$.title";
/*const titles = ["a", "c", "b", "e", "d"];
const sortedTitles = titles.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

byTitle.addEventListener("click", sortedTitles);

console.log(sortedTitles);
*/
