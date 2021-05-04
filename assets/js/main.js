



// creare lista ingredienti e assegnare prezzo a ciascuno

//lstenEvent(click) sul pulsante generate




var ingredienti = [
    ['cheese', '1.5'],
    ['mostarda', '0.5'],
    ['formaggio', '1.5'],
    ['lattuga', '0.25']
];
console.log(ingredienti[1][0]);




// creare lista ingredienti e assegnare prezzo a ciascuno
var ingredienti = [
    ['cheese', '1.5'],
    ['fried-egg', '1.5'],
    ['mustard', '1'],
    ['tomato', '1.25'],
    ['lettuce', '0.3'],
    ['ketchup', '0.25']
];


//inserisco in maniera dinamica gli ingredienti nella pagina
var ingredientiEl = document.querySelector('.ingredienti');

inserisciIngredienti(ingredienti, ingredientiEl);


/**
 *  ### inserisci dinamicamente
 * inserisce dinamicamente gli elementi di una lista (list) in un elemento (el) del HTML
 * @param {array} list -lista da inserire dinamicamente
 * @param {HTMLElement} el posizione HTML in cui inserirla
 */
function inserisciIngredienti(list, el) {
   var counter = 0;
    while (counter < list.length) {
        el.insertAdjacentHTML('beforeEnd',
         `
            <div class="form_group">
                <img width ="60" src="./assets/img/${list[counter][0] + '.svg'} " alt="immagine ${list[counter][0]}">
                <label for="${list[counter][0]}">${list[counter][0]}</label>
                <input type="checkbox" name="${list[counter][0]}" id="${list[counter][0]}" data-price="${list[counter][1]}">

            </div>
        `);

        counter++;
    }
}





