import { school, work, personal } from "./arrayofobjects";
import { schoolItemHolder } from './school';
import { workItemHolder } from './work';
import { personalItemHolder } from './personal';

export function deleteObject(index, category){
    if(category === "school"){
        let schoolHolder = document.getElementById('school-holder');
        let schoolContainer = document.getElementById('to-do-school-container');
        localStorage.removeItem("school");
        schoolHolder.remove();
        school.splice(index, 1);
        schoolContainer.appendChild(schoolItemHolder());
        console.log(school);
        localStorage.setItem("school", JSON.stringify(school));
        return;
    }
    else if(category === "work"){
        let workHolder = document.getElementById('work-holder');
        let workContainer = document.getElementById('to-do-work-container');
        localStorage.removeItem("work");
        workHolder.remove();
        work.splice(index, 1);
        workContainer.appendChild(workItemHolder());
        console.log(work);
        localStorage.setItem("work", JSON.stringify(work));
        return;
    }
    else if(category === "personal"){
        let personalHolder = document.getElementById('personal-holder');
        let personalContainer = document.getElementById('to-do-personal-container');
        localStorage.removeItem("personal");
        personalHolder.remove();
        personal.splice(index, 1);
        personalContainer.appendChild(personalItemHolder());
        localStorage.setItem("personal", JSON.stringify(personal));
        console.log(personal);
        return;
    }
}