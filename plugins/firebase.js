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
