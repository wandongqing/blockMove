Ball.prototype.moveX=function(){
	
	   this.ball.style.left=this.Xpos+"px";
//	   	console.log(1)
	   if(this.Xon==0){
	   	   this.Xpos+=this.step;
	   }else{
	   	   this.Xpos-=this.step;
	   }
	   if(this.Xpos+this.ball.offsetWidth>this.browserWidth){
	   	  this.Xpos=this.browserWidth-this.ball.offsetWidth;
	   	  this.Xon=1;
	   }
	   if(this.Xpos<0){
	   	  this.Xpos=0;
	   	  this.Xon=0;
	   }
}
