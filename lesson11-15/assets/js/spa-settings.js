const information = [
    {
        url: './pages/components/header.html',
        include: '.wrapper'
    },
    {
        url: './pages/components/main.html',
        include: '.include-main'
    },
    {
        url: './pages/components/category.html',
        include: '.include-category'
    },
    {
        url: './pages/components/cards.html',
        include: '.include-cards'
    },
    {
        url: './pages/components/footer.html',
        include: '.include-footer'
    },
    {
        url: './pages/product.html',
        include: '.include-product'
    },
    {
        url: './pages/cart.html',
        include: '.include-basket'
    },
    {
        url: './pages/order.html',
        include: '.include-order'
    }
]

information.forEach(item=>{
    fetch(item.url)
    .then(response =>{
        return response.text()
    })
    .then(data =>{
        document.querySelector(item.include).innerHTML = data
        switch(item.include){
            case ".include-cards":
                setCards(cards)
                break
            case ".include-basket":
                cardsBasket()
                break
            case ".include-order":
                setCheckbox()
                break
            default:
                break
        }
    })
})