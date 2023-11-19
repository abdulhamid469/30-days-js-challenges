const btnChangeColor = document.querySelector("#btn-change-color");
const body = document.querySelector("body");

const changeBackgroundColor = () => {

    // Color Have RGB(255, 255, 255)
    const customString = "0123456789ABCDEF";
    let customHash = "#"

    // Random Color Generation
    for (let i = 0; i < 6; i++) {
        const num = Math.round(Math.random() * 16);
        customHash += customString[num];   
    };
    
    body.style.backgroundColor = customHash;
}

btnChangeColor.addEventListener("click", changeBackgroundColor);