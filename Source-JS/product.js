// console.log(localStorage.getItem("bId")); Get Id when onclicked
const bId = localStorage.getItem("bId");

// List info products
const products = [
    {
        name: 'Murdering Last Year',
        img: '../image/image-product/b1.webp',
        price: '19.00',
        vendor: 'Thai',
        amount: 10,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'About The First Night',
        img: '../image/image-product/b2.webp',
        price: '79.00',
        vendor: 'Duy',
        amount: 32,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'Food Poison',
        img: '../image/image-product/book3.webp',
        price: '79.00',
        vendor: 'Hoang',
        amount: 14,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'Graphic Design School',
        img: '../image/image-product/book4.webp',
        price: '80.00',
        vendor: 'Duong',
        amount: 12,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'Black Night',
        img: '../image/image-product/book5.webp',
        price: '39.00',
        vendor: 'Hoang',
        amount: 15,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'Stay Healthy',
        img: '../image/image-product/book6.webp',
        price: '29.00',
        vendor: 'Duong',
        amount: 102,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'Monsoon',
        img: '../image/image-product/book7.webp',
        price: '40.00',
        vendor: 'Thai',
        amount: 33,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'The Big Book Of Science',
        img: '../image/image-product/book8.webp',
        price: '28.00',
        vendor: 'Hoang',
        amount: 55,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'Many Different Kinds',
        img: '../image/image-product/book9.webp',
        price: '70.00',
        vendor: 'Duy',
        amount: 13,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'Numen: A Sacredr',
        img: '../image/image-product/book10.webp',
        price: '102.00',
        vendor: 'Duong',
        amount: 90,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'One: Pot, Pan, Planet',
        img: '../image/image-product/book11.webp',
        price: '27.05',
        vendor: 'Thai',
        amount: 103,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'The Key To The Tarot',
        img: '../image/image-product/book12.webp',
        price: '109.10',
        vendor: 'Hoang',
        amount: 200,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'Self-Care',
        img: '../image/image-product/book13.webp',
        price: '50.00',
        vendor: 'Duong',
        amount: 20,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'The Original Rider Waite',
        img: '../image/image-product/book14.webp',
        price: '208.00',
        vendor: 'Duy',
        amount: 05,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    },
    {
        name: 'Product Media',
        img: '../image/image-product/book3.webp',
        price: '300.00',
        vendor: 'Thai',
        amount: 34,
        des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four"
    }
]

// End info products

// title shop
var titleShop = document.querySelector('.title-shop span');
titleShop.textContent = products[bId].name;

// Images product
var productBig = document.querySelector('.product-images #img-big');
var productSmall = document.querySelectorAll('.product-image .img-small');
productBig.src = products[bId].img;
productSmall[3].src = products[bId].img;

for(let i = 0; i < productSmall.length; i++) {
    productSmall[i].onclick = () => {
        productBig.src = productSmall[i].src;
    }
}


// Name product
var productName = document.querySelector('.product-info-detail h2');
var productName2 = document.querySelector('.book-name');
productName.textContent = products[bId].name;
productName2.textContent = products[bId].name;

// Price product
var productPrice = document.querySelector('.product-info-detail .price span');
productPrice.textContent = products[bId].price;

// Vendor product
var productVendor = document.querySelector('.product-info-detail .vendor span');
var author = document.querySelector('.author');
productVendor.textContent = products[bId].vendor;
author.textContent = products[bId].vendor;

// Amount product
var productAmount = document.querySelector('.product-info-detail .amount span');
productAmount.textContent = products[bId].amount;

// Description product
var productDescription = document.querySelector('.product-info-detail .description span');
productDescription.textContent = products[bId].des;

// End title shop