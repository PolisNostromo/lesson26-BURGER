// ссылки

const getLinks =() =>{
    let container = document.querySelector('.links-container')
    container.innerHTML = ''
    links.forEach(item =>{
        let link = `<h4>${item}</h4>`
        container.innerHTML += link
    })
}
getLinks()

const addLink = (e) =>{
    let inputLink = e.previousElementSibling.value
    if(inputLink.trim()){
        links.push(inputLink)
        getLinks()
    }
}

// заголовки

const getTitle = () =>{
    let title_text = document.querySelector('.title h4')
    title_text.innerText = title

    title_text.style.display = 'block'
    title_text.parentNode.querySelector('.edit').style.display = 'block'

    title_text.parentNode.querySelector('.save').style.display = 'none'
    title_text.parentNode.querySelector('input[type=text]').style.display = 'none'
}
getTitle()

const editTitle = (e) =>{
    e.style.display = 'none'
    e.parentNode.querySelector('h4').style.display = 'none'

    e.parentNode.querySelector('.save').style.display = 'block'
    e.parentNode.querySelector('input[type=text]').style.display = 'block'
}

const saveTitle = (e) =>{
    title = e.parentNode.querySelector('input[type=text]').value
    getTitle()
}