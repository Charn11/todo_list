import { newTask, tasks, taskCont, headCont, taskHead } from "./tasks.js"
export { addTask, submitTask }

let submitTask = document.createElement('button');

let addTask = () => {
    newTask.addEventListener('click', e => {
        
        newTask.remove();
        taskHead.innerText = "CREATE NEW TASK";

        //create containers
        let taskForm = document.createElement('form');
        taskForm.setAttribute("id","taskForm");
        taskCont.append(taskForm);

        //create input
        let labelName = document.createElement("label");
        labelName.setAttribute("for","inputName");
        labelName.innerText = "Title:";
        taskForm.appendChild(labelName);
        let inputName = document.createElement('input');
        inputName.setAttribute("type","text");
        inputName.setAttribute("id","inputName");
        taskForm.appendChild(inputName);

        //create description
        let labelDesp = document.createElement("label");
        labelDesp.setAttribute("for","inputDesp");
        labelDesp.innerText = "Description:";
        taskForm.appendChild(labelDesp);
        let inputDesp = document.createElement('input');
        inputDesp.setAttribute("type","text");
        inputDesp.setAttribute("id","inputDesp");
        taskForm.appendChild(inputDesp);

        //create duedate
        let labelDate = document.createElement("label");
        labelDate.setAttribute("for","inputDate");
        labelDate.innerText = "Due-date:";
        taskForm.appendChild(labelDate);
        let inputDate = document.createElement('input');
        inputDate.setAttribute("type","date");
        inputDate.setAttribute("id","inputDate");
        taskForm.appendChild(inputDate);

        //set priority

        let priorHead = document.createElement('div');
        priorHead.setAttribute("id","priorDiv");
        taskForm.appendChild(priorHead);

        let priorTitle = document.createElement('p');
        priorTitle.setAttribute("id","priorTitle");
        priorTitle.innerText = "Priority:";
        priorHead.appendChild(priorTitle);

        let labelLow = document.createElement("label");
        labelLow.setAttribute("for","inputLow");
        labelLow.innerText = "Low";
        priorDiv.appendChild(labelLow);
        let inputLow = document.createElement('input');
        inputLow.setAttribute("type","radio");
        inputLow.setAttribute("name","prior");
        inputLow.setAttribute("id","inputLow");
        priorDiv.appendChild(inputLow);

        let labelMid = document.createElement("label");
        labelMid.setAttribute("for","inputMid");
        labelMid.innerText = "Medium";
        priorDiv.appendChild(labelMid);
        let inputMid = document.createElement('input');
        inputMid.setAttribute("type","radio");
        inputMid.setAttribute("name","prior");
        inputMid.setAttribute("id","inputMid");
        priorDiv.appendChild(inputMid);

        let labelHigh = document.createElement("label");
        labelHigh.setAttribute("for","inputHigh");
        labelHigh.innerText = "High";
        priorDiv.appendChild(labelHigh);
        let inputHigh = document.createElement('input');
        inputHigh.setAttribute("type","radio");
        inputHigh.setAttribute("name","prior");
        inputHigh.setAttribute("id","inputHigh");
        priorDiv.appendChild(inputHigh);

        //submit button
        submitTask.setAttribute("id","submitTask");
        submitTask.innerText = "SUBMIT";
        taskForm.appendChild(submitTask);

    });
}