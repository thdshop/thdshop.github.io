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
    }   
]

// End info products

// title shop
var titleShop = document.querySelector('.title-shop span');
titleShop.textContent = products[bId].name;

// Images product
var productImage = document.querySelector('.product-images img');
productImage.src = products[bId].img;

// Name product
var productName = document.querySelector('.product-info-detail h2');
productName.textContent = products[bId].name;

// Price product
var productPrice = document.querySelector('.product-info-detail .price span');
productPrice.textContent = products[bId].price;

// Vendor product
var productVendor = document.querySelector('.product-info-detail .vendor span');
productVendor.textContent = products[bId].vendor;

// Amount product
var productAmount = document.querySelector('.product-info-detail .amount span');
productAmount.textContent = products[bId].amount;

// Despro product
var productDescription = document.querySelector('.product-info-detail .description span');
productDescription.textContent = products[bId].des;

// End title shop