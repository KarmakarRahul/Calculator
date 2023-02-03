
let display = document.getElementById('screen');

const show = (n) => {
    display.value += n;
}

const calc = () => {
    try{
    display.value = eval(display.value);
    }

    catch(err) {
        alert("inavlid input");
    }
}

function clr() {
    display.value = "";
}

function del() {
    display.value = display.value.slice(0,-1);
}