import barracontaminacion from "./barracontaminacion"
import { getPhrase } from '~/services/translations'

export default class UIscene extends Phaser.Scene
{   

    private tiempo!: any
    private texto_puntuacion!: Phaser.GameObjects.Text
    private puntuacionbasura: any
    private textotiempo: any
    private numero_tiempo: any
    private puntuacion!: Phaser.GameObjects.Text
    private graphics!: Phaser.GameObjects.Graphics
    private percent!: any
    private cantidadContaminacion!: number
    private contaminacion: any
    private sonidoclick: any
    private musica: any
    private sonidorio: any
    private sonidobasura: any
    private sonidovictoria: any
    private sonidoderrota: any
    private escape:any
	constructor()
	{
		super('ui')
	}

    create(){

        this.graphics = this.add.graphics()
        this.cantidadContaminacion = 100
        this.setContaminacionBar(100)
        this.sonidoclick = this.sound.add("sonidoclick",{
            volume: 0.5,
            loop:false,
        })

        this.musica = this.sound.add("musica1",{
            volume:0.2,
            loop:true,
        })

        this.sonidobasura = this.sound.add("sonidobasura",{
            loop: false,
            volume: 0.4

        })
        this.sonidorio = this.sound.add("sonidorio",{
            volume: 0.02,
            loop:true,
        })

        this.sonidovictoria = this.sound.add("victoria",{
            volume: 0.7,
            loop: false,
        })

        this.sonidoderrota = this.sound.add("derrota",{
            volume: 0.7,
            loop: false,
        })
        this.escape = this.sound.add("escape",{
            volume: 0.4,
            loop:false,
        })
       
        //this.musica.play()
        //this.sonidorio.play()

        this.tiempo = 50
        //this.texto_puntuacion = this.add.text(800,30, "Puntuacion: ",{fontFamily: "Courier", fontSize: 32, fontStyle:"bold"})
        this.add.text(800,30, getPhrase("salvaelriopuntos"),{color: "white", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})

        this.puntuacion = this.add.text(1035,30, "0" ,{fontFamily: "Courier", fontSize: 32, fontStyle:"bold"})
        this.textotiempo = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });

        this.numero_tiempo = this.add.text(1650, 30, this.tiempo, {fontFamily: 'Courier', fontSize: 32, fontStyle:"bold"})
        //this.numero_tiempo = this.add.text(1300, 30, 'Tiempo restante: ', { fontFamily: 'Courier', fontSize: 32, fontStyle:"bold"});
        this.add.text(1300, 30, getPhrase("salvaelriotiempo"),{color: "white", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})

        //TUERCA
        
        this.add.image(1850, 50, "tuerca").setScale(0.15)
        .setInteractive()
        .on("pointerdown", () => {this.scene.run("menuingame");this.scene.pause("game");this.scene.pause("ui")})
        .on("pointerdown", () => this.sonidoclick.play())
        .on("pointerdown", () => console.log("abre menu ingame"))
        //hacer menu ingame
        
        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'agarrabasura'){
                this.puntuacion.setText(data)
                this.sonidobasura.play()
            }
            
            if (key === "restapuntos"){
                this.escape.play()
                this.setContaminacionBar(data)
            }
            if((data) <= -2){
                console.log("PIERDE UI 1")
                this.pierde()
            }
        });
        
    }
    


    onSecond(){
        this.numero_tiempo.setText(this.tiempo);
        this.tiempo = this.tiempo - 1;
        this.registry.set("tiempo", this.tiempo)
        if (this.tiempo == -1){
            this.scene.pause("ui")
            this.scene.pause("game")
            this.scene.run('gananivel');
            this.sonidovictoria.play()
            this.musica.stop()
            this.sonidorio.stop();
            console.log("gana")
        }
    }

    pierde(){
        console.log("cambio de escena")
        this.scene.pause("ui")
        this.scene.pause("game")
        this.scene.run('pierdenivel')
        this.sonidoderrota.play()
        this.musica.stop()
        this.sonidorio.stop();
    }



    private setContaminacionBar(data: number)
    {
        const width = 400
        this.percent = Phaser.Math.Clamp(data, 0,100) / 100
        this.graphics.clear()
        this.graphics.fillStyle(0x808080)
        this.graphics.fillRoundedRect(40,40,width,20,5)
        if (this.percent>0){
            this.graphics.fillStyle(0xa82305)
            this.graphics.fillRoundedRect(40,40,width*this.percent,20,5)
        }

    }
    
    
}