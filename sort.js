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

const byPopularity = document.querySelector(".sort-popularity");
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
const urllikes = +new URLSearchParams(location.search).get("likes");

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
const byPopularity = document.querySelector(".sort-popularity");
const byTitle = document.querySelector(".sort-title");
const byDate = document.querySelector(".sort-date");

byPopularity.addEventListener("click");
byTitle.addEventListener("click");
//byDate.addEventListener("click");

const like = +new URLSearchParams(location.search).get("likes");
const title = +new URLSearchParams(location.search).get("title");
const date = +new URLSearchParams(location.search).get("date");

const likes = { media: "likes" };

const likes = like;
const getTitle = {
  media: "title",
};

/*const getLikes = (media, likes) => {
  return `<span class="portfolio-likes">${media.likes} ❤</span>  `;
};*/

loadData().then((data) => {
  if (like) {
    return data.media.sort((media) => media.likes.includes(like));
  }
  return data.media;
});

const getLikes = (media, likes) => {
  if (media.likes) {
    return getLikes(media, likes);
  }
};
byPopularity.addEventListener("click", getLikes);

const getLikes = (media, likes) => {
  return `<span class="portfolio-likes">${media.likes} ❤</span>  `;
};
const byPopularity = document.querySelector(".sort-popularity");
byPopularity.addEventListener("click", () => {
  //1 - recover number of likes
  const like = +new URLSearchParams(location.search).get("likes");
  console.log(like);
  const likes = { media: "likes" };
  console.log(likes);
});
const likes = { media: "likes" };

for (key in title) console.log(title[key]);
const like = new URLSearchParams(location.search).get("likes");
loadData().then((data) => {
  if (like) {
    return data.medias.sort((media) => media.likes.includes(like));
  }
  return data.medias;
});
//let sortList=
const byPopularity = document.querySelector(".sort-popularity");
const like = +new URLSearchParams(window.location.search).get("likes");
const likes = { media: "likes" };

likes.sort(function (a, b) {
  return;
});

byPopularity.addEventListener("click", () => {
  //1 - recover number of likes
  const like = +new URLSearchParams(window.location.search).get("likes");
  const likes = { media: "likes" };
  likes.sort((a, b) => a - b);
  console.log(likes);
  if (likes) {
    return convertStringToHTML(
      like.likes
        .sort((likes) => {
          return `<span class="portfolio-likes">${media.likes} ❤</span>  `;
        })
        .join("")
    );
  }
  const titleList = [{ media: "title" }];

  let listTitleContainer = document.querySelector(".sort-title");
  let title = e.target.getAttribute(".title");

  listTitleContainer.innerHTML = titleList[title].innerHTML;

  const getLikes = (media) => {
    return convertStringToHTML(
      media.likes
        .map((likes) => {
          return `<span class="portfolio-likes">${media.likes} ❤</span>  `;
        })
        .join("")
    );
  };
});
//console.log(likes);

const date = [{ media: "date" }];
date.sort(function (a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});

const byDate = document.querySelector(".sort-date");
byDate.addEventListener("click", sort);
const date = [{ date: "date" }];
date.sort(function (a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});
console.log(date);

const date = [{ media: "date" }];
const sortByDate = (date) => {
  const sorter = (a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  };
  date.sort(sorter);
};
sortByDate(date);
console.log(date);

const byTitle = document.querySelector(".sort-title");

let listTitleContainer = document.querySelector(".sort-title");
const title = "$.title";

const titleList = title.length;

const titleSort = function sortByTitle(a, b) {
  if (a > b) return 1;
  if (b > a) return -1;

  return length;
  listTitleContainer.innerHTML = titleSort[title].innerHTML;
};
byTitle.addEventListener("click", titleSort);
title.sort(titleSort);
console.log(titleList);

byTitle.addEventListener("click", () => {
  // console.log(title);
});

const title = [{ media: "title" }];
console.log(title);

const sortList = [{ media: "likes", media: "title", media: "date" }];
const listLikes = { media: "likes".length };
console.log(listLikes);
const sortList = [{ media: "likes", media: "title", media: "date" }];
const likes = +new URLSearchParams(window.location.search).get("likes");
const listLikes = [{ media: "likes" }];
console.log(listLikes);

var array = [
  {
    media: "title",
    media: "likes",
    media: "date",
  },
];

function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}
array.sort(GetSortOrder("title"));
const likes = +new URLSearchParams(location.search).get("likes");
console.log(likes);
const sortLikes = { media: "likes" };
function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}
const getLikes = (media) => {
  return convertStringToHTML(
    media.likes
      .map((media) => {
        return `<span id="portfolio-likes">${media.likes} ❤</span>  `;
      })
      .join("")
  );
};
<div class="like">
  $
  {media.likes
    .map(
      (like) =>
        `<span> <a href="index.html?like=${media.likes}">#${like}</a></span> `
    )
    .join("")}
</div>;
const like = new URLSearchParams(window.location.search).get("like");
const likes = document.getElementById("portfolio-likes");
sortLikes.sort(GetSortOrder("likes"));
console.log(sortLikes);
<span class="title">${media.title}</span>
const title = ["a", "c", "b", "e", "d"];
const sortedTitle = title.sort();
console.log(sortedTitle);

const getLike = (media) => {
  return `<span class="portfolio-likes">${media.likes} ❤</span>  `;
};
<ul class="like">
  $
  {photographer.likes
    .map(
      (like) =>
        `<span> <li><a href="index.html?like=${media.likes}">#${media.likes}</a></li></span> `
    )
    .join("")}
</ul>;



const getTags = (photographer) => {
  return convertStringToHTML(
    photographer.tags
      .map((tag) => {
        return `<span> <li><a href="#">#${tag}</a></li></span> `;
      })
      .join("")
  );
};
const getLikes = (media) => {
  return convertStringToHTML(
    media.likes
      .map((likes) => {
        return `<span> <a href="index.html?like=${media.likes}">#${like}</a></span> `;
      })
      .join("")
  );
};

const likes = new URLSearchParams(window.location.search).get("likes");
loadData()
  .then((data) => {
    if (likes) {
      return data.media.filter((likes) =>
        photographer.likes.includes(like)
      );
    }
    return data.photographers;
  });
  