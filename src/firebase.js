import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBnWMfchmK4ScWSlJrRmoeZQU_N7ghcVW4",
    authDomain: "otp-verification-7c853.firebaseapp.com",
    databaseURL: "https://otp-verification-7c853.firebaseio.com",
    projectId: "otp-verification-7c853",
    storageBucket: "otp-verification-7c853.appspot.com",
    messagingSenderId: "253702378401",
    appId: "1:253702378401:web:6fcb2accd33f13747c71e0"
}

firebase.initializeApp(config);
export default firebase
