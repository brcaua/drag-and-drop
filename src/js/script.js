// Help
function log(message) {
  console.log(">" + message);
}
// App
const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstart() {
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
  this.classList.add("dragging");
}
function drag() {}
function dragend() {
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  this.classList.remove("dragging");
}

// Dropzone's functions
dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

function dragenter() {}
function dragover() {
  this.classList.add("over-dropzone");
  const beingDragging = document.querySelector(".dragging");
  this.appendChild(beingDragging);
}
function dragleave() {
  this.classList.remove("over-dropzone");
}
function drop() {
  this.classList.remove("over-dropzone");
}
