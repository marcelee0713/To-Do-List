import "../styles/all.scss";
import { showForm } from "./form";
const modal = document.getElementById("input-modal");

export default function allModule(parent) {
    const introContainer = document.createElement("div");
    const introHeader = document.createElement("h1");
    const introSubtextContainer = document.createElement("div");
    const introSubText1 = document.createElement("p");
    const showInputBtn = document.createElement("button");

    introContainer.classList.add("intro-container");
    introHeader.classList.add("intro-header");
    introSubtextContainer.classList.add("intro-subtext-container");
    showInputBtn.classList.add("show-input-btn");

    introHeader.textContent = "All of your To-Dos";
    introSubText1.textContent = "Surely all of them will be done soon right?";
    showInputBtn.textContent = "CREATE";

    introContainer.appendChild(introHeader);
    introContainer.appendChild(introSubtextContainer);
    introSubtextContainer.appendChild(introSubText1);
    introContainer.appendChild(showInputBtn);

    showInputBtn.addEventListener("click", () => {
        modal.appendChild(showForm("school"));
        modal.style.display = "flex";
    });

    return introContainer;
}
