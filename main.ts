radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let letter = 0
radio.setGroup(2007)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (letter == 0) {
            radio.sendString("a")
        }
        if (letter == 1) {
            radio.sendString("b")
        }
        if (letter == 2) {
            radio.sendString("c")
        }
        if (letter == 3) {
            radio.sendString("d")
        }
        if (letter == 4) {
            radio.sendString("e")
        }
        if (letter == 5) {
            radio.sendString("f")
        }
        if (letter == 6) {
            radio.sendString("g")
        }
        if (letter == 7) {
            radio.sendString("h")
        }
        if (letter == 8) {
            radio.sendString("i")
        }
        if (letter == 9) {
            radio.sendString("j")
        }
        if (letter == 10) {
            radio.sendString("k")
        }
        if (letter == 11) {
            radio.sendString("l")
        }
        if (letter == 12) {
            radio.sendString("m")
        }
        if (letter == 13) {
            radio.sendString("n")
        }
        if (letter == 14) {
            radio.sendString("o")
        }
        if (letter == 15) {
            radio.sendString("p")
        }
        if (letter == 16) {
            radio.sendString("q")
        }
        if (letter == 17) {
            radio.sendString("r")
        }
        if (letter == 18) {
            radio.sendString("s")
        }
        if (letter == 19) {
            radio.sendString("t")
        }
        if (letter == 20) {
            radio.sendString("u")
        }
        if (letter == 21) {
            radio.sendString("v")
        }
        if (letter == 22) {
            radio.sendString("w")
        }
        if (letter == 23) {
            radio.sendString("x")
        }
        if (letter == 24) {
            radio.sendString("y")
        }
        if (letter == 25) {
            radio.sendString("z")
        }
        if (letter == 26) {
            radio.sendString("-")
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        letter += 1
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (letter == 0) {
        basic.showString("a")
    }
    if (letter == 1) {
        basic.showString("b")
    }
    if (letter == 2) {
        basic.showString("c")
    }
    if (letter == 3) {
        basic.showString("d")
    }
    if (letter == 4) {
        basic.showString("e")
    }
    if (letter == 5) {
        basic.showString("f")
    }
    if (letter == 6) {
        basic.showString("g")
    }
    if (letter == 7) {
        basic.showString("h")
    }
    if (letter == 8) {
        basic.showString("i")
    }
    if (letter == 9) {
        basic.showString("j")
    }
    if (letter == 10) {
        basic.showString("k")
    }
    if (letter == 11) {
        basic.showString("l")
    }
    if (letter == 12) {
        basic.showString("m")
    }
    if (letter == 13) {
        basic.showString("n")
    }
    if (letter == 14) {
        basic.showString("o")
    }
    if (letter == 15) {
        basic.showString("p")
    }
    if (letter == 16) {
        basic.showString("q")
    }
    if (letter == 17) {
        basic.showString("r")
    }
    if (letter == 18) {
        basic.showString("s")
    }
    if (letter == 19) {
        basic.showString("t")
    }
    if (letter == 20) {
        basic.showString("u")
    }
    if (letter == 21) {
        basic.showString("v")
    }
    if (letter == 22) {
        basic.showString("w")
    }
    if (letter == 23) {
        basic.showString("x")
    }
    if (letter == 24) {
        basic.showString("y")
    }
    if (letter == 25) {
        basic.showString("z")
    }
    if (letter == 26) {
        basic.showString("-")
    }
})
basic.forever(function () {
    if (letter == 27) {
        letter = 0
    }
})
