const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Log the username and password to verify they're being captured correctly
  console.log({ username, password });

  if (username && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        // Log the server's response if the login fails
        const errorData = await response.json();
        console.log('Error:', errorData);
        alert('Failed to log in. ' + errorData.message);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  } else {
    alert('Please enter both a username and a password.');
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
