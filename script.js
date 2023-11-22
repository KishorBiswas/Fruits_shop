
// select active link
let menuLink = document.querySelectorAll(".link");

menuLink.forEach((links) => {
  links.addEventListener("click", (event) => {
    
    menuLink.forEach((link) => {
      link.classList.remove("active");
    })
    links.classList.add("active");
  })
})



// Search bar show and hide here
let searchBox = document.querySelector(".search_Box");
let close_search = document.querySelector(".close_search");
let searchIcon = document.querySelector(".search");

searchIcon.addEventListener('click', () => {
  searchBox.classList.toggle("hide");
  close_search.classList.toggle("hide");

  if(searchIcon.classList.contains("fa-magnifying-glass")){
    searchIcon.classList.replace("fa-magnifying-glass", "fa-xmark");
  }else{
    searchIcon.classList.replace("fa-xmark" , "fa-magnifying-glass");
  }
  


});


// Menu show when come Mobile View
let menuIcon = document.querySelector(".menu_icon").childNodes[0];
let menuBar = document.querySelector(".menu_Bar");
let closeMenu = document.querySelector(".fa-xmark");


menuIcon.addEventListener("click", () => {
  menuBar.classList.add("menu_In");

  setTimeout(() => {
    menuIcon.style.cursor = "not-allowed";
    menuIcon.style.transform = "scale(1)";
    menuIcon.style.opacity = "0.5";
    
  }, 500);
  
});
closeMenu.addEventListener("click", () => {
  menuBar.classList.remove("menu_In");
  menuIcon.style.cursor = "pointer";

    menuIcon.style.cursor = "pointer";
    menuIcon.style.transform = "scale(1.1)";
    menuIcon.style.opacity = "1";
});




// Hide menu sidebar whene click outside of the sidebar
document.addEventListener("click", (event) => {
  let inSideMenuBarclick = menuBar.contains(event.target);
  let menuIconClick = menuIcon.contains(event.target);

  if(!inSideMenuBarclick && !menuIconClick){
    menuBar.classList.remove("menu_In");

    menuIcon.style.cursor = "pointer";
    menuIcon.style.transform = "scale(1.1)";
    menuIcon.style.opacity = "1";
  }
  
});




