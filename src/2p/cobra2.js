// Jogo da Cobra (Snake Game)
// Autor: Jan Bodnar
// Adaptado por: Gilson Pereira
// Código fonte original: http://zetcode.com/javascript/snake/


// Declaração de variáveis e constantes

var tela;
var ctx;

var d10
var d9
var d8
var d7
var d6
var d5
var d4
var d3
var d2
var d1
var heart;
var bery;
var banana;
var cabeca;
var maca;
var bola;
var death;
var death2;
var death3;
var death4;
var death5;     

var pontos;
var maca_x;
var maca_y;
var banana_x;
var banana_y;
var bery_x;
var bery_y;
var heart_x;
var heart_y;
var d1_x;
var d1_y;
var d2_x;
var d2_y;
var d3_x;
var d3_y;
var d4_x;
var d4_y;
var d5_x;
var d5_y;

var d6_x;
var d6_y;
var d7_x;
var d7_y;
var d8_x;
var d8_y;
var d9_x;
var d9_y;
var d10_x;
var d10_y;
var death_x;
var death_y;

var death2_x;
var death2_y;
var death3_x;
var death3_y;
var death4_x;
var death4_y;
var death5_x;
var death5_y;
var contei = 0

var paraEsquerda = false;
var paraDireita = true;
var paraCima = false;
var paraBaixo = false;
var noJogo = true;    
var score = document.getElementById("pintos")
var scorezin = 0

const TAMANHO_PONTO = 10;
const ALEATORIO_MAXIMO = 29;
const ATRASO = 140;
const C_ALTURA = 300;
const C_LARGURA = 300;    

const TECLA_ESQUERDA = 37;
const TECLA_DIREITA = 39;
const TECLA_ACIMA = 38;
const TECLA_ABAIXO = 40;

var x = [];
var y = [];

onkeydown = verificarTecla; // Define função chamada ao se pressionar uma tecla

iniciar(); // Chama função inicial do jogo


// Definição das funções

function iniciar() {
    
    tela = document.getElementById("tela");
    ctx = tela.getContext("2d");

	ctx.fillStyle = "rgb(26, 0, 26)";
	ctx.fillRect(0, 0, C_LARGURA, C_ALTURA);

    carregarImagens();
    criarCobra();
    localizarbanana();
    localizarMaca();
    localizard1();
    localizard2();
    localizard3();
    localizard4();
    localizard5();
    
    localizard6();
    localizard7();
    localizard8();
    localizard9();
    localizard10();
    localizarheart();
    localizardeath();

    localizardeath2();
    localizardeath3();
    localizardeath4();
    localizardeath5();
    localizarbery();
    setTimeout("cicloDeJogo()", ATRASO);
}
var come = new Audio('nhac.mp3');
come.volume = 0.1;

var audio = new Audio('damn.mp3');
audio.volume = 0.1;
audio.loop = true;
audio.play();

function carregarImagens() {
    cabeca = new Image();
    cabeca.src = "cabeca.png";    
    
    bola = new Image();
    bola.src = "ponto.png"; 
    
    maca = new Image();
    maca.src = "maca.png"; 
    
    banana = new Image();
    banana.src = "bananinha.png"; 

    bery = new Image();
    bery.src = "berry.png";

    death = new Image();
    death.src = "death.png";

    death2 = new Image();
    death2.src = "death.png";
    death3 = new Image();
    death3.src = "death.png";
    death4 = new Image();
    death4.src = "death.png";
    death5 = new Image();
    death5.src = "death.png";

    heart = new Image();
    heart.src = "heart.png";

    d1 = new Image();
    d1.src = "berry.png";

    d2 = new Image();
    d2.src = "berry.png";

    d3 = new Image();
    d3.src = "berry.png";

    d4 = new Image();
    d4.src = "berry.png";

    d5 = new Image();
    d5.src = "berry.png";



    d6 = new Image();
    d6.src = "berry.png";

    d7 = new Image();
    d7.src = "berry.png";

    d8 = new Image();
    d8.src = "berry.png";

    d9 = new Image();
    d9.src = "berry.png";

    d10 = new Image();
    d10.src = "berry.png";
}

function criarCobra() {
    pontos = 17;
	
    for (var z = 0; z < pontos; z++) {
        x[z] = 50 - z * TAMANHO_PONTO;
        y[z] = 50;
    }
}


