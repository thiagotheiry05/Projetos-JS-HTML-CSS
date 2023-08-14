'use strict'


/*<label class="todo__item">
                <input type="checkbox">
                <div>teste de item 1</div>
                <input type="button" value="x">
</label>*/

const adcionaritem = (tarefa) =>{
    const item = document.createElement('label')
    item.classList.add('todo__item')
    item.innerHTML = `<input type="checkbox">
                      <div>${tarefa}</div>
                      <input type="button" value="x" class='botao'>`
    document.getElementById('todolist').appendChild(item)
}

document.getElementById('newitem').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const texto = event.target.value
      adcionaritem(texto)
      event.target.value = ''
    }
})

const apagar = (item) =>{
    item.remove()
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('botao')) {
      const item = event.target.closest('.todo__item'); // Encontra o item correspondente
      if (item) {
          apagar(item);
      }
  }})



        