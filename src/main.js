let hamburger = document.getElementById('hamburger')
let nav = document.getElementById('nav')
let toggle = document.querySelector(".toggle")

toggle.addEventListener("click", function(){
    console.log('jalan');
    nav.classList.add("h-[20rem]")
    nav.classList.remove("h-[0rem]")
})