function localizarMaca() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    maca_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    maca_y = r * TAMANHO_PONTO;
}   
function localizarheart() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    heart_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    heart_y = r * TAMANHO_PONTO;
}
function localizarbanana() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    banana_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    banana_y = r * TAMANHO_PONTO;
} 
function localizarbery() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    bery_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    bery_y = r * TAMANHO_PONTO;
}   
function localizardeath() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    death_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    death_y = r * TAMANHO_PONTO;
}  
function localizard1() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d1_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d1_y = r * TAMANHO_PONTO;
}
function localizard2() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d2_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d2_y = r * TAMANHO_PONTO;
}
function localizard3() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d3_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d3_y = r * TAMANHO_PONTO;
}
function localizard4() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d4_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d4_y = r * TAMANHO_PONTO;
}
function localizard5() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d5_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d5_y = r * TAMANHO_PONTO;
}


function localizardeath2() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    death2_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    death2_y = r * TAMANHO_PONTO;
} 
function localizardeath3() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    death3_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    death3_y = r * TAMANHO_PONTO;
} 
function localizardeath4() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    death4_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    death4_y = r * TAMANHO_PONTO;
} 
function localizardeath5() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    death5_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    death5_y = r * TAMANHO_PONTO;
} 




function localizard6() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d6_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d6_y = r * TAMANHO_PONTO;
}  
function localizard7() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d7_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d7_y = r * TAMANHO_PONTO;
}  
function localizard8() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d8_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d8_y = r * TAMANHO_PONTO;
}  
function localizard9() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d9_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d9_y = r * TAMANHO_PONTO;
}  
function localizard10() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d10_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMO);
    d10_y = r * TAMANHO_PONTO;
}  

function cicloDeJogo() {
    if (noJogo) {
        verificarMaca();
        verificarbanana();
        verificarColisao();
        verificarbery();
        verificard1();
        verificard2();
        verificard3();
        verificard4();
        verificard5();

        verificard6();
        verificard7();
        verificard8();
        verificard9();
        verificard10();
        verificarheart();
        verificardeath();

        verificardeath2();
        verificardeath3();
        verificardeath4();
        verificardeath5();
        mover();
        fazerDesenho();
        setTimeout("cicloDeJogo()", ATRASO);
    }
}

function verificarMaca() {
    if ((x[0] == maca_x) && (y[0] == maca_y)) {
        come.play();
        pontos+=9;
        scorezin+=-1;
        score.innerHTML = scorezin
        localizarMaca();    
    }
}    
function verificarheart() {
    if ((x[0] == heart_x) && (y[0] == heart_y)) {
        come.play();
        pontos+=5   ;
        scorezin+=2;
        score.innerHTML = scorezin
        localizarheart();    
    }
}  
function verificarbanana() {
    if ((x[0] == banana_x) && (y[0] == banana_y)) {
        come.play();
        pontos+= 11;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizarbanana();    
    }
}  
function verificarbery() {
    if ((x[0] == bery_x) && (y[0] == bery_y)) {
        come.play();
        pontos+= 11;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizarbery();    
    }
} 
function verificardeath() {
    if ((x[0] == death_x) && (y[0] == death_y)) {
        come.play();
        pontos+=20;
        scorezin+=-10;
        score.innerHTML = scorezin
        localizardeath();    
    }
} 
function verificard1() {
    if ((x[0] == d1_x) && (y[0] == d1_y)) {
        come.play();
        pontos+=12;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizard1();    
    }
} 
function verificard2() {
    if ((x[0] == d2_x) && (y[0] == d2_y)) {
        come.play();
        pontos+=13;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizard2();    
    }
} 
function verificard3() {
    if ((x[0] == d3_x) && (y[0] == d3_y)) {
        come.play();
        pontos+=10;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizard3();    
    }
} 
function verificard4() {
    if ((x[0] == d4_x) && (y[0] == d4_y)) {
        come.play();
        pontos+=9;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizard4();    
    }
} 
function verificard5() {
    if ((x[0] == d5_x) && (y[0] == d5_y)) {
        come.play();
        pontos+=9;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizard5();    
    }
} 



function verificard6() {
    if ((x[0] == d6_x) && (y[0] == d6_y)) {
        come.play();
        pontos+=9;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizard6();    
    }
}
function verificard7() {
    if ((x[0] == d7_x) && (y[0] == d7_y)) {
        come.play();
        pontos+=9;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizard7();    
    }
}
function verificard8() {
    if ((x[0] == d8_x) && (y[0] == d8_y)) {
        come.play();
        pontos+=9;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizard8();    
    }
}
function verificard9() {
    if ((x[0] == d9_x) && (y[0] == d9_y)) {
        come.play();
        pontos+=9;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizard9();    
    }
}
function verificard10() {
    if ((x[0] == d10_x) && (y[0] == d10_y)) {
        come.play();
        pontos+=9;
        scorezin+=-2;
        score.innerHTML = scorezin
        localizard10();    
    }
}


