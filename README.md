# socialjobber

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBIBJkpo5_X89Rw5QuO_bpK0zuw_CrnNr8",
authDomain: "socialjobber-1a05e.firebaseapp.com",
projectId: "socialjobber-1a05e",
storageBucket: "socialjobber-1a05e.appspot.com",
messagingSenderId: "826923145982",
appId: "1:826923145982:web:bde71a28d1d0ee803523af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Problemer nu:
1. Watch out for Yarn - snak med øvelseslærer om hjælp til hvordan dependencies ikke bliver ødelagt.
2. Login funktion fungerer "for godt".
   1. Når du først har oprettet en bruger husker den det og du bliver kun bedt om at logge ind igen hvis man sletter brugere gennem Firebase.
      1. Det skal fikses ved noget token eller timer med login.
3. Navigation siden skal være en navigator bare.
   1. StackComponents skal være de sider brugeren rent faktisk bruger, herunder:
      1. Find Job (privatperson)
      2. Profile (privatperson)
      3. Virksomhedsprofil
      4. Ansøgere

Måske skal der byttes rundt på rækkefølgen på hvordan app.js. læser komponenter.
Man skal måske bytte rundt så den ikke logger ind af sig selv hver gang.

Måske tredje komponent i Navigator.js er StackNavigator.js og den derfor virker med ScreenOne/Two.
- Det kunne også være export default der gør det.
