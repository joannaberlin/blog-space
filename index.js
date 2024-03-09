const postsWrapper = document.getElementById('blog-list');
const newPost = document.getElementById('new-post');
let postsArr = [];

const renderPosts = () => {
	let html = '';
	for (let post of postsArr) {
		html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `;
	}
	document.getElementById('blog-list').innerHTML = html;
};

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
	.then((response) => response.json())
	.then((data) => {
		postsArr = data.slice(0, 5);
		renderPosts();
	});

newPost.addEventListener('submit', (e) => {
	e.preventDefault();
	const postTitle = document.getElementById('post-title').value;
	const postBody = document.getElementById('post-body').value;
	const data = {
		title: postTitle,
		body: postBody,
	};

	fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((post) => {
			postsArr = [post, ...postsArr];
			renderPosts();
		});
});
