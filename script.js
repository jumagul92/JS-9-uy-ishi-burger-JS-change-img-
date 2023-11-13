
const product = {
    crazy: {
        name: 'Crazy',
        price: 31000,
        amount: 0,
        img: 'images/burger_1.png',
        get Summ(){
            return this.price*this.amount
        }
        

    },

    light:{
        name: 'Light',
        price: 26000,
        amount: 0, 
        img: 'images/burger_2.png',
        get Summ(){
            return this.price * this.amount
        }
    }, 

    cheeseburger: {
        name: 'CheeseBurger', 
        price: 29000, 
        amount: 0, 
        img: "images/burger_3.png", 
        get Summ(){
            return this.price * this.amount
        }
    }, 

    dburger: {
        name: 'dBurger', 
        price: 24000,
        amount: 0, 
        img: 'images/burger_4.png',
        get Summ(){
            return this.price * this.amount
        }
    }
}

const btns = document.querySelectorAll('.card__shop');
// console.log(btns);
const shopImg = document.querySelector('.shop__img');
const basket = document.querySelector('.basket');
const basketClose = document.querySelector('.basket__close');
const shopItem = document.querySelector('.shop__item');

const cardImages = document.querySelectorAll('.card__img');
const headerImg = document.querySelector('.header__img');


cardImages.forEach((cardImg)=>{
    cardImg.addEventListener('click', ()=>{
        // console.log(cardImg);
        const cardImgName = cardImg.getAttribute('src')
        // console.log(cardImgName);
        headerImg.setAttribute('src', cardImgName)
        
    })
})

btns.forEach(btn => {
    // console.log(btn);
    btn.addEventListener('click', function () {
        // console.log(btn);
        const parent = btn.closest('.card');
        // console.log(parent);
        const cardId = parent.getAttribute('id');
        // console.log(cardId);
        // console.log(product);
        product[cardId].amount++
        // console.log(product);

        basketInfo()

      } )
});

function basketInfo() {
    const productArr = [];

    for (const key in product) {
        // console.log(product[key]);
        const pk = product[key]; 
        const productCard = document.querySelector(`#${key}`);
        // console.log(productCard);
        const span = productCard.querySelector('.card__item');
        if(pk.amount){
            span.classList.add('active')
            span.innerHTML = pk.amount
            productArr.push(pk);
        } else{
            span.classList.remove('active')
        }
        
    }
    console.log(productArr);
    if (totalAmount()) {
        shopItem.classList.add('active');
        shopItem.innerHTML = totalAmount()

    } else{
        shopItem.classList.remove('active')
    }

}


function totalAmount() {

    let amount = 0;
    for (const key in product) {
        amount+= product[key].amount
    }
    return amount
}

// console.log(totalAmount());

shopImg.addEventListener('click', ()=>{
    basket.classList.add('active')
})

basketClose.addEventListener('click', ()=>{
    basket.classList.remove('active')
})