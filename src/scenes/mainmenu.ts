import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class mainmenu extends Phaser.Scene{

    private sonidoOn: any
    private sonidoclick:any
    private musicamenu:any
    private estaSonando: any
    constructor(){
        super("menu");
    }
    preload(){
    }
    
    create(){
        //background
        this.scene.stop("ui")
        this.scene.stop("ui2")
        this.scene.stop("ui3")
        this.scene.stop("pierdenivel")
        this.scene.stop("pierdenivel2")
        this.scene.stop("pierdenivel3")
        this.scene.stop("menuingame")
        this.scene.stop("menuingame2")
        this.scene.stop("menuingame3")
        this.scene.stop("gananivel")
        this.scene.stop("gananivel2")
        this.scene.stop("gananivel3")




        this.add.image(0,0, "main_menu").setOrigin(0,0)

        if(!this.game.sound.mute){
            this.sonidoOn = this.add.sprite(1700,150, "sonidoOn").setScale(0.1)
            .setInteractive()
            .on("pointerdown", () =>{this.toggleMute()})
        }
        else {
            this.game.sound.mute = true;
            this.sonidoOn = this.add.sprite(1700,150, "sonidoOff").setScale(0.1)
            .setInteractive()
            .on("pointerdown", () =>{this.toggleMute()})

        }

        this.sonidoclick = this.sound.add("sonidoclick",{
            volume: 0.5,
            loop:false,
        })

        this.musicamenu = this.sound.add("musicamenu",{
            volume: 0.4,
            loop:true,
        })
    
        //botones
        const boton_jugar = this.add.image(1920 / 2, 400, "boton").setScale(0.78)
        .setInteractive()
        .on('pointerdown', () => this.scene.start("game"))
        .on('pointerdown', () => this.sonidoclick.play())

        
		this.add.text(912, 380, getPhrase("JUGAR"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})

        const boton_tutorial = this.add.image(1920 / 2, 550, "boton").setScale(0.78)
        .setInteractive()
        .on('pointerdown', () => this.musicamenu.stop())
        .on('pointerdown', () => this.scene.start("tutorial"))
        .on('pointerdown', () => this.sonidoclick.play())

        const palabra_tutorial = this.add.text( 886, 530, "TUTORIAL",{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})

        const boton_informacion = this.add.image(1920 / 2, 700, "boton").setScale(0.78)
        .setInteractive()
        .on('pointerdown', () => this.musicamenu.stop())
        .on('pointerdown', () => this.scene.start("informacion"))
        .on('pointerdown', () => this.sonidoclick.play())

        this.add.text(853, 680, getPhrase("INFORMACIÓN"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})
        
        
        const boton_creditos = this.add.image(1920 / 2, 850, "boton").setScale(0.78)
        .setInteractive()
        .on('pointerdown', () => this.musicamenu.stop())
        .on('pointerdown', () => this.scene.start("creditos"))
        .on('pointerdown', () => this.sonidoclick.play())
        
        this.add.text(887, 830, getPhrase("CREDITOS"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})
        

    
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