// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
  sendEmailVerification
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  getDocs
 } from 'firebase/firestore'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default (
  {
    $config: {
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      measurementId,
    },
  },
  inject
) => {
  const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  }
  const apps = getApps()
  let firebaseApp

  if (!apps.length) {
    firebaseApp = initializeApp(firebaseConfig)
  } else {
    firebaseApp = apps[0]
  }
  // Initialize Firebase Auth
  const auth = getAuth(firebaseApp)

  // Initialize Firestore DB
  const db = getFirestore(firebaseApp)

  inject('fire', {
    auth,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserSessionPersistence,
    sendEmailVerification,
    db,
    collection,
    getDocs
  })
}
/*
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID
}

// Initialize Firebase
const apps = getApps()
let firebaseApp

if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = apps[0]
}

// Initialize Firebase Auth
const auth = getAuth(firebaseApp)

// Initialize Firestore DB
const db = getFirestore(firebaseApp)

// Initialize Firebase Analytics
// const analytics = getAnalytics(firebaseApp)
console.log(auth)
export { auth, db }
*/
