const contactForm = document.getElementById('contact-form');
const logInButton = document.getElementById('log-in-button');
const logOutButton = document.getElementById('log-out-button');

const name_input  = document.getElementById('name');
const email_input = document.getElementById('email');
const phone_input = document.getElementById('phone');

firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        checkUserState(user);
    }else {
        firebase.auth().signInAnonymously();
    }
});

contactForm.onsubmit = (e) => {
    e.preventDefault();
    saveUserData().then(e => {
        console.log('%cDatos almacenados exitosamente!', 'color:#fa1af1,background:#666');
        demo();
    });
}


/*
    Firebase Login
*/

function checkUserState(userObj) {
    if (userObj && !userObj.isAnonymous) {
        logInButton.style.display = 'none';
        logOutButton.style.display = 'block';
        fillUserForm(userObj);
    } else {
        logInButton.style.display = 'block';
        logOutButton.style.display = 'none';
    }
}

function logInWithFirebase() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'es';
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        fillUserForm(user);
        checkUserState(userObj);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
}

function logOutWithFirebase() {
    firebase.auth().signOut().then(function() {
        checkUserState();
      }).catch(function(error) {
        checkUserState();
      });
}

function fillUserForm(userObj) {

    name_input.value = userObj.displayName || '';
    email_input.value = userObj.email || '';
    phone_input.value = userObj.phoneNumber || '';

    phone_input.focus();

}


/*
    Store the user data into Firebase
*/

function saveUserData() {
    const crypto = window.crypto || window.msCrypto;
    const now = Date.now();
    
    const user = firebase.auth().currentUser;

    return firebase.database().ref('customers/' + user.uid ).set({
        name: name_input.value,
        email: email_input.value,
        phone: phone_input.value,
        date: new Date(),
        picture: user.photoURL || ''
    });
  }


/* 
    In action Vandelay's service demo
*/
function demo() {
    const r = document.getElementById('r');
    r.classList.add('r-animatable');
    r.classList.add('r-going');

    r.addEventListener('transitionend', (e )=> {
        r.classList.remove('r-animatable');
        r.classList.remove('r-going');
    });
}