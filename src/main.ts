import 'regenerator-runtime/runtime'
import Phaser from 'phaser'
import preloader from './scenes/preloader'
import tutorial from './scenes/tutorial'
import mainmenu from './scenes/mainmenu'
import creditos from './scenes/creditos'
import informacion from './scenes/informacion'
import game from './scenes/game'
import UIscene from './scenes/UIscene'
import menuingame from './scenes/menuingame'
import gananivel from './scenes/gananivel1'
import pierdenivel from './scenes/pierdenivel1'
import idioma from './scenes/idioma'
import prepreloader from "./scenes/prepreloader"
import unraf from "./scenes/unraf"
import game2 from "./scenes/game2"
import UIscene2 from './scenes/UIscene2'
import gananivel2 from "./scenes/gananivel2"
import pierdenivel2 from "./scenes/pierdenivel2"
import creditos2 from "./scenes/creditos2"
import menuingame2 from "./scenes/menuingame2"
import game3 from "./scenes/game3"
import menuingame3 from "./scenes/menuingame3"
import UIscene3 from './scenes/UIscene3'
import gananivel3 from "./scenes/gananivel3"
import pierdenivel3 from "./scenes/pierdenivel3"
import musica from "./scenes/musica"



localStorage.clear();


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.FIT,
		parent: '',
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1920,
		height: 1080
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: false,
		}
	},
	scene: [unraf, prepreloader, preloader, idioma, musica, mainmenu, tutorial, informacion, creditos, game, game2,game3, UIscene,UIscene2,UIscene3, menuingame, menuingame2, menuingame3, gananivel, pierdenivel, gananivel2, pierdenivel2, gananivel3, pierdenivel3, creditos2]
}

export default new Phaser.Game(config)

/*unraf,prepreloader,preloader, idioma, mainmenu, tutorial, informacion, creditos,game*/