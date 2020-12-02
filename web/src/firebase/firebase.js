import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBNgw3WLH9YtYO4wKDGeujtQP9vOEUpM2I",
  authDomain: "field-notes-app.firebaseapp.com",
  databaseURL: "https://field-notes-app.firebaseio.com",
  projectId: "field-notes-app",
  storageBucket: "field-notes-app.appspot.com",
  messagingSenderId: "619288472752",
  appId: "1:619288472752:web:bcd0550605f0ce93b6df75",
  measurementId: "G-4GWNZN3GYJ"
};
firebase.initializeApp(firebaseConfig);

export const addToDB = (note) => {
  const NoteRef = firebase.database().ref('notes/' + localStorage.getItem('LOCAL_UID')).push({
     title: note.title,
     timestamp: note.timestamp,
     content : note.content
   });
   return NoteRef.key;
}

export const removeFromDB = (noteKey) => {
 firebase.database().ref('notes/' + localStorage.getItem('LOCAL_UID') + noteKey).remove();
}

export const fetchFromDB = () => {
  return new Promise((resolve, reject) => {
    firebase.database().ref('notes/' + localStorage.getItem('LOCAL_UID')).once('value').then( function(snapshot) {
      if(snapshot.val()) {
        var notes = [];
        Object.keys(snapshot.val()).forEach(key => {
          var note = {};
          note = {...snapshot.val()[key]};
          note['key'] = key;
          notes.push(note);
        });
        resolve(notes);
      }
      else {
        resolve([]);
      }
    });
  })
}

var provider = new firebase.auth.GoogleAuthProvider();

export const logIn = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
      var user = result.user;
      resolve({
        user: user,
      });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  });
}

export const logOut = () => {
 firebase.auth().signOut().then( () => {
   console.log('Successfully Logged Out');
 });
}

export default firebase;
