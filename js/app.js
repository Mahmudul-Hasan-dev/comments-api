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
        newComment.innerHTML = `<h4>name-${comment.name}</h4>
        <h5>email:${comment.email}</h5>
        <h4>comment-${comment.body}</h4>`
        commentContainer.appendChild(newComment)
    }
}