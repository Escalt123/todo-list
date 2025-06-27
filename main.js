const todoInput = document.querySelector(".todo__input")
const todoBtn = document.querySelector(".todo__btn")
const todoList = document.querySelector(".todo__list")

function addTask() {
    // Проверка на пустой ввод
    if (todoInput.value === "") {
        alert("Нужно ввести текст");

    } else {
        // Создание элемента списка
        let li = document.createElement("li")
        li.innerHTML = todoInput.value
        todoList.appendChild(li)

        // Добавление кнопки удаления (крестик)
        let span = document.createElement("span")
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }

    todoInput.value = ""; // Очистка поля ввода
    SaveData() // Сохранение данных
}

todoBtn.addEventListener('click', () => {
    addTask()
})

// Обработка кликов по списку
todoList.addEventListener("click", function (e) {
    // Если кликнули на задачу - переключаем состояние
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    SaveData()
    // Если кликнули на крестик - удаляем задачу
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
    SaveData()
})

// Сохранение списка в localStorage
function SaveData() {
    localStorage.setItem("data", todoList.innerHTML)
}

// Загрузка списка из localStorage
function ShowData() {
    todoList.innerHTML = localStorage.getItem("data");
}

ShowData();