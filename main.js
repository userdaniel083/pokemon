
let flare = new Charmander("Flare", 10);
let splash = new Squirtle("Splash", 8);
let leafy = new Bulbasaur("Leafy", 9);


const originalLog = console.log;
console.log = function(message) {
    const output = document.getElementById('output');
    output.innerHTML += message + '<br>';
    originalLog.apply(console, arguments);
};


window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#charmander .info').textContent = `Level ${flare.level} ${flare.type}-type`;
    document.querySelector('#squirtle .info').textContent = `Level ${splash.level} ${splash.type}-type`;
    document.querySelector('#bulbasaur .info').textContent = `Level ${leafy.level} ${leafy.type}-type`;
});