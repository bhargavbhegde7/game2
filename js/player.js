var playerPosH=450,playerPosV=321,flag=true,flag1=true;
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
//--------------------------------
//--------------------------------
function pMoveBack(playerPos,pType)
{
setTimeout(
  function() 
  {

switch(pType)
{ 
case 'L':
  playerPos+=2;
  var posP2=playerPos+"px";
  document.getElementById("myPlayer").style.left=posP2;
  if(playerPos>=450)
  {flag1=false;
  flag=true;
  }
		if(flag1){pMoveBack(playerPos,pType); }
break;
case 'R':
playerPos-=2;
  var posP2=playerPos+"px";
  document.getElementById("myPlayer").style.left=posP2;
  if(playerPos<=450)
  {flag1=false;
  flag=true;
  }
		if(flag1){pMoveBack(playerPos,pType); }
break;
case 'U':
playerPos+=2;
  var posP2=playerPos+"px";
  document.getElementById("myPlayer").style.top=posP2;
  if(playerPos>=321)
  {flag1=false;
  flag=true;
  }
		if(flag1){pMoveBack(playerPos,pType); }
break;
case 'D':
playerPos-=2;
  var posP2=playerPos+"px";
  document.getElementById("myPlayer").style.top=posP2;
  if(playerPos<=321)
  {flag1=false;
  flag=true;
  }
		if(flag1){pMoveBack(playerPos,pType); }
break;
		}
  },0);
}
//--------------------------------
//--------------------------------
function pMove(playerPos,pType){
setTimeout(
  function() 
  {
	
	switch(pType)
	{
	case 'L':
	left=true;
	playerPos-=2;
	var posP=playerPos+"px";
	document.getElementById("myPlayer").style.left=posP;
	if(playerPos<=400){
	flag=false;
	flag1=true;
	pMoveBack(playerPos,'L');	
	}	
	break;
	case 'R':
	right=true;
	playerPos+=2;
	var posP=playerPos+"px";
	document.getElementById("myPlayer").style.left=posP;
	if(playerPos>=500){
	flag=false;
	flag1=true;
	pMoveBack(playerPos,'R');	
	}	
	break;
	case 'U':
	up=true;
	playerPos-=2;
	var posP=playerPos+"px";
	document.getElementById("myPlayer").style.top=posP;
	if(playerPos<=271){
	flag=false;
	flag1=true;
	pMoveBack(playerPos,'U');	
	}	
	break;
	case 'D':
	down=true;
	playerPos+=2;
	var posP=playerPos+"px";
	document.getElementById("myPlayer").style.top=posP;
	if(playerPos>=371){
	flag=false;
	flag1=true;
	pMoveBack(playerPos,'D');	
	}	
	break;
	}
	if(flag)
	pMove(playerPos,pType);	
  },0);
  }//pMove ends
//--------------------------------
//--------------------------------
$(document).keydown(function(e) {
  switch(e.keyCode)
  {
  case 37://left    
	pMove(playerPosH,'L');  	  
  break;
  case 38://up
	pMove(playerPosV,'U');	  
  break;
  case 39://right
	pMove(playerPosH,'R');	  
  break;
  case 40://down   
	pMove(playerPosV,'D');	  
  break;
  }
  });
//37 left 38 up 39 right 40 down  