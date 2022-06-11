function todolist()
{

    var listname= document.getElementById("taskhold").value;
    var tododiv=document.getElementById("todobar");

    var tododivcreation = document.createElement('div'); // ek div create krege

        var listitem = document.createElement('li');//div k andar k chije create krege
        listitem.innerHTML=listname;

        var delbtn=document.createElement('i');
        delbtn.classList.add('fa'); //class add ki
        delbtn.classList.add('fa-trash');
    
    tododivcreation.appendChild(listitem); //dono chijo ko ab apan ne div k andar dal diya append krke
    tododivcreation.appendChild(delbtn);

    tododiv.appendChild(tododivcreation);//ab ye pure div ko apan ne jo html me empty div banaya h usme dal dege
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