import './styles/main.scss'
import homeModule from './scripts/home'
import allModule from './scripts/all';
import schoolModule, { createSchoolToDo, schoolItemHolder } from './scripts/school';
import workModule, {createWorkToDo, workItemHolder} from './scripts/work';
import personalModule, { createPersonalToDo, personalItemHolder } from './scripts/personal';

const homeNav = document.getElementById('home');
const allNav = document.getElementById('all');
const schoolNav = document.getElementById('school');
const workNav = document.getElementById('work');
const personalNav = document.getElementById('personal');

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
});
schoolNav.addEventListener('click', () => {
    clearOutContainer(content);
    content.appendChild(schoolModule(content));
    content.appendChild(createSchoolToDo());
    content.lastChild.appendChild(schoolItemHolder());
    homeNav.style.backgroundColor = "#1F1F1F"
    allNav.style.backgroundColor = "#1F1F1F"
    schoolNav.style.backgroundColor = "#0F0F0F"
    workNav.style.backgroundColor = "#1F1F1F"
    personalNav.style.backgroundColor = "#1F1F1F"
});
workNav.addEventListener('click', () => {
    clearOutContainer(content);
    content.appendChild(workModule(content));
    content.appendChild(createWorkToDo());
    content.lastChild.appendChild(workItemHolder());
    homeNav.style.backgroundColor = "#1F1F1F"
    allNav.style.backgroundColor = "#1F1F1F"
    schoolNav.style.backgroundColor = "#1F1F1F"
    workNav.style.backgroundColor = "#0F0F0F"
    personalNav.style.backgroundColor = "#1F1F1F"
});
personalNav.addEventListener('click', () => {
    clearOutContainer(content);
    content.appendChild(personalModule(content));
    content.appendChild(createPersonalToDo(content));
    content.lastChild.appendChild(personalItemHolder());
    homeNav.style.backgroundColor = "#1F1F1F"
    allNav.style.backgroundColor = "#1F1F1F"
    schoolNav.style.backgroundColor = "#1F1F1F"
    workNav.style.backgroundColor = "#1F1F1F"
    personalNav.style.backgroundColor = "#0F0F0F"
});

function clearOutContainer(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}