
let vida1 = 100;
let vida2 = 100;

let dano1 = 0;
let dano2 = 0;

let jogar_novamente = document.getElementById('jogar_novamente');

let section_jogar = document.getElementById('jogar');
let btn_jogar = document.getElementById('jogar_button');
let vida_jogador1 = document.querySelector('.vida_jogador1');
let vida_jogador2 = document.querySelector('.vida_jogador2');
let player_turn = document.getElementById('player_turn');

let jogador1_venceu = document.querySelector('.jogador1_venceu')
let jogador2_venceu = document.querySelector('.jogador2_venceu')

let quantidade_de_dano_p1 = document.querySelector('.quantidade_de_dano_p1');
let quantidade_de_dano_p2 = document.querySelector('.quantidade_de_dano_p2');

quantidade_de_dano_p1.innerHTML = dano1;
quantidade_de_dano_p2.innerHTML = dano2;

vida_jogador1.innerHTML = vida1;
vida_jogador2.innerHTML = vida2;

player_turn.innerText = 'Vez do Jogador 1';
let interruptor = 0;


btn_jogar.addEventListener('click', function(){
    personagem1.classList.remove('animacao_de_dano');
    personagem2.classList.remove('animacao_de_dano');
    quantidade_de_dano_p1.classList.remove('damage')
    quantidade_de_dano_p2.classList.remove('damage')

    if (interruptor === 0){
        valorrandomico = Math.floor(Math.random() * 50);

        vida2 -= valorrandomico; 
        vida_jogador2.innerHTML = vida2;

        dano2 -= valorrandomico;
        quantidade_de_dano_p2.innerHTML = dano2;
        quantidade_de_dano_p2.classList.add('damage')

        personagem2.classList.add('animacao_de_dano');
        player_turn.innerText = 'Vez do Jogador 2';
        interruptor = 1;
        dano2 = 0
    }
    else {
        valorrandomico = Math.floor(Math.random() * 50);

        vida1 -= valorrandomico;
        vida_jogador1.innerHTML = vida1;

        dano1 -= valorrandomico;
        quantidade_de_dano_p1.innerHTML = dano1;
        quantidade_de_dano_p1.classList.add('damage');

        personagem1.classList.add('animacao_de_dano');
        player_turn.innerText = 'Vez do Jogador 1';
        interruptor = 0;
        dano1 = 0
    }
    if (vida2 <= 0) {
        vida_jogador2.innerHTML = 0;
        jogador1_venceu.innerText = "Jogador 1 venceu";
        jogador1_venceu.classList.add('vitoria');
        personagem2.classList.add('derrota');
        jogar_novamente.classList.add('vitoria')
        section_jogar.classList.remove('aparecer_botao');
        btn_jogar.remove()
    }
    if (vida1 <= 0) {
        vida_jogador1.innerHTML = 0;
        jogador2_venceu.innerText = "Jogador 2 venceu";
        jogador2_venceu.classList.add('vitoria');
        personagem1.classList.add('derrota');
        section_jogar.classList.remove('aparecer_botao');
        jogar_novamente.classList.add('vitoria');
        btn_jogar.remove();
    }
})

jogar_novamente.addEventListener('click', function(){
    location.reload()
})
