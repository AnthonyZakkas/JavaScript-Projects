const canvas = document.createElement('canvas');
const c = canvas.getContext('2d')
document.body.append(canvas);

let x = 0;


function update() {
    move();
    window.requestAnimationFrame(update, 1000);
}

window.requestAnimationFrame(update);


function move() {
    document.addEventListener("keypress", e => {
        if ( 'd' === e.key) {
            c.clearRect(x, 11, 150, 200);
            x += 10;
            c.fillRect(x, 11, 150, 200);
            console.log(x)
        }
        if ( 'a' === e.key) {
            c.clearRect(x, 11, 150, 200);
            x = 1;
            c.fillRect(x, 11, 150, 200);
            x = 0;
        }
    })
}



/*

let xx = 0;
let yy = 0;
function update() {
    movement();
    document.addEventListener("keypress", e => {
        if (e.keyCode == 87) {
            xx += 50;
        }
        if (e.keyCode == 83) {
            xx -= 50;
        }
    })
    console.log()
    window.requestAnimationFrame(update);
}

function movement() {
    canvas.addEventListener("keypress", e => {
        if (e.keyCode == 87) {
            xx += 50;
        }
        if (e.keyCode == 83) {
            xx -= 50;
        }
    })
    fill(xx, yy);
}

function fill(x, y) {
    c.fillRect(x, y, 150, 250);
    console.log()
}
window.requestAnimationFrame(update);*/