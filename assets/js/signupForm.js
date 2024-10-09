import { auth } from "./firebase.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { showMessage } from "./toastMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Formulario enviado");

    const email = signUpForm["signup-email"].value;
    const password = signUpForm["signup-password"].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        
        showMessage("Usuario registrado", "success");

        const signupModal = document.querySelector("#signup-modal");
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        signUpForm.reset();
    }catch (error) {
        // Registro fallido
        console.log(error);
        // Mostrar mensaje de error
        if (error.code === "auth/email-already-in-use") {
          showMessage("El correo ya está en uso", "error");
        } else {
          showMessage(error.code, "error");
        }
      }
});