
var socket = io();

socket.on('botup', () => {botUp()});
socket.on('botdown', () => {botDown()});

function botUp(){
    var bot = document.getElementById("bot");
    bot.style.top = '0px';
}

function botDown(){
    var bot = document.getElementById("bot");
    bot.style.top = '100px';
}