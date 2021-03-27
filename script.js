const button = document.querySelector('#myCheckbox');
const items = document.querySelector('#container');
const myName = document.querySelector('.myName');
items.style.display = "none";
button.addEventListener('click', () => {
    if (button.checked === true) {
        App();
        items.style.display = "block";
        myName.classList.remove('myName');
        myName.classList.add('myNameColor');
    } else {
        items.style.display = "none";
        myName.classList.remove('myNameColor');
        myName.classList.add('myName');
    }
})

function App() {
    const circle = document.getElementById('circle');
    const square = document.getElementById('square');
    const triangle = document.getElementById('triangle');
    const pentagon = document.getElementById('pentagon');

    function animate(elem, startX, startY, bounce, duration) {
        let posStartX;
        if (startX === 'left') {
            posStartX = 0;
        } else {
            posStartX = 100;
        }
        let posX = startX;
        let keyframes = [];
        for (let i = 1; i <= bounce; i++) {
            let translateX;
            let translateY;
            if (i === 1 || i === bounce) {
                translateX = startX === 'right' ? `translateX(${posStartX}vw) translateX(-180px)` : `translateX(${posStartX}vw)`;
                translateY = `translateY(${startY}px)`;
            } else {
                translateX = posX === 'right' ? `translateX(100vw) translateX(-180px)` : `translateX(0vw)`;
                translateY = `translateY(${['-', ''][Math.floor(Math.random() * 2)]}${Math.floor(Math.random() * 500)}px)`;
            }
            let transform = `${translateX} ${translateY}`;
            keyframes.push({transform: transform});

            posX = posX === 'right' ? 'left' : 'right';
        }
        const options = {
            duration: duration,
            iterations: Infinity
        };
        elem.animate(keyframes, options);
    };
    // animate!
    animate(circle, 'left', -12, 5, 36000);
    animate(square, 'left', -60, 7, 37000);
    animate(triangle, 'right', -27, 5, 38000);
    animate(pentagon, 'right', -99, 7, 39000);
}




