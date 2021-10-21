import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const imagesMarcap = createGallerysMarkap(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesMarcap);

galleryContainer.addEventListener('click', onContainerClick);

function createGallerysMarkap (galleryItems){
  return galleryItems.map(({preview, original, description}) => {
    return ` 
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
    </a>
  </div>
  `;
  }).join(' ');
}


function onContainerClick(event) {
   event.preventDefault();
  if(event.target.nodeName !== 'IMG'){
    return
  }

  const instance = basicLightbox.create(`<img width="1200" height="900" src="${event.target.dataset.source}" alt="${event.target.alt}">`)

instance.show()



window.addEventListener("keydown", EscClick);

function EscClick(event) {
    if(event.key === 'Escape') {
      instance.close();
      console.log(event.code);
      window.removeEventListener("keydown", EscClick);
    }
  }
}
