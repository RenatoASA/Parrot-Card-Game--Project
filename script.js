
let parar = false;
let numeroDeCartas = 0;
let arrayNumDasCartas = [];
let arrayNomeCartas = [];
let arrayPapagaio = ["papagaio1","papagaio2","papagaio3","papagaio4","papagaio5","papagaio6","papagaio7"];
let carta1 = null;
let carta2 = null;
let carta1Elemento = null;
let carta2Elemento = null;
let tentativas = 0;
let valores1 = 0;
let valores2 = 0;

while (parar === false) {
    numeroDeCartas = prompt("Digite um numero par de cartas entre 4 e 14:");

    if ((numeroDeCartas % 2) === 0 && numeroDeCartas <= 14 && numeroDeCartas >= 4) {        
        parar = true;
    } else {
        alert("Numero incorreto!");
    }
}

embaralhaNumeros();
 
function comparador() {
  return Math.random() - 0.5;
}


function embaralhaNumeros(){
    const numeroUnitario = numeroDeCartas/2;
    let contador = 0;
    for(let i = 0; i<2;i++){

        while(contador <numeroUnitario){
            arrayNumDasCartas[contador] = contador+1;
            contador++;
        }

        contador=0;
        while(contador <numeroUnitario){
            arrayNumDasCartas[contador+numeroUnitario] = contador+1;
            contador++;
        }
    } 
    arrayNumDasCartas.sort(comparador);
    
}

function virarCarta(item) {
    if (item.classList.contains("virada")) {
        return;
    }

    item.classList.add("virada");

    if (carta1 === null) {
        carta1 = item.querySelector(".verso img").src;
        carta1Elemento = item;
        tentativas++;
        
    } else {
        carta2 = item.querySelector(".verso img").src;
        carta2Elemento = item;
        tentativas++;
        

        if (carta1 === carta2) {
            carta1 = null;
            carta2 = null;
            carta1Elemento = null;
            carta2Elemento = null;

            if (document.querySelectorAll('.carta.virada').length == numeroDeCartas) {
                setTimeout(() => {
                    alert("Você ganhou em " + tentativas + " jogadas!");
                }, 500); 
            }
        } else {
            setTimeout(() => {
                carta1Elemento.classList.remove("virada");
                carta2Elemento.classList.remove("virada");
                carta1 = null;
                carta2 = null;
                carta1Elemento = null;
                carta2Elemento = null;

                
                if (document.querySelectorAll('.carta.virada').length == numeroDeCartas) {
                    alert(" Você ganhou em " + tentativas + " jogadas!");
                }
            }, 1000);
        }
    }
}


adicionaCarta();

function adicionaCarta(){
    let divCarta = document.querySelector(".mesa");
    
    for (let i = 0; i < arrayNumDasCartas.length; i++) {
        let numCarta = arrayNumDasCartas[i];
        
        arrayNomeCartas.push(arrayPapagaio[numCarta - 1]);

        const elementoCarta = `
        <div class="carta" onclick="virarCarta(this)">        
            <div class="frente face"><img src="IMG/papagaio.png" class="papagaio"> </div>        
            <div class="verso face"><img src="IMG/${arrayPapagaio[numCarta - 1]}.gif" class="papagaio ${arrayPapagaio[numCarta - 1]}"> </div>    
        </div>`;
        divCarta.innerHTML += elementoCarta;

    }
    
}
    




