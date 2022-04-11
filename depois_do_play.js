
let vida1 = 100;
let vida2 = 100;

let jogar_novamente = document.getElementById('jogar_novamente');

let section_jogar = document.getElementById('jogar');
let btn_jogar = document.getElementById('jogar_button');
let vida_jogador1 = document.querySelector('.vida_jogador1');
let vida_jogador2 = document.querySelector('.vida_jogador2');
let player_turn = document.getElementById('player_turn');

let jogador1_venceu = document.querySelector('.jogador1_venceu')
let jogador2_venceu = document.querySelector('.jogador2_venceu')


vida_jogador1.innerHTML = vida1;
vida_jogador2.innerHTML = vida2;

player_turn.innerText = 'Vez do Jogador 1';
let interruptor = 0;


btn_jogar.addEventListener('click', function(){
    personagem1.classList.remove('animacao_de_dano')
    personagem2.classList.remove('animacao_de_dano')

    if (interruptor === 0){
        vida2 -= Math.floor(Math.random() * 50)
        vida_jogador2.innerHTML = vida2;
        personagem2.classList.add('animacao_de_dano');
        player_turn.innerText = 'Vez do Jogador 2'
        interruptor = 1;
    }
    else {
        vida1 -= Math.floor(Math.random() * 50)
        vida_jogador1.innerHTML = vida1;
        personagem1.classList.add('animacao_de_dano')
        player_turn.innerText = 'Vez do Jogador 1';
        interruptor = 0;
    }
    if (vida2 < 0) {
        vida_jogador2.innerHTML = 0;
        jogador1_venceu.innerText = "Jogador 1 venceu";
        jogador1_venceu.classList.add('vitoria');
        personagem2.classList.add('derrota');
        jogar_novamente.classList.add('vitoria')
        section_jogar.classList.remove('aparecer_botao');
        btn_jogar.remove()
    }
    if (vida1 < 0) {
        vida_jogador1.innerHTML = 0;
        jogador2_venceu.innerText = "Jogador 2 venceu";
        jogador2_venceu.classList.add('vitoria');
        personagem1.classList.add('derrota');
        section_jogar.classList.remove('aparecer_botao');
        jogar_novamente.classList.add('vitoria')
        btn_jogar.remove()
    }
})

jogar_novamente.addEventListener('click', function(){
    location.reload()
})
