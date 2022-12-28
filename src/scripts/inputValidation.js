export default function inputValidation(
    cameFromEdit,
    header,
    description,
    date,
    labelHeader,
    labelSubText,
    labelDueTime,
    inputHeader,
    inputSubText,
    inputDueTime
) {
    if (header === null || header === "") {
        labelHeader.textContent = "Put some header in it!";
        labelHeader.style.fontWeight = "bold";
        labelHeader.style.color = "#f83939";
        inputHeader.style.border = `1px solid #f83939`;
        return;
    } else {
        labelHeader.textContent = "Add a header.";
        labelHeader.style.fontWeight = "400";
        labelHeader.style.color = "inherit";
        inputHeader.style.border = `none`;
        if (cameFromEdit) {
            labelHeader.textContent = "Change the header.";
        }
    }

    if (description === null || description === "") {
        labelSubText.textContent = "Put some description in it!";
        labelSubText.style.fontWeight = "bold";
        labelSubText.style.color = "#f83939";
        inputSubText.style.border = `1px solid #f83939`;
        return;
    } else {
        labelSubText.textContent = "Describe it.";
        labelSubText.style.fontWeight = "400";
        labelSubText.style.color = "inherit";
        inputSubText.style.border = `none`;
        if (cameFromEdit) {
            labelSubText.textContent = "Change the description.";
        }
    }

    if (date === null || date === "") {
        labelDueTime.textContent = "Put some date in it!";
        labelDueTime.style.fontWeight = "bold";
        labelDueTime.style.color = "#f83939";
        inputDueTime.style.border = `1px solid #f83939`;
        return;
    } else {
        labelDueTime.textContent = "When will you finish it?";
        labelDueTime.style.fontWeight = "400";
        labelDueTime.style.color = "inherit";
        inputDueTime.style.border = `none`;
        if (cameFromEdit) {
            inputDueTime.textContent = "Change the due-date.";
        }
    }
}
