let play_btn = document.querySelector('.play');
let game_title_h1 = document.querySelector('.game_title_h1');

let personagem1 = document.querySelector('.personagem1');
let personagem2 = document.querySelector('.personagem2');

let jogadores = document.querySelectorAll('.jogadores');


play_btn.addEventListener('click', function(){
    game_title_h1.classList.add('retirar');
    play_btn.classList.add('retirar');


    personagem1.classList.add('mover_personagens');
    personagem2.classList.add('mover_personagens');
    
    jogadores.forEach(i => {
        i.classList.add('aparecer');
    });

    vida_jogador1.classList.add('aparecer')
    vida_jogador2.classList.add('aparecer')
    section_jogar.classList.add('aparecer_botao')
})

