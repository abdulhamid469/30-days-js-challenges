let btnPopup = document.getElementById("btn-popup");
let popupModel = document.querySelector(".popup-section");
let btnClose = document.getElementById("btn-close");
btnPopup.addEventListener('click', () => {
    popupModel.style.display = "block"; 
});


btnClose.addEventListener('click', () => {
    popupModel.style.display = "none"; 
});