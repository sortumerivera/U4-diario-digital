import { auth } from "./firebase.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { showMessage } from "./toastMessage.js";

const signUpform = document.querySelector("#signup-form");

signUpform.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Formulario enviado");

    const email = signUpform["signup-email"].value;
    const password = signUpform["signup-password"].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        console.log(userCredentials);
        showMessage("Usuario registrado", "success");
    }catch (error) {
        console.log(error);

        if (erros.code === "auth/email-already-in-use") {
            showMessage("El correo ya está en uso", "error");
        }else {
            showMessage(error.code, "error");
        }
    }
});