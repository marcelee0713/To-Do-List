import ToDo from './ToDoClass';
import { school, work, personal, archive } from './arrayofobjects';

export function retrieveSchool(){
    // Will retrieve the data in localStorage
    let retrievedSchoolData = JSON.parse(localStorage.getItem("school"));
    if(retrievedSchoolData != null){
        // Also everytime when the navigation is pressed. 
        // The array of this page will be cleared out
        // Same goes for every function.
        school.length = 0;
        for(let i = 0; i < retrievedSchoolData.length; i++){
            let category = retrievedSchoolData[i].category;
            let header = retrievedSchoolData[i].header;
            let description = retrievedSchoolData[i].description;
            let dueDate = retrievedSchoolData[i].dueDate;
    
            const schoolData = new ToDo(category, header, description, dueDate);
            school.push(schoolData);
        }
    }
}

export function retrieveWork(){
    let retrievedWorkData = JSON.parse(localStorage.getItem("work"));
    if(retrievedWorkData != null){
        work.length = 0;
        for(let i = 0; i < retrievedWorkData.length; i++){
            let category = retrievedWorkData[i].category;
            let header = retrievedWorkData[i].header;
            let description = retrievedWorkData[i].description;
            let dueDate = retrievedWorkData[i].dueDate;

            const workData = new ToDo(category, header, description, dueDate);
            work.push(workData);
        }
    }
}

export function retrievePersonal(){
    let retrievedPersonalData = JSON.parse(localStorage.getItem("personal"));
    if(retrievedPersonalData != null){
        personal.length = 0;
        for(let i = 0; i < retrievedPersonalData.length; i++){
            let category = retrievedPersonalData[i].category;
            let header = retrievedPersonalData[i].header;
            let description = retrievedPersonalData[i].description;
            let dueDate = retrievedPersonalData[i].dueDate;

            const personalData = new ToDo(category, header, description, dueDate);
            personal.push(personalData);
        }
    }
}

export function retrieveArchive(){
    let retrievedArchiveData = JSON.parse(localStorage.getItem("archive"));
    if(retrievedArchiveData != null){
        archive.length = 0;
        for(let i = 0; i < retrievedArchiveData.length; i++){
            let category = retrievedArchiveData[i].category;
            let header = retrievedArchiveData[i].header;
            let description = retrievedArchiveData[i].description;
            let dueDate = retrievedArchiveData[i].dueDate;

            const archiveData = new ToDo(category, header, description, dueDate);
            archive.push(archiveData);
        }
    }
}

export function retrieveAll(){
    retrieveSchool();
    retrieveWork();
    retrievePersonal();
}