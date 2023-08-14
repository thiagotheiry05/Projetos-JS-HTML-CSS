'use strict'

const openmodal = ()=>{
    document.getElementById('modal').classList.add('active')
}

const closemodal = ()=>{
    limparCampos()
    document.getElementById('modal').classList.remove('active')
}

const limparCampos = ()=>{
    const campos = document.querySelectorAll('.modal-field') 
    campos.forEach(campo => campo.value = '')
}

// Buscar os clientes na base de dados 
const getLocalStorege = () => JSON.parse(localStorage.getItem('db_client')) ?? []
// enviar os clientes na base de dados 
const setLocalStorege = (db_client) => localStorage.setItem("db_client", JSON.stringify(db_client))

// CRUD - Create / Read / Update / Delete

// READ 
const read = getLocalStorege()

// CREATE
const Createclient = (client)=>{
    const db_client = getLocalStorege()
    db_client.push(client)
    setLocalStorege(db_client)
}

// UPDATE 
const update = (index, client) => {
    const db_client = getLocalStorege()
    db_client[index] = client
    setLocalStorege(db_client)
}

// DELETE 
const remover = (index) => {
    const db_client = getLocalStorege()
    db_client.splice(index, 1)
    setLocalStorege(db_client)
} 

// interação com usuario
const valido = ()=> {
    return document.getElementById('form').reportValidity()
}

const salveclient = ()=>{
    if(valido()){
        const client = {
            nome: document.getElementById('nome').value ,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            Createclient(client)
            atualizartabela()
            closemodal()
        } else {
            update(index, client)
            atualizartabela()
            closemodal()
        }
    }
}


const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableclient>tbody').appendChild(newRow)
}

const limpartabela = ()=>{
    const rows = document.querySelectorAll('#tableclient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}
const atualizartabela = ()=>{
    const db_client = getLocalStorege()
    limpartabela()
    db_client.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome
    document.getElementById('email').value = client.email
    document.getElementById('celular').value = client.celular
    document.getElementById('cidade').value = client.cidade
    document.getElementById('nome').dataset.index = client.index
}

const editClient = (index) => {
    const client = getLocalStorege()[index]
    client.index = index
    fillFields(client)
    document.querySelector(".modal-header>h2").textContent  = `Editando ${client.nome}`
    openmodal()
}


const editDelete = (event)=>{
    if (event.target.type == 'button') {
        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } 
        else {
            const client = getLocalStorege()[index]
            const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`)
            if (response) {
                remover(index)
                atualizartabela()
            }
        }
    }
}

atualizartabela()
// eventos 
document.getElementById('cadastrarCliente').addEventListener('click', openmodal)
document.getElementById('modalClose').addEventListener('click', closemodal)
document.getElementById('salvar').addEventListener('click', salveclient)
document.querySelector('#tableclient>tbody').addEventListener('click', editDelete)
document.getElementById('cancelar').addEventListener('click',limparCampos)