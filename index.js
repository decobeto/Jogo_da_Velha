var tabela = new Array(
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
);

var jogador1 = "X";
var jogador2 = "O";
var deu_velha = false;
jogadorDaVez = " ";
jogadaDaVez = "X";

function jogada(bloco){
  blocoDaJogada = document.getElementById(bloco).innerHTML;
  if ( blocoDaJogada == "X" || blocoDaJogada == "O"){
    alert("Jogada invalida, esta posição já esta ocupada");
  } else {
    document.getElementById(bloco).innerHTML = jogadaDaVez;
    if(jogadaDaVez == "X"){
      jogadaDaVez = jogador2;
      jogadorDaVez = "Jogador 1";
    }else{
      jogadaDaVez = jogador1;
      jogadorDaVez = "Jogador 2";
    }
  }
}

function pegaValor(){
  tabela[0][0] = document.getElementById('bloco1').innerText;
  tabela[0][1] = document.getElementById('bloco2').innerText;
  tabela[0][2] = document.getElementById('bloco3').innerText;
  tabela[1][0] = document.getElementById('bloco4').innerText;
  tabela[1][1] = document.getElementById('bloco5').innerText;
  tabela[1][2] = document.getElementById('bloco6').innerText;
  tabela[2][0] = document.getElementById('bloco7').innerText;
  tabela[2][1] = document.getElementById('bloco8').innerText;
  tabela[2][2] = document.getElementById('bloco9').innerText;
}

function verificaVitoria(){
  pegaValor();
  if ( ((tabela[0][0] != ' ') && (tabela[0][1] != '' ) && (tabela[0][2] != '' ) && (tabela[0][0] == tabela[0][1]) && (tabela[0][1] == tabela[0][2])) ||
       ((tabela[1][0] != '') && (tabela[1][1] != '' ) && (tabela[1][2] != '' ) && (tabela[1][0] == tabela[1][1]) && (tabela[1][1] == tabela[1][2]))  ||
       ((tabela[2][0] != '') && (tabela[2][1] != '' ) && (tabela[2][2] != '' ) && (tabela[2][0] == tabela[2][1]) && (tabela[2][1] == tabela[2][2]))  ||
       ((tabela[0][0] != '') && (tabela[1][0] != '' ) && (tabela[2][0] != '' ) && (tabela[0][0] == tabela[1][0]) && (tabela[1][0] == tabela[2][0]))  ||
       ((tabela[0][1] != '') && (tabela[1][1] != '' ) && (tabela[2][1] != '' ) && (tabela[0][1] == tabela[1][1]) && (tabela[1][1] == tabela[2][1]))  ||
       ((tabela[0][2] != '') && (tabela[1][2] != '' ) && (tabela[2][2] != '' ) && (tabela[0][2] == tabela[1][2]) && (tabela[1][2] == tabela[2][2]))  ||
       ((tabela[0][0] != '') && (tabela[1][1] != '' ) && (tabela[2][2] != '' ) && (tabela[0][0] == tabela[1][1]) && (tabela[1][1] == tabela[2][2]))  ||
       ((tabela[0][2] != '') && (tabela[1][1] != '' ) && (tabela[2][0] != '' ) && (tabela[0][0] == tabela[1][1]) && (tabela[1][1] == tabela[2][0])) ){
        alert("Parabéns " + jogadorDaVez + " você venceu");
      }
}


function novoJogo(){
  tabela = new Array(
    [null, null, null],
    [null, null, null],
    [null, null, null],
  );

  el = document.getElementsByClassName("bloco");
  for(i = 0;i < el.length;i++) {
      el[i].innerHTML = "";
  }
}


