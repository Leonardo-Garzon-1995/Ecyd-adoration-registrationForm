// DATABASE SET UP - Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBlvO36aDJ3VpD86R_mogHskew3IsMcPaM",
    authDomain: "ecyd-registrationform.firebaseapp.com",
    projectId: "ecyd-registrationform",
    storageBucket: "ecyd-registrationform.firebasestorage.app",
    messagingSenderId: "991779697333",
    appId: "1:991779697333:web:b9387f813d2d8bd987c4fc"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// ----------------------------------------------------------------------

const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const nameInputValue = document.getElementById("name-input").value.trim()
    const emailInputValue = document.getElementById("email-input").value.trim()

    try {
        await addDoc(collection(db, "adoration_registrations"), {
            name: nameInputValue,
            email: emailInputValue,
            timestamp: new Date()
        })

        alert("Registration successfull!")
        form.reset()
    } catch (error) {
        console.error("Error adding document", error)
        alert("Something went wrong, try again!")
    }
})