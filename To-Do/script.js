document.getElementById("push").onclick=function()
{
    if(document.getElementById("text").value.length==0)
    {
        console.log("empty");
        alert("please enter task");
    }
    else
    {
        document.querySelector("#tasks").innerHTML
        +=`
        <div id="task">
            <span id="taskname">
            ${document.querySelector("#text").value}
            </span>
            <button class="delete">
            <i class="fa-solid fa-trash" class="del"></i>
            </button>
        </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");

        for(var i=0; i<current_tasks.length; i++)
        {
           current_tasks[i].onclick=function()
           {
            this.parentNode.remove();
           }
        }

        var tasks = document.querySelectorAll("#task");
        for(var i=0; i<tasks.length; i++)
        {
            tasks[i].onclick=function()
            {
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#task input").value="";
    }
}

