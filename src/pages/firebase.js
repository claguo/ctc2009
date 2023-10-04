import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDKcCMIcBsTxLeISB_3BuvlnG9NspFDg7Q",
    authDomain: "ctc2009-indeterminancy.firebaseapp.com",
    projectId: "ctc2009-indeterminancy",
    storageBucket: "ctc2009-indeterminancy.appspot.com",
    messagingSenderId: "385188752001",
    appId: "1:385188752001:web:fc2a311ea8491509053b80",
    measurementId: "G-3SLHW2L34K",
    databaseURL: "https://ctc2009-indeterminancy-default-rtdb.firebaseio.com/"
  };

  const app = initializeApp(firebaseConfig);


  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);
 
export default database;

