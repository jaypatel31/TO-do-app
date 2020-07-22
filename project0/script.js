const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let list = document.getElementById('todo-list')
let itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let c = 0;
let v = 0;
function newTodo() {
    c++;
    let li = document.createElement("li");
    let cb = document.createElement("input");
    let bt = document.createElement("button")
    cb.type = "checkBox";
    bt.type = "button";
    bt.innerHTML = "X";
    bt.className = "todo-delete";
    bt.id = "todo-delete" +c;
    cb.id = "che" +c
    li.id = "text" + c;
    itemCountSpan.innerHTML = c;
    
    li.innerHTML += "TODO " + c;
    li.appendChild(cb);
    li.appendChild(bt);
    list.appendChild(li);
    let tru = "on"
    var q = document.getElementById("todo-delete" + c);
    q.addEventListener("click",function dl(){
        li.style.display = "none";
        v++;
        uncheckedCountSpan.innerHTML = v;
    })
    var w = document.getElementById('che'+c);
    w.addEventListener("click",function ck(){
        if(tru === "on"){
            li.style.textDecoration = "line-through";
            console.log(cb.value);
            tru = "off"
        }
        
        else{
             li.style.textDecoration = "none";
            tru = "on"
        }
        
    })
}



