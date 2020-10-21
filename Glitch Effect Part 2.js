var text = document.getElementById('text');
var glitchContainer = document.getElementById('glitch');

for (let i = 0; i < 40 ; i++) {
    let glitchBox = document.createElement('div');
    glitchBox.classList.add('box');
    glitchContainer.appendChild(glitchBox);
}

let glitch = document.getElementsByClassName('box');
setInterval(() => {
    for (let i = 0; i < glitch.length; i++) {
        glitch[i].style.left = Math.floor(Math.random() * 650) + 'px';
        glitch[i].style.top = Math.floor(Math.random() * 75) + 'px';
        glitch[i].style.width = Math.floor(Math.random() * 30) + 'px';
        glitch[i].style.height = Math.floor(Math.random() * 30) + 'px';
    }
}, 100);


setInterval(() => {
    function randomShadow() {
        return (Math.random() * 30) - 15;
    }
    text.style.textShadow = randomShadow() + 'px 0 0 red, '+randomShadow()+'px 0 0 blue';
}, 10);