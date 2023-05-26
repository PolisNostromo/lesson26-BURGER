let links = []

let title = 'Тестовый заголовок'

fetch('https://run.mocky.io/v3/9e8858f7-c341-426d-a095-ac214be359a0')
.then(response =>{
    return response.json()
})
.then(data =>{
    // троеточие отправляет не МАССИВ, а только его содержимое
    links.push(...data)
    
    let container = document.querySelector('.nav-links')
    container.innerHTML = ''
    links.forEach(item =>{
        
        let link = `<a href="#" onclick="navigation('${item.path}')">${item.title}</a>`
        container.innerHTML += link
    })
})