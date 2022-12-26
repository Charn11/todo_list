import { mainCont } from "./start.js"
export { tasks, newTask, taskHead, headCont, taskCont, taskTable }

let newTask = document.createElement('button');
let taskHead = document.createElement('h2');
let headCont = document.createElement('div');
let taskCont = document.createElement('div');
let taskTable = document.createElement('table');

let tasks = () => {

    //task container
    taskCont.setAttribute("id","task-content");
    mainCont.appendChild(taskCont);

    //header container
    headCont.setAttribute('id', 'headCont');
    taskCont.appendChild(headCont);

    //task heading
    taskHead.setAttribute("id", "taskHeading");
    taskHead.innerText = "TASKS";
    headCont.appendChild(taskHead);

    //create new task button
    newTask.setAttribute("id", "crtTask");
    newTask.innerText = "ADD NEW TASK";
    headCont.appendChild(newTask);

    //display table
    taskTable.setAttribute('id','taskTable');
    taskCont.appendChild(taskTable);
}