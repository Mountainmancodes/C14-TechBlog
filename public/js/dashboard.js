// Create New Post Handler
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

// Cancel New Post Handler
const cancelNewPost = () => {
  const newPostForm = document.querySelector('.new-post-form-container');
  if (newPostForm) {
    newPostForm.remove(); // Remove the form container from the DOM
  }
};

// Edit Post Handler
const editHandler = (event) => {
  if (event.target.matches('.edit-post')) {
    const postEl = event.target.closest('.post');
    postEl.querySelector('.edit-form').style.display = 'block';
    postEl.querySelector('.post-actions').style.display = 'none';
  }
};

// Cancel Edit Post Handler
const cancelEditHandler = (event) => {
  if (event.target.matches('.cancel-edit')) {
    const postEl = event.target.closest('.post');
    postEl.querySelector('.edit-form').style.display = 'none';
    postEl.querySelector('.post-actions').style.display = 'block';
  }
};

// Update Post Handler
const updatePostHandler = async (event) => {
  event.preventDefault();
  if (event.target.matches('.edit-form')) {
    const postEl = event.target.closest('.post');
    const id = postEl.dataset.id;
    const title = postEl.querySelector('.edit-title').value.trim();
    const content = postEl.querySelector('.edit-content').value.trim();

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

// Delete Post Handler
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

// Event Listeners for New Post Button and Cancel Button
document.querySelector('#new-post').addEventListener('click', () => {
  const postForm = `
    <div class="new-post-form-container">
      <form class="new-post-form">
        <h3>Create a New Post</h3>
        <input type="text" id="post-title" placeholder="Post Title" />
        <textarea id="post-content" placeholder="Post Content"></textarea>
        <button type="submit" class="btn">Create Post</button>
        <button type="button" id="cancel-post" class="btn cancel-btn">Cancel</button>
      </form>
    </div>
  `;
  document.querySelector('.post-list').insertAdjacentHTML('afterend', postForm);

  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  document.querySelector('#cancel-post').addEventListener('click', cancelNewPost);
});

// Event Listeners for Edit, Cancel Edit, and Delete Actions
document.querySelector('.post-list').addEventListener('click', editHandler);
document.querySelector('.post-list').addEventListener('click', cancelEditHandler);
document.querySelector('.post-list').addEventListener('submit', updatePostHandler);
document.querySelector('.post-list').addEventListener('click', deleteHandler);