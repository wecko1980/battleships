enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    Cursor.change(LedSpriteProperty.Y, VerticalMove)
    if (Cursor.get(LedSpriteProperty.Y) == 0) {
        VerticalMove = 1
    }
    if (Cursor.get(LedSpriteProperty.Y) == 4) {
        VerticalMove = -1
    }
})
function ShipSink () {
    basic.showLeds(`
        . . . . .
        . . # . .
        # . # . #
        # # # # #
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . # # .
        . # # . .
        . # # # #
        . # # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . # # . .
        . # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        . # # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        `)
    basic.pause(200)
}
input.onButtonPressed(Button.AB, function () {
    game.pause()
    led.plotBrightness(Ship1X, Ship1Y, 10)
    led.plotBrightness(Ship2X, Ship2Y, 10)
    led.plotBrightness(Ship3X, Ship3Y, 10)
    led.plotBrightness(Ship4X, Ship4Y, 10)
    led.plotBrightness(Ship5X, Ship5Y, 10)
    basic.pause(3000)
    game.resume()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "GameOver") {
        game.gameOver()
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
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
        radio.sendValue("1HIT", FleetX[0])
        FleetX[0] = ListItemEmpty
        ShipsRemaining += -1
        ShipSink()
    }
    if (name == "1ROW" && value != FleetX[0]) {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
    }
    if (name == "1HIT" && value == FleetX[0]) {
        led.plotBrightness(FleetX[0], 0, 80)
    }
    if (name == "2ROW" && value == FleetX[1]) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
        FleetX[1] = ListItemEmpty
        ShipsRemaining += -1
        ShipSink()
    }
    if (name == "2ROW" && value != FleetX[1]) {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
    }
    if (name == "3ROW" && value == FleetX[2]) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
        FleetX[2] = ListItemEmpty
        ShipsRemaining += -1
        ShipSink()
    }
    if (name == "3ROW" && value != FleetX[2]) {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
    }
    if (name == "4ROW" && value == FleetX[3]) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
        FleetX[3] = ListItemEmpty
        ShipsRemaining += -1
        ShipSink()
    }
    if (name == "4ROW" && value != FleetX[3]) {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
    }
    if (name == "5ROW" && value == FleetX[4]) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
        FleetX[4] = ListItemEmpty
        ShipsRemaining += -1
        ShipSink()
    }
    if (name == "5ROW" && value != FleetX[4]) {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
    }
    if (ShipsRemaining == 0) {
        radio.sendString("GameOver")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
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
})
let Cursor: game.LedSprite = null
let FleetX: number[] = []
let Ship5Y = 0
let Ship4Y = 0
let Ship3Y = 0
let Ship2Y = 0
let Ship1Y = 0
let Ship5X = 0
let Ship4X = 0
let Ship3X = 0
let Ship2X = 0
let Ship1X = 0
let ListItemEmpty = 0
let ShipsRemaining = 0
let HorizontalMove = 0
let VerticalMove = 0
radio.setGroup(1)
VerticalMove = 1
HorizontalMove = 1
ShipsRemaining = 5
ListItemEmpty = -1
Ship1X = randint(0, 4)
Ship2X = randint(0, 4)
Ship3X = randint(0, 4)
Ship4X = randint(0, 4)
Ship5X = randint(0, 4)
Ship1Y = 0
Ship2Y = 1
Ship3Y = 2
Ship4Y = 3
Ship5Y = 4
FleetX = [Ship1X, Ship2X, Ship3X, Ship4X, Ship5X]
let FleetY = [Ship1Y, Ship2Y, Ship3Y, Ship4Y, Ship5Y]
Cursor = game.createSprite(0, 0)
Cursor.set(LedSpriteProperty.Blink, 600)
basic.forever(function () {
	
})
