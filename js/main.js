var wrap = document.createElement('wrap')
wrap.id = 'wrap'

var logoContainer = document.createElement('div')
logoContainer.id = 'logo-container'

var canvas = document.createElement('canvas')
canvas.width = 255
canvas.height = 24

var ctx = canvas.getContext('2d')
canvas.id = 'canvas'

var logo = new Image()
logo.src = 'img/logo.png'
logo.id = 'logo'

logoContainer.appendChild(logo)
logoContainer.appendChild(canvas)
document.body.appendChild(logoContainer)

window.onload = () => {
    renderView()
    renderCanvas()
}
window.onresize = () => {
    renderView()
}

var increment = 0

function renderCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#f56539'

    for (var x = 0; x < canvas.width; x++) {
        var y = Math.sin((increment + x) / 90) * 10
        /* console.log(y) */
        ctx.fillRect(x, y + canvas.height / 2, 1, 300)
    }

    increment += 5
    requestAnimationFrame(renderCanvas)
}

function renderView() {
    wrap.innerHTML = ''
    var windowWidth = document.body.clientWidth
    var cardMargin = 15
    var cardWidth = 500
    var cardsPerRow = Math.floor(windowWidth / cardWidth)
    if (cardsPerRow < 1) {
        cardsPerRow = 1
    } else if(cardsPerRow > 5) cardsPerRow = 5

    var wrapWidth = cardWidth * (cardsPerRow)

    wrap.style.width = wrapWidth + 'px'

    for (var i = 0; i < games.length; i++) {
        var game = games[i]
        var card = document.createElement('card')
        card.classList.add('card')
        card.style.margin = cardMargin/2 + 'px'
        card.style.width = (cardWidth - (cardMargin)) + 'px'
        
        var coverArt = new Image()
            coverArt.src = game.cover_art
            coverArt.classList.add('cover-art')

        card.appendChild(coverArt)
        
        card.innerHTML += `
        <div class="card-info">
            <span class="title">${game.name}</span>
            <span class="author">av ${game.creator}</span>

            <a href="">
            <button class="source btn">
                <img src="img/github.png" class="github-logo">
            </button>
            </a>
            <a href="${game.link}" target="_blank">
            <button class="play btn">PLAY</button>
            </a>
        </div>
        `
        
        wrap.appendChild(card)
    }
}


document.body.appendChild(wrap)
