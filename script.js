function submitForm(event) {
    event.preventDefault();
  
    const emailInput = document.getElementById('email');
    const githubRepoUrlInput = document.getElementById('githubRepoUrl');
  
    const email = emailInput.value;
    const githubRepoUrl = githubRepoUrlInput.value;
  
    const data = {
      email,
      githubRepoUrl
    };
  
    fetch('https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          alert('submitted successfully!');
        } else {
          throw new Error('Form submission failed.');
        }
      })
      .catch(error => {
        alert(error.message);
      })
      .finally(() => {
        emailInput.value = '';
        githubRepoUrlInput.value = '';
      });
  }
  
  document.getElementById('clearvictionForm').addEventListener('submit', submitForm);
  