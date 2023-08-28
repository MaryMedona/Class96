const firebaseConfig = {
    apiKey: "AIzaSyDB8NBBuPBMWGfC6KxeC1AVXlBVxd_f-kM",
    authDomain: "kwitter-1fce0.firebaseapp.com",
    databaseURL: "https://kwitter-1fce0-default-rtdb.firebaseio.com",
    projectId: "kwitter-1fce0",
    storageBucket: "kwitter-1fce0.appspot.com",
    messagingSenderId: "970227834611",
    appId: "1:970227834611:web:0f8a74ad4745570eb66186"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
purpose:"adding user"

    });
}