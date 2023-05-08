const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function itsBreak(){
   return lamp.src.indexOf('quebrada') > -1
}
function lampOn(){
    if(! itsBreak()){
    lamp.src = '/imagens/ligada.jpg';
    }
}

function lampOff(){
    if(! itsBreak()){
    lamp.src = '/imagens/desligada.jpg';
    }   
}

function lampbreak(){
    lamp.src = '/imagens/quebrada.jpg'
}

turnOn.addEventListener ( 'click' , lampOn)
turnOff.addEventListener ('click', lampOff)
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampbreak)
