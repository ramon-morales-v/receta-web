import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {


    apiKey: "AIzaSyBTUV55eyPhjhRuZkvYefHFXZbntEghfAU",
  authDomain: "recetario-px.firebaseapp.com",
  projectId: "recetario-px",
  storageBucket: "recetario-px.appspot.com",
  messagingSenderId: "103250048692",
  appId: "1:103250048692:web:b1ccfde8786c02ea7009e1",
  measurementId: "G-4MNKSQGDTH"


}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }