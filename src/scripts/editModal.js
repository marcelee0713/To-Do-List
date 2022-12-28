import { editObject } from "./editObject";
import { format, parse, parseISO, sub } from "date-fns";
import inputValidation from "./inputValidation";

const modal = document.getElementById("input-modal");

export function showEditModal(index, category, header, desc) {
    const editModalContainer = document.createElement("div");

    const editInfoContainer = document.createElement("div");
    const editInfoSubText = document.createElement("div");
    const editInfo = document.createElement("div");

    const editFormHolder = document.createElement("div");
    const editForm = document.createElement("form");

    const editInputContainer = document.createElement("div");
    const editHeaderHolder = document.createElement("div");
    const editDescHolder = document.createElement("div");
    const editDueDateHolder = document.createElement("div");

    const editBtnContainer = document.createElement("div");
    const applyBtn = document.createElement("button");
    const closeBtn = document.createElement("button");

    const editHeaderLabel = document.createElement("label");
    const editHeaderInput = document.createElement("input");
    const editDescLabel = document.createElement("label");
    const editDescInput = document.createElement("input");
    const editDueDateLabel = document.createElement("label");
    const editDueDateInput = document.createElement("input");

    editModalContainer.appendChild(editInfoContainer);
    editModalContainer.appendChild(editFormHolder);

    editInfoContainer.appendChild(editInfoSubText);
    editInfoContainer.appendChild(editInfo);

    editFormHolder.appendChild(editForm);
    editForm.appendChild(editInputContainer);
    editForm.appendChild(editBtnContainer);

    editInputContainer.appendChild(editHeaderHolder);
    editInputContainer.appendChild(editDescHolder);
    editInputContainer.appendChild(editDueDateHolder);

    editBtnContainer.appendChild(applyBtn);
    editBtnContainer.appendChild(closeBtn);

    editHeaderHolder.appendChild(editHeaderLabel);
    editHeaderHolder.appendChild(editHeaderInput);
    editDescHolder.appendChild(editDescLabel);
    editDescHolder.appendChild(editDescInput);
    editDueDateHolder.appendChild(editDueDateLabel);
    editDueDateHolder.appendChild(editDueDateInput);

    editModalContainer.classList.add("edit-modal-container");
    editInfoContainer.classList.add("edit-info-container");
    editInfoSubText.classList.add("edit-info-sub-text");
    editInfo.classList.add("edit-info");

    editFormHolder.classList.add("edit-form-holder");
    editForm.classList.add("edit-form");
    editForm.setAttribute("method", "get");
    editForm.setAttribute("action", "");

    editInputContainer.classList.add("edit-input-container");

    editHeaderHolder.classList.add("edit-header-holder");
    editHeaderLabel.classList.add("edit-header-label");
    editHeaderInput.classList.add("edit-header-input");
    editHeaderLabel.setAttribute("for", "edit-header");
    editHeaderInput.setAttribute("type", "text");
    editHeaderInput.setAttribute("name", "edit-header");
    editHeaderInput.setAttribute("id", "edit-header");

    editDescHolder.classList.add("edit-desc-holder");
    editDescLabel.classList.add("edit-desc-label");
    editDescInput.classList.add("edit-desc-input");
    editDescLabel.setAttribute("for", "edit-desc");
    editDescInput.setAttribute("type", "text");
    editDescInput.setAttribute("name", "edit-desc");
    editDescInput.setAttribute("id", "edit-desc");

    editDueDateHolder.classList.add("edit-due-date-holder");
    editDueDateLabel.classList.add("edit-due-date-label");
    editDueDateInput.classList.add("edit-due-date-input");
    editDueDateLabel.setAttribute("for", "edit-due-date");
    editDueDateInput.setAttribute("type", "datetime-local");
    editDueDateInput.setAttribute("name", "edit-due-date");
    editDueDateInput.setAttribute("id", "edit-edit-date");

    editBtnContainer.classList.add("edit-btn-container");

    editInfoSubText.textContent = "You are now currently editing:";
    editInfo.textContent = header;

    editHeaderLabel.textContent = "Change the header.";
    editDescLabel.textContent = "Change the description.";
    editDueDateLabel.textContent = "Change the due-date.";

    editHeaderInput.value = header;
    editDescInput.value = desc;

    applyBtn.textContent = "APPLY";
    closeBtn.textContent = "CLOSE";

    applyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let thisHeader = editHeaderInput.value.trim();
        let thisDesc = editDescInput.value.trim();
        let thisDate = editDueDateInput.value;

        inputValidation(
            true,
            thisHeader,
            thisDesc,
            thisDate,
            editHeaderLabel,
            editDescLabel,
            editDueDateLabel,
            editHeaderInput,
            editDescInput,
            editDueDateInput
        );

        if (thisDate === "") {
            return;
        } else {
            thisDate = format(parseISO(thisDate), "hh:mm aaaaa'm', yyyy-MM-dd");
        }
        editObject(index, category, thisHeader, thisDesc, thisDate);
        modal.style.display = "none";
        clearOutContainer(modal);
    });
    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "none";
        clearOutContainer(modal);
    });

    return editModalContainer;
}

function clearOutContainer(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
