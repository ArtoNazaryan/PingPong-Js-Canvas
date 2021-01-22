		let score1=0
		let score2=0
class Game extends Grafic{
	constructor(){
		super()
		this.ball=new Ball()
		this.paddle1=new Paddle(0,165)
		this.paddle2=new Paddle(989,165)
	}
	play(){
		let a=Math.round(Math.random())
		let r=Math.round(Math.random())
		this.ball.create()
		this.paddle1.create()
		this.paddle2.create()
			this.keydown()
		setInterval(()=>{
			this.clear()
			this.change()
			this.paddle1.middleline()
			if(a==0){
			if(r==0){			
			this.ball.movedown()
			}
			else if(r==1){
				this.ball.moveup()
			}
			}
			else if(a==1){
			if(r==0){			
			this.ball.moveleftdown()
			}
			// meki depqum verev
			else if(r==1){
				this.ball.moveleftup()
			}			
			}
		this.paddle1.move()
		this.paddle2.move()
		this.paddle2.dy=0
		this.paddle1.dy=0
		},25)
	}
	clear(){
		this.ctx.beginPath()
		this.ctx.clearRect(0,0,1000,800)
		this.ctx.closePath()
	}
	change(){
			//Player1
			this.ctx.font="50px serif"
			this.ctx.fillStyle="white"
			this.ctx.fillText(score1,200,50)
			//Playere2
			this.ctx.fillStyle="white"
			this.ctx.fillText(score2,800,50)
		if(this.ball.y-11<=0 || this.ball.y+11>=this.canvas.height){
			this.s.play() 
			this.ball.dy*=-1
		}
		if(this.ball.x-15<0){
			score2+=1
			this.g.play()
			this.ball.x=500
			this.ball.y=225
			this.ball.dy=this.getR(8)+3
			this.ball.dy*=-1
			this.ball.dx*=-1
		}
		else if(this.ball.x+15>this.canvas.width){
			score1+=1
			this.g.play()
			this.ball.x=500
			this.ball.y=225
			this.ball.dy=this.getR(8)+3
			this.ball.dy*=-1
			this.ball.dx*=-1
		}
		//!!!!!!!!!!!!!!!!paddle strike!!!!!!!!!!!!!!!!!!!!!!!!
		if(this.ball.x+12>=this.paddle2.x && 
			this.ball.y>=this.paddle2.y-20 && this.ball.y<=this.paddle2.y+this.paddle2.h+7){
			this.s.play()
			this.ball.dy=this.getR(8)+3
			this.ball.dy*=-1
			this.ball.dx*=-1
		}
		if(this.ball.x-23<=this.paddle1.x &&
		 this.ball.y>=this.paddle1.y-20 && this.ball.y<=this.paddle1.y+this.paddle1.h+7){		
			this.s.play()
			this.ball.dy=this.getR(8)+3
			this.ball.dy*=-1
			this.ball.dx*=-1
		}
	}
	keydown(){
		document.addEventListener("keydown",(e)=>{
			if(e.key=="ArrowUp" && this.paddle2.y>0){
				this.paddle2.dy=-30
			}
			if(e.key=="ArrowDown" && this.paddle2.y+135<=450){
				this.paddle2.dy=30
			}
			if(e.key=="w" && this.paddle1.y>0){
				this.paddle1.dy=-30
			}
			if(e.key=="s" && this.paddle1.y+135<=450){
				this.paddle1.dy=30
			}
		})
	}
}
let game=new Game()
game.play()
