document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('.signup-form');

  if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
  } else {
    console.error('Signup form not found in the DOM');
  }
});

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  }
};
