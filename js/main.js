const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signIn = document.querySelector('.signin');
const signUpOverlay = document.querySelector('.overlay__signup');
const signInOverlay= document.querySelector('.overlay__signin');
const signInContainer = document.querySelector('.sign-in-container');


signUpButton.addEventListener('click',  () => {
    signIn.classList.add('active');
    signInContainer.classList.add('active');
    signUpOverlay.classList.add('active');
});

signInButton.addEventListener('click',  () => {
    signIn.classList.remove('active');
    signInContainer.classList.remove('active');
    signUpOverlay.classList.remove('active');
});