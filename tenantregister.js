// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOMAhtCSLJ5CBxMsiKGMzz7UMFh6w33lg",
  authDomain: "house-494b8.firebaseapp.com",
  projectId: "house-494b8",
  storageBucket: "house-494b8.appspot.com",
  messagingSenderId: "33093131290",
  appId: "1:33093131290:web:a405e06b06abf4446e45a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);



//submitbutton
const register=document.getElementById('register').value;
register.addEventListener("click",function(event){
    event.preventDefault()

    //inputs
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating Account...")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });

})