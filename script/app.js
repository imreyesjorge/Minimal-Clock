const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let a, b, c;

function getCurrentDate() {
    let date = new Date();

    a = date.getHours();
    b = date.getMinutes();
    c = date.getSeconds();

    if(a < 10) {
        a = '0' + a;
    }

    if(b < 10) {
        b = '0' + b;
    }

    if(c < 10) {
        c = '0' + c;
    }

    today.innerHTML = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    hour.innerHTML = `${a}:${b}:${c}`;
}

getCurrentDate();
setInterval(getCurrentDate, 1000);