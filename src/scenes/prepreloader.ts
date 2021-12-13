import Phaser from 'phaser'

export default class prepreloader extends Phaser.Scene{

    constructor(){
        super("prepreloader");

    }
    preload(){
        this.load.image("preloader1", "images/preloader1.png")
        this.load.image("preloader2", "images/preloader2.png")
        this.load.image("preloader3", "images/preloader3.png")
        this.load.image("preloader4", "images/preloader4.png")
        this.load.image("preloader5", "images/preloader5.png")
        this.load.image("preloader6", "images/preloader6.png")
        this.load.image("preloader7", "images/preloader7.png")
        this.load.image("preloader8", "images/preloader8.png")
        this.load.image("preloader9", "images/preloader9.png")
        this.load.image("preloader10", "images/preloader10.png")
        this.load.image("preloader11", "images/preloader11.png")
        this.load.image("preloader12", "images/preloader12.png")
    }
    create(){
        this.cambia1 = this.time.addEvent({ delay: 250, callback: this.cambia1, callbackScope: this, loop: false });
        this.cambia2 = this.time.addEvent({ delay: 500, callback: this.cambia2, callbackScope: this, loop: false });
        this.cambia3 = this.time.addEvent({ delay: 750, callback: this.cambia3, callbackScope: this, loop: false });
        this.cambia4 = this.time.addEvent({ delay: 1000, callback: this.cambia4, callbackScope: this, loop: false });
        this.cambia5 = this.time.addEvent({ delay: 1250, callback: this.cambia5, callbackScope: this, loop: false });
        this.cambia6 = this.time.addEvent({ delay: 1500, callback: this.cambia6, callbackScope: this, loop: false });
        this.cambia7 = this.time.addEvent({ delay: 1750, callback: this.cambia7, callbackScope: this, loop: false });
        this.cambia8 = this.time.addEvent({ delay: 2000, callback: this.cambia8, callbackScope: this, loop: false });
        this.cambia9 = this.time.addEvent({ delay: 2250, callback: this.cambia9, callbackScope: this, loop: false });
        this.cambia10 = this.time.addEvent({ delay: 2500, callback: this.cambia10, callbackScope: this, loop: false });
        this.cambia11 = this.time.addEvent({ delay: 2750, callback: this.cambia11, callbackScope: this, loop: false });
        this.cambia12 = this.time.addEvent({ delay: 3000, callback: this.cambia12, callbackScope: this, loop: false });


    }


    cambia1(){
        this.add.image(0,0,"preloader1").setOrigin(0,0);
        console.log("1");
    }
    cambia2(){
        this.add.image(0,0,"preloader2").setOrigin(0,0);
        console.log("2")
    }
    cambia3(){
        this.add.image(0,0,"preloader3").setOrigin(0,0);
        console.log("3")
    }
    cambia4(){
        this.add.image(0,0,"preloader4").setOrigin(0,0);
        console.log("4")
    }
    cambia5(){
        this.add.image(0,0,"preloader5").setOrigin(0,0);
        console.log("5")
    }
    cambia6(){
        this.add.image(0,0,"preloader6").setOrigin(0,0);
        console.log("6")
    }
    cambia7(){
        this.add.image(0,0,"preloader7").setOrigin(0,0);
        console.log("7")
    }
    cambia8(){
        this.add.image(0,0,"preloader8").setOrigin(0,0);
        console.log("8")
    }
    cambia9(){
        this.add.image(0,0,"preloader9").setOrigin(0,0);
        console.log("9")
    }
    cambia10(){
        this.add.image(0,0,"preloader10").setOrigin(0,0);
        console.log("10")
    }
    cambia11(){
        this.add.image(0,0,"preloader11").setOrigin(0,0);   
        console.log("11")
    }
    cambia12(){
        this.add.image(0,0,"preloader12").setOrigin(0,0)
        .setInteractive()
        .on('pointerdown', () => this.scene.start("preloader"))
        console.log("12")
    }


}