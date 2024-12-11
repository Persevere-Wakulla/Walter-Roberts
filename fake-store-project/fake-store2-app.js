// fetching
const userRes = await fetch('https://fakestoreapi.com/users')
const userData = await userRes.json()
const productRes = await fetch('https://fakestoreapi.com/products')
const productData = await productRes.json()
const cartRes = await fetch('https://fakestoreapi.com/carts')
const cartData = await cartRes.json()
// login
const nameInput = document.getElementById('username')
const passWord = document.getElementById('password')
const login = document.getElementById('login')
const signUp = document.getElementById('sign')
const dialog = document.getElementById('signUpForm')
const submitBtn = document.getElementById('submit')
const cancelBtn = document.getElementById('cancel')
// nav
const home = document.getElementById('home')
const products = document.getElementById('products')
const cart = document.getElementById('cart')
// sections
const main = document.querySelector('.main')
const header = document.querySelector('header')
const category = document.querySelector('.category')
// divide by category
let allMens = productData.filter((item) => item.category === "men's clothing")
let allWomens = productData.filter((item) => item.category === "women's clothing")
let allElec = productData.filter((item) => item.category === "electronics")
let allJewel = productData.filter((item) => item.category === "jewelery")
// cart
let myCart = []
// $$
let total = 0
// login event
let id
login.addEventListener('click', () => {
    let userName = nameInput.value
    let userPw = passWord.value
    // does the user exist with the password?
    let myUser = userData.find((user) => userName === user.username && userPw === user.password)
    if (!myUser) {
        alert('Incorrect username or Password')
    } else {
        // save the id
        id = myUser.id
        // welcome
        let userInfo = document.createElement('div')
        let h3 = document.createElement('h3')
        let userName = document.createElement('h2')
        userInfo.classList.add('welcome')
        h3.textContent = 'Welcome Back'
        userName.textContent = `${myUser.name.firstname} ${myUser.name.lastname}`
        userInfo.append(h3, userName)
        header.append(userInfo)
    }
    // clear the area
    nameInput.value = ''
    passWord.value = ''
})
// categroy filters
category.addEventListener('click', (ev) => {
    let myTarget = ev.target.textContent
    let filter = productData.filter((item) => item.category === myTarget.toLowerCase())
    populateFilter(filter)
})
// home event
home.addEventListener('click', () => {
    main.replaceChildren([])
    // change layout
    main.classList.replace('column', 'grid')
    makeGrid()
})
// cart event
cart.addEventListener('click', () => {
    userCart(id)
})
// sign up event
signUp.addEventListener('click', () => {
    dialog.showModal();
    dialog.style.display = 'block'
})
// submit sign up
submitBtn.addEventListener("click", () => {
    createAccount()
});
// cancel sign up
cancelBtn.addEventListener("click", () => {
    dialog.close('Cancel');
    dialog.style.display = 'none'
});
// products event
products.addEventListener('click', () => {
    // clear area
    main.replaceChildren([])
    // change layout
    main.classList.replace('grid', 'column')
    // create stuff
    let mensSection = document.createElement('section')
    let menTitle = document.createElement('h2')
    menTitle.textContent = "Men's Clothing"
    menTitle.classList.add('title')
    let womensSection = document.createElement('section')
    let womenTitle = document.createElement('h2')
    womenTitle.textContent = "Women's Clothing"
    womenTitle.classList.add('title')
    let electronicsSection = document.createElement('section')
    let electronicTitle = document.createElement('h2')
    electronicTitle.textContent = "Electronics"
    electronicTitle.classList.add('title')
    let jewelerySection = document.createElement('section')
    let jewelTitle = document.createElement('h2')
    jewelTitle.textContent = "Jewelery"
    jewelTitle.classList.add('title')
    // display according to category
    allMens.forEach((item) => {
        makeArticle(item, mensSection)
    })
    allWomens.forEach((item) => {
        makeArticle(item, womensSection)
    })
    allElec.forEach((item) => {
        makeArticle(item, electronicsSection)
    })
    allJewel.forEach((item) => {
        makeArticle(item, jewelerySection)
    })
    // append
    mensSection.prepend(menTitle)
    womensSection.prepend(womenTitle)
    electronicsSection.prepend(electronicTitle)
    jewelerySection.prepend(jewelTitle)
    main.append(mensSection, jewelerySection, electronicsSection, womensSection)
})
// random function
function randomProduct(arr) {
    let number = Math.floor(Math.random() * arr.length)
    return arr[number]
}
// populating home page with a random item from each category
function makeGrid() {
    makeArticle(randomProduct(allMens), main)
    makeArticle(randomProduct(allWomens), main)
    makeArticle(randomProduct(allElec), main)
    makeArticle(randomProduct(allJewel), main)
}
// main function to create an article
function makeArticle(product, area) {
    // create stuff with classes and content
    let myArticle = document.createElement('article')
    myArticle.classList.add('sizing', 'column')
    let title = document.createElement('h3')
    title.classList.add('link')
    title.textContent = product.title
    let pic = document.createElement('img')
    pic.classList.add('sizing')
    pic.src = product.image
    let describe = document.createElement('p')
    describe.classList.add('small')
    describe.textContent = product.description
    let price = document.createElement('h4')
    price.classList.add('link')
    price.textContent = `$ ${product.price}`
    let rating = document.createElement('p')
    rating.classList.add('small')
    rating.classList.add('flex')
    let stars = document.createElement('span')
    stars.textContent = `rated ${product.rating.rate} stars`
    let number = document.createElement('span')
    number.textContent = `by: ${product.rating.count} customers`
    rating.append(stars, number)
    let addTo = document.createElement('button')
    addTo.classList.add('major')
    addTo.textContent = 'Add to Cart'
    // append
    myArticle.append(title, pic, describe, price, rating, addTo)
    area.append(myArticle)
    // add to cart event
    addTo.addEventListener('click', () => {
        total = 0
        myCart.push(product)
    })
}
// populate page after filtering
function populateFilter(filter) {
    // clear area
    main.replaceChildren([])
    // change layout
    main.classList.replace('column', 'grid')
    let container = document.createElement('section')
    let scroller = document.createElement('section')
    main.append(container, scroller)
    makeArticle(filter[0], container)
    scroller.classList.add('column', 'scroll')
    // create stuff
    filter.forEach((item) => {
        let div = document.createElement('div')
        let preview = document.createElement('img')
        div.classList.add('thumb')
        preview.src = item.image
        preview.classList.add('preview')
        div.append(preview)
        scroller.append(div)
    })
    // event to change the main item
    scroller.addEventListener('click', (ev) => {
        let myEvent = ev.target.src
        let newItem = productData.find((item) => item.image === myEvent)
        container.replaceChildren([])
        makeArticle(newItem, container)
    })
}
let newArticle = document.createElement('article')
newArticle.classList.add('grid')
let h3 = document.createElement('h3')
h3.textContent = 'Your total'
let userTotal = document.createElement('h1')
// populating the cart for the logged in user
function userCart(id) {
    // clear area
    main.replaceChildren([])
    // change layout
    main.classList.replace('grid', 'column')
    // if not logged in
    if (!id) {
        myCart.forEach((item) => {
            let itemId = item.id
            let qty = 1
            createCart(itemId, qty)
        })
    }
    else {
        // find cart
        let userCart = cartData.find((cart) => cart.userId === id)
        userCart.products.forEach((item) => {
            console.log(item)
            let itemId = item.productId
            let qty = item.quantity
            createCart(itemId, qty)
        })
    }
    // section with the total
    newArticle.append(h3, userTotal)
    main.append(newArticle)
}
function createCart(itemId, qty) {
    // find product
    let myItem = productData.find((product) => product.id === itemId)
    let subTotal = myItem.price * qty
    // edit $$
    total += subTotal
    let myTotal = parseFloat(total.toFixed(2))
    userTotal.textContent = `$${myTotal}`
    // make stuff
    let article = document.createElement('article')
    article.classList.add('grid')
    let pic = document.createElement('img')
    pic.classList.add('preview')
    let column = document.createElement('div')
    let title = document.createElement('h4')
    let qtyDiv = document.createElement('div')
    qtyDiv.classList.add('flex')
    let plus = document.createElement('button')
    plus.classList.add('major')
    plus.textContent = '+'
    let minus = document.createElement('button')
    minus.classList.add('minor')
    minus.textContent = '-'
    let qtyText = document.createElement('h4')
    qtyText.textContent = `Qty: ${qty}`
    let price = document.createElement('h3')
    pic.src = myItem.image
    title.textContent = myItem.title
    price.textContent = `$${myItem.price}`
    let removal = document.createElement('button')
    removal.classList.add('minor', 'full')
    removal.textContent = 'Remove from Cart'
    // append
    qtyDiv.append(plus, qtyText, minus)
    column.append(title, qtyDiv, price)
    article.append(pic, column, removal)
    main.append(article)
    plus.addEventListener('click', () => {
        qty++
        qtyText.textContent = qty
        let plusTotal = myCart.reduce((total, item) => {
            let newTotal = total + (item.price * qty)
            return newTotal
        },0)
        userTotal.textContent = `$ ${plusTotal}`
    })
    minus.addEventListener('click', (ev) => {
        let target = ev.target.parentElement.parentElement.parentElement
        if (qty < 1) {
            remove(target)
        } else {
            qty--
            qtyText.textContent = qty
            let minusTotal = myCart.reduce((total, item) => {
                let newTotal = total + (item.price * qty)
                return newTotal
             },0)
            userTotal.textContent = `$ ${minusTotal}`
        }
    })
    removal.addEventListener('click', (ev) => {
        let target = ev.target.parentElement
        remove(target)
    })
    function remove(target) {
        let current = myCart.find((item) => item.image === target.firstElementChild.src)
        let index = myCart.indexOf(current)
        myCart.splice(index, 1)
        target.remove()
        qty--
        qtyText.textContent = qty
        total -= current.price
        let newTotal = parseFloat(total.toFixed(2))
        userTotal.textContent = `$ ${newTotal}`
    }
}
// sign up form
const emailElem = document.getElementById('email')
const firstNameElem = document.getElementById('first-name')
const lastNameElem = document.getElementById('last-name')
const phoneNum = document.getElementById('phone')
const addyNumElem = document.getElementById('housing')
const addyStreetElem = document.getElementById('street')
const addyCityElem = document.getElementById('city')
const addyZipElem = document.getElementById('zip')
const userNameElem = document.getElementById('user-name')
const passOneElem = document.getElementById('password1')
const passTwoElem = document.getElementById('password2')
const myUsers = []
// create a new user
function createAccount() {
    if (passOneElem.value !== passTwoElem.value) {
        alert('Passwords do not match')
    }
    else {
        let newName = new Map()
        newName.set('firstName', firstNameElem.value)
        newName.set('lastName', lastNameElem.value)
        let newAddy = new Map()
        newAddy.set('number', addyNumElem.value)
        newAddy.set('street', addyStreetElem.value)
        newAddy.set('city', addyCityElem.value)
        newAddy.set('zipcode', addyZipElem)
        let newUser = new Map()
        newUser.set('email', emailElem.value)
        newUser.set('name', newName)
        newUser.set('address', newAddy)
        newUser.set('phone', phoneNum.value)
        newUser.set('username', userNameElem.value)
        newUser.set('password', passOneElem.value)
        myUsers.push(newUser)
    }
    dialog.style.display = 'none'
}
makeGrid()

// let shoppingCart = document.createElement('img');
// image.src = './images/shoppingCart.jpg';
// image.classList.add('shoppingCart');
// image.textContent = shoppingCart;
// main.prepend(image);