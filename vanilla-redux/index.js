import { createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    const btn = document.createElement('btn');
    btn.innerText = 'DELETE';
    btn.addEventListener('click', deleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const addTodo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const deleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch({ type: DELETE_TODO, id });
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  addTodo(toDo);
};

form.addEventListener('submit', onSubmit);
