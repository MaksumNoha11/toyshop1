
    var car = document.getElementById('car');
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var nightModeBtn = document.getElementById('nightModeBtn');
    var headlight = document.getElementById('headlight');
    var sun = document.getElementById('sun');
    var animation;
    var position = 0;
    var speed = 30;
    var isMoving = false;
    var nightMode = false;

    function moveCar() {
        position += speed;
        if (position > window.innerWidth) {
            position = -365;
        }
        car.style.left = position + 'px';
        car.style.transform = `translateY(${Math.sin(position / 50) * 5}px)`;
    }

    function stopMoving() {
        clearInterval(animation);
        isMoving = false;
    }

    function startMoving() {
        speed += 2;
        if (!isMoving) {
            animation = setInterval(moveCar, 50);
            isMoving = true;
        }
    }

    startBtn.addEventListener('click', () => {
        startMoving();
    });

    stopBtn.addEventListener('click', () => {
        stopMoving();
    });

    nightModeBtn.addEventListener('click', () => {
        nightMode = !nightMode;
        document.body.style.background = nightMode ? '#1a1a2e' : '#3ea1cb';
        sun.style.top = nightMode ? '500px' : '50px';

        if (nightMode) {
            headlight.setAttribute('fill', 'yellow'); // Включаємо фари в нічному режимі
            document.body.classList.add('night-mode');
            document.body.classList.remove('day-mode');
        } else {
            headlight.setAttribute('fill', 'gold'); // Вимикаємо фари при денному режимі
            document.body.classList.remove('night-mode');
            document.body.classList.add('day-mode');
        }
    });

