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

for (var i = 0; i < 3; i++) {
    games.push(games[0])
}

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
        cardWidth = windowWidth
        cardsPerRow = 1
    }
    var wrapWidth = cardWidth * cardsPerRow

    wrap.style.width = wrapWidth + 'px'

    for (var i = 0; i < games.length; i++) {
        var game = games[i]
        var card = document.createElement('card')
        card.classList.add('card')
        card.style.margin = cardMargin + 'px'
        card.style.width = (cardWidth - (cardMargin * 2)) + 'px'
        
        var coverArt = new Image()
            coverArt.src = game.cover_art
            coverArt.classList.add('cover-art')

        card.appendChild(coverArt)

        
        wrap.appendChild(card)
    }
}


document.body.appendChild(wrap)