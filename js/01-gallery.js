import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);
const placeElementRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
  </a>
</li>
`
  )
  .join("");

placeElementRef.innerHTML = galleryMarkup;

let instance = null;

placeElementRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const imageSource = event.target.dataset.source;
    instance = basicLightbox.create(
      `
      <img src="${imageSource}" width="800" height="600">
      `,
      {
        onShow: () => {
          window.addEventListener("keydown", handleKeyPress);
        },
        onClose: () => {
          window.removeEventListener("keydown", handleKeyPress);
        },
      }
    );
    instance.show();
  }
});

function handleKeyPress(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
