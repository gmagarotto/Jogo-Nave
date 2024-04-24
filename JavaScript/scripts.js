let Jogo;
let altura_aeronave = 150;
let largura_aeronave = 100;
let inicio_X = 0;
let inicio_Y = 0;

// Aqui o alerta inicial e as perguntas são dados para o usuario ver e preencher.
alert("Insira o numero de ate 5 alunos, para realizarmos as devidas operações de inicio. Caso não tenha coloque 0. Esse site funciona com todos os itens da atividade passada pelo professor Nilson!");
let aluno_um = prompt("1° Aluno");
let aluno_dois = prompt("2° Aluno");
let aluno_tres = prompt("3° Aluno");
let aluno_quatro = prompt("4° Aluno");
let aluno_cinco = prompt("5° Aluno");
let resultado = (parseInt(aluno_um) + parseInt(aluno_dois) + parseInt(aluno_tres) + parseInt(aluno_quatro) + parseInt(aluno_cinco));
let informacoes = posicoes(resultado);

// Aqui as posições iniciais são estabelecidas.
function posicoes(soma_alunos) {
    switch (soma_alunos % 5) {
        case 0:
            return { x: 1400 - largura_aeronave, y: 0, posicao: 0 }
            break;
        case 1:
            return { x: 0, y: 0, posicao: 1 }

            break;
        case 2:
            return { x: 1400 - largura_aeronave, y: 700 - altura_aeronave, posicao: 2 }
            break;
        case 3:
            return { x: 0, y: 700 - altura_aeronave, posicao: 3 }
            break;
        case 4:
            return { x: 1400 - largura_aeronave, y: (700 / 2) - (altura_aeronave / 2), posicao: 4 }
    }
}
// Aqui é onde a imagem é colocada.
function startGame() {

    AreaJogo.start();
    Jogo = new Aeronave(largura_aeronave, altura_aeronave, informacoes.x, informacoes.y);
    Jogo.image.src = "./IMAGENS/aeronave.png";
}

// Aqui é onde as definiçoes da nave é estabelcida.
function Aeronave(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.onload = () => {
        this.drawImage();
    }
}

// Aqui temos a criação do canvas e as definiçoes dele, junto com uma função de limpar a tela.
let AreaJogo = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1400;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateAreaJogo, 10);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


Aeronave.prototype.draw = function () {
    AreaJogo.context.drawImage(this.image, this.x, this.y, this.width, this.height);
}

// Area onde é feita a verificação de onde a imagem deve seguir.
function updateAreaJogo() {
    if (informacoes.posicao == 0 && Jogo.x >= 0) {
        Jogo.x += -2;
    }
    if (informacoes.posicao == 0 && Jogo.y <= 550) {
        Jogo.y += 1;
    }
    if (informacoes.posicao == 1 && Jogo.x <= 1300) {
        Jogo.x += 2;
    }
    if (informacoes.posicao == 1 && Jogo.y <= 550) {
        Jogo.y += 1;
    }
    if (informacoes.posicao == 2 && Jogo.y >= 0) {
        Jogo.y += -1;
    }
    if (informacoes.posicao == 3 && Jogo.y >= 0) {
        Jogo.y += -1;
    }
    if (informacoes.posicao == 4 && Jogo.x >= 0) {
        Jogo.x += -2;
    }
    AreaJogo.clear();
    Jogo.draw();
}