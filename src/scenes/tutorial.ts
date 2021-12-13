import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class tutorial extends Phaser.Scene{
    private sonidoclick: any
    private gif1: any
    private gif2: any
    private gif3: any
    constructor(){
        super("tutorial");
    }

    preload(){
        

        
    }
    
    create(){

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

        this.sonidoclick = this.sound.add("sonidoclick",{
            volume: 0.5,
            loop:false,
        })

        this.scene.stop("ui")

        this.add.image(0,0, "tutorial").setOrigin(0,0)
        this.add.image(200, 1010, "boton").setScale(0.6)
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))
        .on('pointerdown', () => this.sonidoclick.play())
        //const comojugar = this.add.text( 630, 40, "¿CÓMO JUGAR?" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 90})
        this.add.text(630, 40, getPhrase("¿CÓMO JUGAR?"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 90})
        //const palabra_volver = this.add.text( 146, 990, "VOLVER" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})
        this.add.text(146, 990, getPhrase("VOLVER"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})

        this.add.text( 49, 217, getPhrase("titulotutorialsalvaelrio1"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        this.add.text( 49, 265, getPhrase("tutorialsalvaelrio1"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })
        
        this.add.text( 43, 352, getPhrase("titulotutorialsalvaelrio2"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        this.add.text( 49, 400, getPhrase("tutorialsalvaelrio2"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })

        this.add.text( 47, 492, getPhrase("titulotutorialsalvaelrio3"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        this.add.text( 49, 540, getPhrase("tutorialsalvaelrio3"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })

        this.add.text( 45, 645, getPhrase("titulotutorialsalvaelrio4"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        this.add.text( 49, 690, getPhrase("tutorialsalvaelrio4"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })
        
        this.add.text( 45, 790, getPhrase("titulotutorialsalvaelrio5"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        this.add.text( 49, 835, getPhrase("tutorialsalvaelrio5"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })

    // GIFS

        this.gif1 = this.add.sprite(1350,370,"mover").setScale(0.8)
        this.gif1.play("mover",true)

        this.gif2 = this.add.sprite(1570,580,"juntar").setScale(1)
        this.gif2.play("juntar",true)

        this.gif3 = this.add.sprite(1350,800,"chocar").setScale(1)
        this.gif3.play("chocar",true)
    
    }
    
}