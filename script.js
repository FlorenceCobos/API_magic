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
    fetch("http://api.magicthegathering.io/v1/cards?page="+ $number + '/')
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
    cards(2);
})
document.querySelector('.magic2').addEventListener('click', function(){
   let cards = function getCards($number){
    fetch("http://api.magicthegathering.io/v1/cards?page="+ $number + '/')
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