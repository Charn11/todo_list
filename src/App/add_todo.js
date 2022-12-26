import { submitTask, inputName, inputDesp, inputDate } from "../DOM/crt_task";
export { taskAdder, task, crtTask }

class task{
    constructor(title, description, duedate, priority){
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
    }
}
let Objcount = 0;
let crtTask = [];

let taskAdder = () => {
    let newTitle = inputName.value;
    let newDesp = inputDesp.value;
    let newDate = inputDate.value;
    let scltRadio = document.getElementsByName('prior');
    let newPrior = "";
    for(let k=0;k<scltRadio.length;k++)
    {
        if(scltRadio[k].checked)
        {
            newPrior = scltRadio[k].value;
        }
    }

    crtTask[Objcount] = new task(newTitle,newDesp,newDate,newPrior);
    console.table(crtTask);
    console.log(Objcount)
    Objcount++;
}