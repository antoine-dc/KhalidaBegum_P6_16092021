//js todo liste

/* Page d'accueil
function to filter navigation bar tags*/

/* Page de photograph
-media with like button - addeventlistener on click 
-function to increment number of likes 
-function to create Total number of likes additioning number
of likes from all media for each photographer 
-filter to sort media by popularity or title
-onClick on media open in lightbox(modal) - click lightbox X to close
-eventlistener for navigation button and for navigation arrow
-button contact photographer
-contact form(modal)displays on top of everything else - names/email/message
-send email to photographer

*/

const fileUpload = async () => {
  const data = await fetch("./FishEyeData.json").then((response) =>
    response.json()
  );
  console.log(data);
  const displayPhotographer = (photographer) => {
    document.getElementById("main").textContent += photographer.name;
  };
  data.photographer.forEach(displayPhotographer);
};

/*

const createProfile = (photographer) => {
  const div = document.createElement("div");
  div.innerHTML = (
    <article>
      <img
        src="FishEye_Photos/Sample Photos/Photographers ID Photos/${photographer.portrait}"
        alt="Portrait de ${photographer.name}"
      />
      <h2>${photographer.name}</h2>
    </article>
  );

  const container = document.createDocumentFragment();
  Array.from(div.children).forEach((c) => {
    container.appendChild(c);
  });
  return container;
};*/

fileUpload();
console.log(any);
