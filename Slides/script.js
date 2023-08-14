const images = [
    { 'id': '1', 'url':'./img/chrono.jpg' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/tenchi.jpg' },
    { 'id': '4', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '5', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'./img/ippo.png' },
]

const containeritemns = document.getElementById('itens')

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containeritemns)

/*_____________________________*/

const prev = document.getElementById('previous')
const nex = document.getElementById('next')

let items = document.querySelectorAll('.item')

const previous = () => {
    containeritemns.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastitem = items[items.length - 1]
    containeritemns.insertBefore(lastitem, items[0])
    items = document.querySelectorAll('.item')
}

prev.addEventListener('click', previous)
nex.addEventListener('click', next);