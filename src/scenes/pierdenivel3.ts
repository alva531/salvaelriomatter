import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class pierdenivel3 extends Phaser.Scene{
    private puntuacion!: Phaser.GameObjects.Text
    private sonidoclick: any
    constructor(){
        super("pierdenivel3");
    }
    preload(){
    }
    
    create(){
        this.sonidoclick = this.sound.add("sonidoclick",{
            volume: 0.5,
            loop:false,
        })
        this.add.image(1920/2, 1080/2, "gananivel")
        //this.add.text(600, 300, "ETAPA PERDIDA", {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 80})
        this.add.text(600, 300, getPhrase("perdersalvaelrio"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 80})
        this.add.text(650,450, getPhrase("salvaelriopuntos") +this.registry.get("agarrabasura"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 72})

        const boton_salir = this.add.image(600, 780, "boton").setScale(0.6)
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game3");this.scene.stop("ui3");this.scene.stop("pierdenivel3");this.scene.start("menu")})

        this.add.text(500, 745, getPhrase("ingamesalir"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})

        const boton_reintentar = this.add.image(1320, 780, "boton").setScale(0.6)
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game3");this.scene.stop("ui3");this.scene.stop("pierdenivel3");this.scene.start("game3")})

        this.add.text(1180, 745, getPhrase("reintentarrio"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})
    }


}