const taskList = document.querySelector("#task-list");
const task = document.querySelector("#task");

addEventListener('submit', function (event) {
    event.preventDefault();

    //Access form data
    const newTask = task.value;

    //Create validation for identical item in list & empty string
    if (newTask.trim() === '') {
        alert('Task cannot be empty.');
        return;
    }

    //Create new task item
    const taskItem = document.createElement('li');
    taskItem.setAttribute('class', 'taskContainer d-flex justify-content-between align-items-center')

    taskItem.textContent = newTask;

    //Post task to task list
    taskList.appendChild(taskItem);

    //Create new delete button
    const deleteItem = document.createElement('button');
    deleteItem.setAttribute('class', 'delete-btn')
    deleteItem.textContent = 'delete';
    deleteItem.addEventListener('click', () => {
        // Remove  task item  when delete button is pressed
        taskList.removeChild(taskItem)
    });

    //Append delete button to list item
    taskItem.appendChild(deleteItem);

    //Create new update button
    let updateButtons = document.querySelectorAll('.update-btn')
    const updateItem = document.createElement('button');
    updateItem.setAttribute('class', 'update-btn')
    updateItem.textContent = 'edit';
    updateItem.addEventListener('click', () => {
        // update  task item  when update button is pressed
        
        updateItem.textContent = 'update';
    });

    //Append delete button to list item
    taskItem.appendChild(updateItem);


    //Clear input box
    task.value = '';
});