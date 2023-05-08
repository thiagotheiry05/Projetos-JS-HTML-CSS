const buttons = document.getElementById('buttons')
const sinal = document.getElementById('img')
indexcores = 0;
intervalId = null; 


const semaforoOn = (event)=> {
    limparOsemaforo()
    semaforo[event.target.id]()
}
const semaforo = {
    'vermelho': ()=> {sinal.src ='/imagens/vermelho.png'},
    'verde': ()=> {sinal.src ='/imagens/verde.png'},
    'amarelo': ()=> {sinal.src ='/imagens/amarelo.png'},
    'desligar' : ()=> {sinal.src ='/imagens/desligado.png'},
    'auto': ()=> {intervalId = setInterval( mudarCor, 1000 )}
}

const mudarCor = ()=> {
    const cores = ['amarelo','vermelho','verde']
    const cor = cores[indexcores]
    semaforo[cor]()
    nextindexCor()
}

const nextindexCor = ()=> {
    if(indexcores < 2){
        indexcores++
    }
    else{
        indexcores=0;
    }
}

const limparOsemaforo = ()=>{
    clearInterval(intervalId);
}


buttons.addEventListener('click', semaforoOn)



