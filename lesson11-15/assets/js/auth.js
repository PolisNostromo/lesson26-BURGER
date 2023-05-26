const users = [
    {
        id: 1,
        login: "test",
        password: "qwerty",
        phone: "777"
    }
]

let phoneAuth = document.querySelector('#auth input[type=tel]')
let phoneReg = document.querySelector('#reg input[type=tel]')
const maskOptions = {
    mask: '+{7}(000)000-00-00'
}
// сохраняем замаскированный телефон
let maskedPhoneAuth = IMask(phoneAuth,maskOptions)
let maskedPhoneReg = IMask(phoneReg,maskOptions)

const login = () =>{
    let email = document.querySelector('#auth input[type=email]').value
    let phone = maskedPhoneAuth.unmaskedValue // получаем значение без маски
    let password = document.querySelector('#auth input[type=password]').value

    if(email === 'admin' && phone === '7' && password === 'admin'){
        window.location = './assets/admin/admin.html'
    }
    users.forEach(user=>{
        if(user.login === email & user.password === password && user.phone === phone){
            window.location = 'app.html'
        }
    })
}

const reg = () =>{
    let user_email = document.querySelector('#reg input[type=email]').value
    let user_phone = maskedPhoneReg.unmaskedValue // получаем значение без маски
    let user_password = document.querySelector('#reg input[type=password]').value
    // создаем нового пользователя
    users.push({
        id: 2,
        login: user_email,
        password: user_password,
        phone: user_phone
    })
    // закрываем страницу регистрации
    document.querySelector('#reg').classList.remove('open')
    // открываем авторизацию
    document.querySelector('#auth').classList.add('open')
}

const navigate = (e) =>{
        // раскрываем обе формы
        document.querySelector('#reg').classList.add('open')
        document.querySelector('#auth').classList.add('open')
        // скрываем форму, внутри которой нажали на ссылку
        e.parentNode.classList.remove('open')
}

