const signUpModal = document.querySelector('#signUpModal');
const signInModal = document.querySelector('#signInModal');
const signUpbtn = document.querySelector('#signup-btn');
const signInbtn = document.querySelector('#signin-btn');
const closeModal = document.querySelector('#closeModalBtn');
const closeSigninModal = document.querySelector('#closeSigninModalBtn');
const showSignUpLink = document.getElementById('showSignUpModalLink');
const createPostbtn = document.querySelector('#createPosts-btn');
const createPostModal = document.querySelector('#createPostModal');
const closeCreatePostModalBtn = document.querySelector('#closeCreatePostModalBtn');

signUpbtn.addEventListener('click', (e) => {
    e.preventDefault();
    signUpModal.showModal();
});

signInbtn.addEventListener('click', (e) => {
    e.preventDefault();
    signInModal.showModal();
});

closeSigninModal.addEventListener('click', () => {
    signInModal.close();
});

closeModal.addEventListener('click', () => {
    signUpModal.close();
});

showSignUpLink.addEventListener('click', function () {
    signInModal.close();
    signUpModal.showModal();
});

createPostbtn.addEventListener('click', (e) =>{
    e.preventDefault();
    createPostModal.showModal();
})

closeCreatePostModalBtn.addEventListener('click', () => {
    createPostModal.close();
});

document.getElementById('showSignUpModalLink').addEventListener('click', function () {
    signInModal.close();
    signUpModal.showModal();
});

document.getElementById('showPosts-btn').addEventListener('click', function(){
    window.location.href = 'C:/Users/saich/OneDrive/Desktop/Scribbler/html/postslist.html';
});

