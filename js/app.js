console.log('connected');
function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))

}

loadComments();

function displayComments(comments) {
    // console.log(comments);
    for (const comment of comments) {
        console.log(comment)
    }
}