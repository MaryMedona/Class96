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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function adduser() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"

      });
      localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
}

function getData() 
{
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>"
                  document.getElementById("output").innerHTML += row;

              
            });
      });
}
getData();

function redirectToRoomName(name) 
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_page.html";
}

function logout()
 {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}