import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const imagesMarcap = createGallerysMarkap(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarcap);

galleryContainer.addEventListener('click', onContainerClick);

function createGallerysMarkap (galleryItems){
  return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
            </div>`;
  }).join(' ');
}

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: () => {
    window.addEventListener('keydown', keydownEscape);
  },
  onClose: () => {
    window.removeEventListener('keydown', keydownEscape);
  },
});

function keydownEscape(event) {
  console.log(event);
  if (event.key === 'Escape') {
    instance.close();
    return;
  }
}

function onContainerClick(event) {
  event.preventDefault();
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
}