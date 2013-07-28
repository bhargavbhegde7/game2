//type 3 is bottom type 4 is right type 1 is left type 2 is top
var pos=0,pos2=590,pos4=800,mbox,stop=true,duration=10/*0.5*/,increment=4/*0.4*/,up=false,down=false,hits=0,count=0,level=1,mHits=0,hitIncrement=true,left=false,right=false;
//var pos1=pos+"px";
function startGame()
{
if(!stop)//if stop is false i e game is going on stop it
{
document.write("thank you for playing");
document.getElementById("start_stop").value="START";
}
else//stop is true game is not started yet then start it
{
document.getElementById("start_stop").value="STOP";
stop=false;
startMove();
}
}
function startMove()
{
if(mHits>=3)
{
document.write(" you have crossed the maximum number of hits (3) in a single level. game over ");
document.write(" summary: tries= "+count+" total hits= "+hits+" last level "+level+" please reload to play again ");
}
if(count>0)
{var x=count%10;}
if(x==0)
{
//you go to next level
level++;
document.getElementById("myPlayer1").src="images/player.png";
duration=duration-1;
if(duration<=0)
{
increment=increment+2;
}
mHits=0;//new level
}
 var mRandom=Math.random();
 //document.write(mRandom);
 if(mRandom>=0&&mRandom<0.125)
 {
 mDelay("b1",1);
 }
 else if(mRandom>=0.125&&mRandom<0.25)
 {
 mDelay("b2",1);
 }
 else if(mRandom>=0.25&&mRandom<0.375)
 {
 mDelay("b3",2);
 }
 else if(mRandom>=0.375&&mRandom<0.5)
 {
 mDelay("b4",2);
 }
 //-------------------------------------------------
 //other eight boxes
 else if(mRandom>=0.5&&mRandom<0.625)
 {
 mDelay("b5",3);//bottom left
 }
 else if(mRandom>=0.625&&mRandom<0.75)
 {
 mDelay("b6",3);//bottom right
 }
 else if(mRandom>=0.75&&mRandom<0.875)
 {
 mDelay("b7",4);//right top
 }
 else 
 {
 mDelay("b8",4);//right bottom
 }
 //-------------------------------------------------
}
function mDelay(box,type)
{
//-----------------------------------
//document.getElementById("myPlayer1").src="images/2hits.png";
//-----------------------------------
setTimeout(
  function() 
  {
  switch(box){
  //__________________________________//collide upper box
  //__________________________________  
  case "b1":
  if(pos>=400)
  {
  if(!down)
  {  
  if(hitIncrement){
  hits++;
  mHits++;
  hitIncrement=false;
  if(mHits==1)
  {document.getElementById("myPlayer1").src="images/1hit.png";}
  if(mHits==2)
  {document.getElementById("myPlayer1").src="images/2hits.png";}
  //document.getElementById("explosion").src="";
  }
  }
  }
  break;  
  //_________________________________//collide lower box
  //_________________________________  
  case "b2":
  if(pos>=400)
  {
  if(!up)
  {  
  if(hitIncrement)
  {hits++;
  mHits++;
  hitIncrement=false;
  if(mHits==1)
  {document.getElementById("myPlayer1").src="images/1hit.png";}
  if(mHits==2)
  {document.getElementById("myPlayer1").src="images/2hits.png";}
  //document.getElementById("explosion").src="";
  }  
  }
  }
  break;
  //_________________________________//collide left box
  //_________________________________  
  case "b3":
  if(pos>=315)
  {
  if(!right)
  {  
  if(hitIncrement)
  {hits++;
  mHits++;
  hitIncrement=false;
  if(mHits==1)
  {document.getElementById("myPlayer1").src="images/1hit.png";}
  if(mHits==2)
  {document.getElementById("myPlayer1").src="images/2hits.png";}
  //document.getElementById("explosion").src="";
  }  
  }
  }
  break;
  
  //_________________________________//collide right box
  //_________________________________
	case "b4":
  if(pos>=315)
  {
  if(!left)
  {  
  if(hitIncrement)
  {hits++;
  mHits++;
  hitIncrement=false;
  if(mHits==1)
  {document.getElementById("myPlayer1").src="images/1hit.png";}
  if(mHits==2)
  {document.getElementById("myPlayer1").src="images/2hits.png";}
  //document.getElementById("explosion").src="";
  }  
  }
  }
  break;
  //--------------------------------another 4 boxes
  case "b5"://bottom left
  if(pos2<=315)
  {
  if(!right)
  {  
  if(hitIncrement)
  {hits++;
  mHits++;
  hitIncrement=false;
  if(mHits==1)
  {document.getElementById("myPlayer1").src="images/1hit.png";}
  if(mHits==2)
  {document.getElementById("myPlayer1").src="images/2hits.png";}
  //document.getElementById("explosion").src="";
  }  
  }
  }
  break;
  case "b6"://bottom right
  if(pos2<=315)
  {
  if(!left)
  {  
  if(hitIncrement)
  {hits++;
  mHits++;
  hitIncrement=false;
  if(mHits==1)
  {document.getElementById("myPlayer1").src="images/1hit.png";}
  if(mHits==2)
  {document.getElementById("myPlayer1").src="images/2hits.png";}
  //document.getElementById("explosion").src="";
  }  
  }
  }
  break;
  case "b7"://right top
  if(pos4<=400)
  {
  if(!down)
  {  
  if(hitIncrement)
  {hits++;
  mHits++;
  hitIncrement=false;
  if(mHits==1)
  {document.getElementById("myPlayer1").src="images/1hit.png";}
  if(mHits==2)
  {document.getElementById("myPlayer1").src="images/2hits.png";}
  //document.getElementById("explosion").src="";
  }  
  }
  }
  break;
  case "b8"://right bottom
  if(pos4<=400)
  {
  if(!up)
  {  
  if(hitIncrement)
  {hits++;
  mHits++;
  hitIncrement=false;
  if(mHits==1)
  {document.getElementById("myPlayer1").src="images/1hit.png";}
  if(mHits==2)
  {document.getElementById("myPlayer1").src="images/2hits.png";}
  //document.getElementById("explosion").src="";
  }  
  }
  }
  break;
  //---------------------------------
  }
if(type==1||type==2)  {
pos=pos+increment;//4
var pos1=pos+"px";
}
if(type==3)  {
pos2=pos2-increment;//4
var pos3=pos2+"px";
}
if(type==4)  {
pos4=pos4-increment;//4
var pos5=pos4+"px";
}
document.getElementById(box).style.position="absolute";
if(type==1)//left boxes
{
document.getElementById(box).style.left=pos1;
}
if(type==2)//top boxes
{
document.getElementById(box).style.top=pos1;
}
//------------------------------------------
if(type==3)//bottom boxes
{
document.getElementById(box).style.top=pos3;
}
if(type==4)//right boxes
{
document.getElementById(box).style.left=pos5;
}
//__________________________________________
document.getElementById("hits").innerHTML=hits;
document.getElementById("count").innerHTML=count;
document.getElementById("level").innerHTML=level;
document.getElementById("mHits").innerHTML=mHits;
//__________________________________________
//the followong is to check if the boxes have reached the end and bring them back to the beginning position
if(type==1)//type1
{
if(pos>=900)
{
hitIncrement=true;
count++;
pos=0;
startMove();
up=false;
down=false;
}
else{
mDelay(box,type);
}
}
if(type==2)//type2
{
if(pos>=585)
{
hitIncrement=true;
count++;
pos=0;
startMove();
left=false;
right=false;
}
else{
mDelay(box,type);
}
}
//----------------------------
//type 3 and 4
if(type==3)
{
if(pos2<=0)
{
hitIncrement=true;
count++;
pos2=590;
startMove();
left=false;
right=false;
}
else{
mDelay(box,type);
}
}
//type 4

if(type==4)
{
if(pos4<=0)
{
hitIncrement=true;
count++;
pos4=800;
startMove();
up=false;
down=false;
}
else{
mDelay(box,type);
}
}//type 4 ends
//----------------------------
  }/*function ends*/,duration);//0.5
}//mDelay ends
//________________________________________________________________________
//________________________________________________________________________
var makeUpHigh=function()
{
up=true;
}
var makeDownHigh=function()
{
down=true;
}
function makeRightHigh()
{
right=true;
}
function makeLeftHigh()
{
left=true;
}
$(document).keydown(function(e) {

  switch(e.keyCode)
  {
  case 37://left
  $("div.myPlayer").animate({
      left: "-=50"
	  },"fast",makeLeftHigh());
	$("div.myPlayer").animate({
      left: "+=50"
	  },"fast");
	  break;
	  case 38://up
	  $("div.myPlayer").animate({
      top: "-=50"
	  },"fast",makeUpHigh());
	$("div.myPlayer").animate({
      top: "+=50"
	  },"fast");
	  break;
	  case 39://right
	  $("div.myPlayer").animate({
      left: "+=50"
	  },"fast",makeRightHigh());
	$("div.myPlayer").animate({
      left: "-=50"
	  },"fast");
	  break;
	  case 40://down
	  $("div.myPlayer").animate({
      top: "+=50"
	  },"fast",makeDownHigh());
	$("div.myPlayer").animate({
      top: "-=50"
	  },"fast");
	  break;
	  default:
	  break;  
  }
  });
//________________________________________________________________________
//________________________________________________________________________