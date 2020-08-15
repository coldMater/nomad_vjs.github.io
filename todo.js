const todoInput = document.querySelector("#todoInput");
const pendingList = document.querySelector("#pending");
const finishedList = document.querySelector("#finished");

let todoList = {
  todo: [],
  complete: []
};

todoInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    saveTodo(todoInput.value);
    todoInput.value = "";
    todoInput.focus();
  }
});

function saveTodo(content) {
  todoList.todo.push(content);
  render();
}

function deleteTodo(location, index) {
  // console.log("delete!");
  todoList[location].splice(index, 1);
  render();
}

function doneTodo(index) {
  const finished = todoList.todo.splice(index, 1);
  todoList.complete.push(finished[0]);
  render();
}

function rewindTodo(index) {
  const rewinded = todoList.complete.splice(index, 1);
  todoList.todo.push(rewinded[0]);
  render();
}

function render() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
  pendingList.innerHTML = "";
  for (let i in todoList.todo) {
    const liTag = document.createElement("li");

    const divTag = document.createElement("div");

    const itemSpan = document.createElement("span");
    const buttonWrapper = document.createElement("span");
    const finishBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    itemSpan.innerText = todoList.todo[i];
    finishBtn.innerText = "DONE";
    finishBtn.classList.add("done-btn");
    deleteBtn.innerText = "DEL";
    deleteBtn.classList.add("del-btn");

    finishBtn.addEventListener("click", function (e) {
      console.log("done");
      doneTodo(i);
    });

    deleteBtn.addEventListener("click", function (e) {
      console.log("delete");
      deleteTodo("todo", i);
    });

    divTag.appendChild(itemSpan);
    buttonWrapper.appendChild(finishBtn);
    buttonWrapper.appendChild(deleteBtn);
    divTag.appendChild(buttonWrapper);

    liTag.appendChild(divTag);

    pendingList.appendChild(liTag);
  }

  finishedList.innerHTML = "";
  for (let i in todoList.complete) {
    const liTag = document.createElement("li");

    const divTag = document.createElement("div");

    const itemSpan = document.createElement("span");
    const buttonWrapper = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const rewindBtn = document.createElement("button");

    itemSpan.innerText = todoList.complete[i];
    deleteBtn.innerText = "DEL";
    deleteBtn.classList.add("del-btn");
    rewindBtn.innerText = "RES";
    rewindBtn.classList.add("res-btn");

    deleteBtn.addEventListener("click", function (e) {
      console.log("delete");
      deleteTodo("complete", i);
    });

    rewindBtn.addEventListener("click", function (e) {
      console.log("rewind");
      rewindTodo(i);
    });

    divTag.appendChild(itemSpan);
    buttonWrapper.appendChild(rewindBtn);
    buttonWrapper.appendChild(deleteBtn);
    divTag.appendChild(buttonWrapper);

    liTag.appendChild(divTag);

    finishedList.appendChild(liTag);
  }
}

function init() {
  const loadedTodoList = localStorage.getItem("todoList");
  if (loadedTodoList !== null) {
    const parsedTodoList = JSON.parse(loadedTodoList);
    todoList = parsedTodoList;
  }
  render();
}

init();
