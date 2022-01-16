const grid = document.getElementById("grid");
const cardTemplate = document.getElementById("card-template");

Array(10)
  .fill((_, idx) => idx)
  .forEach((i) => {
    grid.append(cardTemplate.content.cloneNode(true));
  });
