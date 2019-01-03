//JavaScript natif
document.querySelector('.button').addEventListener('click', function(){

pokemon = function getPokByNumber($number){
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

//JQUERY

$(document).ready(function(){
    
})