import { mainCont } from "./start.js"
export { tasks }

let tasks = () => {

    //task container
    let taskCont = document.createElement('div');
    taskCont.setAttribute("id","task-content");
    mainCont.appendChild(taskCont);

    //header container
    let headCont = document.createElement('div');
    headCont.setAttribute('id', 'headCont');
    taskCont.appendChild(headCont);

    //task heading
    let taskHead = document.createElement('h3');
    taskHead.setAttribute("id", "taskHeading");
    taskHead.innerText = "TASKS";
    headCont.appendChild(taskHead);

    //create new task button
    let newTask = document.createElement('button');
    newTask.setAttribute("id", "crtTask");
    newTask.innerText = "NEW TASK";
    headCont.appendChild(newTask);
}