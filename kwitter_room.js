
//ADD YOUR FIREBASE LINKS HERE
      const firebaseConfig = {
            apiKey: "AIzaSyCCq27pR90wQFZDFC2ANei90xWD_CUha48",
            authDomain: "kwitter-d8182.firebaseapp.com",
            databaseURL: "https://kwitter-d8182-default-rtdb.firebaseio.com",
            projectId: "kwitter-d8182",
            storageBucket: "kwitter-d8182.appspot.com",
            messagingSenderId: "940826702260",
            appId: "1:940826702260:web:974a13fbabbd46e89102e1",
            measurementId: "G-2TMRFEF94L"
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
