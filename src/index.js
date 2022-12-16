import './styles/main.scss'
import homeModule from './scripts/home'
import allModule from './scripts/all';
import { school, work, personal, archive } from './scripts/arrayofobjects';
import { retrieveAll, retrieveSchool, retrieveWork, retrievePersonal, retrieveArchive } from './scripts/retrieveObjects';
import schoolModule, { createSchoolToDo, schoolItemHolder } from './scripts/school';
import workModule, {createWorkToDo, workItemHolder} from './scripts/work';
import personalModule, { createPersonalToDo, personalItemHolder } from './scripts/personal';
import archiveModule, { createDone, createHolder } from './scripts/archive';
import ToDo from './scripts/ToDoClass';


const homeNav = document.getElementById('home');
const allNav = document.getElementById('all');
const schoolNav = document.getElementById('school');
const workNav = document.getElementById('work');
const personalNav = document.getElementById('personal');
const archiveNav = document.getElementById('archive');

export const content = document.getElementById('content');
content.appendChild(homeModule(content));

//default
homeNav.style.backgroundColor = "#0F0F0F"
// changing the selected nav's background
homeNav.addEventListener('click', () => {
    clearOutContainer(content);
    content.appendChild(homeModule(content));
    homeNav.style.backgroundColor = "#0F0F0F"
    allNav.style.backgroundColor = "#1F1F1F"
    schoolNav.style.backgroundColor = "#1F1F1F"
    workNav.style.backgroundColor = "#1F1F1F"
    personalNav.style.backgroundColor = "#1F1F1F"
});

allNav.addEventListener('click', () => {
    retrieveAll();
    clearOutContainer(content);
    content.appendChild(allModule());
    content.appendChild(createSchoolToDo());
    content.appendChild(createWorkToDo());
    content.appendChild(createPersonalToDo());

    for(let i = 1; i < content.childElementCount; i++){
        if(i === 1){
            content.children[i].appendChild(schoolItemHolder());
        }
        else if(i === 2){
            content.children[i].appendChild(workItemHolder());
        }
        else if(i === 3){
            content.children[i].appendChild(personalItemHolder());
        }
    }
    homeNav.style.backgroundColor = "#1F1F1F"
    allNav.style.backgroundColor = "#0F0F0F"
    schoolNav.style.backgroundColor = "#1F1F1F"
    workNav.style.backgroundColor = "#1F1F1F"
    personalNav.style.backgroundColor = "#1F1F1F"
    archiveNav.style.backgroundColor = "#1F1F1F"
});
schoolNav.addEventListener('click', () => {
    retrieveSchool();
    clearOutContainer(content);
    content.appendChild(schoolModule(content));
    content.appendChild(createSchoolToDo());
    content.lastChild.appendChild(schoolItemHolder());
    homeNav.style.backgroundColor = "#1F1F1F"
    allNav.style.backgroundColor = "#1F1F1F"
    schoolNav.style.backgroundColor = "#0F0F0F"
    workNav.style.backgroundColor = "#1F1F1F"
    personalNav.style.backgroundColor = "#1F1F1F"
    archiveNav.style.backgroundColor = "#1F1F1F"
});
workNav.addEventListener('click', () => {
    retrieveWork();
    clearOutContainer(content);
    content.appendChild(workModule(content));
    content.appendChild(createWorkToDo());
    content.lastChild.appendChild(workItemHolder());
    homeNav.style.backgroundColor = "#1F1F1F"
    allNav.style.backgroundColor = "#1F1F1F"
    schoolNav.style.backgroundColor = "#1F1F1F"
    workNav.style.backgroundColor = "#0F0F0F"
    personalNav.style.backgroundColor = "#1F1F1F"
    archiveNav.style.backgroundColor = "#1F1F1F"
});
personalNav.addEventListener('click', () => {
    retrievePersonal();
    clearOutContainer(content);
    content.appendChild(personalModule(content));
    content.appendChild(createPersonalToDo());
    content.lastChild.appendChild(personalItemHolder());
    homeNav.style.backgroundColor = "#1F1F1F"
    allNav.style.backgroundColor = "#1F1F1F"
    schoolNav.style.backgroundColor = "#1F1F1F"
    workNav.style.backgroundColor = "#1F1F1F"
    personalNav.style.backgroundColor = "#0F0F0F"
    archiveNav.style.backgroundColor = "#1F1F1F"
});
archiveNav.addEventListener('click', () => {
    retrieveArchive();
    clearOutContainer(content);
    content.appendChild(archiveModule(content));
    content.appendChild(createDone());
    content.lastChild.appendChild(createHolder());
    homeNav.style.backgroundColor = "#1F1F1F"
    allNav.style.backgroundColor = "#1F1F1F"
    schoolNav.style.backgroundColor = "#1F1F1F"
    workNav.style.backgroundColor = "#1F1F1F"
    personalNav.style.backgroundColor = "#1F1F1F"
    archiveNav.style.backgroundColor = "#0F0F0F"
});

function clearOutContainer(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}