import "./style.css"; 
const listContainer = document.querySelector("[data-lists]");
let data = [
  {
    id: 1,
    description: "string",
    complete: false,
  },
  {
    id: 2,
    description: "string",
    complete: false,
  },
  {
    id: 3,
    description: "string",
    complete: false,
  },
  {
    id: 4,
    description: "string",
    complete: false,
  },
];

const mainHandler = () => {
 data.forEach((list) => {
    const listElement = document.createElement('li');
    listElement.classList.add('todo');
    listElement.innerHTML = `
      <div class= "toggle">
        <span class="material-icons-outlined">check_box_outline_blank</span> 
      <div class = "check">
        <span class="material-icons-outlined">check</span>
        </div>
        </div>
        <div class "description">
          <p>${data.description}</p>
        </div>
        <span class="material-icons-outlined">more_vert</span> `;
    listContainer.appendChild(listElement);
  });
};

mainHandler();