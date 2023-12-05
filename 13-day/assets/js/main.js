let numberBtn = document.getElementById("btn-number");
numberBtn.addEventListener('click', () => {
    let randonNumber = Math.random() * 100;
    let resultNumber = document.querySelector("#number span");
    for(let i = 0; i <= randonNumber; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            resultNumber.innerHTML = "FizzBizz";
        } else if (i % 3 == 0 ) {
            resultNumber.innerHTML = "Fizz";
        } else if (i % 5 == 0 ) {
            resultNumber.innerHTML = "Buzz";
        } else {
            resultNumber.innerHTML = randonNumber.toFixed();
        }
    }
});