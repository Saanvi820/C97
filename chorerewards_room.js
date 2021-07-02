
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAAUSnuDYjzBJHAFwWPLRoQ9fXZ1O38Yko",
    authDomain: "chorerewards-baa3d.firebaseapp.com",
    databaseURL: "https://chorerewards-baa3d-default-rtdb.firebaseio.com",
    projectId: "chorerewards-baa3d",
    storageBucket: "chorerewards-baa3d.appspot.com",
    messagingSenderId: "169795518729",
    appId: "1:169795518729:web:4fc521c887dbed5c4a53d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function redirectToParents(){
    parents_portal=document.getElementById("parents_portal").value;
    localStorage.setItem("parents_portal", parents_portal);
    window.location="parents_page.html";
}
function redirectToKids(){
    kids_portal=document.getElementById("kids_portal").value;
    localStorage.setItem("kids_portal", kids_portal);
    window.location="kids_page.html";
}