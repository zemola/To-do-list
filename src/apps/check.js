const checkAndUnchecklist = (todos, localStorageTodos) => {
  document.querySelectorAll('.check-box').forEach((check) => {
    check.addEventListener('change', (e) => {
      const todos = JSON.parse(localStorage.getItem(localStorageTodos));
      const todoId = e.target.closest('li').dataset.todoItem;
      const foundList = todos.find((list) => list.id === todoId);
      if (foundList.completed) {
        e.target.parentNode.nextSibling.nextElementSibling
          .querySelector('.todo-desc')
          .classList.remove('linethrough');
        foundList.completed = false;
      } else {
        e.target.parentNode.nextSibling.nextElementSibling
          .querySelector('.todo-desc')
          .classList.add('linethrough');
          foundList.completed = true;
      }
      const filteredTodo = todos.filter((todo) => todo.id !== todoId);
      filteredTodo.splice(foundList.index - 1, 0, foundList);
      localStorage.setItem(localStorageTodos, JSON.stringify(filteredTodo));
    });
  });
};
export default checkAndUnchecklist;