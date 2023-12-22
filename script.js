//your code here

const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", () => {
  const todoText = newTodoInput.value.trim();

  if (todoText !== "") {
    const newTodoListItem = document.createElement("li");
    newTodoListItem.textContent = todoText;
    todoList.appendChild(newTodoListItem);
    newTodoInput.value = ""; // Clear the input field
  }
});
