import { tasks } from "./tasks"
import { addTask } from "./crt_task";
export { enterPage, mainCont }

let mainCont = document.getElementById('main-content');
let enterPage = () => {

    //load tasks
    tasks();
    addTask();
}