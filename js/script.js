console.log('JS OK');

// # MILESTONE 1
// Prepariamo "qualcosa" per tenere il punteggio dell'utente.
// Quando l'utente clicca su una cella, incrementiamo il punteggio.
// Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
// # MILESTONE 2
// Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
// Generiamoli e stampiamo in console per essere certi che siano corretti
// # MILESTONE 3
// Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
// # MILESTONE 4
// Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
// (Ma come stabiliamo quale sia il punteggio massimo?)
// # MILESTONE 5
// Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.



// FUNCTIONS ----------------------------------------------------------
// Creazione celle 
const createCell = (content) => {

    const cell = document.createElement('div');

    cell.classList.add('cell');

    return cell;
    
}



    // Creo le bombe 
    function bombGenerator () {
        // creo array 
        const bombs = [];
    
        // randomizzo le bombe e le aggiungo all'array
        while (bombs.length < 16){
            let bomb;
    
            do {
                bomb = Math.floor(Math.random() * 16) + 1;
            } while (bombs.includes(bomb));

            bombs.push(bomb);


         console.log(bombs);
         
        }



      // Ho pestato bombe? 

      const isBomb = bombs.includes(parseInt(this.innerText));
      console.log(isBomb);

      if (isBomb) {
          cell.classList.add('bomb');
          console.log('Hai pestato una bomba!');
      } else {
          score.innerText = "Punteggio: " + points;

          console.log(points);
      }
  
    }

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



// Prendo elementi dalla pagina 

const grid = document.getElementById('grid');
const play = document.getElementById('play');
const score = document.getElementById('score');;


// Impostazioni griglia

const rows = 10;
const cols = 10;
const totalCells = rows * cols; 


// Bombe e punti 
const totalBombs = [];

let bombsArray;


// Variabile punteggio 
let points = 0;



// Generazione celle al click del pulsante 

play.addEventListener('click', function(){

    // Cambio testo interno del pulsante 
    play.innerText = 'Ricomincia';

    // Svuoto la griglia 
    grid.innerHTML = '';

    bombsArray = bombGenerator(); 

    
    //Randomizzo 100 celle
    for(let i = 1; i <= totalCells; i++) {
        
        // Creazione cella
        const cell = createCell(i);


        // Aggiungo eventListener 
        cell.addEventListener('click', () => {


            if (cell.classList.contains('clicked')) {
                return;
            }
            
                cell.classList.add('clicked');

                score.innerText = ++points;

                
                // Numeri all'interno della cella 

                const content = i;

                cell.append(content);

                console.log(content);

                score.innerText = "Punteggio: " + points;

                console.log(points);
            
        });


        grid.appendChild(cell);


    }


})
