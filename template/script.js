
var socket = io();

socket.on('objup', () => {objUp()});
socket.on('objdown', () => {objDown()});

function objUp(){
    var object = document.getElementById("obj");
    object.style.top = '0px';
}

function botDown(){
    var object = document.getElementById("obj");
    object.style.top = '100px';
}