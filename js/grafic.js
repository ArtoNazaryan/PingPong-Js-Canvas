class Grafic{
	constructor(){
		this.canvas=document.getElementById("bord")
		this.ctx=this.canvas.getContext("2d")
		this.s=document.getElementById("strike")
		this.g=document.getElementById("goal")
	}
	getR(limit){
		return parseInt(Math.random()*limit)
	}
}
