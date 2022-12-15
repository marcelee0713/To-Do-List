import '../styles/school.scss'
import { showForm } from './form';
import { school } from './arrayofobjects';
import { showDeleteModal } from './deleteModal';
import { showEditModal } from './editModal';
import { showIsDoneModal } from './isDoneModal';

const modal = document.getElementById('input-modal');

export default function schoolModule(parent) {
    const introContainer = document.createElement('div');
    const introHeader = document.createElement('h1');
    const introSubtextContainer = document.createElement('div');
    const introSubText1 = document.createElement('p');
    const introSubText2 = document.createElement('p');
    const showInputBtn = document.createElement('button');

    introContainer.classList.add('intro-container');
    introHeader.classList.add('intro-header');
    introSubtextContainer.classList.add('intro-subtext-container');
    showInputBtn.classList.add('show-input-btn')

    introHeader.textContent = "School";
    introSubText1.textContent = "Seems like you're the student,";
    introSubText2.textContent = "that tells the teacher about the homework.";
    showInputBtn.textContent = "CREATE"

    introContainer.appendChild(introHeader);
    introContainer.appendChild(introSubtextContainer);
    introSubtextContainer.appendChild(introSubText1);
    introSubtextContainer.appendChild(introSubText2);
    introContainer.appendChild(showInputBtn);

    showInputBtn.addEventListener('click', () => {
        modal.appendChild(showForm("school"));
        modal.style.display = "flex";
    });

    return introContainer;
}

export function createSchoolToDo() {
    const toDoContainer = document.createElement('div');
    const toDoHeader = document.createElement('h2');
    const line = document.createElement('hr');

    toDoContainer.appendChild(toDoHeader);
    toDoContainer.appendChild(line);

    toDoContainer.classList.add('to-do-container');
    toDoContainer.setAttribute('id', 'to-do-school-container');
    line.classList.add('line');

    toDoHeader.textContent = "School"

    return toDoContainer;
}

export function schoolItemHolder(){
    const toDoHolder = document.createElement('div');
    if (school.length === 0) {
        const noItem = document.createElement('div');
        toDoHolder.appendChild(noItem);

        toDoHolder.classList.add('to-do-holder');
        toDoHolder.setAttribute('id', 'school-holder');
        noItem.classList.add('no-item-placeholder');
    
        noItem.textContent = "No homeworks currently?";

        noItem.style.color = "#ECECEC"
        noItem.style.textAlign = "center"

        return toDoHolder;
    }

    for (let i = 0; i < school.length; i++) {
        const toDoItem = document.createElement('div');
        const toDoCheckBox = document.createElement('input');
        const toDoDetailsContainer = document.createElement('div');

        const toDoHeaderAndDueOptionsContainer = document.createElement('div');
        const toDoSubText = document.createElement('div');

        const toDoItemHeader = document.createElement('div');
        const dueOptionsContainer = document.createElement('div');

        const dueContainer = document.createElement('div');
        const dueHolderText = document.createElement('div');
        const dueText = document.createElement('div');
        const deleteBtn = document.createElement('i');
        const editBtn = document.createElement('i');

        //inside todoholder
        toDoHolder.appendChild(toDoItem)
        toDoItem.appendChild(toDoCheckBox);
        toDoItem.appendChild(toDoDetailsContainer);

        toDoDetailsContainer.appendChild(toDoHeaderAndDueOptionsContainer);
        toDoDetailsContainer.appendChild(toDoSubText);

        toDoHeaderAndDueOptionsContainer.appendChild(toDoItemHeader);
        toDoHeaderAndDueOptionsContainer.appendChild(dueOptionsContainer);

        dueOptionsContainer.appendChild(dueContainer);
        dueContainer.appendChild(dueHolderText);
        dueContainer.appendChild(dueText);

        dueOptionsContainer.appendChild(deleteBtn);
        dueOptionsContainer.appendChild(editBtn);

        toDoHolder.classList.add('to-do-holder');
        toDoHolder.setAttribute('id', 'school-holder');

        toDoItem.classList.add('to-do-item');
        toDoCheckBox.classList.add('to-do-check-box');
        toDoDetailsContainer.classList.add('to-do-details-container');

        toDoHeaderAndDueOptionsContainer.classList.add('header-and-due-options-container');
        toDoSubText.classList.add('to-do-sub-text')

        toDoItemHeader.classList.add('to-do-item-header');
        dueOptionsContainer.classList.add('due-options-container');

        dueContainer.classList.add('due-container');
        dueHolderText.classList.add('due-holder-text');
        dueText.classList.add('due-text');

        deleteBtn.classList.add('fa-solid');
        deleteBtn.classList.add('fa-trash');
        editBtn.classList.add('fa-solid');
        editBtn.classList.add('fa-pen');

        toDoCheckBox.setAttribute('type', 'checkbox');

        toDoItemHeader.textContent = school[i].header;
        toDoSubText.textContent = school[i].description;
        dueHolderText.textContent = "Due:";
        dueText.textContent = school[i].dueDate;

        //functionalities of each to-do items
        toDoCheckBox.addEventListener('click', () => {
            modal.appendChild(showIsDoneModal());
            modal.style.display = "flex";
        });
        deleteBtn.addEventListener('click', () => {
            modal.appendChild(showDeleteModal(i, school[i].category, school[i].header));
            modal.style.display = "flex";
        });
        editBtn.addEventListener('click', () => {
            modal.appendChild(showEditModal(i, school[i].category, school[i].header, school[i].description));
            modal.style.display = "flex";
        });

    }
    return toDoHolder;
}