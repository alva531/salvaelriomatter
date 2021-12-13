import Phaser from 'phaser'
import { EN_US, ES_AR, PT_BR } from '~/enums/languages'
import { FETCHED, FETCHING, READY, TODO } from '~/enums/status'
import { getTranslations, getPhrase } from '~/services/translations'

export default class idioma extends Phaser.Scene{
    
    private textSpanish
    private textGerman
    private textEnglish
    private textPortuguese

    private updatedTextInScene
    private updatedString = 'COMENZAR'
    private wasChangedLanguage = TODO
    private sonidoclick: any
    
    constructor(){
        super("idioma");
    }

    create(){
        console.log("IDIOMA")
        this.add.image(0,0, "main_menu").setOrigin(0,0)

        this.sonidoclick= this.sound.add("sonidoclick",{
            volume:0.5,
            loop: false
        })

        const { width, height } = this.scale


		const buttonSpanish = this.add.image(width * 0.3, height * 0.30, "botonES")
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
				this.getTranslations(ES_AR), this.crearboton()
			})
            .on('pointerdown', () => this.sonidoclick.play())


        const buttonEnglish = this.add.image(width * 0.5, height * 0.30, "botonUS")
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
				this.getTranslations(EN_US), this.crearboton()
			})
            .on('pointerdown', () => this.sonidoclick.play())
            


        const buttonPortuguese = this.add.image(width * 0.7, height * 0.30, "botonBR")
			.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
				this.getTranslations(PT_BR), this.crearboton()
			})
            .on('pointerdown', () => this.sonidoclick.play())


    }


    update(){
        // console.log(this.updatedTextInScene)
        if(this.wasChangedLanguage === FETCHED){
            this.wasChangedLanguage = READY;
            this.updatedTextInScene.setText(getPhrase(this.updatedString));
        }
    }


    async getTranslations(language){
        this.wasChangedLanguage = FETCHING
        await getTranslations(language)
        this.wasChangedLanguage = FETCHED
        // si solo se tiene un menu para elegir las opciones de idiomas conviene cargar aca la misma
        // this.scene.start('play')
    }

    crearboton(){
        const boton = this.add.image(1920 / 2, 550, "boton")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))
        .on('pointerdown', () => this.scene.start("musica"))
        .on('pointerdown', () => this.sonidoclick.play())

        this.updatedTextInScene = this.add.text(886, 530, getPhrase(this.updatedString) {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32}    )

    }

}