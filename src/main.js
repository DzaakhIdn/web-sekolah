const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carrousel");
const arrowBtns = document.querySelectorAll(".wrapper .toggle-icon");
const firsCardWidth = document.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children]

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firsCardWidth)

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
})
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

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

const autoPlay = () => {
    timeoutId = setTimeout(() => carousel.scrollLeft += firsCardWidth, 2500)
}
autoPlay();

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0){
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.add("no-transition")
    }else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.offsetWidth
        carousel.classList.add("no-transition")
    }

    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);