//image 1 java script

var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

//image 2 java Script

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

//On refresh javaScript
 
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!"    
}