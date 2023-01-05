/**import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

// Listen for form submission
document.getElementById('create-account-form').addEventListener('submit', e => {
  e.preventDefault();

  // Get email and password values from the form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create a new user account using the email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      // If the account was created successfully, log the user in
      return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch(error => {
      // If there was an error creating the account, display an error message
      alert(error.message);
    });
});

// Listen for login form submission
document.getElementById('login-form').addEventListener('submit', e => {
  e.preventDefault();

  // Get email and password values from the form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Log the user in using the email and password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      // If there was an error logging in, display an error message
      alert(error.message);
    });
});

// Log the user out when the logout button is clicked
document.getElementById('logout-button').addEventListener('click', () => {
  firebase.auth().signOut();
});
**/
