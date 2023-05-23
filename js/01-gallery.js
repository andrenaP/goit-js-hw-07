import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const ULgallery = document.querySelector(".gallery");
ULgallery.innerHTML = CreateImageCardsMarkup(galleryItems);
function CreateImageCardsMarkup(Items) {
    return Items
        .map(({ preview, original, description }) => {
            return `
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
        })
        .join('');
}
ULgallery.addEventListener('click', onClick)
function onClick(event) {
    event.preventDefault()
    if (event.target.nodeName != 'IMG')
        return;
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    instance.show();
}