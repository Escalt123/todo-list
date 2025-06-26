const todoInput = document.querySelector(".todo__input")
const todoBtn = document.querySelector(".todo__btn")
const todoList = document.querySelector(".todo__list")

function addTask() {

    if (todoInput.value === "") {
        alert("Нужно ввести текст");
    } else {
        let li = document.createElement("li")
        li.innerHTML = todoInput.value
        todoList.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = '\u00d7';
        li.appendChild(span)

    }

    todoInput.value = "";
    SaveData()
}

todoBtn.addEventListener('click', () => {
    addTask()
})

todoList.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    SaveData()    
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
    SaveData()
})

function SaveData() {
    localStorage.setItem("data", todoList.innerHTML)
}

function ShowData() {
    todoList.innerHTML = localStorage.getItem("data");
}

ShowData();