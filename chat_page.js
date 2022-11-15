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

room_name=localStorage.getItem("room_name");

user_name=localStorage.getItem("user_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();