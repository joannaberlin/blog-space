const postsWrapper = document.getElementById('blog-list');
const newPost = document.getElementById('new-post');

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
	.then((response) => response.json())
	.then((data) => {
		const postsArr = data.slice(0, 5);
		let html = '';
		for (let post of postsArr) {
			html += `
                <h3>${post.title}</h3>
                <div id='body_wrapper'><p>${post.body}</p></div>
            `;
		}
		postsWrapper.innerHTML = html;
	});

newPost.addEventListener('submit', (e) => {
	e.preventDefault();
	const postTitle = document.getElementById('post-title').value;
	const postBody = document.getElementById('post-body').value;
	const data = {
		title: postTitle,
		body: postBody,
	};
	console.log(data);
});
