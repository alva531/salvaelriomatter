import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class gananivel3 extends Phaser.Scene{
    private puntuacion!: Phaser.GameObjects.Text

    private puntuacion1: any
    private puntuacion2: any
    private puntuacion3: any
    private puntuaciontotal: any
    private sonidoclick: any
    constructor(){
        super("gananivel3");
    }
    preload(){
    }
    

    create(){
        this.sonidoclick = this.sound.add("sonidoclick",{
            volume: 0.5,
            loop:false,
        })
        this.add.image(1920/2, 1080/2, "gananivel")
        this.add.text(600, 300, getPhrase("ganarsalvaelrio"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 80})

        this.puntuacion1 = this.registry.get("agarrabasura")

        this.puntuacion2 = this.registry.get("agarrabasura2")

        this.puntuacion3 = this.registry.get("agarrabasura3")

        this.puntuaciontotal = this.puntuacion1 + this.puntuacion2 + this.puntuacion3
    

        this.add.text(650,450, getPhrase("salvaelriopuntos") +this.puntuaciontotal,{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 72})

        const boton_salir = this.add.image(600, 780, "boton").setScale(0.6)
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game3");this.scene.stop("ui3");this.scene.stop("gananivel3");this.scene.start("menu")})

        this.add.text(500, 745, getPhrase("ingamesalir"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})

        const boton_siguiente = this.add.image(1320, 780, "boton").setScale(0.6)
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game3");this.scene.stop("ui3");this.scene.stop("pierdenivel3");this.scene.start("creditos2")})

        this.add.text(1220, 745, getPhrase("siguientenivelrio"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})
    }


}