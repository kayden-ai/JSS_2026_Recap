// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('.add-btn');
const form = document.querySelector('form');
const inputTask = document.querySelector('input[type="text"]');

function createTodoItem(todo) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const delBtn = document.createElement('button');

  checkbox.type = 'checkbox';
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed;

  checkbox.addEventListener('change', e => {
    todo.completed = e.target.checked;
    console.log(todoList);
  });

  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;

  delBtn.textContent = '✖';
  delBtn.addEventListener('click', () => {
    const index = todoList.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      todoList.splice(index, 1);
    }
    ul.removeChild(li);
    console.log(todoList);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(delBtn);

  return li;
}

todoList.forEach(todo => {
  ul.appendChild(createTodoItem(todo));
});

addBtn.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const newId =
    todoList.length > 0 ? Math.max(...todoList.map(t => t.id)) + 1 : 1;
  const newTodo = {
    id: newId,
    task: inputTask.value,
    completed: false,
  };
  todoList.push(newTodo);
  console.log(todoList);
  ul.appendChild(createTodoItem(newTodo));
  form.reset();
  dialog.close();
});
