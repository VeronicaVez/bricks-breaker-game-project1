class Brick {
    constructor(gameScreen, gameSize, posLeftPercentage, posTopPercentage, color) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize


        this.bricksSize = {
            width: 100,
            height: 40
        }

        this.bricksPosition = {
            left: (posLeftPercentage / 100) * this.gameSize.width,
            top: (posTopPercentage / 100) * this.gameSize.height
        };

        this.bricksSpecs = {
            background: color
        }


        this.element = document.createElement("div")
        this.element.style.position = 'absolute'
        this.element.style.width = `${this.bricksSize.width}px`
        this.element.style.height = `${this.bricksSize.height}px`
        this.element.style.top = `${this.bricksPosition.top}px`
        this.element.style.left = `${this.bricksPosition.left}px`
        this.element.style.backgroundColor = this.bricksSpecs.background
        this.gameScreen.appendChild(this.element)

    }
}