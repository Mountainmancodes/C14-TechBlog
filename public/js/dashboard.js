const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document.querySelector('#new-post').addEventListener('click', () => {
  const postForm = `
    <form class="new-post-form">
      <input type="text" id="post-title" placeholder="Post Title" />
      <textarea id="post-content" placeholder="Post Content"></textarea>
      <button type="submit">Create Post</button>
    </form>
  `;
  document.querySelector('.post-list').insertAdjacentHTML('afterend', postForm);
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
});
