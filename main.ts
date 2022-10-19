controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (RandomPick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (RandomPick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
function generate () {
    RandomPick = randint(0, 1)
    if (RandomPick == 0) {
        mySprite.sayText("Push A")
    } else {
        mySprite.sayText("Push B")
    }
}
let RandomPick = 0
let mySprite: Sprite = null
game.splash("Push A or B as Directed")
mySprite = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
info.startCountdown(20)
generate()
