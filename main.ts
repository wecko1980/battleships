input.onButtonPressed(Button.A, function () {
    Cursor.change(LedSpriteProperty.Y, VerticalMove)
    if (Cursor.get(LedSpriteProperty.Y) == 0) {
        VerticalMove = 1
    }
    if (Cursor.get(LedSpriteProperty.Y) == 4) {
        VerticalMove = -1
    }
})
input.onButtonPressed(Button.B, function () {
    Cursor.change(LedSpriteProperty.X, HorizontalMove)
    if (Cursor.get(LedSpriteProperty.X) == 0) {
        HorizontalMove = 1
    }
    if (Cursor.get(LedSpriteProperty.X) == 4) {
        HorizontalMove = -1
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "1ROW" && value == FleetX[0]) {
    	
    } else if (name == "1ROW" && value != FleetX[0]) {
        music.playMelody("C5 F C - - - - - ", 300)
    }
    if (name == "2ROW" && value == FleetX[1]) {
        soundExpression.giggle.play()
    } else if (name == "2ROW" && value != FleetX[1]) {
        music.playMelody("C5 F C - - - - - ", 300)
    }
    if (name == "3ROW" && value == FleetX[2]) {
        soundExpression.giggle.play()
    } else if (name == "3ROW" && value != FleetX[2]) {
        music.playMelody("C5 F C - - - - - ", 300)
    }
    if (name == "4ROW" && value == FleetX[3]) {
        soundExpression.giggle.play()
    } else if (name == "4ROW" && value != FleetX[3]) {
        music.playMelody("C5 F C - - - - - ", 300)
    }
    if (name == "5ROW" && value == FleetX[4]) {
        soundExpression.giggle.play()
    } else if (name == "5ROW" && value != FleetX[4]) {
        music.playMelody("C5 F C - - - - - ", 300)
    }
})
function Hit () {
    radio.sendValue("1ROW-HIT", FleetX[0])
    soundExpression.giggle.play()
}
let Cursor: game.LedSprite = null
let FleetX: number[] = []
let HorizontalMove = 0
let VerticalMove = 0
radio.setGroup(1)
let Player1 = randint(0, 4)
VerticalMove = 1
HorizontalMove = 1
let Ship1X = randint(0, 4)
let Ship2X = randint(0, 4)
let Ship3X = randint(0, 4)
let Ship4X = randint(0, 4)
let Ship5X = randint(0, 4)
let Ship1Y = 0
let Ship2Y = 1
let Ship3Y = 2
let Ship4Y = 3
let Ship5Y = 4
FleetX = [Ship1X, Ship2X, Ship3X, Ship4X, Ship5X]
let FleetY = [Ship1Y, Ship2Y, Ship3Y, Ship4Y, Ship5Y]
Cursor = game.createSprite(0, 0)
Cursor.set(LedSpriteProperty.Blink, 600)
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        game.pause()
        led.plotBrightness(Ship1X, Ship1Y, 10)
        led.plotBrightness(Ship2X, Ship2Y, 10)
        led.plotBrightness(Ship3X, Ship3Y, 10)
        led.plotBrightness(Ship4X, Ship4Y, 10)
        led.plotBrightness(Ship5X, Ship5Y, 10)
        game.resume()
    }
})
basic.forever(function () {
    while (input.logoIsPressed()) {
        if (Cursor.get(LedSpriteProperty.Y) == 0) {
            radio.sendValue("1ROW", Cursor.get(LedSpriteProperty.X))
        }
        if (Cursor.get(LedSpriteProperty.Y) == 1) {
            radio.sendValue("2ROW", Cursor.get(LedSpriteProperty.X))
        }
        if (Cursor.get(LedSpriteProperty.Y) == 2) {
            radio.sendValue("3ROW", Cursor.get(LedSpriteProperty.X))
        }
        if (Cursor.get(LedSpriteProperty.Y) == 3) {
            radio.sendValue("4ROW", Cursor.get(LedSpriteProperty.X))
        }
        if (Cursor.get(LedSpriteProperty.Y) == 4) {
            radio.sendValue("5ROW", Cursor.get(LedSpriteProperty.X))
        }
    }
})
