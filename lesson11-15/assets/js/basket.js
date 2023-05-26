let cart = [
    {
        img: "../assets/img/t-shirt.png",
        product: "T-Shirt Spring Collection",
        price: 300,
        size: 'L',
        color: "pink"
    },
    {
        img: "../assets/img/accessories.jpg",
        product: "Clocks Xiaomi Collection",
        price: 420,
        size: 'XXL',
        color: "blue"
    },
    {
        img: "../assets/img/sneaker.jpg",
        product: "Sneakers Spring Collection",
        price: 320,
        size: 'S',
        color: "orange"
    }
]

const cardsBasket = () =>{
    let cart_container = document.querySelector('.basket .selected-products')

cart.forEach(cart => {
    let html_product = `
    <div class="product">
    <div class="column" id="first">
        <div class="card">
            <div class="cover">
                <img src="${cart.img}" alt="">
                <div class="circle"></div>
            </div>
        </div>
        <div class="card-desc">
            <p class="name">${cart.product}</p>
            <div class="settings">
                <div class="ellipse" id="${cart.color}"></div>
                <p class="size">${cart.size}</p>
            </div>
        </div>
    </div>
    <div class="column" id="second">
        <p>${cart.price}$</p>
    </div>
    <div class="column" id="third">
        <div class="counter">
            <input type="button" value="-" class="btn minus" onclick="changeCounter('minus', this)">
            <p class="quantity">1</p>
            <input type="button" value="+" class="btn plus" onclick="changeCounter('plus', this)">
        </div>
    </div>
    <div class="column" id="fourth">
        <p>${cart.price}$</p>
    </div>
    <div class="column" id="fifth">
        <p class="delete" onclick="deleteProduct()">X</p>
    </div>
</div>
`
    cart_container.innerHTML += html_product
})
}


// function deleteProduct(){
//     let product = document.querySelector('.selected-products .product')
//     product.setAttribute('style', 'display:none;')
// }
// function changePrice(change = 0){
//     // получаем цену в виде тега
//     let price_html = document.querySelector('.selected-products .product #second p')
//     let totalupdate_html = document.querySelector('.selected-products .product #fourth p')
//     // извлекаем содержимое тега
//     let price = price_html.innerHTML
//     // удаляем знак доллара
//     price = price.replace('$','')
//     // преобразуем строку в число
//     price = parseInt(price)
    
//     let new_price = price - change

//     if (new_price > price){
//         price_html.setAttribute('style', 'color: red;')
//     }
//     else if(new_price == price){
//         price_html.setAttribute('style', 'color: blue;')
//     }
//     else{
//         price_html.setAttribute('style', 'color: green;')
//     }
//     price_html.innerHTML = new_price + '$'
//     totalupdate_html.innerHTML = '$' + new_price
//     console.log(price)
// }
// changePrice(15)


// const CounterChangePlus = (elem) => {
//     let product = elem.closest('.product');
//     let counter_html = product.querySelector(".quantity");
//     let quantity = parseInt(counter_html.innerHTML);
//     let new_quantity = quantity + 1;
//     counter_html.innerHTML = new_quantity;

//     let totalupdate_html = product.querySelector(".product #fourth p");
//     let price_html = product.querySelector(".product #second p");
//     let price = price_html.innerHTML.replace("$", "");
//     let new_total = price * new_quantity;
//     totalupdate_html.innerHTML = new_total + "$";
// }

// const CounterChangeMinus = (elem) => {
//     let product = elem.closest(".product");
//     let counter_html = product.querySelector(".quantity");
//     let quantity = parseInt(counter_html.innerHTML);
//     let new_quantity = quantity - 1;
//     if (new_quantity > 0) {
//         counter_html.innerHTML = new_quantity;
//     } else {
//         new_quantity = 1;
//     }   

//     let totalupdate_html = product.querySelector(".product #fourth p");
//     let price_html = product.querySelector(".product #second p");
//     let price = price_html.innerHTML.replace("$", "");
//     let new_total = price * new_quantity;
//     totalupdate_html.innerHTML = new_total + "$";
// }


const changeCounter = (action,elem) =>{
    let basket_item = elem.closest('.product')
    let count_html = basket_item.querySelector('.quantity')
    let count = parseInt(count_html.innerHTML)
    if(action === 'minus'){
        if(count > 1){
            count -= 1
        }
    }
    else{
        count += 1
    }

    if(elem.parentNode.parentNode.parentNode.classList.contains('product')){
        let total = basket_item.querySelector('#fourth p')
        let price = parseFloat(basket_item.querySelector('#second p').innerHTML.replace('$',''))
        total.innerHTML = price * count + "$"
    }

    count_html.innerHTML = count
    console.log(count_html)
}