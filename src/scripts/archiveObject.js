import ToDo from "./ToDoClass";
import { format } from "date-fns";
import { school, work, personal, archive } from "./arrayofobjects";
import { schoolItemHolder } from "./school";
import { workItemHolder } from "./work";
import { personalItemHolder } from "./personal";

export function putToArchive(index, category) {
    let dateToday = format(new Date(), "hh:mm aaaaa'm', yyyy-MM-dd");

    if (category === "school") {
        let schoolHolder = document.getElementById("school-holder");
        let schoolContainer = document.getElementById("to-do-school-container");
        let category = school[index].category;
        let header = school[index].header;
        let description = school[index].description;
        localStorage.removeItem("school");

        const objectArchive = new ToDo(
            category,
            header,
            description,
            dateToday
        );
        archive.push(objectArchive);
        schoolHolder.remove();
        school.splice(index, 1);
        schoolContainer.appendChild(schoolItemHolder());
        localStorage.setItem("school", JSON.stringify(school));
        localStorage.setItem("archive", JSON.stringify(archive));
    } else if (category === "work") {
        let workHolder = document.getElementById("work-holder");
        let workContainer = document.getElementById("to-do-work-container");
        let category = work[index].category;
        let header = work[index].header;
        let description = work[index].description;
        localStorage.removeItem("work");

        const objectArchive = new ToDo(
            category,
            header,
            description,
            dateToday
        );
        archive.push(objectArchive);
        workHolder.remove();
        work.splice(index, 1);
        workContainer.appendChild(workItemHolder());
        localStorage.setItem("work", JSON.stringify(work));
        localStorage.setItem("archive", JSON.stringify(archive));
    } else if (category === "personal") {
        let personalHolder = document.getElementById("personal-holder");
        let personalContainer = document.getElementById(
            "to-do-personal-container"
        );
        let category = personal[index].category;
        let header = personal[index].header;
        let description = personal[index].description;
        localStorage.removeItem("personal");

        const objectArchive = new ToDo(
            category,
            header,
            description,
            dateToday
        );
        archive.push(objectArchive);
        personalHolder.remove();
        personal.splice(index, 1);
        personalContainer.appendChild(personalItemHolder());
        localStorage.setItem("personal", JSON.stringify(personal));
        localStorage.setItem("archive", JSON.stringify(archive));
    }
}
