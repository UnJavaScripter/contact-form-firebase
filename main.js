const contactForm = document.getElementById('contact-form');
const logInButton = document.getElementById('log-in-button');
const logOutButton = document.getElementById('log-out-button');

checkUserState();

contactForm.onsubmit = (e) => {
    e.preventDefault();


    demo();
}


/*
    Firebase Login
*/

function checkUserState() {
    const user = firebase.auth().currentUser;
    if (user) {
        logInButton.style.display = 'none';
        logOutButton.style.display = 'block';
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
        checkUserState();
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
    const name_input  = document.getElementById('name');
    const email_input = document.getElementById('email');
    const phone_input = document.getElementById('phone');

    name_input.value = userObj.displayName || '';
    email_input.value = userObj.email || '';
    phone_input.value = userObj.phoneNumber || '';

    phone_input.focus();

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