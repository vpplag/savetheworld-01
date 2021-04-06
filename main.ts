input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(100)
    basic.clearScreen()
})
