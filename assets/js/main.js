

// creare lista ingredienti e assegnare prezzo a ciascuno
var ingredienti = [
    ['cheese', '1.5'],
    ['fried-egg', '1.5'],
    ['mustard', '1'],
    ['tomato', '1.25'],
    ['lettuce', '0.3'],
    ['ketchup', '0.25'],
    
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
            <div class="form_group col-6 py-2 px-3 d-flex align-items-center ">
                <img width ="60" src="./assets/img/${list[counter][0] + '.svg'} " alt="immagine ${list[counter][0]}">
                <label for="${list[counter][0]}">${list[counter][0]}</label>
                <input class="d-flex align-content-center" type="checkbox" name="${list[counter][0]}" id="${list[counter][0]}" data-price="${list[counter][1]}">

            </div>
        `);

        counter++;
    }
}

//calcolo il prezzo in base agli elementi checkati
document.querySelector('button').addEventListener('click', function() {

    var nameBurgerEl = document.getElementById("burger-name");

    if (nameBurgerEl.value == "") {
        alert('Dai un nome al tuo panino');
    }else{

        // definisci prezzo base panino
        var prezzoPanino = 2;
    
        //incremento il prezzo quando un ingrediente viene selezionato
    
        //prendo tutti gli elementi di tipo input che sono checkbox
        var checks = document.querySelectorAll("input[type='checkbox']");
        
        var sommaIngredienti = null;
    
        for (var i = 0; i < checks.length; i++){
            // controllo se gli elementi sono selezionati
            var element = checks[i];
            if(element.checked){
                sommaIngredienti += Number(element.getAttribute('data-price'));
            }
        }
      
        var prezzoTotale = prezzoPanino + sommaIngredienti;
        console.log(prezzoTotale);
    
        //definire codici sconto e calcolo prezzo finale
        var listaCoupon = [
            '12345AABBCC',
            '11223AACCDD',
            '11224AADDBB',
            '12234AACCBB'
        ];
    
        var couponEl = document.getElementById("coupon");
        var scontoCoupon = prezzoTotale * 0.15;
        if (listaCoupon.includes(couponEl.value)) {
            prezzoTotale -= scontoCoupon;
        }
        console.log(prezzoTotale.toFixed(2));
    
        var priceEl = document.getElementById("price");
        priceEl.innerHTML = '€ ' + prezzoTotale.toFixed(2);
    }

})



