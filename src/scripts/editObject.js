import { school, work, personal } from "./arrayofobjects";
import { schoolItemHolder } from './school';
import { workItemHolder } from './work';
import { personalItemHolder } from './personal';

export function editObject(index, category, header, desc, date){
    if(category === "school"){
        let schoolHolder = document.getElementById('school-holder');
        let schoolContainer = document.getElementById('to-do-school-container');
        schoolHolder.remove();
        school[index].header = header;
        school[index].description = desc;
        school[index].dueDate = date;
        localStorage.setItem("school", JSON.stringify(school));
        schoolContainer.appendChild(schoolItemHolder());
        return;
    }
    else if(category === "work"){
        let workHolder = document.getElementById('work-holder');
        let workContainer = document.getElementById('to-do-work-container');
        workHolder.remove();
        work[index].header = header;
        work[index].description = desc;
        work[index].dueDate = date;
        localStorage.setItem("work", JSON.stringify(work));
        workContainer.appendChild(workItemHolder());
        return;
    }
    else if(category === "personal"){
        let personalHolder = document.getElementById('personal-holder');
        let personalContainer = document.getElementById('to-do-personal-container');
        personalHolder.remove();
        personal[index].header = header;
        personal[index].description = desc;
        personal[index].dueDate = date;
        localStorage.setItem("personal", JSON.stringify(personal));
        personalContainer.appendChild(personalItemHolder());
        return;
    }
}