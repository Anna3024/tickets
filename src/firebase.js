import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBmwvkpQo7eVH7jf6zcRs1Ea0YjLtd7lZA",
    authDomain: "tickets-ae4ed.firebaseapp.com",
    databaseURL: "https://tickets-ae4ed-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tickets-ae4ed",
    storageBucket: "tickets-ae4ed.appspot.com",
    messagingSenderId: "650774564520",
    appId: "1:650774564520:web:d3a1c53fbc57f4d0ddbc9d",
    measurementId: "G-C2ZL03JZ7L"
})

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

const firestore = app.firestore()

export const database = {
    users: firestore.collection('users'),
    movies: firestore.collection('movies'),
    getCurrentTimestap: firebase.firestore.FieldValue.serverTimestamp
}
export const auth = app.auth()

export default app