const taskList = document.querySelector("#task-list");
const task = document.querySelector("#task");

document.querySelector('.add-form').addEventListener('submit', function (event) {
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
    taskItem.setAttribute('class', 'task-container d-flex justify-content-between align-items-center')

    //Create task text container 
    const taskTextbox = document.createElement('span');
    taskTextbox.textContent = newTask;
    taskItem.appendChild(taskTextbox);

    // Create a wrapper for buttons
    const btnWrapper = document.createElement('div');
    btnWrapper.setAttribute('class', 'd-flex');

    //Create new update button
    const updateItem = document.createElement('button');
    updateItem.setAttribute('class', 'update-btn mr-3')
    updateItem.textContent = 'edit';
    updateItem.addEventListener('click', () => {
        //Check the button is on edit
        if (updateItem.textContent === 'edit') {
            // Create and pre-fill input field with current task text
            let input = document.createElement('input');
            input.type = 'text';
            taskTextbox.textContent = newTask;

            // Insert  input field before the buttons wrapper
            taskItem.insertBefore(input, btnWrapper);

            // Change the button text to 'update'
            updateItem.textContent = 'update';
        }
        else if (updateItem.textContent === 'update') {
            // Get updated task text from input field
            let updatedTaskText = taskItem.querySelector('input').value;

            // Remove input field
            taskItem.removeChild(taskItem.querySelector('input'));

            // Update the task item's text with the updated task text
            taskTextbox.textContent = updatedTaskText;

            // Append the buttons wrapper back into the task item
            taskItem.appendChild(btnWrapper);

            // Change the button text back to 'edit'
            updateItem.textContent = 'edit';
        }
    });

    //Create new delete button
    const deleteItem = document.createElement('button');
    deleteItem.setAttribute('class', 'delete-btn')
    deleteItem.textContent = 'delete';
    deleteItem.addEventListener('click', () => {
        // Remove  task item  when delete button is pressed
        taskList.removeChild(taskItem)
    });

    //Append task to task list
    taskList.appendChild(taskItem);

    //Append button container to task item
    taskItem.appendChild(btnWrapper);

    //Append delete button to buttons container
    btnWrapper.appendChild(deleteItem);

    //Append update button to buttons container
    btnWrapper.appendChild(updateItem);

    //Clear input box
    task.value = '';
});