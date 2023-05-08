basic.forever(function on_forever() {
    basic.showLeds(`
        . # . # .
                # . # . #
                # . . . #
                . # . # .
                . . # . .
    `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    `)
    basic.pause(1000)
})
