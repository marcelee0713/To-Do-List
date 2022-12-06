import './styles/main.scss'
import homeModule, { showForm }from './scripts/home'

const content = document.getElementById('content');
content.appendChild(homeModule());
content.appendChild(showForm());