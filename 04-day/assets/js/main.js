let toggleCheckbox = document.getElementById("toggle-check-box");
let darkColor = document.querySelectorAll(".dark-color");

const changeUpdateColor = () => {
    darkColor.forEach( e => {
        if(toggleCheckbox.checked) {
            // e.style.color = "#fff";
            e.style.backgroundColor = "#232D3F";
        } else {
            e.style.backgroundColor = "#000";
        }
    });
}

toggleCheckbox.addEventListener("change", changeUpdateColor);
changeUpdateColor();