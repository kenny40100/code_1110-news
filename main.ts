let _1 = 0
let _4 = 0
let y = 0
let x = 0
basic.forever(function () {
    y = 0
    x = 2
    for (let index = 0; index <= 2; index++) {
        for (let y = 0; y <= index; y++) {
            led.plot(index + 2, x)
            led.plot(x, index + 2)
            led.plot(2 - index, x)
            led.plot(x, 2 - index)
            basic.pause(100)
        }
        y += -1
    }
    _1 = 2
    _4 = 0
    for (let _42 = 0; _42 <= 2; _42++) {
        for (let _3 = 0; _3 <= _42; _3++) {
            led.unplot(_1, _42)
            led.unplot(_42, _1)
            led.unplot(4 - _42, _1)
            led.unplot(_1, 4 - _42)
            basic.pause(100)
        }
    }
})
