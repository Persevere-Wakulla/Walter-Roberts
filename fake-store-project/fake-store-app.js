const res = await fetch('https://fakestoreapi.com/products')
const data = await res.json()
const resCategories = await fetch('https://fakestoreapi.com/products/categories')
const dataCategories = await resCategories.json()
const resCart = await fetch('https://fakestoreapi.com/products/carts')
const dataCart = await resCart.json()
const resUsers = await fetch('https://fakestoreapi.com/products/categories')
const dataUsers = await resUsers.json()
const form = document.querySelector('form');
const logIn = document.querySelector('#logIn');
const content = document.getElementById('content');
const firstNameInput = document.getElementById('firstName');
const userNameInput = document.getElementById('userName');
const passwordInput = document.getElementById('password');
logIn.addEventListener('click', validateUser);
function validateUser(event) {
    event.preventDefault();
    if (form[0].value.length === 0) {
        alert('Must Input Firstname, Username & Password')
    }
    else {
        alert('Go Shopping')
        firstNameInput.value = ''
        userNameInput.value = ''
        passwordInput.value = ''
        form.style.display = 'none'
        populate()
        return true
    }
};
let mens = data.filter((item) => item.category === "men's clothing");
let womens = data.filter((item) => item.category === "women's clothing");
let electronics = data.filter((item) => item.category === 'electronics');
let jewelery = data.filter((item) => item.category === 'jewelery');
function randomProduct(array) {
    let number = Math.floor(Math.random() * array.length)
    return array[number]
};
function productRandom() {
    makeSection(randomProduct(mens), content)
    makeSection(randomProduct(womens), content)
    makeSection(randomProduct(electronics), content)
    makeSection(randomProduct(jewelery), content)
};
const main = document.querySelector('main')
// make a funtion to create items
function populate() {
   productRandom()
   let image = document.createElement('img');
   image.src = './images/sun-svg.svg';
   image.classList.add('switch');
   main.prepend(image);
   let isLightMode;
   image.addEventListener('click', () => {
       document.documentElement.classList.toggle('lightMode');
       isLightMode = !isLightMode;
       if (isLightMode) {
           image.src = './images/moon-svg.svg';
            document.body.style.backgroundImage = 'url(./images/tillGreenBG.svg)';
        } else {
            image.src = './images/sun-svg.svg'; 
            document.body.style.backgroundImage = 'url(./images/image-equilibrium.jpg)';
        }
    });
    dataCategories.forEach(category => {
        const btn = document.createElement('button')
        btn.classList.add('sections')
        btn.textContent = category
        main.prepend(btn)
        btn.addEventListener('click', (ev) => {
            let category = ev.target.textContent;
            let myFilter = data.filter((item) => {
                if (item.category === category) {
                    return item
                }
            });
            content.replaceChildren([])
            myFilter.forEach((item) => {
                makeSection(item, content)
            })
        });
    });
};
function makeSection(item, area){
    let container = document.createElement('div');
    container.classList.add('container');
    let title = document.createElement('h1');
    title.classList.add('product');
    title.textContent = item.title;
    container.append(title);
    let price = document.createElement('h2');
    price.classList.add('price');
    price.textContent = `$${item.price}`;
    container.append(price);
    let picture = document.createElement('img');
    picture.src = item.image;
    picture.classList.add('image');
    container.append(picture);
    let description = document.createElement('p');
    description.textContent = item.description;
    description.classList.add('description');
    container.append(description);
    let category = document.createElement('h3');
    category.textContent = item.category;
    category.classList.add('category');
    container.append(category);
    area.append(container);
}