
var firebaseConfig = {
    apiKey: "AIzaSyB7uUndqiACoEu4WmPxmsN6ZB10tgbWI2s",
    authDomain: "lets-chat-web-app-67458.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-67458-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-67458",
    storageBucket: "lets-chat-web-app-67458.appspot.com",
    messagingSenderId: "904848501180",
    appId: "1:904848501180:web:5181a85e946abf0bdc23b9"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addroom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);

    window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   console.log("Room Name - " +  Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;

   //End code
   });});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location ="chat_page.html";
}

function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}