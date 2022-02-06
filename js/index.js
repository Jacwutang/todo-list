var liElementCounter = 0;

function myFunction(event){
    event.preventDefault()

    let text  = event.target['submit-item'].value

    let li = document.createElement('li')
    li.id = liElementCounter++;

    let li_text = document.createTextNode(text)
    li.appendChild(li_text)

    let done = document.createElement('input')
    done.type = 'checkbox';
    
    li.appendChild(done)
    
    let ul = document.getElementById('ul')
    ul.appendChild(li)

}

function onChange(event) {
    if (event.target.type === "checkbox" && event.target.checked === true) {
        
        event.target.parentElement.remove()
    }
    
}

document.addEventListener("submit", myFunction);

document.addEventListener("change", onChange);

