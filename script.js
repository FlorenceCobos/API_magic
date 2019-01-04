//JavaScript natif
document.querySelector('.button').addEventListener('click', function(){

let pokemon = function getPokByNumber($number){
    fetch('https://pokeapi.co/api/v2/pokemon/' + $number + '/')
    //pokemon = function getPokByNumber(number){
    //fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        document.querySelector('.pokeName').innerHTML = data.name
    })
}
pokemon(6);
  
});

document.querySelector('.magic').addEventListener('click', function(){
   let cards = function getCards($number){
    fetch("https://api.magicthegathering.io/v1/cards?page="+ $number + '/')
    .then(function(response){ 
        return response.json();
        })
        .then(function(boon){
           let cartes = boon.cards
           document.querySelector('.global').innerHTML=""
           cartes.forEach(function(element) {
            let id = element.id;
            document.querySelector('.global').innerHTML += '<div class= "cartes">' + '<img class= "like" data-id="' + id + '" src= "./like.svg">'+  '<h1>' +  element.name +  '</h1>'  +
             '<img src= "' + element.imageUrl + '">' + "<p>" + element.type + "</p>" + '</div>'
             

          });      
        })
    }
    cards(2);
})

if(deck == null){
    var deck = [];
    document.querySelector('.global').addEventListener('click', function(el){
        let target = el.target;
        if (target.classList.contains('like') == true){
            let id = el.target.dataset.id;
            
            deck.push(id);
            localStorage.setItem("deck",JSON.stringify(deck));
            console.log(deck);
            //let liked = [element.name];
            // let favoriteCards = localStorage.setItem('favoriteCards', liked);
            // console.log(favoriteCards);
        }
    })
}else{

}


document.querySelector('.magic2').addEventListener('click', function(){
   let cards = function getCards($number){
    fetch("https://api.magicthegathering.io/v1/cards?page="+ $number + '/')
    .then(function(response){ 
        return response.json();
        })
        .then(function(boon){
           let cartes = boon.cards
           document.querySelector('.global').innerHTML=""
           cartes.forEach(function(element) {
            document.querySelector('.global').innerHTML += '<div class= "cartes">' +  '<h1>' + element.name + '</h1>'
            + '<img src= "' + element.imageUrl + '">' + "<p>" + element.type + "</p>" + '</div>'
             
          });
          
           
            
        })
    }
    cards(3);
})







//JQUERY

$(document).ready(function(){ // on attend que la page soit entierement chargé pour faire la suite
    $('.buttonBis').click(function(){
        $.get('https://pokeapi.co/api/v2/pokemon/7/', function(data){
           $('.pokeName').html(data.name);
        })
    })
})