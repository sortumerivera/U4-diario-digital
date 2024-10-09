import {createTask, onGetTask } from ".firebase.js";
import { showMessage } from "./toastMessage.js";

const taskForm = document.querySelector("#task-form");
const tasksContainer = document.querySelector("#tasks-container");

export const setupTasks = () => {

    taskForm.addEventListener("submit" , async (e) => {
        e.preventDefault();

        const title = taskForm["title"].value;
        const description = taskForm["description"].value;

        try {
            await createTask(title, description);

            showMessage("Tarea creada", "success");

            taskForm.reset();
        } catch (error) {

            showMessage(error.code, "error");
        }
    });

    onGetTask((querySnapshot) =>{
       let tasksHtml = "";

       querySnapshot.forEach((doc)=> {
        const data = doc.data();

        tasksHtml += `
        <article class="tasks-container border border-2 rounded-2 p-3 my-3>
        <h4>${data.title}</h4>
        <hr />
        <p>${data.description} </p>
        </article>
        `;
       });

       tasksContainer.innerHTML = tasksHtml;
    });
    
};