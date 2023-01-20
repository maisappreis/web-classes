import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "../../envLocal.js";

if (!firebase.apps.length) { // se não tiver comprimento, ou seja, for zero, eu vou inicializar o app.
    firebase.initializeApp({
        firebaseConfig
    })
}

// Depois de Inicializar, eu vou Exportar.

export default firebase;



// if(!firebase.apps.length) { // se não tiver comprimento, ou seja, for zero, eu vou inicializar o app.
//     firebase.initializeApp({
//         apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//         authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     })
// }

// // Depois de Inicializar, eu vou Exportar.

// export default firebase; 