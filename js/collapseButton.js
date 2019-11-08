let subBtn = document.getElementById("btn");
console.log(subBtn);

subBtn.addEventListener("click", function(event) {
    let content = document.querySelector(".contact-section");
    if (content.style.display === "flex") {
        content.style.display = "none";
    } else {
        content.style.display = "flex";
    }
});