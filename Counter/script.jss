let a=0;
function incr()
{
    if(a<25)
    {
    a++;
    document.getElementById("count").textContent=a;
    }
    else
    {
        alert("Can't increase any more!");
    }
       
    if(a%2==0 && a>0)
    {
           document.getElementById("p1").textContent="even";
    }
    else
    {
        document.getElementById("p1").textContent="odd";
    }
}

function decr()
{
    if(a>-10)
    {
    a--;
    document.getElementById("count").textContent=a;
    }
    else{
        alert("Can't decrease any more!");
    }
      if(a%2==0 && a>0)
    {
           document.getElementById("p1").textContent="even";
    }
    else if(a<=0)
    {
        document.getElementById("p1").textContent="Result";
    }
    else 
    {
        document.getElementById("p1").textContent="odd";
    }

    

}

function reset()
{
    a=0;
    document.getElementById("count").textContent=a;
 
}

