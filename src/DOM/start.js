import { tasks } from "./tasks"
export { enterPage, mainCont }

let mainCont = document.getElementById('main-content');
let enterPage = () => {

    //load tasks
    tasks();
}