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
  galleryImage.setAttribute("data-source", item.original);
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
};

const galleryFragment = document.createDocumentFragment();

galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryFragment.appendChild(galleryItem);
});

placeElementRef.appendChild(galleryFragment);

let instance = null;

placeElementRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const imageSource = event.target.dataset.source;
    instance = basicLightbox.create(`
      <img src="${imageSource}" width="800" height="600">
    `);
    instance.show();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    instance.close();
  }
});
