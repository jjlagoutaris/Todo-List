export const createProjectModal = () => {
    
    const newModal = document.createElement('dialog');
    newModal.classList.add('projectModal');
    newModal.setAttribute('id', 'projectModal');

    const projectModalHeader = document.createElement('h2');
    projectModalHeader.textContent = 'New Project';

    const projectModalForm = document.createElement('form');
    projectModalForm.classList.add('projectForm');
    projectModalForm.setAttribute('method', 'dialog');

    const projectNameDiv = document.createElement('div');
    const projectName = document.createElement('input');
    const projectNameLabel = document.createElement('label');
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('name', 'projectName');
    projectName.setAttribute('id', 'projectName');
    projectName.setAttribute('placeholder', 'Fitness');
    projectNameLabel.setAttribute('for', 'projectName');
    projectNameLabel.textContent = 'Title';
    projectNameDiv.appendChild(projectNameLabel);
    projectNameDiv.appendChild(projectName);

    const btns = document.createElement('div');
    btns.classList.add('btns');
    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    submitBtn.classList.add('submitProjectBtn');
    submitBtn.setAttribute('type', 'button');
    const cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = `<i class="fa-solid fa-ban"></i>`;
    cancelBtn.classList.add('cancelProjectBtn');
    submitBtn.setAttribute('type', 'button');
    btns.appendChild(submitBtn);
    btns.appendChild(cancelBtn);

    newModal.appendChild(projectModalHeader);
    projectModalForm.appendChild(projectNameDiv);
    projectModalForm.appendChild(btns);
    newModal.appendChild(projectModalForm);

    return {newModal, projectModalForm, projectName, submitBtn, cancelBtn};
};


export const createEditModal = (name, description, dueDate, priority) => {
    
    const newModal = document.createElement('dialog');
    newModal.classList.add('editModal');
    newModal.setAttribute('id', 'editModal');

    const editModalHeader = document.createElement('h2');
    editModalHeader.textContent = 'Edit Task';

    const editModalForm = document.createElement('form');
    editModalForm.classList.add('editForm');
    editModalForm.setAttribute('method', 'dialog');

    const taskNameDiv = document.createElement('div');
    const taskName = document.createElement('input');
    const taskNameLabel = document.createElement('label');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('name', 'taskName');
    taskName.setAttribute('id', 'taskName');
    taskName.setAttribute('placeholder', 'Take out the trash');
    taskName.setAttribute('value', name);
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
    taskDescription.value = description;
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
    taskDueDate.setAttribute('value', dueDate);
    taskDueDateLabel.setAttribute('for', 'taskDueDate');
    taskDueDateLabel.textContent = 'Due Date';
    taskDueDateDiv.appendChild(taskDueDateLabel);
    taskDueDateDiv.appendChild(taskDueDate);

    const taskPriorityDiv = document.createElement('div');
    const taskPriority = document.createElement('select');
    const taskPriorityLabel = document.createElement('label');
    taskPriority.setAttribute('name', 'taskPriority');
    taskPriority.setAttribute('id', 'taskPriorityEdit');
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

    taskPriority.value = priority;
    
    taskPriorityDiv.appendChild(taskPriorityLabel);
    taskPriorityDiv.appendChild(taskPriority);

    const btns = document.createElement('div');
    btns.classList.add('btns');
    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    submitBtn.classList.add('submitEditBtn');
    submitBtn.setAttribute('type', 'button');
    const cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = `<i class="fa-solid fa-ban"></i>`;
    cancelBtn.classList.add('cancelEditBtn');
    submitBtn.setAttribute('type', 'button');
    btns.appendChild(submitBtn);
    btns.appendChild(cancelBtn);

    newModal.appendChild(editModalHeader);
    editModalForm.appendChild(taskNameDiv);
    editModalForm.appendChild(taskDescriptionDiv);
    editModalForm.appendChild(taskDueDateDiv);
    editModalForm.appendChild(taskPriorityDiv);
    editModalForm.appendChild(btns);
    newModal.appendChild(editModalForm);

    return {newModal, editModalForm, taskName, taskDueDate, taskPriority, 
        taskDescription, submitBtn, cancelBtn};
};