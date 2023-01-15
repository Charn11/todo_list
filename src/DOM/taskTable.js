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
        taskTable.innerText = "NO ACTIVE TASKS"
    }
    else{
        taskTable.innerText = ""
        for(let i=taskCount-1;i<taskCount;i++)
        {
            tasktr[i] = document.createElement('tr');
            tasktr[i].setAttribute('class','tasktr');
            taskTable.appendChild(tasktr[i]);
                    for(let j=0; j<5; j++)
                    {
                        tasktd[j] = document.createElement('td');
                        if(j==0){
                            tasktd[j].innerText = crtTask[i].title;
                        }
                        else if(j==1){
                            tasktd[j].innerText = crtTask[i].description;
                        }
                        else if(j==2)
                        {
                            tasktd[j].innerText = crtTask[i].duedate;
                        }
                        else if(j==3)
                        {
                            tasktd[j].innerText = crtTask[i].priority;
                        }
                        else if(j==4)
                        {
                            let tdImg = document.createElement('img');
                            tdImg.setAttribute('src','../images/delicon.png')
                            tasktd[j].appendChild(tdImg);
                        }
                        tasktr[i].appendChild(tasktd[j]);
                    }
        }
    }
}