input.onButtonPressed(Button.A, function () {
    Jugador.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Jugador.change(LedSpriteProperty.X, 1)
})
let Objeto: game.LedSprite = null
let Jugador: game.LedSprite = null
Jugador = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(1000, 1500))
    Objeto = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        Objeto.change(LedSpriteProperty.Y, 1)
    }
    if (Objeto.isTouching(Jugador)) {
        game.gameOver()
    }
    basic.pause(100)
    game.addScore(1)
    Objeto.delete()
})
