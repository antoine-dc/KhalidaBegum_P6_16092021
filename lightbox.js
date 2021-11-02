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
/*
const loadImage = document.querySelectorAll(".portfolio-pics");
 const container = this.element.querySelector('.lightbox-container');
  container.innerHTML =''
  this.url=url;
  container.appendChild(loadImage);
  image.src = url;

prev.addEventListener("click", function () {
  if (current === 0) {
    current = links.length;
  }
  slideLeft();
});

next.addEventListener("click", function () {
  if (current === links.length - 1) {
    current = -1;
  }
  slideRight();
});
*/
/*
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


*/