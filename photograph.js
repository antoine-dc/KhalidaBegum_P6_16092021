/*
const getPhotographerId = () => {
  return +new URLSearchParams(location.search).get("photographerId");
};

const getImage = (media) => {
  return convertStringToHtml(
    `<img src="./Sample Photos/Mimi/${getPhotographerId()}/${
      media.image
    }"/>`
  );
};

const getPhotographerMedias = (medias) => {
  return medias.filter((media) => {
    return media.photographerId === getPhotographerId() && !media.video;
  });
};

loadData().then((data) => {
  getPhotographerMedias(data.media).forEach((image) => {
    document.getElementById("main").appendChild(getImage(image));
  });
});

const convertStringToHtml=(innerHTML)=>{
    const div =document.createElement("div");
    div.innerHTML=innerHTML;

    const container = document.createDocumentFragment();
    Array.from(div.children).forEach((child) =>{
        container.appendChild(child);
    });
    return container;
};

  const loadData = async()=>{
     return await fetch("./data.json").then((response)=>response.json());
 };
 */

/*
const photographerProfile = () => {
  const div = document.createElement("div");
  div.innerHTML = `
      <article>
        <div class="photographer-profile">
          
            <img
              src="Sample Photos/Mimi/${photographer.portrait}"
              alt=" Photo de ${photographer.name}"
            />
            <h1>${photographer.name}</h1>
         
          <div class="profile-text">
            <span>${photographer.city}, ${photographer.country}</span>
            <p>${photographer.tagline}</p>
            <span>${photographer.price}€/jour</span>
          </div>
  
          <ul class="profile-tags">${photographer.tags
            .map(
              (tag) =>
                `<span> <li><a href="index.html?tag=${tag}">#${tag}</a></li></span> `
            )
            .join("")}
         
          </ul>
        </div>
      </article>
    `;

  const container = document.createDocumentFragment();
  Array.from(div.children).forEach((child) => {
    container.appendChild(child);
  });
  return container;
};*/
//import { convertStringToHTML,loadData } from "./common.js";

const getPhotographerId = () => {
  return +new URLSearchParams(location.search).get("photographerId");
};

const photographerProfile = () => {
  const div = document.createElement("div");
  div.innerHTML = `
        <article>

        <div id="243" class="photographer-profile">
          <div class="profile-text">
         
            <h1>${photographer.name}</h1>
           

            <span>${photographer.city}, ${photographer.country}</span>
            <p>${photographer.tagline}</p>
            <span>${photographer.price}€/jour</span>
          </div>
          <span class="profile-pic">
          
          <img
          src="Sample Photos/Photographers ID Photos/${photographer.portrait}"
          alt=" Photo de ${photographer.name}"
        />
          </span>
        

        <ul class="profile-tags">${photographer.tags
          .map(
            (tag) =>
              `<span> <li><a href="index.html?tag=${tag}">#${tag}</a></li></span> `
          )
          .join("")}
         
        </ul> 
    </article>
    </div>`;
};

const displayPhotographerProfile = () => {
  document.getElementById("243").appendChild(photographerProfile());
};

const loadData = async () => {
  return await fetch("./FishEyeData.json").then((response) => response.json());
};

const getImage = (media) => {
  return convertStringToHtml(
    `<img src="./Sample Photos/Mimi/${getPhotographerId()}/${media.image}"/>`
  );
};

const getPhotographerMedias = (medias) => {
  return medias.filter((media) => {
    return media.photographerId === getPhotographerId() && !media.video;
  });
};

loadData().then((data) => {
  getPhotographerMedias(data.media).forEach((image) => {
    document.getElementById("portfolio").appendChild(getImage(image));
  });
});
