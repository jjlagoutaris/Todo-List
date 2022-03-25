const createProjectModal = (name, description) => {
    
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
    projectName.setAttribute('value', name);
    projectNameLabel.setAttribute('for', 'projectName');
    projectNameLabel.textContent = 'Title';
    projectNameDiv.appendChild(projectNameLabel);
    projectNameDiv.appendChild(projectName);

    const projectDescriptionDiv = document.createElement('div');
    const projectDescription = document.createElement('textarea');
    const projectDescriptionLabel = document.createElement('label');
    projectDescription.setAttribute('name', 'projectDescription');
    projectDescription.setAttribute('id', 'projectDescription');
    projectDescription.setAttribute('placeholder', 'I am a multi-sport athlete engaged in climbing, basketball, hiking, etc');
    projectDescription.setAttribute('value', description);
    projectDescriptionLabel.setAttribute('for', 'projectDescription');
    projectDescriptionLabel.textContent = 'Description';
    projectDescriptionDiv.appendChild(projectDescriptionLabel);
    projectDescriptionDiv.appendChild(projectDescription);

    const btns = document.createElement('div');
    btns.classList.add('btns');
    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    submitBtn.classList.add('submitProjectBtn');
    const cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = `<i class="fa-solid fa-ban"></i>`;
    cancelBtn.classList.add('cancelProjectBtn');
    btns.appendChild(submitBtn);
    btns.appendChild(cancelBtn);

    newModal.appendChild(projectModalHeader);
    projectModalForm.appendChild(projectNameDiv);
    projectModalForm.appendChild(projectDescriptionDiv);
    projectModalForm.appendChild(btns);
    newModal.appendChild(projectModalForm);

    return {newModal, projectModalForm, projectName, projectDescription, submitBtn, cancelBtn};
};

export default createProjectModal;