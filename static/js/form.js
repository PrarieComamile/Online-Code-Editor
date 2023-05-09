const form = document.querySelector('form')
        const output = document.querySelector('textarea[name="output"]')
  
        form.addEventListener('submit', (event) => {
          event.preventDefault()
  
          const input = document.querySelector('textarea[name="input"]').value
  
          fetch('/process', {
            method: 'POST',
            body: new FormData(event.target)
          })
          .then(response => response.text())
          .then(text => {
            output.value = text
          })
          .catch(error => {
            console.error(error)
          })
        })