function login(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

auth.signInWithEmailAndPassword(email,password)

.then(()=>{
alert("Logged in");
})

.catch(e=>{

alert(e.message);

});

}