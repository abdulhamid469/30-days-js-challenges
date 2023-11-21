const clock = () => {
    const date = new Date();
    let hours = document.getElementById("hours");
    let mins = document.getElementById("mins");
    let seconds = document.getElementById("seconds");

    hours.innerHTML = date.getHours();
    mins.innerHTML = ('0' + date.getMinutes()).slice(-2);
    seconds.innerHTML = ('0' + date.getSeconds()).slice(-2);
}
setInterval(() => {
    clock();
} , 1000);
