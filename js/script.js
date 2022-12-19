console.log('JS OK');

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// MILESTONE 1
// Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
// MILESTONE 2
// Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. 
// Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
// MILESTONE 3
// In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
// #MILESTONE 4
// Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!


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
            const bomb = getRandomNumber(1, 100);
    
            if (!bombs.includes(bomb)) {
                bombs.push(bomb);

                console.log(bombs);
            }
        }
        
        return bombs;
    }

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Prendo elementi dalla pagina 

const grid = document.getElementById('grid');

const play = document.getElementById('play');


// Impostazioni griglia

const rows = 10;
const cols = 10;
const totalCells = rows * cols; 

const totalBombs = 16;

let bombsArray;



// Generazione celle al click del pulsante 

play.addEventListener('click', function(){

    // Cambio testo interno del punlsante 
    play.innerText = 'Ricomincia';

    // Svuoto la griglia 
    grid.innerHTML = '';
    

    bombsArray = bombGenerator(); 

    



    //Randomizzo 100 celle
    for(let i = 1; i < totalCells; i++) {
        
        // Creazione cella
        const cell = createCell(i);


        // Aggiungo eventListener 
        cell.addEventListener('click', () => {
            cell.classList.add('clicked');

            
            // Numeri all'interno della cella 

            const content = i;

            cell.append(content);

            console.log(i);
        

        });

        grid.appendChild(cell);
    }




})
