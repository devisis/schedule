const taskList = document.querySelector("#task-list");
const task = document.querySelector("#task");

addEventListener('submit', function (event) {
    event.preventDefault();

    //Access form data
    const newTask = task.value;

    
    //Create validation for identical item in list & empty string
    if (newTask.trim() === ''){
        alert('Task cannot be empty.');
        return;
    }

    //Create new task item
    const taskItem = document.createElement('li');
    taskItem.textContent = newTask;

    //Create new delete button
    const deleteItem = document.createElement('button');
    deleteItem.setAttribute('class', 'deleteBtn')
    deleteItem.textContent = 'delete';
    deleteItem.addEventListener('click', ()=> {
        // Remove  task item  when delete button is pressed
        taskList.removeChild(taskItem)
    });
    
    //Append delete button to list item
    taskItem.appendChild(deleteItem);


    //Post task to task list
    taskList.appendChild(taskItem);

    //Clear input box
    task.value = '';
 });