function verificardeath2() {
    if ((x[0] == death2_x) && (y[0] == death2_y)) {
        come.play();
        pontos+=15;
        scorezin+=-10;
        score.innerHTML = scorezin
        localizardeath2();    
    }
} 
function verificardeath3() {
    if ((x[0] == death3_x) && (y[0] == death3_y)) {
        come.play();
        pontos+=15;
        scorezin+=-10;
        score.innerHTML = scorezin
        localizardeath3();    
    }
} 
function verificardeath4() {
    if ((x[0] == death4_x) && (y[0] == death4_y)) {
        come.play();    
        pontos+=21;
        scorezin+=-10;
        score.innerHTML = scorezin
        localizardeath4();    
    }
} 
function verificardeath5() {
    if ((x[0] == death5_x) && (y[0] == death5_y)) {
        come.play();
        pontos+=20;
        scorezin+=-10;
        score.innerHTML = scorezin
        localizardeath5();    
    }
} 

function verificarColisao() {
    for (var z = pontos; z > 0; z--) {
        if ((z > 4) && (x[0] == x[z]) && (y[0] == y[z])) {
            
            noJogo = false;
        }
    }

    if (y[0] >= C_ALTURA) {
        noJogo = false;
    }

    if (y[0] < 0) {
       noJogo = false;
    }

    if (x[0] >= C_LARGURA) {
      noJogo = false;
    }

    if (x[0] < 0) {
      noJogo = false;
    }
    
}

function mover() {
    for (var z = pontos; z > 0; z--) {
        x[z] = x[z-1];
        y[z] = y[z-1];
    }

    if (paraEsquerda) {
        x[0] -= TAMANHO_PONTO;
    }

    if (paraDireita) {
        x[0] += TAMANHO_PONTO;
    }

    if (paraCima) {
        y[0] -= TAMANHO_PONTO;
    }

    if (paraBaixo) {
        y[0] += TAMANHO_PONTO;
    }
}    

function fazerDesenho() {
    ctx.clearRect(0, 0, C_LARGURA, C_ALTURA);
	ctx.fillRect(0, 0, C_LARGURA, C_ALTURA);
	
    if (noJogo) {
        ctx.drawImage(maca, maca_x, maca_y);
        ctx.drawImage(banana, banana_x, banana_y);
        ctx.drawImage(bery, bery_x, bery_y);
        ctx.drawImage(death, death_x, death_y)

        ctx.drawImage(death2, death2_x, death2_y)
        ctx.drawImage(death3, death3_x, death3_y)
        ctx.drawImage(death4, death4_x, death4_y)
        ctx.drawImage(death5, death5_x, death5_y)

        ctx.drawImage(heart, heart_x, heart_y)
        ctx.drawImage(d1, d1_x, d1_y)
        ctx.drawImage(d2, d2_x, d2_y)
        ctx.drawImage(d3, d3_x, d3_y)
        ctx.drawImage(d4, d4_x, d4_y)
        ctx.drawImage(d5, d5_x, d5_y)

        ctx.drawImage(d6, d6_x, d6_y)
        ctx.drawImage(d7, d7_x, d7_y)
        ctx.drawImage(d8, d8_x, d8_y)
        ctx.drawImage(d9, d9_x, d9_y)
        ctx.drawImage(d10, d10_x, d10_y)

		
        for (var z = 0; z < pontos; z++) {
            if (z == 0) {
                ctx.drawImage(cabeca, x[z], y[z]);
            } else {
                ctx.drawImage(bola, x[z], y[z]);
            }
        }    
    } else {
        fimDeJogo();
    }        
}

function fimDeJogo() {
    ctx.fillStyle = "white";
    ctx.textBaseline = "middle"; 
    ctx.textAlign = "center"; 
    ctx.font = "normal lighter 20px sans-serif";
    ctx.fillText("it's over x.x", C_LARGURA/2, C_ALTURA/2);
    const h1 = document.createElement("p");
    const textNode = document.createTextNode("Game over");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let btn = document.createElement("button");
    btn.innerHTML = "Restart?";
    document.body.appendChild(btn);
    btn.onclick = function restart () {
        window.location.reload();
      }; 
}


function verificarTecla(e) {
    var tecla = e.keyCode;

    if ((tecla == TECLA_ESQUERDA) && (!paraDireita)) {
        paraEsquerda = true;
        paraCima = false;
        paraBaixo = false;
    }

    if ((tecla == TECLA_DIREITA) && (!paraEsquerda)) {
        paraDireita = true;
        paraCima = false;
        paraBaixo = false;
    }

    if ((tecla == TECLA_ACIMA) && (!paraBaixo)) {
        paraCima = true;
        paraDireita = false;
        paraEsquerda = false;
    }

    if ((tecla == TECLA_ABAIXO) && (!paraCima)) {
        paraBaixo = true;
        paraDireita = false;
        paraEsquerda = false;
    }        
}