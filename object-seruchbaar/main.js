// // // var parent = document.getElementById("main");
// // // console.log(parent.setAttribute("class", "div"));



// // // var firstChild = document.getElementsByClassName("abc");
// // // console.log(firstChild);




// // var parent = document.getElementById("main");
// // var heading = document.createElement("h1");
// // var headingText = document.createTextNode("hello world")
// // heading.appendChild(headingText);
// // heading.setAttribute("class", "h1");
// // parent.appendChild(heading);
// // var list = document.getElementById("list");
// // var listElment = document.createElement(li);
// // var listText = document.createTextNode("Apple");
// // listElment.appendChild(listText);
// // list=appendChild(listElment);
// // console.log(heading);



// function addtodo() {
//     var input = document.getElementById("todo-input");
//     // console.log(input.value);
//     var list = document.getElementById("listItems");
//     var listElment = document.createElement("li");
//     var listText = document.createTextNode(input.value);
//     listElment.appendChild(listText);

//     // **********************detlete****************************

//     var delbtn = document.createElement("button");
//     var delbtnText = document.createTextNode("Delete");
//     delbtn.appendChild(delbtnText);
//     delbtn.setAttribute("onclick", "delTodo(this)");
//     listElment.appendChild(delbtn);


//     // **********************edit****************************

//     var Editbtn = document.createElement("button");
//     var EditbtnText = document.createTextNode("Edit");
//     Editbtn.appendChild(EditbtnText);
//     listElment.appendChild(Editbtn);
//     list.appendChild(listElment);
//     Editbtn.setAttribute("onclick", "editTodo(this)");
//     console.log(listElment);
//     input.value = "";


// }

// function deletetodo() {
//     var list = document.getElementById("listItems");
//     list.innerHTML = "";
// }

// function delTodo(e) {
//     console.log(e.parentNode.remove());
// }


// function editTodo(e) {
//     var currentli = (e.parentNode.firstChild.nodeValue);
//     var inputField = prompt("Enter Update value", currentli);
//     e.parentNode.firstChild.nodeValue = inputField;
// }











function addTodo() {
    var todoInp = document.getElementById('todo');
    var list = document.getElementById('todo-list');

    if (!todoInp.value) {
        alert("Please Enter comments")
        return
    }
    var newTodo = document.createElement('div');
    var todoText = document.createElement('p');
    todoText.innerHTML = todoInp.value;
    newTodo.append(todoText);

    newTodo.className = "todo-item";

    var editButton = document.createElement('button');
    var deleteBtn = document.createElement('button');

    editButton.innerHTML = "Edit";
    editButton.setAttribute("onclick", "editTodo(this)");
    newTodo.append(editButton);

    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");
    newTodo.append(deleteBtn);

    list.append(newTodo);
    todoInp.value = ""
}

function deleteTodo(deleteBtn) {
    deleteBtn.parentElement.remove(); {
        alert("are sure this delet")
    }
}

function editTodo(editBtn) {

    var textEle = editBtn.previousElementSibling;

    var editInput = document.createElement('input');
    editInput.setAttribute("type", "text");
    editInput.value = textEle.innerText;

    textEle.className += " hide"

    editBtn.parentElement.prepend(editInput);



}




document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});