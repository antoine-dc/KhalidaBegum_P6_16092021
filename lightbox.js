/* sort
portfolio-pic likes = popularité largest number to smallest
portfolio-pic date = date - oldest to most recent
portfolio-pic title = media title

lightbox
-recover portfolio/portfolio-pics

lightbox arrows
const next = document.getElementById("#nav-right");
const prev = document.getElementById("#nav-left");
let count = 0;
*/
const lightboxDiaporama = document.querySelectorAll(".lightbox-image");
const nbSlide = lightboxDiaporama.length;
const next = document.getElementById("#nav-right");
const prev = document.getElementById("#nav-left");
let count = 0;

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

const byPopularity = [media.likes];
byPopularity.sort();
console.log(byPopularity);

const like = new URLSearchParams(window.location.search).get("likes");

const getLikes = (media) => {
  return convertStringToHTML(
    media.likes
      .map((media) => {
        return `<span class="portfolio-likes">${media.likes} ❤</span>  `;
      })
      .join("")
  );
};

loadData().then((data) => {
  if (like) {
    return data.media.sort((media) => media.likes.includes(like));
  }
  return data.media;
});

const byTitle = document.querySelector(".title");
const urltagline = +new URLSearchParams(location.search).get("tagline");

const sortList = ["likes", "title", "date"];
const numberOfLikes = ["likes"];
function sortLikes(a, b) {
  if (a.likes > b.likes) {
    return 1;
  } else if (b.likes > a.likes) {
    return -1;
  } else {
    return 0;
  }
}

function byLikes(a, b) {
  if (a.likes > b.likes) {
    return 1;
  } else if (b.likes > a.likes) {
    return -1;
  } else {
    return 0;
  }
}

function byDate() {
  return new Date(a.date).valueOf() - new Date(b.date).valueOf();
}

const numberOfLikes = [
  {
    media: likes,
  },
];

//

const sortPopularity = ["likes"];
sortPopularity.sort("likes");
console.log(sortPopularity);

const like = new URLSearchParams(window.location.search).get("likes");
loadData().then((data) => {
  if (like) {
    return data.media.sort((media) => media.likes.includes(like));
  }
  return data.media;
});

const getLikes = (media) => {
  return convertStringToHTML(
    media.likes
      .map((media) => {
        return `<span class="portfolio-likes">${media.likes} ❤</span>  `;
      })
      .join("")
  );
};

function displayLikes(media, likes) {
  return sortPopularity;
}

sortPopularity.addEventListener("click");

/*
- let getLikes = searchparam
- let likes = numberOfLikes each media
- function sortLikes = sortLikes from most likes to least
- logLikes
- click popular to display in order of numberOfLikes

 */
