import { deleteObject } from "./deleteObject";

const modal = document.getElementById("input-modal");

export function showDeleteModal(index, category, header) {
    const deleteContainer = document.createElement("div");
    const infoContainer = document.createElement("div");
    const info = document.createElement("div");
    const itemHeader = document.createElement("div");
    const delButtonContainer = document.createElement("div");
    const yesBtn = document.createElement("button");
    const noBtn = document.createElement("button");

    deleteContainer.appendChild(infoContainer);
    deleteContainer.appendChild(delButtonContainer);
    infoContainer.appendChild(info);
    infoContainer.appendChild(itemHeader);
    delButtonContainer.appendChild(yesBtn);
    delButtonContainer.appendChild(noBtn);

    deleteContainer.classList.add("delete-modal-containers");
    infoContainer.classList.add("delete-info-container");
    info.classList.add("delete-info");
    itemHeader.classList.add("delete-info-header");
    delButtonContainer.classList.add("delete-button-container");
    yesBtn.classList.add("delete-btn-style");
    noBtn.classList.add("delete-btn-style");

    info.textContent = `Are you sure you want to delete`;
    itemHeader.textContent = `${header}?`;
    yesBtn.textContent = "YES";
    noBtn.textContent = "NO";

    yesBtn.addEventListener("click", () => {
        clearOutContainer(modal);
        deleteObject(index, category);
        modal.style.display = "none";
    });

    noBtn.addEventListener("click", () => {
        clearOutContainer(modal);
        modal.style.display = "none";
    });

    return deleteContainer;
}
function clearOutContainer(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
