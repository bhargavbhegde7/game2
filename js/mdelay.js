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
//document.write("hello");  
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
  //_________________________________//collide left upper box
  //_________________________________  
  case "b3":
  if(pos>=269)
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
  
  //_________________________________//collide right upper box
  //_________________________________
	case "b4":
  if(pos>=269)
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
  if(pos2<=397)
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
  if(pos2<=397)
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
  if(pos4<=530)
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
  if(pos4<=530)
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
}//mDelay ends from 78th line