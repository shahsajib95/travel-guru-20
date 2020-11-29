import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.Config';

export const initializeFirebaseApp = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}
initializeFirebaseApp()

export const signUpwithPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUser = res.user;
            newUser.error = '';
            newUser.suscess = true;
            userName(name)
            return newUser;

        })
        .catch(error => {
            const newUser = {};
            newUser.error = error.message;
            newUser.suscess = false;
            return newUser;

        });
}

export const signInWithEmail = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            // Signed in 
            // ...
            const newUser = res.user;
            newUser.error = '';
            newUser.suscess = true;
            return newUser;
        })
        .catch(error => {
            const newUser = {};
            newUser.error = error.message;
            newUser.suscess = false;
            return newUser;
        });
}

const userName = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    })
        .then(res => {
            const userName = res;
            console.log(res, 'username updated successfully')
            return userName;
        })
        .catch(err => {
            console.log(err)
        })
} 