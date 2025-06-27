const dashboardOpening = document.querySelector(".fa-bars");
const dashboardClosing = document.querySelector(".fa-xmark");
const sideBar = document.querySelector(".sidebar");

dashboardOpening.addEventListener("click", () => {

    if (!sideBar.classList.contains("active")) 
        sideBar.classList.add("active");

});

dashboardClosing.addEventListener("click", () => {
    sideBar.classList.remove("active");
});

