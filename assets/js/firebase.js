  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import {getAuth} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
  
  import {
    getFirestore,
    collection,
    doc,
    addDoc,
    onSnapshot,
    deleteDoc,
    updateDoc,
    getDoc,
  }from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAZ9ZWqbafhDCoJPrCs7X4QY2weyO3wh0k",
    authDomain: "diario-digital-9b42a.firebaseapp.com",
    projectId: "diario-digital-9b42a",
    storageBucket: "diario-digital-9b42a.appspot.com",
    messagingSenderId: "495807759011",
    appId: "1:495807759011:web:0497a9859c9c5deaf5f516"
  };

  // Initialize Firebase

  export const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

  export const db = getFirestore();

  export const createTask = (title, description, userName, userImage) =>
    addDoc(collection(db, "tasks"), {title, description, userName, userImage});

  export const onGetTask = (callback) =>
    onSnapshot(collection(db, "tasks"), callback);
 
  export const getTask = (id) => getDoc(doc(db, "tasks", id));

  export const updateTask = ( id, newData) =>
    updateDoc(doc(db, "tasks", id), newData);

  export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));