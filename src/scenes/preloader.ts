import Phaser from 'phaser'

export default class preloader extends Phaser.Scene
{
	constructor()
	{
		super('preloader')
	}

	preload()
    {
        this.load.image("tileset", "assets/tileset.png")
        this.load.image("tileset3", "assets/tileset3.png")
        this.load.tilemapTiledJSON("nivel1", "assets/nivel1.json")
        this.load.tilemapTiledJSON("nivel2", "assets/nivel2.json")
        this.load.tilemapTiledJSON("nivel3", "assets/nivel3.json")
        this.load.image("barco", "images/barco.png")
        this.load.image("boton", "images/boton.png")
        this.load.image("botonES", "images/boton_ES.png")
        this.load.image("botonBR", "images/boton_BR.png")
        this.load.image("botonUS", "images/boton_US.png")
        this.load.image("botonazul", "images/boton_azul.png")
        this.load.image("boton_jugar", "images/boton_jugar.png");
        this.load.image("main_menu", "images/main_menu.png")
        this.load.image("boton_creditos", "images/boton_creditos.png");
        this.load.image("boton_informacion", "images/boton_informacion.png");
        this.load.image("boton_tutorial", "images/boton_tutorial.png");
        this.load.image("tutorial", "images/tutorial.png")
        this.load.image("creditos", "images/creditos.png")
        this.load.image("boton_volver", "images/boton_volver.png")
        this.load.image("informacion", "images/informacion.png")
        this.load.image("tuerca", "images/tuerca.png")
        this.load.image("menu_ingame", "images/menu_ingame.png")
        this.load.image("boton_tutorial2", "images/boton_tutorial2.png")
        this.load.image("boton_reanudar", "images/boton_reanudar.png")
        this.load.image("boton_salir", "images/boton_salir.png")
        this.load.image("barra", "images/barra.png")
        this.load.image("gananivel", "images/etapasuperada.png")
        this.load.image("sonidoOn", "./images/sonidoOn.png")
        this.load.image("sonidoOff", "./images/sonidoOff.png")
        this.load.image("basura1", "./images/basura1.png")
        this.load.image("basura2", "./images/basura2.png")
        this.load.image("basura3", "./images/basura3.png")
        this.load.image("basura4", "./images/basura4.png")
        this.load.image("basura5", "./images/basura5.png")
        this.load.image("basura6", "./images/basura6.png")
        this.load.image("basura7", "./images/basura7.png")
        this.load.image("basura8", "./images/basura8.png")
        this.load.image("basura9", "./images/basura9.png")
        this.load.image("basura10", "./images/basura10.png")
        this.load.image("basura11", "./images/basura11.png")
        this.load.image("piedra", "./images/piedra.png")
        this.load.image("rama3", "./images/rama3.png")
        this.load.image("rama2", "./images/rama2.png")
        this.load.image("tomas", "./images/tomas.png")
        this.load.image("julio", "./images/julio.png")
        this.load.image("alvaro", "./images/alvaro.png")
        this.load.image("gabriel", "./images/gabriel.png")
        this.load.spritesheet("mover", "./images/mover.png",{frameWidth: 345, frameHeight: 261, endFrame: 13})
        this.load.spritesheet("juntar", "./images/juntar.png",{frameWidth: 290, frameHeight: 172, endFrame: 11})
        this.load.spritesheet("chocar", "./images/chocar.png",{frameWidth: 294, frameHeight: 196, endFrame: 12})
        this.load.spritesheet("ola1", "./images/ola1.png",{frameWidth: 202, frameHeight: 202, endFrame: 4})
        this.load.spritesheet("ola2", "./images/ola2.png",{frameWidth: 202, frameHeight: 202, endFrame: 4})
        this.load.spritesheet("ola3", "./images/ola3.png",{frameWidth: 202, frameHeight: 202, endFrame: 4})
        this.load.spritesheet("ola4", "./images/ola4.png",{frameWidth: 202, frameHeight: 202, endFrame: 4})
        this.load.spritesheet("ola5", "./images/ola5.png",{frameWidth: 202, frameHeight: 202, endFrame: 4})
        this.load.audio("sonidorio", "./sfx/sonidorio.mp3")
        this.load.audio("sonidobasura", "./sfx/sonidobasura.mp3")
        this.load.audio("sonidoclick", "./sfx/sonidoclick.mp3")
        this.load.audio("musica1", "./sfx/musica1.mp3")
        this.load.audio("derrota", "./sfx/derrota.mp3")
        this.load.audio("escape", "./sfx/escape.wav")
        this.load.audio("victoria", "./sfx/victoria.wav")
        this.load.audio("musicamenu", "./sfx/musicamenu.mp3")
        this.registry.set("agarrabasura", 0)
        this.registry.set("agarrabasura2", 0)
        this.registry.set("agarrabasura3", 0)
    }

    create()
    {

        this.anims.create({
            key: 'ola1',
            frames: this.anims.generateFrameNumbers('ola1', { start: 0, end: 5}),
            repeat: -1,
            frameRate: 4
        });

        this.anims.create({
            key: 'ola2',
            frames: this.anims.generateFrameNumbers('ola2', { start: 0, end: 5 }),
            repeat: -1,
            frameRate: 4
        });
        this.anims.create({
            key: 'ola3',
            frames: this.anims.generateFrameNumbers('ola3', { start: 0, end: 5 }),
            repeat: -1,
            frameRate: 4
        });
        this.anims.create({
            key: 'ola4',
            frames: this.anims.generateFrameNumbers('ola4', { start: 0, end: 5 }),
            repeat: -1,
            frameRate: 4
        });
        this.anims.create({
            key: 'ola5',
            frames: this.anims.generateFrameNumbers('ola5', { start: 0, end: 5 }),
            repeat: -1,
            frameRate: 4
        });

        this.anims.create({
            key: 'ola5',
            frames: this.anims.generateFrameNumbers('ola5', { start: 0, end: 5 }),
            repeat: -1,
            frameRate: 4
        });

        this.anims.create({
            key: 'mover',
            frames: this.anims.generateFrameNumbers('mover', { start: 0, end: 13 }),
            repeat: -1,
            frameRate: 10
        });

        this.anims.create({
            key: 'juntar',
            frames: this.anims.generateFrameNumbers('juntar', { start: 0, end: 11 }),
            repeat: -1,
            frameRate: 10
        });

        this.anims.create({
            key: 'chocar',
            frames: this.anims.generateFrameNumbers('chocar', { start: 0, end: 12 }),
            repeat: -1,
            frameRate: 10
        });


        this.scene.start("idioma")

        
    }
}