let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".header .search-form");

searchBtn.onclick = () => {
    searchBtn.classList.toggle("fa-times");
    searchForm.classList.toggle("active")
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("active");
}

let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".header .navbar");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
    searchBtn.classList.remove("fa-times");
    searchForm.classList.remove("active");
    

}

windows.onscroll = () =>{
    searchBtn.classList.remove("fa-times");
    searchForm.classList.remove("active");
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("active");
}