import '../styles/personal.scss'
import { showForm } from './form';
import { personal } from './arrayofobjects';

const modal = document.getElementById('input-modal');

export default function personalModule(parent){
    const introContainer = document.createElement('div');
    const introHeader = document.createElement('h1');
    const introSubtextContainer = document.createElement('div');
    const introSubText1 = document.createElement('p');
    const showInputBtn = document.createElement('button');

    introContainer.classList.add('intro-container');
    introHeader.classList.add('intro-header');
    introSubtextContainer.classList.add('intro-subtext-container');
    showInputBtn.classList.add('show-input-btn')

    introHeader.textContent = "Personal";
    introSubText1.textContent = "Doing something really productive for yourself?! Cap.";
    showInputBtn.textContent = "CREATE"

    introContainer.appendChild(introHeader);
    introContainer.appendChild(introSubtextContainer);
    introSubtextContainer.appendChild(introSubText1);
    introContainer.appendChild(showInputBtn);

    showInputBtn.addEventListener('click', () => {
        modal.appendChild(showForm("personal"));
        modal.style.display = "flex";
    });

    return introContainer;
}

export function createPersonalToDo(){
    const toDoContainer = document.createElement('div');
    const toDoHeader = document.createElement('h2');
    const line = document.createElement('hr');

    toDoContainer.appendChild(toDoHeader);
    toDoContainer.setAttribute('id', 'to-do-personal-container');
    toDoContainer.appendChild(line);

    toDoContainer.classList.add('to-do-container');
    line.classList.add('line');

    toDoHeader.textContent = "Personal"

    return toDoContainer;
}

export function personalItemHolder(){
    const toDoHolder = document.createElement('div');
    if (personal.length === 0) {
        const noItem = document.createElement('div');
        toDoHolder.appendChild(noItem);

        toDoHolder.classList.add('to-do-holder');
        toDoHolder.setAttribute('id', 'personal-holder');
        noItem.classList.add('no-item-placeholder');
    
        noItem.textContent = "Don't you have to do something?";

        noItem.style.color = "#ECECEC"
        noItem.style.textAlign = "center"

        return toDoHolder;
    }

    for (let i = 0; i < personal.length; i++) {
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
        toDoHolder.setAttribute('id', 'personal-holder');

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

        toDoItemHeader.textContent = personal[i].header;
        toDoSubText.textContent = personal[i].description;
        dueHolderText.textContent = "Due:"
        dueText.textContent = personal[i].dueDate

    }
    return toDoHolder;
}