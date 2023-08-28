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
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0     
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
