const modal = document.getElementById('input-modal');

export default function showSuccessModal(category){
    const successContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    const info = document.createElement('div');
    const itemHeader = document.createElement('div');
    const successButtonContainer = document.createElement('div');
    const yesBtn = document.createElement('button');

    successContainer.appendChild(infoContainer);
    successContainer.appendChild(successButtonContainer);
    infoContainer.appendChild(info);
    infoContainer.appendChild(itemHeader);
    successButtonContainer.appendChild(yesBtn);

    successContainer.classList.add('success-modal-containers');
    infoContainer.classList.add('success-info-container');
    info.classList.add('success-info');
    itemHeader.classList.add('success-info-header')
    successButtonContainer.classList.add('success-button-container');
    yesBtn.classList.add('success-btn-style');

    info.textContent = `Successfully added to your`;
    itemHeader.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} page!`;
    yesBtn.textContent = "OKAY";

    yesBtn.addEventListener('click', () => {
        clearOutContainer(modal);
        modal.style.display = "none";
    });

    return successContainer;
}

function clearOutContainer(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}