let xCenario = 500
let yCenario = 400

let xBolinha = 300
let yBolinha = 200
let velocidadeXBolinha = 3
let velocidadeYBolinha = 3
let diametroBolinha = 30
let raioBolinha = diametroBolinha / 2

let xRaquete = 5
let yRaquete = 165
let xRaqueteInimiga = 485
let yRaqueteInimiga = 165
let larguraRaquete = 10
let alturaRaquete = 80

let colisao = false;
let velocidadeYInimiga;
let meusPontos = 0
let pontosOponete = 0
let xPontos = 125
let yPontos = 20
let xPontosOponentes = 375
let raquetada;
let ponto;
let trilha; 


function preload(){
  trilha =loadSound("trilha.mp3")
  ponto =loadSound("ponto.mp3")
  raquetada =loadSound("raquetada.mp3") 
}

function setup() {
  createCanvas(xCenario, yCenario);
  trilha.loop()
}

function draw() {
  background(0);
  atoresNaTela()
  movimentoBolinha()
  colisaoNasBordas()
  movimentoRaquete()
  colisaoBolinhaRaquete(xRaquete,yRaquete)
  colisaoBolinhaRaquete(xRaqueteInimiga,yRaqueteInimiga)
  movimentoRaqueteInimiga()
  pontosNaTela()

 

}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function colisaoNasBordas(){
  if (xBolinha + raioBolinha > xCenario || xBolinha - raioBolinha < 0 ){ 
    velocidadeXBolinha *= -1
  }
  if (yBolinha + raioBolinha > yCenario || yBolinha - raioBolinha < 0 ){ 
    velocidadeYBolinha *= -1
}     
}

function movimentoRaquete(){
   if (keyIsDown(UP_ARROW)) {
    yRaquete -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 5;
  }
}


function movimentoRaqueteInimiga(){
  velocidadeYInimiga = yBolinha - yRaqueteInimiga
  yRaqueteInimiga += velocidadeYInimiga  

  
}


function atoresNaTela() {
  circle(xBolinha, yBolinha, diametroBolinha);
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
  rect(xRaqueteInimiga, yRaqueteInimiga, larguraRaquete, alturaRaquete);
  fill(color(255,69,0))
  rect(xPontos - 10, yPontos - 15, 30, 20, 20);
  fill(color(255,69,0))
  rect(xPontosOponentes - 10, yPontos - 15, 30, 20, 20);
  stroke(255)
}


function colisaoBolinhaRaquete(x,y) {
  
    colisao = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametroBolinha);
  
  if (colisao) {
    velocidadeXBolinha *= -1
    raquetada.play()

  }
}

function pontosNaTela(){
  fill(255)
  text(meusPontos, xPontos, yPontos)
  text(pontosOponete, xPontosOponentes, yPontos)
  
  if (xBolinha > xCenario - 15){
    meusPontos += 1
    ponto.play()

  }
  if (xBolinha < yCenario - 385){
    pontosOponete += 1
    ponto.play()

  }
}