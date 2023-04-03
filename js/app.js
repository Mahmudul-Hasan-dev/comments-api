console.log('connected');
function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))

}

loadComments();

function displayComments(comments) {
    // console.log(comments);
    const commentContainer = document.getElementById('commentsContainer');
    for (const comment of comments) {
        console.log(comment)
        const newComment = document.createElement('div');
        // newComment.innerHTML = `<h4>name-${comment.name}</h4>
        // <h5>email:${comment.email}</h5>
        // <h4>comment-${comment.body}</h4>`
        newComment.classList = "w-100 m-auto align-item-center"
        newComment.innerHTML = `<div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">name-${comment.name}</div>
        <div class="card-body text-success">
            <p class="card-text">${comment.body}</p>
        </div>
        <div class="card-footer bg-transparent border-success">mail-${comment.email}</div>
         </div>`
        commentContainer.appendChild(newComment)
    }
}