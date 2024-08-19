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

const editHandler = async (event) => {
  if (event.target.matches('.edit-post')) {
    const id = event.target.getAttribute('data-id');
    const title = prompt('Enter new title');
    const content = prompt('Enter new content');

    if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  }
};

const deleteHandler = async (event) => {
  if (event.target.matches('.delete-post')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
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

document.querySelector('.post-list').addEventListener('click', editHandler);
document.querySelector('.post-list').addEventListener('click', deleteHandler);
