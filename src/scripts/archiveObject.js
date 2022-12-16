import ToDo from './ToDoClass';
import { school, work, personal, archive } from './arrayofobjects';
import { schoolItemHolder } from './school';
import { workItemHolder } from './work';
import { personalItemHolder } from './personal';

export function putToArchive(index, category){
    if(category === "school"){
        let schoolHolder = document.getElementById('school-holder');
        let schoolContainer = document.getElementById('to-do-school-container');
        let category = school[index].category;
        let header = school[index].header;
        let description = school[index].description;
        let dueDate = school[index].dueDate;

        const objectArchive = new ToDo(category, header, description, dueDate);
        archive.push(objectArchive);
        schoolHolder.remove();
        school.splice(index, 1);
        schoolContainer.appendChild(schoolItemHolder());
        console.log(archive);
    }
    else if(category === "work"){
        let workHolder = document.getElementById('work-holder');
        let workContainer = document.getElementById('to-do-work-container');
        let category = work[index].category;
        let header = work[index].header;
        let description = work[index].description;
        let dueDate = work[index].dueDate;

        const objectArchive = new ToDo(category, header, description, dueDate);
        archive.push(objectArchive);
        workHolder.remove();
        work.splice(index, 1);
        workContainer.appendChild(workItemHolder());
        console.log(archive);
    }
    else if(category === "personal"){
        let personalHolder = document.getElementById('personal-holder');
        let personalContainer = document.getElementById('to-do-personal-container');
        let category = personal[index].category;
        let header = personal[index].header;
        let description = personal[index].description;
        let dueDate = personal[index].dueDate;

        const objectArchive = new ToDo(category, header, description, dueDate);
        archive.push(objectArchive);
        personalHolder.remove();
        personal.splice(index, 1);
        personalContainer.appendChild(personalItemHolder());
        console.log(archive);
    }
}