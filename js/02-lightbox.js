import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const placeElementRef = document.querySelector(".gallery");

const createGalleryItem = (item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem.outerHTML;
};

const galleryMarkup = galleryItems.map(createGalleryItem).join("");

placeElementRef.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
