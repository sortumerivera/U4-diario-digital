import {auth} from "./firebase.js"
import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"
import { showMessage } from "./toastMessage.js";

const signInForm = document.querySelector("#signin-form")

signInForm.addEventListener("submit", async (e) => {

    e.preventDefault();
    console.log("Formulario enviado");

    const email = signInForm["signin-email"].value;
    const password = signInForm["signin-password"].value;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);  

        showMessage("Sesión iniciada", "success"); 
        //Cerrar el modal

        const signinModal = document.querySelector("#signin-modal");
        const modal = bootstrap.Modal.getInstance(signinModal);
        modal.hide();

        signInForm.reset();

    } catch (error) {
        // Registro fallido
        console.log(error);
        // Mostrar mensaje de error
        if (error.code === "auth/invalid-credential") {
          showMessage("Credenciales incorrectas", "error");
        } else {
          showMessage(error.code, "error");
        }
      }
});