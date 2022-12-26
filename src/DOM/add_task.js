import { submitTask, taskForm } from "./crt_task"
import { taskAdder } from "../App/add_todo.js";
import { tasks, taskCont, headCont } from "./tasks";
import { createTable } from "./taskTable";
export { addTasktoDOM };

let addTasktoDOM = () => {

    alert("yes");
    taskAdder();
    taskForm.remove();
    tasks();
    createTable();
}