import ToDo from './ToDoClass';
import { school, work, personal } from './arrayofobjects';
import { schoolItemHolder } from './school';
import { workItemHolder } from './work';
import { personalItemHolder } from './personal';

export function createObject(category, header, description, date){
    const toDoObject = new ToDo(category, header, description, date);
    if(toDoObject.category === "school"){
        let schoolHolder = document.getElementById('school-holder');
        let schoolContainer = document.getElementById('to-do-school-container');

        if(schoolHolder === null && schoolContainer === null){
            school.push(toDoObject);
            return
        }

        schoolHolder.remove();
        school.push(toDoObject);
        schoolContainer.appendChild(schoolItemHolder());
        return;
    }
    else if(toDoObject.category === "work"){
        let workHolder = document.getElementById('work-holder');
        let workContainer = document.getElementById('to-do-work-container');

        workHolder.remove();
        work.push(toDoObject);
        workContainer.appendChild(workItemHolder());
        return;
    }
    else if(toDoObject.category === "personal"){
        let personalHolder = document.getElementById('personal-holder');
        let personalContainer = document.getElementById('to-do-personal-container');

        personalHolder.remove();
        personal.push(toDoObject);
        personalContainer.appendChild(personalItemHolder());
        return;
    }
}