import ToDo from "./ToDoClass";
import { school, work, personal } from "./arrayofobjects";
import { schoolItemHolder } from "./school";
import { workItemHolder } from "./work";
import { personalItemHolder } from "./personal";

export function createObject(category, header, description, date) {
    const toDoObject = new ToDo(category, header, description, date);
    if (toDoObject.category === "school") {
        let schoolHolder = document.getElementById("school-holder");
        let schoolContainer = document.getElementById("to-do-school-container");

        if (schoolHolder === null && schoolContainer === null) {
            school.push(toDoObject);
            localStorage.setItem("school", JSON.stringify(school));
            return;
        }

        schoolHolder.remove();
        school.push(toDoObject);
        localStorage.setItem("school", JSON.stringify(school));
        schoolContainer.appendChild(schoolItemHolder());
        return;
    } else if (toDoObject.category === "work") {
        let workHolder = document.getElementById("work-holder");
        let workContainer = document.getElementById("to-do-work-container");

        if (workHolder === null && workContainer === null) {
            work.push(toDoObject);
            localStorage.setItem("work", JSON.stringify(work));
            return;
        }

        workHolder.remove();
        work.push(toDoObject);
        localStorage.setItem("work", JSON.stringify(work));
        workContainer.appendChild(workItemHolder());
        return;
    } else if (toDoObject.category === "personal") {
        let personalHolder = document.getElementById("personal-holder");
        let personalContainer = document.getElementById(
            "to-do-personal-container"
        );

        if (personalHolder === null && personalContainer === null) {
            personal.push(toDoObject);
            localStorage.setItem("personal", JSON.stringify(personal));
            return;
        }

        personalHolder.remove();
        personal.push(toDoObject);
        localStorage.setItem("personal", JSON.stringify(personal));
        personalContainer.appendChild(personalItemHolder());
        return;
    }
}
