// Clear all completed todos function
const clearAllCompletedTodos = (localStorageTodos) => {
  const localArr = JSON.parse(localStorage.getItem(localStorageTodos));
  const pendingTodos = localArr.filter((list) => list.completed === false);
  localStorage.setItem(localStorageTodos, JSON.stringify(pendingTodos));
  location.reload();
};
export default clearAllCompletedTodos;