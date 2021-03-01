document.addEventListener("DOMContentLoaded", () => {
  const form  = document.querySelector('form')

  form.addEventListener('submit', function(e){
    e.preventDefault()

    const input = document.querySelector('#new-task-description')

    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    const text = document.createElement('text')
    const button = document.createElement('button')
  
    text.textContent = input.value + " "
  
    button.textContent = "Delete"

    button.addEventListener('click', function(e){
      e.target.parentNode.remove()
    })

    li.appendChild(text)
    li.appendChild(button)
    ul.appendChild(li)

    input.value = ""
  })
});