/*sort
portfolio-pic likes = popularité largest number to smallest
portfolio-pic date = date - oldest to most recent
portfolio-pic title = media title

- let getLikes = searchparam
- let likes = numberOfLikes each media
- function sortLikes = sortLikes from most likes to least
- logLikes
- click popular to display in order of numberOfLikes*/

const byPopularity = [media.likes];
byPopularity.sort();
console.log(byPopularity);

const like = +new URLSearchParams(window.location.search).get("likes");

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

const sortPopularity = document.querySelector(".sort-popularity");
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

sortPopularity.addEventListener("click", getLikes);

const like = new URLSearchParams(window.location.search).get("likes");
const numberOfLikes = document.querySelector(".sort-popularity");

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

numberOfLikes.addEventListener("click", getLikes);

const numberOfLikes = ["2", "6", "8", "5"];
numberOfLikes.sort();
console.log(numberOfLikes);

function sortLikes() {
  return numberOfLikes;
}
numberOfLikes.addEventListener("click", sortLikes);

let numberOfLikes = ["media"];
let likes = 0;
const like = +new URLSearchParams(window.location.search).get("likes");
const getLikes = (media) => {
  return convertStringToHTML(
    media.likes
      .map((media) => {
        return `<span class="portfolio-likes">${media.likes} ❤</span>  `;
      })
      .join("")
  );
};
numberOfLikes.sort();
console.log(numberOfLikes);

const sortedLikes = numberOfLikes.sort(function (c1, c2) {
  if (c1.xxx > c2.xxx) {
    return 1;
  } else {
    return -1;
  }
});
