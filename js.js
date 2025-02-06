var car = document.getElementById('car');
var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');

var animation;
var position = 0;
var speed = 5;

function moveCar() {
    position += speed;
    if (position > window.innerWidth) {
        position = -365;
    }
    car.style.left = position + 'px';
}

function startMoving() {
    animation = setInterval(moveCar, 50);
}

function stopMoving() {
    clearInterval(animation);
}

startBtn.addEventListener('click', startMoving);
stopBtn.addEventListener('click', stopMoving);

function moveClouds() {
    document.querySelectorAll('.cloud').forEach((cloud, index) => {
        let cloudPos = parseInt(cloud.style.left) || Math.random() * window.innerWidth;
        cloudPos += 5;

        if (cloudPos > window.innerWidth) {
            cloudPos = -150;
        }

        cloud.style.left = cloudPos + 'px';

        // Встановлення нижчого рівня для хмар
        if (!cloud.style.top || parseInt(cloud.style.top) < 300) {
            cloud.style.top = `${300 + index * 50}px`; // Розподіляємо хмари по висоті
        }
    });
}

setInterval(moveClouds, 50);
