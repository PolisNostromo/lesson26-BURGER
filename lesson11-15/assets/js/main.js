let cards = [
    {
        img: "./assets/img/t-shirt.png",
        title: "T-Shirt Spring Collection",
        price: 300
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneakers Spring Collection",
        price: 320
    },
    {
        img: "./assets/img/accessories.jpg",
        title: "Clocks Xiaomi Collection",
        price: 420
    }
]


const setCards = (cards_array) =>{
    let cards_container = document.querySelector('.cards .container')
    cards_container.innerHTML = ''
    cards_array.forEach(card => {
        let html_card = `
        <div class="card">
        <div class="cover">
            <img src=${card.img} alt="">
            <div class="circle"></div>
        </div>
        <div class="card-content">
            <h4>${card.title}</h4>
            <p class="price">${card.price}$</p>
        </div>
    </div>
        `
        cards_container.innerHTML += html_card
    });
}


const sortCards = (typeSort) =>{
    let cards_new = []
    cards_new.push(...cards)
    
    switch(typeSort){
        case 'DOWN':
            cards_new.sort((a, b)=>{
                return b.price - a.price
            })
            break
        case 'UP':
            cards_new.sort((a, b)=>{
                return a.price - b.price
            })
            break
        default:
            break
    }
    setCards(cards_new)
}



const navigation = (page_name) =>{
    const pages = document.querySelectorAll('.fullpage')
    pages.forEach(page =>{
        page.classList.remove('open')
        page.classList.forEach(class_name =>{
            if(class_name === page_name){
                page.classList.add('open')
            }
        })
    })
    burger(false)
}


const changeCheckbox = (e) =>{
    // получаем родителя у скрытого чекбокса
    let label = e.parentElement
    // находим стилизованный чекбокс
    let checkbox = label.querySelector('.checkbox')
    // переключаем класс у чекбокса
    checkbox.classList.toggle('checked')
}

const setCheckbox = () =>{
    // получил в виде массива все чекбоксы
    let checkbox_array = document.querySelectorAll('input[type=checkbox]')
    checkbox_array.forEach(item =>{
        if(item.checked){
            item.parentElement.querySelector('.checkbox').classList.add('checked')
        }
    })
}


// для продукта и его размеров с цветами
const setSize = (e) =>{
    // получаем все размеры со страницы
    let size_array = e.parentElement.querySelectorAll('p')
    // перебираем размеры по одному
    size_array.forEach(item =>{
        // у всех размеров удаляем класс
        item.classList.remove('active')
    })
    // устанавливаем выбранному размеру класс активность
    e.classList.add('active')
}

const setColor = (e) =>{
    let color_array = e.parentElement.parentElement.querySelectorAll('.elipse')
    color_array.forEach(item =>{
        item.classList.remove('active')
    })
    e.classList.add('active')
}



const modal = (open) =>{
    if(open){
        let modal = `<div class="modal" id="modalCat">
        <div class="modal-container">
            <div class="container">
                <h2>Категория</h2>
                <button onclick="modal(false)"><h3>X</h3></button>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque maxime amet numquam sequi itaque sapiente dolor totam inventore corporis repellat magnam voluptates voluptatibus aliquam fugit, illum voluptas adipisci, iure ut!</p>
            <div class="container">
                <input type="button" value="Отменить" class="btn close" onclick="modal(false)">
                <input type="button" value="Сохранить" class="btn orange">
            </div>
        </div>
    </div>`
    document.body.innerHTML += modal
    }
    else{
    // получаем модальное окно
    let modal_html = document.getElementById('modalCat')
    // удаление окна
        modal_html.remove()
    }
}


const burger = (open) =>{
    let navLinks = document.querySelector('.nav-links')
    if(open){
        navLinks.classList.add('active')
    }
    else{
        navLinks.style.animationName = 'closeBurger'
        setTimeout(()=>{
            navLinks.classList.remove('active')
            navLinks.style.animationName = 'openBurger'
        },450)
    }
}
