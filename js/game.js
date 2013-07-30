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
