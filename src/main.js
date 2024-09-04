const carousel = document.querySelector(".carrousel");
const arrowBtns = document.querySelectorAll(".wrapper .toggle-icon");
const firsCardWidth = document.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children]

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firsCardWidth : firsCardWidth;
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging")
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft
}
const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

let dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging")
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);