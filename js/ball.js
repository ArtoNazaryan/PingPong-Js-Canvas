class Ball extends Grafic{
	constructor(){
		super()
		this.z=15
		this.y=225
		this.x=500
		this.dx=9
		this.dy=9
		
	}
	create(){
		this.ctx.fillStyle="#fff"
		this.ctx.beginPath()
		this.ctx.shadowColor="#e88102"
		this.ctx.shadowBlur=12
		this.ctx.arc(this.x,this.y,this.z, 0, 360)
		this.ctx.closePath()
		this.ctx.fill()
	}
	movedown(){
		this.x+=this.dx
		this.y+=this.dy
		this.create()
	}
moveup(){
		this.x+=this.dx
		this.y-=this.dy
		this.create()
	}
moveleftup(){
		this.x-=this.dx
		this.y-=this.dy
		this.create()
	}
moveleftdown(){
		this.x-=this.dx
		this.y+=this.dy
		this.create()
	}
} 





















