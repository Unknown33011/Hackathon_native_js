document.addEventListener("DOMContentLoaded", function () {
    const catalogButton = document.getElementById("catalogButton");
    const catalogList = document.getElementById("navbar-brand-list");

    catalogButton.addEventListener("click", function () {
        if (catalogList.style.display === "none" || catalogList.style.display === "") {
            catalogList.style.display = "block";
        } else {
            catalogList.style.display = "none";
        }
    });
});
