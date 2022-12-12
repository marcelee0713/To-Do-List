import './styles/main.scss'
import homeModule from './scripts/home'
import schoolModule, { createSchoolToDo } from './scripts/school';
import allModule from './scripts/all';
import workModule, {createWorkToDo} from './scripts/work';
import personalModule, { createPersonalToDo } from './scripts/personal';
import { school } from './scripts/arrayofobjects';

const homeNav = document.getElementById('home');
const allNav = document.getElementById('all');
const schoolNav = document.getElementById('school');
const workNav = document.getElementById('work');
const personalNav = document.getElementById('personal');

const content = document.getElementById('content');
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
    content.appendChild(allModule(content));
    content.appendChild(createSchoolToDo());
    content.appendChild(createWorkToDo());
    content.appendChild(createPersonalToDo(content));
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