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

//create profile into new div and contain each profile in fragments (container)
const createProfile = (photographer) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <article>
      <img
        src="Sample Photos/Photographers ID Photos/${photographer.portrait}"
        alt="Portrait de ${photographer.name}"
      />
      <h2>${photographer.name}</h2>
    </article>
  `;

  const container = document.createDocumentFragment();
  Array.from(div.children).forEach((child) => {
    container.appendChild(child);
  });
  return container;
};

//display photographer profile

const displayProfile = (photographer) => {
  document.getElementById("main").appendChild(createProfile(photographer));
};

//upload json file

const fileUpload = async () => {
  const data = await fetch("./FishEyeData.json").then((response) =>
    response.json()
  );
  console.log(data);

  data.photographers.forEach(displayProfile);
};

fileUpload();
