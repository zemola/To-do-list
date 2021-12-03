const editTodo = (localStorageTodos) => {
  document.querySelectorAll('.todo-desc').forEach((listInput) => {
    listInput.addEventListener('change', (e) => {
      e.preventDefault();
      const todos = JSON.parse(localStorage.getItem(localStorageTodos));
      const found = todos.find((list) => list.id === listInput.id);
      found.description = listInput.value;
      localStorage.setItem(localStorageTodos, JSON.stringify(todos));
    });
  });
};

export default editTodo;