const postsWrapper = document.getElementById('blog-list');
const form = document.getElementById('new-post');
const titleInput = document.getElementById('post-title');
const bodyInput = document.getElementById('post-body');
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

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const postTitle = titleInput.value;
	const postBody = bodyInput.value;
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
			// titleInput.value = '';
			// bodyInput.value = '';
			form.reset();
		});
});
