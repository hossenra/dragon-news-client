// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2bjuRx3k3mpGn_rsxBftDjhaiMRvhukQ",
  authDomain: "dragon-news-eca89.firebaseapp.com",
  projectId: "dragon-news-eca89",
  storageBucket: "dragon-news-eca89.appspot.com",
  messagingSenderId: "468660364318",
  appId: "1:468660364318:web:2e29ef2f5a4d90b4833a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;