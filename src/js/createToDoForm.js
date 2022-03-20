// DEPRECATED
// DEPRECATED
// DEPRECATED

const createToDoForm = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    const taskNameDiv = document.createElement('div');
    const taskName = document.createElement('input');
    const taskNameLabel = document.createElement('label');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('name', 'taskName');
    taskName.setAttribute('id', 'taskName');
    taskName.setAttribute('placeholder', 'Take out the trash');
    taskNameLabel.setAttribute('for', 'taskName');
    taskNameLabel.textContent = 'Title';
    taskNameDiv.appendChild(taskNameLabel);
    taskNameDiv.appendChild(taskName);

    const taskDescriptionDiv = document.createElement('div');
    const taskDescription = document.createElement('textarea');
    const taskDescriptionLabel = document.createElement('label');
    taskDescription.setAttribute('name', 'taskDescription');
    taskDescription.setAttribute('id', 'taskDescription');
    taskDescription.setAttribute('placeholder', 'I avoid the acumulation of trash by performing the sacred art of removing said trash...');
    taskDescriptionLabel.setAttribute('for', 'taskDescription');
    taskDescriptionLabel.textContent = 'Description';
    taskDescriptionDiv.appendChild(taskDescriptionLabel);
    taskDescriptionDiv.appendChild(taskDescription);

    const taskDueDateDiv = document.createElement('div');
    const taskDueDate = document.createElement('input');
    const taskDueDateLabel = document.createElement('label');
    taskDueDate.setAttribute('type', 'datetime-local');
    taskDueDate.setAttribute('name', 'taskDueDate');
    taskDueDate.setAttribute('id', 'taskDueDate');
    taskDueDateLabel.setAttribute('for', 'taskDueDate');
    taskDueDateLabel.textContent = 'Due Date';
    taskDueDateDiv.appendChild(taskDueDateLabel);
    taskDueDateDiv.appendChild(taskDueDate);

    const taskPriorityDiv = document.createElement('div');
    const taskPriority = document.createElement('select');
    const taskPriorityLabel = document.createElement('label');
    taskPriority.setAttribute('name', 'taskPriority');
    taskPriority.setAttribute('id', 'taskPriority');
    taskPriorityLabel.setAttribute('for', 'taskPriority');
    taskPriorityLabel.textContent = 'Priority';
    const highPriority = document.createElement('option');
    highPriority.textContent = 'High';
    const normalPriority = document.createElement('option');
    normalPriority.textContent = 'Normal';
    const lowPriority = document.createElement('option');
    lowPriority.textContent = 'Low';
    taskPriority.appendChild(highPriority);
    taskPriority.appendChild(normalPriority);
    taskPriority.appendChild(lowPriority);
    taskPriorityDiv.appendChild(taskPriorityLabel);
    taskPriorityDiv.appendChild(taskPriority);

    const btns = document.createElement('div');
    btns.classList.add('btns');
    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    submitBtn.classList.add('submitBtn');
    const cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = `<i class="fa-solid fa-ban"></i>`;
    cancelBtn.classList.add('cancelBtn');
    btns.appendChild(submitBtn);
    btns.appendChild(cancelBtn);

    container.appendChild(taskNameDiv);
    container.appendChild(taskDueDateDiv);
    container.appendChild(taskPriorityDiv);
    container.appendChild(taskDescriptionDiv);
    container.appendChild(btns);

    return {container, taskName, taskDueDate, taskPriority, taskDescription, 
        submitBtn, cancelBtn};
};

export default createToDoForm;