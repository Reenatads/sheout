export function initLoginForm() {
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const usernameInput = document.querySelector('#username');
      const passwordInput = document.querySelector('#password');
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameInput.value,
          password: passwordInput.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.location.href = '/';
        } else {
          const errorElement = document.querySelector('#login-error');
          errorElement.textContent = data.message;
        }
      })
      .catch(error => {
        console.error(error);
      });
    });
  }
  