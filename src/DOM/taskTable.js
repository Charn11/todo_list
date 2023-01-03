import { taskCont, taskTable } from "./tasks.js"
import { crtTask } from "../App/add_todo.js";
export { createTable }

//create task table
let createTable = () => {
    taskTable.setAttribute('id','taskTable');
    taskCont.appendChild(taskTable);
    let taskCount = crtTask.length;
    let tasktr = [], tasktd = [];
    if(taskCount==0)
    {

    }
    else{
        for(let i=taskCount-1;i<taskCount;i++)
        {
            tasktr[i] = document.createElement('tr');
            taskTable.appendChild(tasktr[i]);
                    for(let j=0; j<4; j++)
                    {
                        tasktd[j] = document.createElement('td');
                        if(j==0){
                            tasktd[j].innerText = crtTask[i].title;
                        }
                        if(j==1){
                            tasktd[j].innerText = crtTask[i].description;
                        }
                        tasktr[i].appendChild(tasktd[j]);
                    }
        }
    }
}