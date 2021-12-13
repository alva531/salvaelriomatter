export default class barracontaminacion{
    private scene: Phaser.Scene
    private x: number
    private y: number
    private width: number

    private leftCap?: Phaser.GameObjects.Image
    private middleCap?: Phaser.GameObjects.Image
    private rightCap?: Phaser.GameObjects.Image
    constructor(scene: Phaser.Scene,x: number, y: number, width: number){
        this.scene = scene
        this.x = x
        this.y = y
        this.width = width
    }

    withLeftCap (cap: Phaser.GameObjects.Image){
        this.leftCap = cap.setOrigin(0,0.5)
        return this
    }

    withMiddleCap (middle: Phaser.GameObjects.Image){
        this.middleCap = middle.setOrigin(0,0.5)
        return this
    }

    withRightCap (right: Phaser.GameObjects.Image){
        this.rightCap = right.setOrigin(0,0.5)
        return this
    }
    
    layout(){

        if (this.middleCap){
            this.middleCap.displayWidth = this.width
        }

        this.layoutSegments()
        return this
    }

    animateToFill(fill: number, duration: number = 1000){
        if (!this.middleCap){
            return
        }

        const percent = Math.max(0, Math.min(1, fill))

        this.scene.tweens.add({
            targets: this.middleCap,
            displayWidth: this.width * percent,
            duration,
            ease: Phaser.Math.Easing.Sine.Out,
            onUpdate: () => {
                this.layoutSegments()
            }

        })

    }
    layoutSegments(){
        if( !this.leftCap || !this.middleCap || !this.rightCap){
            return this
        }

        this.leftCap.x = this.x
        this.leftCap.y = this.y
        this.middleCap.x = this.leftCap.x + this.leftCap.width
        this.middleCap.y = this.leftCap.y
        this.rightCap.x = this.middleCap.x + this.middleCap.displayWidth
        this.rightCap.y = this.middleCap.y
    }
}