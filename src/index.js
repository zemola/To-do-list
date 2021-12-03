// import e from 'express';
import './style.css';
import clearListContainer from './apps/clear-all.js';
import checkAndUnchecklist from './apps/check.js';
import editTodo from './apps/edit.js';
import clearAllCompletedTodos from './apps/clear-all-todo.js';

const listHolder = document.querySelector('.to-do-list');
const newListForm = document.querySelector('.add-list-form');
const newListInput = document.querySelector('.add-list-input');
const clearButton = document.querySelector('.clear-all-button');

const localStorageTodos = 'todo.lists';

const todos = JSON.parse(localStorage.getItem(localStorageTodos)) || [];

const createList = (name) => ({
  id: Date.now().toString(),
  description: name,
  completed: false,
  index: todos.length + 1,
});

const save = () => {
  localStorage.setItem(localStorageTodos, JSON.stringify(todos));
};

const mainHandler = () => {
  clearListContainer(listHolder);

  todos.forEach((list) => {
    const listElement = document.createElement('li');
    listElement.classList.add('list');
    listElement.setAttribute('data-todo-item', list.id);

    if (list.completed) {
      listElement.innerHTML = `
      <div class="check-div">
        <input type="checkbox" checked class="check-box" />
      </div>
      <div class="description">
         <input class="todo-desc" value="${list.description}" data-edited-todo id="${list.id}"/>
      </div>
      <span class="material-icons move-icon" id="threedot">more_vert</span>
    `;
    } else {
      listElement.innerHTML = `
      <div class="check-div">
        <input type="checkbox" class="check-box" />
      </div>
      <div class="description">
         <input class="todo-desc" value="${list.description}" data-edited-todo id="${list.id}"/>
      </div>
      <span class="material-icons move-icon" id="threedot">more_vert</span>
    `;
    }
    listHolder.appendChild(listElement);
  });
  checkAndUnchecklist(todos, localStorageTodos);

  editTodo(localStorageTodos);
};

const handleSaveAndRender = () => {
  save();
  mainHandler();
};

newListForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = newListInput.value.trim();
  if (todo === null || todo === '') return;
  const list = createList(todo);
  newListInput.value = null;
  todos.push(list);
  handleSaveAndRender();
});

// Clear all completed todos upon click
clearButton.addEventListener('click', () => {
  clearAllCompletedTodos(localStorageTodos);
});

mainHandler();
