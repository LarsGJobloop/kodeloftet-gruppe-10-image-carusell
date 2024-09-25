// Hvilket bilde er vi på nå
let currentImage = 0;

// Elementene vi trenger fra HTML
let allImages = document.querySelectorAll(".carusell img");

function showImage(imageIndex) {}

function moveImage(offset) {
  // Regn ut hvilket bilde som blir neste
  let newIndex = currentImage + offset;
  let totalImages = allImages.length - 1;

  // Sørge for at neste bilde nummer er et
  // bilde vi har
  if (newIndex < 0) {
    // Viss vi prøver å gå under null
    // gå til siste bildet
    currentImage = totalImages;
  } else if (newIndex > totalImages) {
    // Viss vi prøver å gå til over antall bilder vi har
    // gå til start bildet
    currentImage = 0;
  } else {
    // Viss vi vi har bildet
    // gå til bildet
    currentImage = newIndex;
  }

  // For hvert bilde element kjør denne blokken med kode
  allImages.forEach((image, index) => {
    if (index === currentImage) {
      // Legg til "current-image" på det nye bilde
      image.className = "current-image";
    } else {
      // Fjern "current-image" klassen fra nåværende bilde
      image.className = "";
    }
  });
}

// Hent ut alle knappen vi trenger
let previousButton = document.querySelector("#previous-button");
let nextButton = document.querySelector("#next-button");

// Legg til funksonene (hendelses lytter) som skal kjøre
previousButton.addEventListener("click", () => {
  moveImage(-1);
});
nextButton.addEventListener("click", () => {
  moveImage(1);
});
