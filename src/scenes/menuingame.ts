import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class menuingame extends Phaser.Scene{
    private sonidoOn: any
    private sonidoclick: any
    constructor(){
        super("menuingame");
    }
    preload(){
    }
    
    create(){

        //background
        this.add.image(1920/2,1080/2, "menu_ingame")

        this.sonidoclick = this.sound.add("sonidoclick",{
            volume: 0.5,
            loop:false,
        })
        //botones


        if(!this.game.sound.mute){
            this.sonidoOn = this.add.sprite(1920/2,160, "sonidoOn").setScale(0.05)
            .setInteractive()
            .on("pointerdown", () =>{this.toggleMute()})
        }
        else {
            this.game.sound.mute = true;
            this.sonidoOn = this.add.sprite(1920/2,160, "sonidoOff").setScale(0.05)
            .setInteractive()
            .on("pointerdown", () =>{this.toggleMute()})

        }
        const boton_reanudar = this.add.image(1920 / 2, 300, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.resume("game");this.scene.resume("ui");this.scene.stop("menuingame")})
        .on("pointerdown", () => this.sonidoclick.play())
        this.add.text(812, 252, getPhrase("ingamereanudar"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})

        const boton_tutorial = this.add.image(1920 / 2, 550, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game");this.scene.stop("ui");this.scene.start("tutorial")})
        .on("pointerdown", () => this.sonidoclick.play())
        const tutorial = this.add.text( 812, 506, "TUTORIAL",{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})


        const boton_salir = this.add.image(1920 / 2, 800, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("menuingame");this.scene.stop("ui");this.scene.stop("game");this.scene.start("menu")})
        .on("pointerdown", () => this.sonidoclick.play())
        this.add.text(865, 753, getPhrase("ingamesalir"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})


    }
    
    update(){



    }


    toggleMute() {
        if (!this.game.sound.mute) {
            this.game.sound.mute = true;
            console.log("muted")
            this.sonidoOn.setTexture("sonidoOff")
        } else {
            this.game.sound.mute = false;
            console.log("nao nao")
            this.sonidoOn.setTexture("sonidoOn")
        }
    }
}