const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=opera]')
const resultado = document.getElementById('igual')
const limpar = document.getElementById('limpa')
const inverso = document.getElementById('mulNegativo')
const porcentagem = document.getElementById('porcentagem')
const virgula = document.getElementById('virgula')

let novoNumero = true
let operador = undefined; 
let numeroAnterior; 
let entrou = true
let travado = true
 
const operaAnt = () => {operador !== undefined}

const calcular = ()=>{
    if(operaAnt){
        const numeroAtual = parseFloat(display.textContent)
        novoNumero = true
            switch(operador) {
                case '+': atualizar(numeroAnterior + numeroAtual)
                break; 
                case '-': atualizar(numeroAnterior - numeroAtual )
                break;
                case '/': atualizar(numeroAnterior / numeroAtual)
                break;
                case 'x': atualizar(numeroAnterior * numeroAtual)
                break;
            }
        
       if(travado){
        numeroAnterior = parseFloat(display.textContent) - numeroAnterior
        console.log(numeroAnterior)
        }
    }
}

// atualizar o display a partir que vai inserindo numeros
const atualizar = (texto) => {
    if( display.textContent == 0){
        display.textContent = ''
    }
    if(novoNumero){
        display.textContent = texto
        novoNumero = false
    }
    else{
        display.textContent += texto
    }

}


const inserir = (evento)=> {atualizar(evento.target.textContent)}
numeros.forEach(numero => numero.addEventListener('click', inserir))


// chamando a operação

const seleOpera = (evento)=>{
    if(!novoNumero){
        travado=true
        calcular()
        novoNumero = true
        operador = evento.target.textContent
        numeroAnterior = parseFloat(display.textContent) 
    }
}

operadores.forEach(operador => operador.addEventListener('click', seleOpera))


// tecla resultado para mostrar a operação e repetir a operação
const resul = ()=>{
    calcular()
    travado = false
}
resultado.addEventListener('click', resul)

// limpar 
const limpo = ()=> {display.textContent = 0 ; numeroAnterior = 0; numeroAtual = 0}
limpar.addEventListener('click', limpo)

// multiplicar por -1
const multi = ()=> {display.textContent = parseFloat((display.textContent).replace(",",".")) * -1}
inverso.addEventListener('click', multi)


// porcentagem
const porcento = ()=> {display.textContent = parseFloat((display.textContent).replace(",",".")) / 100}
porcentagem.addEventListener('click', porcento)

//virgula
const addvirgula = ()=> {display.textContent = display.textContent + ','}
virgula.addEventListener('click', addvirgula)