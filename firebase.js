const firebaseConfig = {

apiKey: "AIzaSyBpZpEXyQst8Y26oVo7X6vi0Gb5VVxlxsA",
  authDomain: "arihthesis-ccab4.firebaseapp.com",
  projectId: "arihthesis-ccab4",
  storageBucket: "arihthesis-ccab4.firebasestorage.app",
  messagingSenderId: "691474167952",
  appId: "1:691474167952:web:9b0dcdd4138b720bfc0015",
  measurementId: "G-PN199YK5L4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();