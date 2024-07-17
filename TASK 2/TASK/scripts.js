document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;
        taskItem.appendChild(taskTextElement);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(taskItem, taskTextElement));
        taskItem.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => taskItem.remove());
        taskItem.appendChild(deleteButton);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => taskTextElement.classList.toggle('completed'));
        taskItem.appendChild(completeButton);

        taskList.appendChild(taskItem);
    }

    function editTask(taskItem, taskTextElement) {
        const newText = prompt('Edit task:', taskTextElement.textContent);
        if (newText) {
            taskTextElement.textContent = newText;
        }
    }
});
