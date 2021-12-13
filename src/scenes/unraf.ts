import Phaser from 'phaser'

export default class unraf extends Phaser.Scene{
    private gif: any
    constructor(){
        super("unraf");
    }
    preload(){
        this.load.spritesheet("unraf", "./images/unraf2.png",{frameWidth: 640, frameHeight: 360, startFrame: 0, endFrame: 39})
    }
    create(){

        this.anims.create({
            key: 'unraf',
            frames: this.anims.generateFrameNumbers('unraf', { start: 0, end: 39}),
            repeat: 0,
            frameRate: 12
        });

        this.gif = this.add.sprite(1920/2,1080/2,"unraf").setScale(3,3)

        this.gif.play("unraf",true)
        .on("animationcomplete", ()=> this.scene.start("prepreloader"))

    }



}