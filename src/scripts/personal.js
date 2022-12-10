import '../styles/personal.scss'

export default function personalModule(parent){
    const introContainer = document.createElement('div');
    const introHeader = document.createElement('h1');
    const introSubtextContainer = document.createElement('div');
    const introSubText1 = document.createElement('p');

    introContainer.classList.add('intro-container');
    introHeader.classList.add('intro-header');
    introSubtextContainer.classList.add('intro-subtext-container');

    introHeader.textContent = "Personal";
    introSubText1.textContent = "Doing something really productive for yourself?! Cap.";

    introContainer.appendChild(introHeader);
    introContainer.appendChild(introSubtextContainer);
    introSubtextContainer.appendChild(introSubText1);

    return introContainer;
}

export function createPersonalToDo(){
    const toDoContainer = document.createElement('div');
    const toDoHeader = document.createElement('h2');
    const line = document.createElement('hr');
    const toDoHolder = document.createElement('div');

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

    toDoContainer.appendChild(toDoHeader);
    toDoContainer.appendChild(line);
    toDoContainer.appendChild(toDoHolder);

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

    toDoContainer.classList.add('to-do-container');
    line.classList.add('line');
    toDoHolder.classList.add('to-do-holder');
    
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

    toDoHeader.textContent = "Personal"
    toDoItemHeader.textContent = "Doing the dishes"
    toDoSubText.textContent = `Do I even need this?`
    dueHolderText.textContent = "Due:"
    dueText.textContent = "10:39 pm, 2022-12-09"

    return toDoContainer;
}