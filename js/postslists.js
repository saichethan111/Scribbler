console.log("Script loaded");

const deletePostIcons = document.querySelectorAll('.delete-icon');
const deleteModal = document.getElementById('deleteModal');
let postToDelete; // To store the post to be deleted

function hideDeleteModal() {
    deleteModal.close();
}

function deletePost() {
    console.log('Post deleted!');
    if (postToDelete) {
        postToDelete.remove();
        hideDeleteModal();
    }
}

function showDeleteModal(post) {
    console.log("Modal shown");
    postToDelete = post;
    deleteModal.showModal();
    console.log("Modal done showing");
}

// postslists.js
function redirectToPost(ellipsisIcon) {
    const post = ellipsisIcon.closest('.post-card');
    const postId = post.getAttribute('data-post-id');

    // Redirect to post.html with the post ID
    window.location.href = `post.html?id=${postId}`;
}


// Attach the showDeleteModal function to all delete icons
deletePostIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const post = icon.closest('.post-card');
        showDeleteModal(post);
    });
});

// Attach event listeners to modal buttons
const modalYesBtn = document.getElementById('modal-yes-btn');
const modalNoBtn = document.getElementById('modal-no-btn');

modalYesBtn.addEventListener('click', deletePost);
modalNoBtn.addEventListener('click', hideDeleteModal);
