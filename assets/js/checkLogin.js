import { setupTasks } from "./setupTasks.js";

const loggedIn = document.querySelectorAll(".logged-in");
const loggedOut = document.querySelectorAll(".logged-out");
const mainContainer = document.querySelector("#main-container");
const saludo = document.querySelector("#saludo");

export const checkLogin = (user) => {

    if(user) {
        logeedIn.forEach((element) => (element.style.display = "block"));
        logeedOut.forEach((element) => (element.style.display = "none"));

        mainContainer.style.display = "block";
        saludo.textContent = `Bienvenido@ ${user.email}`;

        setupTasks();

    } else {
        logeedOut.forEach((element) => (element.style.display = "block"));
        logeedIn.forEach((element) => (element.style.display = "none"));

        mainContainer.style.display = "none";
        saludo.textContent = "";

    }
};