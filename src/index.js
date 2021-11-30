import _ from "lodash";
import "./style.css"; 

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
    const ListElement = document.createElement('li');
    ListElement.classList.add('todo');
    ListElement.innerHTML = `
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
  });
};

mainHandler();