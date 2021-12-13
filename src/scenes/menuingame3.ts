import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class menuingame3 extends Phaser.Scene{
    private sonidoOn: any
    private sonidoclick: any
    constructor(){
        super("menuingame3");
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

        if(!this.game.sound.mute){
            this.sonidoOn = this.add.sprite(1920/2,160, "sonidoOn").setScale(0.05)
            .setInteractive()
            .on("pointerdown", () =>{this.toggleMute()})
        }
        else {
            this.game.sound.mute = true;
            this.sonidoOn = this.add.sprite(1920/2,180, "sonidoOff").setScale(0.05)
            .setInteractive()
            .on("pointerdown", () =>{this.toggleMute()})

        }
        //botones
        const boton_reanudar = this.add.image(1920 / 2, 300, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.resume("game3");this.scene.resume("ui3");this.scene.stop("menuingame3")})
        .on("pointerdown", () => this.sonidoclick.play())
        this.add.text(812, 252, getPhrase("ingamereanudar"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})

        const boton_tutorial = this.add.image(1920 / 2, 550, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game3");this.scene.stop("ui3");this.scene.start("tutorial")})
        .on("pointerdown", () => this.sonidoclick.play())
        const tutorial = this.add.text( 812, 506, "TUTORIAL",{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})

        const boton_salir = this.add.image(1920 / 2, 800, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game3");this.scene.stop("ui3");this.scene.start("menu")})
        .on("pointerdown", () => this.sonidoclick.play())
        this.add.text(865, 753, getPhrase("ingamesalir"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})


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