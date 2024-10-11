import { setupTasks } from "./setupTasks.js";

const loggedIn = document.querySelectorAll(".logged-in");
const loggedOut = document.querySelectorAll(".logged-out");
const mainContainer = document.querySelector("#main-container");
const saludo = document.querySelector("#saludo");

export const checkLogin = (user) => {

    if(user) {
        loggedIn.forEach((element) => (element.style.display = "block"));
        loggedOut.forEach((element) => (element.style.display = "none"));

        mainContainer.style.display = "block";
        saludo.textContent = `Bienvenido@ ${user.email}`;

        setupTasks(user);

    } else {
        loggedOut.forEach((element) => (element.style.display = "block"));
        loggedIn.forEach((element) => (element.style.display = "none"));

        mainContainer.style.display = "none";
        saludo.textContent = "";

    }
};