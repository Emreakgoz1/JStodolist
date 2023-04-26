let todoList = [];

addTodo = () => {
  let todo = document.querySelector("#todoInput").value;
  if (todo == "") {
    alert("Please enter a todo");
    return;
  } else {
    todoList.push(todo);
    showTodo();
  }
};

deleteTodo = (index) => {
  todoList.splice(index, 1);
  showTodo();
};

showTodo = () => {
  // select id = todoList
  let todoListElement = document.querySelector("#todoList");
  todoListElement.innerHTML = "";
  todoList.map((todo, i) => {
    todoListElement.innerHTML += `<li>${todo} <button onclick="deleteTodo(${i})">Delete</button></li>`;
  });
  console.log(todoList);
};
