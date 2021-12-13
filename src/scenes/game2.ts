import Phaser from 'phaser'
import PlayerController from './playercontroller'

export default class game2 extends Phaser.Scene
{
    private cursores!: Phaser.Types.Input.Keyboard.CursorKeys
    private barco!: Phaser.Physics.Arcade.Sprite
    private olas!: Phaser.Physics.Arcade.Group
    private basura!: Phaser.Physics.Arcade.Group
    private velocidad: any
    private spawny: any
    private playerController?: PlayerController
    private puntuacionbasura!: number
    private barra: any
    private contaminacion!: number
    private olasY: any
    private olasY2: any
    private olasY3: any
    private olasList: any
    private sonidoclick: any
    private musica: any
	constructor()
	{
		super('game2')
	}

    init(){
        this.cursores = this.input.keyboard.createCursorKeys()
    }

    preload(){
        
    }
    
    create()
    {
        this.scene.stop("ui")
        this.scene.stop("pierdenivel")
        this.scene.run("ui2")
        this.puntuacionbasura = 0;
        this.contaminacion = 100


        
        ///////////////////////////TILEMAP//////////////////
        const map = this.make.tilemap({key: "nivel2"})  //carga tilemap
        const tileset = map.addTilesetImage("tileset3", "tileset3")  //carga tileset
        const terreno = map.createLayer("terreno", tileset) //carga layer
        terreno.setCollisionByProperty({borde: true}) //colision por propiedad
        const objectsLayer = map.getObjectLayer('spawner')
        /////////////////////////////////////////////////

        this.olas = this.physics.add.group({
        })

        this.basura = this.physics.add.group({
        })
        
        ////////////BARCO////////////////
        this.barco = this.physics.add.sprite(200,500 ,"barco")
        this.barco.setSize(80,80) ////CAMBIO/////
        this.physics.add.collider(this.barco, terreno) //COLISIONES BARCO TERRENO
        this.physics.add.overlap(this.barco, this.basura, this.sumaPunto, undefined, this)
        
        this.playerController = new PlayerController(this, this.barco, this.cursores)
        
        
        //GENERACION DE BASURA//

        this.time.addEvent({ delay: 1200, callback: this.numerosrandom, callbackScope: this, loop: true });
        this.time.addEvent({ delay: 1200, callback: this.onSecond2, callbackScope: this, loop: true });
        this.time.addEvent({ delay: 5000, callback: this.onSecond3, callbackScope: this, loop: true });
        ////////////////////////
        
        this.barra = this.physics.add.staticGroup()
        this.barra.create(-100, 1080/2, "barra")
        this.physics.add.collider(this.barra, this.basura, this.restaPunto, undefined, this)
        
        
            ////render tiles colisionadas//////////d/  ESTA ACTIVADO
            // const debugGraphics = this.add.graphics().setAlpha(0.75);
            // terreno.renderDebug(debugGraphics, {
            //     tileColor: null, // Color of non-colliding tiles
            //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
            //     faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
            // });
            /////////////////////////////////a//
           
            
        
        }
        

        

        update(t: number, dt: number){
            
            if (!this.playerController)
            {
                return
        }
        this.playerController.update(dt)

        

        if(!this.cursores || !this.barco){
            return
        }


    }
  
    onSecond2(){
        this.numerosrandom()
        const spriteList = ["basura1", "basura2", "basura3", "basura4","basura5","basura6","basura7","basura8","basura9","basura10","basura11"]
        const spriteEnemy = spriteList[Phaser.Math.Between(0,10)]
        this.basura.create(2000, this.spawny, spriteEnemy)
        this.basura.setVelocityX(-300)

    }

    onSecond3(){
        this.numerosrandom2()
        this.olasList = ["ola1", "ola2", "ola3", "ola4", "ola5"]
        const olasMath = this.olasList[Phaser.Math.Between(0,4)]
        this.olas.create(2000, this.olasY, olasMath)
        this.olas.setVelocityX(-300)
        this.olas.playAnimation(olasMath)

        this.olasList = ["ola1", "ola2", "ola3", "ola4", "ola5"]
        const olasMath2 = this.olasList[Phaser.Math.Between(0,4)]
        this.olas.create(2000, this.olasY2, olasMath2)
        this.olas.setVelocityX(-300)
        this.olas.playAnimation(olasMath2)


        this.olasList = ["ola1", "ola2", "ola3", "ola4", "ola5"]
        const olasMath3 = this.olasList[Phaser.Math.Between(0,4)]
        this.olas.create(2000, this.olasY3, olasMath3)
        this.olas.setVelocityX(-300)
        this.olas.playAnimation(olasMath3)
    }

    onSecond4(){
        
    }

    sumaPunto(barco, basura){
        console.log(basura)
        basura.destroy()
        this.puntuacionbasura += 1
        this.registry.set("agarrabasura2", this.puntuacionbasura)
    }

    numerosrandom(){
        this.spawny = Phaser.Math.Between(140, 950)
        this.velocidad= Phaser.Math.Between(-100, -300)
    }

    numerosrandom2(){
        this.olasY= Phaser.Math.Between(140, 950)
        this.olasY2= Phaser.Math.Between(140, 950)
        this.olasY3= Phaser.Math.Between(140, 950)
    }

    restaPunto(barra, basura){
        basura.destroy()
        this.contaminacion -=10
        this.registry.set("restapuntos2", this.contaminacion)
        console.log(this.contaminacion)
    }

    
}
