function strengthcheck()
{
var text=document.getElementById("text").value;
var exp1=exp2=exp3=exp4=false;
var numlen=smalllen=biglen=symblen=lengthlen=0;
var numrank=smallrank=bigrank=symbrank=lengthrank=totalrank=0;
var strength=hackreport="";
lengthlen=text.length;
var nums= new RegExp(/[0-9]/g);
var smalls= new RegExp(/[a-z]/g);
var bigs= new RegExp(/[A-Z]/g);
var symbs= new RegExp (/[$@#=>_!?^,*+&-.~<]/g);
exp1=nums.test(text);
exp2=smalls.test(text);
exp3=bigs.test(text);
exp4=symbs.test(text);
if (exp1==true)
{
numlen=text.match(nums).length;
}
if (exp2==true)
{
smalllen=text.match(smalls).length;
}
if (exp3==true)
{
biglen=text.match(bigs).length;
}
if (exp4==true)
{
symblen=text.match(symbs).length;
}
if(numlen==0){numrank=0;}
if(numlen==1){numrank=25;}
if(numlen==2){numrank=50;}
if(numlen==3){numrank=75;}
if(numlen>=4){numrank=100;}
if(smalllen==0){smallrank=0;}
if(smalllen==2){smallrank=25;}
if(smalllen==3){smallrank=50;}
if(smalllen==4){smallrank=75;}
if(smalllen>=5){smallrank=100;}
if(biglen==0){bigrank=0;}
if(biglen==2){bigrank=25;}
if(biglen==3){bigrank=50;}
if(biglen==4){bigrank=75;}
if(biglen>=5){bigrank=100;}
if(symblen==0){symbrank=0;}
if(symblen==1){symbrank=25;}
if(symblen==2){symbrank=50;}
if(symblen==3){symbrank=75;}
if(symblen>=4){symbrank=100;}
if(lengthlen==0)
{lengthrank=0;}
if(lengthlen>=1 && lengthlen<=4)
{lengthrank=25;}
if(lengthlen>=5 && lengthlen<=9)
{lengthrank=50;}
if(lengthlen>=10 && lengthlen<=13)
{lengthrank=75;}
if(lengthlen>=14 && lengthlen<=18)
{lengthrank=100;}
totalrank=numrank+smallrank+bigrank+symbrank+lengthrank

if(totalrank>=376 && totalrank<=500)
{
strength="Fabulous Password";
hackreport="This password is not hackable. It's Impossible to hack.";
}
if(totalrank>=201 && totalrank<=375)
{
strength="Good Password";
hackreport="This  password is hackable. but deficult to hack";
}
if(totalrank>=101 && totalrank<=200)
{
strength="Average Password";
hackreport="This password is easy to hack any one.";
}
if(totalrank>=25 && totalrank<=100)
{
strength="Weak Password";
hackreport="This password is very is to hack.";
}
if(totalrank<=25)
{
strength="Worst Password";
hackreport="This password is dead easy to hack any one.";
}
if(text!="")
{
document.getElementById("hackreport").innerHTML=hackreport;
}
document.getElementById("lengthbar").style.height=lengthlen*10+"px";
document.getElementById("numbar").style.height=numlen*10+"px";
document.getElementById("smallbar").style.height=smalllen*10+"px";
document.getElementById("bigbar").style.height=biglen*10+"px";
document.getElementById("symbbar").style.height=symblen*10+"px";
document.getElementById("lengthlen").innerHTML=lengthlen;
document.getElementById("numlen").innerHTML=numlen;
document.getElementById("smalllen").innerHTML=smalllen;
document.getElementById("biglen").innerHTML=biglen;
document.getElementById("symblen").innerHTML=symblen;
};
