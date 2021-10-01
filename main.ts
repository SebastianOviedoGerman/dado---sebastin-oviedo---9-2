input.onButtonPressed(Button.A, function () {
    MODO = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    if (MODO == 0) {
        basic.showNumber(1 + randint(0, 5))
    }
    if (MODO == 1) {
        VALOR = 1 + randint(0, 5)
        if (VALOR == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (VALOR == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # . # .
                . . . . .
                . . . . .
                `)
        }
        if (VALOR == 3) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
                `)
        }
        if (VALOR == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        }
        if (VALOR == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
        if (VALOR == 6) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    MODO = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let VALOR = 0
let MODO = 0
MODO = 0
basic.forever(function () {
	
})
