function todolist()
{

    var listname= document.getElementById("taskhold").value;
    var tododiv=document.getElementById("todobar");

    var tododivcreation = document.createElement('div'); 

        var listitem = document.createElement('li');
        listitem.innerHTML=listname;

        var delbtn=document.createElement('i');
        delbtn.classList.add('fa'); 
        delbtn.classList.add('fa-trash');
    
    tododivcreation.appendChild(listitem); 
    tododivcreation.appendChild(delbtn);

    tododiv.appendChild(tododivcreation);
}

//code for deletion

var tododiv=document.getElementById("todobar");
tododiv.addEventListener('click',deleteitem);

function deleteitem(e)
{
    const element = e.target;
    if (element.classList[0]=='fa')
        element.parentElement.remove();
}
