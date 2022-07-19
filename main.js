const mario = document.getElementById('mario');
const pipe = document.getElementById('pipe');
const score = document.getElementById('score');

const jump = () => {  //adiciona o movimento do pulo ao mario
    mario.classList.add('jump');
    
    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
    
}


const loop = setInterval (() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`; 

        mario.src = 'imagens/game-over.png'; // referente à partida perdida
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        clearInterval(loop);
        }

}, 10)

document.addEventListener('keydown', jump);