$(document).ready(function (){
let search = document.querySelector('.search-box');
let searchIcon = document.getElementById('search-icon');
searchIcon.onclick = () => {
    search.classList.toggle('active');
}

$(".menu-bar").click(function(){
    $(".menu-bar").toggleClass("active");
    $(".navbar").toggle(200)
})

}) 