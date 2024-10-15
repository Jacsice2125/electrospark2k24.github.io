let burger = document.querySelector(".burger");
let links = document.querySelector(".nav-links");
let img = document.querySelector(".team-img");
let textArea = document.querySelector(".text-content");
let insize = document.querySelector(".event");
let eventType = document.querySelector(".tec-head");
let eventType1 = document.querySelector(".non-head");
let eventList = document.querySelector(".tec-list");
let eventList1 = document.querySelector(".non-list");
let eventClick = document.querySelector(".technical");
let eventClick1 = document.querySelector(".non-technical");
let cross = document.getElementById("cross");
let cross1 = document.querySelector("#cross-non");



burger.addEventListener('click', () => {
    links.classList.toggle("nav-show");
    textArea.classList.toggle("textarea");
    img.classList.toggle("img-opacity")
})

eventClick.addEventListener('click', () => {
    eventType.classList.add("remove-type");
    eventList.classList.add("add-list");
    insize.classList.add("max-event");
    console.log("Added")
})

eventClick1.addEventListener('click', () => {
    eventType1.classList.add("remove-type");
    eventList1.classList.add("add-list");
    insize.classList.add("max-event");

    console.log("Added")
})

cross.addEventListener('click', () => {
    event.stopPropagation();
    eventType.classList.remove("remove-type");
    eventList.classList.remove("add-list");
    insize.classList.remove("max-event");
    console.log("Removed")
})

cross1.addEventListener('click', () => {
    event.stopPropagation();
    eventList1.classList.remove("add-list");
    eventType1.classList.remove("remove-type");
    insize.classList.remove("max-event");
    console.log("Removed")
})


