import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class musica extends Phaser.Scene{
    private musica: any
    private sonidorio: any

    constructor(){
        super("musica");
    }

    create(){

        this.musica = this.sound.add("musica1",{
            volume:0.2,
            loop:true,
        })

        this.sonidorio = this.sound.add("sonidorio",{
            volume: 0.02,
            loop:true,
        })

        this.musica.play()
        this.sonidorio.play()

    }



}