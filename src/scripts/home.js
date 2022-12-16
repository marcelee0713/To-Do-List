import '../styles/home.scss'
import { format, parse, parseISO } from 'date-fns'
import { createObject } from './createObject';
import inputValidation from './inputValidation';
import showSuccessModal from './successModal';

const modal = document.getElementById('input-modal');

export default function homeModule(parent) {
    let hasPressYes = false;
    const introContainer = document.createElement('div');
    const introHeader = document.createElement('h1');
    const introSubtextContainer = document.createElement('div');
    const introSubText1 = document.createElement('p');
    const introSubText2 = document.createElement('p');
    const introSubText3 = document.createElement('p');
    const showInputBtn = document.createElement('button');

    introContainer.classList.add('intro-container');
    introHeader.classList.add('intro-header');
    introSubtextContainer.classList.add('intro-subtext-container');
    showInputBtn.classList.add('show-input-btn')

    introHeader.textContent = "Welcome";
    introSubText1.textContent = "Have something to do?";
    introSubText2.textContent = "Have you been procastinating and...";
    introSubText3.textContent = "Haven't done anything productive today?";
    showInputBtn.textContent = "YES"

    introContainer.appendChild(introHeader);
    introContainer.appendChild(introSubtextContainer);
    introContainer.appendChild(showInputBtn);
    introSubtextContainer.appendChild(introSubText1);
    introSubtextContainer.appendChild(introSubText2);
    introSubtextContainer.appendChild(introSubText3);

    showInputBtn.addEventListener('click', () => {
        if(!hasPressYes){
            parent.appendChild(showForm());
            hasPressYes = true;
        }
    });
    
    return introContainer;
}

export function showForm(){
    const inputContainer = document.createElement('div');
    const header = document.createElement('div')
    const formContainer = document.createElement('div');

    const form = document.createElement('form');
    const categoryContainer = document.createElement('div');
    const labelForCategory = document.createElement('label');
    const inputForCategory = document.createElement('select');
    const selection1 = document.createElement('option');
    const selection2 = document.createElement('option');
    const selection3 = document.createElement('option');

    const taskHeaderContainer = document.createElement('div');
    const labelForTaskHeader = document.createElement('label');
    const inputForTaskHeader = document.createElement('input');

    const taskDescContainer = document.createElement('div');
    const labelForTaskDesc = document.createElement('label');
    const inputForTaskDesc = document.createElement('textarea');

    const dueDateTimeContainer = document.createElement('div');
    const labelForDueDateTime = document.createElement('label');
    const inputForDueDateTime = document.createElement('input');

    const submitBtn = document.createElement('button');

    inputContainer.appendChild(header);
    inputContainer.appendChild(formContainer);
    formContainer.appendChild(form);

    form.appendChild(categoryContainer);
    categoryContainer.appendChild(labelForCategory);
    categoryContainer.appendChild(inputForCategory);
    inputForCategory.appendChild(selection1);
    inputForCategory.appendChild(selection2);
    inputForCategory.appendChild(selection3);

    form.appendChild(taskHeaderContainer);
    taskHeaderContainer.appendChild(labelForTaskHeader);
    taskHeaderContainer.appendChild(inputForTaskHeader);

    form.appendChild(taskDescContainer);
    taskDescContainer.appendChild(labelForTaskDesc);
    taskDescContainer.appendChild(inputForTaskDesc);

    form.appendChild(dueDateTimeContainer);
    dueDateTimeContainer.appendChild(labelForDueDateTime);
    dueDateTimeContainer.appendChild(inputForDueDateTime);

    form.appendChild(submitBtn);

    header.textContent = "Great, now write it down."

    inputContainer.classList.add('input-container');
    header.classList.add('input-header');
    formContainer.classList.add('input-form-container');
    form.classList.add('input-form');
    form.setAttribute('method', 'get');
    form.setAttribute('action', '');

    categoryContainer.classList.add('category-holder');
    inputForCategory.classList.add('select-category')
    labelForCategory.textContent = "Is it for?";
    selection1.textContent = "School"
    selection2.textContent = "Work"
    selection3.textContent = "Personal"
    inputForCategory.setAttribute('id', 'category');
    labelForCategory.setAttribute('for', 'category');
    inputForCategory.setAttribute('name', 'category');
    selection1.setAttribute('value', 'school');
    selection2.setAttribute('value', 'work');
    selection3.setAttribute('value', 'personal');

    taskHeaderContainer.classList.add('task-header-holder');
    labelForTaskHeader.textContent = "Add a header."
    labelForTaskHeader.setAttribute('for', 'taskheader');
    inputForTaskHeader.setAttribute('type', 'text');
    inputForTaskHeader.setAttribute('id', 'task-header');
    inputForTaskHeader.setAttribute('name', 'taskheader');
    inputForTaskHeader.setAttribute('placeholder', 'Enter an eye catching task...');

    taskDescContainer.classList.add('task-desc-holder');
    labelForTaskDesc.textContent = "Describe it."
    labelForTaskDesc.setAttribute('for', 'taskdesc');
    inputForTaskDesc.setAttribute('type', 'text');
    inputForTaskDesc.setAttribute('id', 'task-desc');
    inputForTaskDesc.setAttribute('name', 'taskdesc');
    inputForTaskDesc.setAttribute('placeholder', `Enter the description...`);

    dueDateTimeContainer.classList.add('due-date-time-holder');
    labelForDueDateTime.textContent = "When will you finish it?"
    labelForDueDateTime.setAttribute('for', 'datetime');
    inputForDueDateTime.setAttribute('type', 'datetime-local');
    inputForDueDateTime.setAttribute('id', 'due-date-time');
    inputForDueDateTime.setAttribute('name', 'datetime');

    submitBtn.setAttribute('id', "submit-input-btn");
    submitBtn.textContent = "SUBMIT";

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let category = inputForCategory.value.toLowerCase();
        let header = inputForTaskHeader.value.trim();
        let description = inputForTaskDesc.value.trim();
        let date = inputForDueDateTime.value;

        inputValidation
        (
            false, header, description, date, 
            labelForTaskHeader, labelForTaskDesc, labelForDueDateTime,
            inputForTaskHeader, inputForTaskDesc, inputForDueDateTime
        );

        if(date === ""){
            return;
        }
        else{
            date = format((parseISO(date)), "hh:mm aaaaa'm', yyyy-MM-dd");
        }

        createObject(category, header, description, date);
        clearOutContainer(modal);
        modal.style.display = "flex";
        modal.appendChild(showSuccessModal(category));
        inputForTaskHeader.value = "";
        inputForTaskDesc.value = "";
        inputForDueDateTime.value = "";
    });
    return inputContainer;
}
function clearOutContainer(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}