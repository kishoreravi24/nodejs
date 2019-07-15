//setInterval that executes value at each and every time
var time=0;
var timer=setInterval(function(){//var timer
    time+=1;
    console.log(time+"\n");
    if(time>5)
    {
        clearInterval(timer);//note not time its timer
    }
},3000);
/*output
1
2
3
4
5
6
...
*/