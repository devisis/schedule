const taskList = document.querySelector("#task-list");
const task = document.querySelector("#task");

addEventListener('submit', function (event) {
    event.preventDefault();

    //Access form data
    const newTask = task.value;

    
    //Create validation for identical item in list & empty string
    if (newTask.trim() === ''){
        alert('Task can not be empty.');
        return;
    }
    //Create new task item
    const taskItem = document.createElement('li');
    taskItem.textContent = newTask;

    //Post task to task list
    taskList.appendChild(taskItem);

    //Clear input box
    task.value = '';
 });