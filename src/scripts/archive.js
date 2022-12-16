import { archive } from './arrayofobjects';

export default function archiveModule(parent){
    const introContainer = document.createElement('div');
    const introHeader = document.createElement('h1');
    const introSubtextContainer = document.createElement('div');
    const introSubText1 = document.createElement('p');

    introContainer.classList.add('intro-container');
    introHeader.classList.add('intro-header');
    introSubtextContainer.classList.add('intro-subtext-container');

    introHeader.textContent = "Archive";
    introSubText1.textContent = "Is where all of your task are surely done here.";

    introContainer.appendChild(introHeader);
    introContainer.appendChild(introSubtextContainer);
    introSubtextContainer.appendChild(introSubText1);

    return introContainer;
}

export function createDone() {
    const toDoContainer = document.createElement('div');
    const toDoHeader = document.createElement('h2');
    const line = document.createElement('hr');

    toDoContainer.appendChild(toDoHeader);
    toDoContainer.appendChild(line);

    toDoContainer.classList.add('to-do-container');
    toDoContainer.setAttribute('id', 'to-do-done-container');
    line.classList.add('line');

    toDoHeader.textContent = "Done"

    return toDoContainer;
}

export function createHolder() {
    const toDoHolder = document.createElement('div');
    if (archive.length === 0) {
        const noItem = document.createElement('div');
        toDoHolder.appendChild(noItem);

        toDoHolder.classList.add('to-do-holder');
        toDoHolder.setAttribute('id', 'done-holder');
        noItem.classList.add('no-item-placeholder');
    
        noItem.textContent = "Are you actually this lazy? Just kidding.";

        noItem.style.color = "#ECECEC"
        noItem.style.textAlign = "center"

        return toDoHolder;
    }

    for (let i = 0; i < archive.length; i++) {
        const toDoItem = document.createElement('div');
        const toDoDetailsContainer = document.createElement('div');

        const toDoHeaderAndDueOptionsContainer = document.createElement('div');
        const toDoSubText = document.createElement('div');

        const toDoItemHeader = document.createElement('div');
        const dueOptionsContainer = document.createElement('div');

        const dueContainer = document.createElement('div');
        const dueHolderText = document.createElement('div');
        const dueText = document.createElement('div');

        //inside todoholder
        toDoHolder.appendChild(toDoItem)
        toDoItem.appendChild(toDoDetailsContainer);

        toDoDetailsContainer.appendChild(toDoHeaderAndDueOptionsContainer);
        toDoDetailsContainer.appendChild(toDoSubText);

        toDoHeaderAndDueOptionsContainer.appendChild(toDoItemHeader);
        toDoHeaderAndDueOptionsContainer.appendChild(dueOptionsContainer);

        dueOptionsContainer.appendChild(dueContainer);
        dueContainer.appendChild(dueHolderText);
        dueContainer.appendChild(dueText);

        toDoHolder.classList.add('to-do-holder');
        toDoHolder.setAttribute('id', 'school-holder');

        toDoItem.classList.add('to-do-item');
        toDoDetailsContainer.classList.add('to-do-details-container');

        toDoHeaderAndDueOptionsContainer.classList.add('header-and-due-options-container');
        toDoSubText.classList.add('to-do-sub-text')

        toDoItemHeader.classList.add('to-do-item-header');
        dueOptionsContainer.classList.add('due-options-container');

        dueContainer.classList.add('due-container');
        dueHolderText.classList.add('due-holder-text');
        dueText.classList.add('due-text');

        toDoItemHeader.textContent = archive[i].header;
        toDoSubText.textContent = archive[i].description;
        dueHolderText.textContent = "Task Done:";
        dueText.textContent = archive[i].dueDate;
    }
    return toDoHolder;
}

