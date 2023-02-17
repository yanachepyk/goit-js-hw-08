import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryCards = creatGalleryCards();

galleryContainer.innerHTML = galleryCards;
new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

function creatGalleryCards() {
  return galleryItems
    .map(
      item =>
        ` <a class="gallery__item" href="${item.original}">
        <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
        />
        </a>`
    )
    .join('');
}
