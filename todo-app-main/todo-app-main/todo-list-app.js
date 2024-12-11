const image = document.getElementById('modes');
const userInput = document.getElementById('myInput');
const list = document.getElementById('myUL');
const paragraph = document.getElementById('paragraph');
const all = document.getElementById('all');
const active = document.getElementById('active');
const completed = document.getElementById('completed');
const itemsLeft = document.getElementById('remainingItems');
const clearCompleted = document.getElementById('clearCompletedList');
const headerElement = document.querySelector('main')

// all of my eventListners
userInput.addEventListener('keypress', enterHandler);
image.addEventListener('click', imageHandler);
all.addEventListener('click', allHandler);
active.addEventListener('click', activeHandler);
completed.addEventListener('click', completedHandler);
clearCompleted.addEventListener('click', clearCompletedHandler);

// new changable var
let item = document.getElementById('');

// array for my todo List
let todoList = [];

// subtract when box is checked
let completedList = [];

// This section is one big function for my input and adding new Items to my list.

function enterHandler(event) {
    if (event.key === 'Enter') {
      if (userInput.value === '') {
        alert("You must type something to add to your TODO list!");
      }
      else {
    let newP = document.createElement('p');
    newP.textContent = userInput.value;
    const newItem = document.createElement('li');
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = './images/icon-cross.svg';
    itemsLeft.textContent = todoList.length;
    const button = document.createElement('input');
    button.type = 'checkbox';
    newItem.classList.add('flex');
    list.append(newItem);
    newItem.append(button);
    newItem.append(newP);
    div.append(img)
    newItem.append(div);
    userInput.value='';
    todoList.push(newItem);
    itemsLeft.textContent = todoList.length;
    button.addEventListener('click', checkHandler);
    img.addEventListener('click', removeHandler)
    function checkHandler() {
      newP.classList.toggle('strikeThrough');
      if (todoList.includes(this.parentElement)) {
        let activeIndex = todoList.indexOf(this.parentElement);
        todoList.splice(activeIndex, 1);
        completedList.push(this.parentElement);
        itemsLeft.textContent = todoList.length;
        return
      }
      if (completedList.includes(this.parentElement)) {
        let completedIndex = completedList.indexOf(this.parentElement);
        completedList.splice(completedIndex, 1);
        todoList.push(this.parentElement);
        itemsLeft.textContent = todoList.length;
        return
      }
    }
  }
  function removeHandler() {
    this.parentElement.parentElement.remove();
    if (todoList.includes(this.parentElement.parentElement)) {
      let activeIndex = todoList.indexOf(this.parentElement.parentElement);
      todoList.splice(activeIndex, 1);
      itemsLeft.textContent = todoList.length;
      return
    }
    if (completedList.includes(this.parentElement.parentElement)) {
      let completedIndex = completedList.indexOf(this.parentElement.parentElement);
      completedList.splice(completedIndex, 1);
      itemsLeft.textContent = todoList.length;
      return
    }
  }
  }
}
          // all my functions for my buttons to control my seperate sections
function allHandler() {
  list.innerHTML = '';
  let allList = todoList.concat(completedList);
  for (let i = 0; i < allList.length; i++) {
    list.append(allList[i]);
  }
  return;
}

function activeHandler() {
  list.innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    list.append(todoList[i]);
  }
  return;
}

function completedHandler() {
  list.innerHTML = '';
  for (let i = 0; i < completedList.length; i++) {
    list.append(completedList[i]);
  }
  return;
}

function clearCompletedHandler() {
  list.innerHTML = '';
  for (let i = 0; i < completedList.length; i++) {
    completedList[i].remove();
    completedList = [];

  }
  return;
}

let isLightMode = true;

function imageHandler() {
  document.documentElement.classList.toggle('lightMode');
  isLightMode = !isLightMode;
  if (isLightMode) {
    image.src = './images/icon-moon.svg';
    document.body.style.backgroundImage = 'url(./images/bg-desktop-light.jpg)';
  } else {
    image.src = './images/icon-sun.svg';
    document.body.style.backgroundImage = 'url(./images/bg-desktop-dark.jpg)';
  }
}