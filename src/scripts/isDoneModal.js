import { putToArchive } from "./archiveObject";

const modal = document.getElementById('input-modal');

export function showIsDoneModal(index, category, header, checkbox) {
    const doneContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    const info = document.createElement('div');
    const itemHeader = document.createElement('div');
    const doneButtonContainer = document.createElement('div');
    const yesBtn = document.createElement('button');
    const noBtn = document.createElement('button');

    doneContainer.appendChild(infoContainer);
    doneContainer.appendChild(doneButtonContainer);
    infoContainer.appendChild(info);
    infoContainer.appendChild(itemHeader);
    doneButtonContainer.appendChild(yesBtn);
    doneButtonContainer.appendChild(noBtn);

    doneContainer.classList.add('done-modal-containers');
    infoContainer.classList.add('done-info-container');
    info.classList.add('done-info');
    itemHeader.classList.add('done-info-header')
    doneButtonContainer.classList.add('done-button-container');
    yesBtn.classList.add('done-btn-style');
    noBtn.classList.add('done-btn-style');

    info.textContent = `Are you sure you're done at`;
    itemHeader.textContent = `${header}?`;
    yesBtn.textContent = "YES";
    noBtn.textContent = "NO";

    yesBtn.addEventListener('click', () => {
        clearOutContainer(modal);
        putToArchive(index, category)
        modal.style.display = "none";
    });

    noBtn.addEventListener('click', () => {
        clearOutContainer(modal);
        modal.style.display = "none";
        checkbox.checked = false;
    });

    return doneContainer;
}
function clearOutContainer(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}