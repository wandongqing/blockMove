Ball.prototype.moveY=function(){
	
	   this.ball.style.top=this.Ypos+"px";
//	   	console.log(1)
	   if(this.Yon==0){
	   	   this.Ypos+=this.step;
	   }else{
	   	   this.Ypos-=this.step;
	   }
	   if(this.Ypos+this.ball.offsetHeight>this.browserHight){
	   	  this.Ypos=this.browserHight-this.ball.offsetHeight;
	   	  this.Yon=1;
	   }
	   if(this.Ypos<0){
	   	  this.Ypos=0;
	   	  this.Yon=0;
	   }
}
