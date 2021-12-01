import './style.css';

const todos = JSON.parse(localStorage.getItem(localStorageTodos)) || [];
const selectedTodoId = localStorage.getItem(localStorageSelectedTodo);

const listContainer = document.querySelector('[data-lists]');
const data = [
  {
    id: 1,
    description: 'Want to join meeting by 8 am ',
    complete: false,
  },
  {
    id: 2,
    description: 'need to code with my patner',
    complete: false,
  },
  {
    id: 3,
    description: ' Want to read about React',
    complete: false,
  },
  {
    id: 4,
    description: 'Standup meeting with my team by 6pm',
    complete: false,
  },
];

const mainHandler = () => {
  data.forEach((list) => {
    const listElement = document.createElement('li');
    listElement.classList.add('todo');
    listElement.innerHTML = `
      <div class='description'>
     <input type= 'checkbox'> <p>${list.description}</p>
      </div>
      <div><i class='fa fa-ellipsis-v'></i></div>
         `;
    listContainer.appendChild(listElement);
  });
};

mainHandler();
