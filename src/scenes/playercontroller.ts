import Phaser from "phaser"
import StateMachine from "../stateMachine/stateMachine"
export default class barcoController
{
    private barco: Phaser.Physics.Arcade.Sprite
    private scene: Phaser.Scene
    private stateMachine: StateMachine
    //private cursores: Phaser.Types.Input.Keyboard.CursorKeys
    private cursor? :Phaser.Input.InputPlugin
    private pointer: any
    private target: any
    private velocidad: any
    private firstClick = true
   

    constructor(scene: Phaser.Scene, barco: Phaser.Physics.Arcade.Sprite, cursores: Phaser.Types.Input.Keyboard.CursorKeys){
        this.scene = scene
        this.barco = barco      
        //this.cursores = cursores
        this.pointer = scene.input.activePointer;
        this.stateMachine = new StateMachine(this, "barco")
        this.target = new Phaser.Math.Vector2()
        this.barco.setDataEnabled();
        this.barco.setFriction(0,0)
  
        this.barco.data.set('caminadoX', false);
        this.barco.data.set('caminandoY', false);
        this.barco.data.set('mouseX', this.barco.x);
        this.barco.data.set('mouseY', this.barco.y);
        this.barco.data.set('X',0);
        this.barco.data.set('Y',0);
        this.velocidad = 15

        this.stateMachine.addState("idle",{
            onEnter: this.idleOnEnter,
            onUpdate: this.idleOnUpdate

        })
        .addState("walk",{
            onEnter: this.walkOnEnter,
            onUpdate: this.moverPersonaje
        })
        .setState("idle")


    }

    update(dt: number){
        this.stateMachine.update(dt)

        
    }

    private idleOnEnter(){  
        console.log("idleOnEnter")
        this.barco.setVelocity(0,0)
    }

    private idleOnUpdate(){

    //     if (this.pointer.isDown && !this.firstClick){
    //         console.log('clic')
    //         this.target.x = this.pointer.x
    //         this.target.y = this.pointer.y
    //         this.stateMachine.setState("walk")
    //     }

    //     if(this.target.y < 160){
    //         this.barco.setVelocity(0,0)
    //         this.stateMachine.setState("idle")
    //     }    
    //     else if (this.target.y > 970){
    //         this.stateMachine.setState("idle")
    //     }
    //     this.firstClick = false


    }

    private walkOnEnter(){
        console.log("walkOnEnter")
    }

    // private walkOnUpdate(){
    //     var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.barco.x, this.barco.y, this.target.x, this.target.y);
    //     this.barco.setAngle(angle+90);
    //      var distance = Phaser.Math.Distance.Between(this.barco.x, this.barco.y, this.target.x, this.target.y);
        
    //     console.log('distancia '+ distance)
    //     console.log('target '+ this.target.x+ ' '+ this.target.y)
    //     console.log('barco '+ this.barco.x +' '+ this.barco.y)

    //     if (this.barco.body.touching){
    //         this.stateMachine.setState("idle")
    //     }

    //     if (distance > 5) {
    //         this.scene.physics.moveTo(this.barco, this.target.x, this.target.y, 300);
    //         this.stateMachine.setState("walk")
        
            
    //     } else {
    //         this.barco.setVelocity(0,0)
    //         this.stateMachine.setState("idle")
    //     }

    // }


    
    public setX(x){
        this.barco.data.set('mouseX', x);
        console.log("mouseX")
    }
    public setY(y){
        this.barco.data.set('mouseY', y);
        console.log("mouseY")
    }
  
    public setCaminarX (x){
        this.barco.data.set('caminandoX', x);
    }
  
    public setCaminarY (y){
        this.barco.data.set('caminandoY', y);
    }
  
    
    public getX(){
        return this.barco.getData('X')
    }
  
    public getY(){
        return this.barco.getData('Y')
    }
  

    public moverPersonaje (){
      
        /////// controles de variables /////
       if (this.barco.body.velocity.x>15){
        this.barco.setVelocityX(15)
       }
       if (this.barco.body.velocity.y>15){
        this.barco.setVelocityY(15)
       }
  
  
        /////////// seteo los valores de x e y///////////
  
      
        this.barco.data.set('X',this.barco.x);
        this.barco.data.set('Y',this.barco.y);
  
  
     //////////// actualización  de  movimiento ////////// 
       //  const velocidad = 15;
  
         if (!this.barco){
  
             return
         }
         
         ///// manejo del mersonaje X ////
  
           if (this.barco.x<0 ) {
              this.barco.setVelocityX(0);
              this.barco.x=0 
             
             
  
               }
           else if (this.barco.x>1800 ) {
                 this.barco.x=1800
                 this.barco.setVelocityX(0);
               
           }
      
         if( this.barco.x < this.barco.data.get ('mouseX') && this.barco.body.velocity.x<0 ){
             this.barco.setVelocityX(0);
         
         }
  
         else if(this.barco.x > this.barco.data.get ('mouseX') && this.barco.body.velocity.x>0 ){
             this.barco.setVelocityX(0);
            
         }
        
         if(this.barco.x < this.barco.data.get ('mouseX') && this.barco.data.get('caminandoX')==true){
             
          this.muevebarcoX(this.velocidad,false)
          
         }
         else if(this.barco.x > this.barco.data.get ('mouseX') && this.barco.data.get('caminandoX')==true){
             
          this.muevebarcoX(-this.velocidad,false)
          
  
         }
  
         if (this.barco.y<350 ) {
          
           this.barco.setVelocityY(0)
           this.barco.y=350
         
  
       }
       else if (this.barco.y>1920 ) {
           
           this.barco.setVelocityY(0);
           this.barco.y=1920
          
  
       }
  
         if( this.barco.y < this.barco.data.get ('mouseY') && this.barco.body.velocity.y<0 ){
             this.barco.setVelocityY(0)
         
            
         }
  
         else if(this.barco.y > this.barco.data.get ('mouseY') && this.barco.body.velocity.y>0 ){
             this.barco.setVelocityY(0);
           
            
         }
        
         if(this.barco.y < this.barco.data.get ('mouseY') && this.barco.data.get('caminandoY')==true){
          this.muevebarcoY(this.velocidad,false)
         
             
           
         }
         else if(this.barco.y > this.barco.data.get ('mouseY') && this.barco.data.get('caminandoY')==true){
          
          this.muevebarcoY(-this.velocidad,false)
        }
   
      }
  
       muevebarcoY(velocidad,Camina){
        this.barco.setVelocityY(velocidad);
        this.barco.data.set ('caminandoY', Camina)
       }
  
       muevebarcoX(velocidad,Camina){
        this.barco.setVelocityX(velocidad);
        this.barco.data.set ('caminandoX', Camina)
       }

    

}