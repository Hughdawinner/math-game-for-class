namespace SpriteKind {
    export const nothing = SpriteKind.create()
    export const eyebrows_raised = SpriteKind.create()
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level == 1) {
        if (hint_one_was_recieved == false) {
            if (answer1 > 0) {
                if (answer1 % 10 > 0) {
                    game.splash("The number is higher than", the_equasions_first_number + the_equasions_second_number - randint(3, 6))
                    game.splash("The number is less than", the_equasions_first_number + the_equasions_second_number + randint(3, 6))
                    hint_one_was_recieved = true
                } else {
                    game.showLongText("You answered the question correctly you silly goose!", DialogLayout.Top)
                }
            } else {
                game.showLongText("Stop asking for hints before you answer the question", DialogLayout.Top)
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `)
})
let the_equasions_third_number = 0
let Jackolantern_1: Sprite = null
let the_equasions_second_number = 0
let the_equasions_first_number = 0
let level = 0
let answer1 = 0
let hint_one_was_recieved = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.x += 16
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level6`)
let The_question_was_received = false
hint_one_was_recieved = false
let the_second_question_was_recieved = false
answer1 = 0
let answer2 = 0
let answer3 = 0
let answer4 = 0
let answer5 = 0
let answer6 = 0
let answer7 = 0
let answer8 = 0
let answer9 = 0
let answer10 = 0
level = 1
let pumpkin_times_found = 0
the_equasions_first_number = randint(3, 10)
the_equasions_second_number = randint(3, 10)
let Game_won = false
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.nothing)
mySprite2.setPosition(136, 79)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f b b b b b f . . . . . 
    . . . f b b f f f b b f . . . . 
    . . . f b f . . . f b f . . . . 
    . . . f b f . . . f b f . . . . 
    . . f f f f f f f f f f f . . . 
    . f c b b b b b b b b b c f . . 
    . f b b b b b b b b b b c f . . 
    . f b b b b f f f b b b c f . . 
    . f b b b b f f f b b b c f . . 
    . f b b b b b f b b b b c f . . 
    . f b b b b b f b b b b c f . . 
    . f b b b b b b b b b c c f . . 
    . f c c c c c c c c c c c f . . 
    . . f f f f f f f f f f f . . . 
    `,img`
    . . . . . f f f f f . . . . . . 
    . . . . f b b b b b f . . . . . 
    . . . f b b f f f b b f . . . . 
    . . . f b f . . . f b f . . . . 
    . . . f b f . . . f b f . . . . 
    . . f f f f f f f f f f f . . . 
    . f c b b b b b b b b b c f . . 
    . f b b b b b b b b b b c f . . 
    . f b b b b f f f b b b c f . . 
    . f b b b b f f f b b b c f . . 
    . f b b b b b f b b b b c f . . 
    . f b b b b b f b b b b c f . . 
    . f b b b b b b b b b c c f . . 
    . f c c c c c c c c c c c f . . 
    . . f f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `],
1000,
true
)
forever(function () {
    if (The_question_was_received == false) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile2`)) {
            if (controller.A.isPressed()) {
                game.showLongText("Add the two numbers together, then go to the door to the right to type the answer", DialogLayout.Top)
                game.splash(the_equasions_first_number, the_equasions_second_number)
                The_question_was_received = true
                tileUtil.replaceAllTiles(assets.tile`myTile2`, assets.tile`myTile9`)
            }
        }
        if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile8`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile30`)) {
            if (controller.A.isPressed()) {
                game.showLongText("It's locked. you gotta find out how to open it!", DialogLayout.Top)
                pause(1000)
            }
        }
    }
    if (answer1 % 10 == 0) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile2`)) {
            if (controller.A.isPressed()) {
                game.showLongText("Add the two numbers together, then go to the door through the maze to type the answer", DialogLayout.Top)
                game.splash(the_equasions_first_number, the_equasions_second_number)
                the_second_question_was_recieved = true
                tileUtil.replaceAllTiles(assets.tile`myTile2`, assets.tile`myTile9`)
            }
        }
    }
    if (The_question_was_received == true) {
        if (answer1 > 0 && answer1 % 10 == 0) {
        	
        } else {
            if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile8`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile30`)) {
                if (controller.A.isPressed()) {
                    answer10 = answer9
                    answer9 = answer8
                    answer8 = answer7
                    answer7 = answer6
                    answer6 = answer5
                    answer5 = answer4
                    answer4 = answer3
                    answer3 = answer2
                    answer2 = answer1
                    answer1 = game.askForNumber("What is the answer?", 2)
                    if (answer1 == the_equasions_first_number + the_equasions_second_number) {
                        answer1 = answer1 * 10
                        game.splash("Correct!")
                        game.splash("Now solve the maze!")
                        tiles.setCurrentTilemap(tilemap`level1`)
                        tileUtil.replaceAllTiles(assets.tile`myTile8`, assets.tile`myTile`)
                        tileUtil.replaceAllTiles(assets.tile`myTile30`, assets.tile`myTile`)
                        tiles.setWallAt(tiles.getTileLocation(8, 5), false)
                        tiles.setWallAt(tiles.getTileLocation(8, 4), false)
                        the_equasions_first_number = randint(3, 10)
                        the_equasions_second_number = randint(3, 10)
                        tileUtil.replaceAllTiles(assets.tile`myTile9`, assets.tile`myTile2`)
                        sprites.destroy(mySprite2)
                    } else {
                        answer1 = answer1 * 10
                        answer1 = answer1 + 1
                        game.splash("Incorrect")
                        game.showLongText("Press enter or x if you need a hint", DialogLayout.Top)
                        pause(1000)
                    }
                }
            }
        }
    }
    if (the_second_question_was_recieved == true) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile13`)) {
            if (controller.A.isPressed()) {
                answer10 = answer9
                answer9 = answer8
                answer8 = answer7
                answer7 = answer6
                answer6 = answer5
                answer5 = answer4
                answer4 = answer3
                answer3 = answer2
                answer2 = answer1
                answer1 = game.askForNumber("What is the answer?", 2)
                if (answer1 == the_equasions_first_number + the_equasions_second_number) {
                    answer1 = answer1 * 10
                    game.splash("Correct!")
                    game.splash("Time for a new area")
                    tiles.setCurrentTilemap(tilemap`level4`)
                    Jackolantern_1 = sprites.create(img`
                        d d d d d d d d d d d d d d d d 
                        d d d d d d d d d d d d d d d d 
                        d d d f f f d d d d d d d d d d 
                        d d f b b b f d d d d d d d d d 
                        d d d d d d d d d f f f f f d d 
                        d d d d f d d d d d d f d d d d 
                        d d d d d d d d d d d d d d d d 
                        d d d d d d d d d d d d d d d d 
                        d d f f f f f f f f f f f f d d 
                        d d d d d d d d d d d d d d d d 
                        d d d d d d d d d d d d d d d d 
                        d d d d d d b d d b d d d d d d 
                        d d d d d d d b b d d d d d d d 
                        d d d d d d d d d d d d d d d d 
                        d d d d d d d d d d d d d d d d 
                        d d d d d d d d d d d d d d d d 
                        `, SpriteKind.eyebrows_raised)
                    tiles.placeOnRandomTile(Jackolantern_1, assets.tile`tile34`)
                    tiles.placeOnRandomTile(mySprite, assets.tile`tile35`)
                    animation.runImageAnimation(
                    Jackolantern_1,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . f f f 7 f f f . . . . . 
                        . . . f 4 4 4 f 4 4 4 f . . . . 
                        . . f e 4 f 4 4 4 f 4 4 f . . . 
                        . . f e 4 f f 4 f f 4 4 f . . . 
                        . . f e 4 4 4 4 4 4 4 4 f . . . 
                        . . f e f f 4 f 4 f f 4 f . . . 
                        . . f e e f f f f f e e f . . . 
                        . . . f e e e e e e e f . . . . 
                        . . . . f f f f f f f . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . f f f 7 f f f . . . . . 
                        . . . f 4 4 4 f 4 4 4 f . . . . 
                        . . f e 4 f f 4 f f 4 4 f . . . 
                        . f e e 4 4 4 4 4 4 4 4 4 f . . 
                        . f e f f 4 4 f 4 4 f f 4 f . . 
                        . f e e f f f f f f f e e f . . 
                        . . f e e e e e e e e e f . . . 
                        . . . f f f f f f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . . f f 7 f f . . . . . . 
                        . . . . f 4 4 f 4 4 f . . . . . 
                        . . . f 4 4 f 4 f 4 4 f . . . . 
                        . . . f e 4 f 4 f 4 4 f . . . . 
                        . . . f e 4 4 4 4 4 4 f . . . . 
                        . . . f e 4 4 4 4 4 4 f . . . . 
                        . . . f e f 4 f 4 f 4 f . . . . 
                        . . . f e e f f f e e f . . . . 
                        . . . . f e e e e e f . . . . . 
                        . . . . . f f f f f . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . . f f 7 f f . . . . . . 
                        . . . . f 4 4 f 4 4 f . . . . . 
                        . . . f 4 4 f 4 f 4 4 f . . . . 
                        . . . f e 4 f 4 f 4 4 f . . . . 
                        . . . f e 4 4 4 4 4 4 f . . . . 
                        . . . f e 4 4 4 4 4 4 f . . . . 
                        . . . f e f 4 f 4 f 4 f . . . . 
                        . . . f e e f f f e e f . . . . 
                        . . . . f e e e e e f . . . . . 
                        . . . . . f f f f f . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . . f f 7 f f . . . . . . 
                        . . . . f 4 4 f 4 4 f . . . . . 
                        . . . f 4 4 f 4 f 4 4 f . . . . 
                        . . . f e 4 f 4 f 4 4 f . . . . 
                        . . . f e 4 4 4 4 4 4 f . . . . 
                        . . . f e 4 4 4 4 4 4 f . . . . 
                        . . . f e f 4 f 4 f 4 f . . . . 
                        . . . f e e f f f e e f . . . . 
                        . . . . f e e e e e f . . . . . 
                        . . . . . f f f f f . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . f f f 7 f f f . . . . . 
                        . . . f 4 4 4 f 4 4 4 f . . . . 
                        . . f e 4 f f 4 f f 4 4 f . . . 
                        . f e e 4 4 4 4 4 4 4 4 4 f . . 
                        . f e f f 4 4 f 4 4 f f 4 f . . 
                        . f e e f f f f f f f e e f . . 
                        . . f e e e e e e e e e f . . . 
                        . . . f f f f f f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . f f f 7 f f f . . . . . 
                        . . . f 4 4 4 f 4 4 4 f . . . . 
                        . . f e 4 f 4 4 4 f 4 4 f . . . 
                        . . f e 4 f f 4 f f 4 4 f . . . 
                        . . f e 4 4 4 4 4 4 4 4 f . . . 
                        . . f e f f 4 f 4 f f 4 f . . . 
                        . . f e e f f f f f e e f . . . 
                        . . . f e e e e e e e f . . . . 
                        . . . . f f f f f f f . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . f f f 7 f f f . . . . . 
                        . . . f 4 4 4 f 4 4 4 f . . . . 
                        . . f e 4 f 4 4 4 f 4 4 f . . . 
                        . . f e 4 f f 4 f f 4 4 f . . . 
                        . . f e 4 4 4 4 4 4 4 4 f . . . 
                        . . f e f f 4 f 4 f f 4 f . . . 
                        . . f e e f f f f f e e f . . . 
                        . . . f e e e e e e e f . . . . 
                        . . . . f f f f f f f . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . f f f 7 f f f . . . . . 
                        . . . f 4 4 4 f 4 4 4 f . . . . 
                        . . f e 4 f 4 4 4 f 4 4 f . . . 
                        . . f e 4 f f 4 f f 4 4 f . . . 
                        . . f e 4 4 4 4 4 4 4 4 f . . . 
                        . . f e f f 4 f 4 f f 4 f . . . 
                        . . f e e f f f f f e e f . . . 
                        . . . f e e e e e e e f . . . . 
                        . . . . f f f f f f f . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . f f f 7 f f f . . . . . 
                        . . . f 4 4 4 f 4 4 4 f . . . . 
                        . . f e 4 f 4 4 4 f 4 4 f . . . 
                        . . f e 4 f f 4 f f 4 4 f . . . 
                        . . f e 4 4 4 4 4 4 4 4 f . . . 
                        . . f e f f 4 f 4 f f 4 f . . . 
                        . . f e e f f f f f e e f . . . 
                        . . . f e e e e e e e f . . . . 
                        . . . . f f f f f f f . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . f f f 7 f f f . . . . . 
                        . . . f 4 4 4 f 4 4 4 f . . . . 
                        . . f e 4 f 4 4 4 f 4 4 f . . . 
                        . . f e 4 f f 4 f f 4 4 f . . . 
                        . . f e 4 4 4 4 4 4 4 4 f . . . 
                        . . f e f f 4 f 4 f f 4 f . . . 
                        . . f e e f f f f f e e f . . . 
                        . . . f e e e e e e e f . . . . 
                        . . . . f f f f f f f . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . f f f 7 f f f . . . . . 
                        . . . f 4 4 4 f 4 4 4 f . . . . 
                        . . f e 4 f 4 4 4 f 4 4 f . . . 
                        . . f e 4 f f 4 f f 4 4 f . . . 
                        . . f e 4 4 4 4 4 4 4 4 f . . . 
                        . . f e f f 4 f 4 f f 4 f . . . 
                        . . f e e f f f f f e e f . . . 
                        . . . f e e e e e e e f . . . . 
                        . . . . f f f f f f f . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f . . . . . . . 
                        . . . . . . . f 7 f . . . . . . 
                        . . . . f f f 7 f f f . . . . . 
                        . . . f 4 4 4 f 4 4 4 f . . . . 
                        . . f e 4 f 4 4 4 f 4 4 f . . . 
                        . . f e 4 f f 4 f f 4 4 f . . . 
                        . . f e 4 4 4 4 4 4 4 4 f . . . 
                        . . f e f f 4 f 4 f f 4 f . . . 
                        . . f e e f f f f f e e f . . . 
                        . . . f e e e e e e e f . . . . 
                        . . . . f f f f f f f . . . . . 
                        `],
                    100,
                    true
                    )
                    level = 2
                    color.Darken.startScreenEffect(100)
                    tiles.setWallAt(Jackolantern_1.tilemapLocation(), true)
                } else {
                    answer1 = answer1 * 10
                    answer1 = answer1 + 1
                    game.splash("Incorrect")
                    game.showLongText("Press enter or x if you need a hint", DialogLayout.Top)
                    pause(1000)
                }
            }
        }
    } else {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile13`)) {
            if (controller.A.isPressed()) {
                game.showLongText("Go to the table to get the equasion", DialogLayout.Top)
                pause(100)
            }
        }
    }
    if (level == 2) {
        if (mySprite.tilemapLocation() == Jackolantern_1.tilemapLocation()) {
            controller.moveSprite(mySprite, 0, 0)
            the_equasions_first_number = randint(3, 10)
            the_equasions_second_number = randint(3, 10)
            the_equasions_third_number = randint(3, 10)
            game.showLongText("He he he! add together the numbers 3!", DialogLayout.Center)
            game.splash(the_equasions_first_number, the_equasions_second_number)
            game.splash(the_equasions_third_number)
            answer10 = answer9
            answer9 = answer8
            answer8 = answer7
            answer7 = answer6
            answer6 = answer5
            answer5 = answer4
            answer4 = answer3
            answer3 = answer2
            answer2 = answer1
            answer1 = game.askForNumber("What is the answer?", 2)
            if (answer1 == the_equasions_first_number + (the_equasions_third_number + the_equasions_second_number)) {
                game.showLongText("Catch me again... if you can!", DialogLayout.Center)
                if (mySprite.tilemapLocation() == Jackolantern_1.tilemapLocation()) {
                    tiles.placeOnRandomTile(Jackolantern_1, assets.tile`tile34`)
                } else {
                	
                }
            }
        }
    }
})
forever(function () {
    if (Game_won == true) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.nothing)
        sprites.destroyAllSpritesOfKind(SpriteKind.eyebrows_raised)
        tiles.setCurrentTilemap(tilemap`level5`)
        game.showLongText("Credits: Jacob: ideas, head designer, basic coding. Hugh: coding. Ken: art, ideas, animations", DialogLayout.Center)
    }
})
forever(function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f f c f f f f f f c . 
        . c c c e e f f f f c c . 
        . f f f f e e f f c c f . 
        . f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
