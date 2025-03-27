function oneToHundred() {
    let num = parseInt(Math.random() * 100 + 1);
    console.log(num);
}

let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    oneToHundred();
});
