// console.log(localStorage.getItem("bId")); Get Id when onclicked
const bId = localStorage.getItem("bId");

// List info products
const products = [
  {
    name: "Murdering Last Year",
    img: "../image/image-product/b1.webp",
    price: "19.00",
    vendor: "Thai",
    amount: 10,
    des: "Crime, murder and mass shootings have dominated headlines this year. Just over the weekend, a shooting in Cincinnati wounded nine people, and another in Detroit killed one and wounded four.",
  },
  {
    name: "About The First Night",
    img: "../image/image-product/b2.webp",
    price: "79.00",
    vendor: "Duy",
    amount: 32,
    des: "A man and woman meet and try to have a romantic affair, despite their personal problems and the interference of their disapproving friends.",
  },
  {
    name: "Food Poison",
    img: "../image/image-product/book3.webp",
    price: "79.00",
    vendor: "Hoang",
    amount: 14,
    des: "Learn more about this foodborne illness that can cause nausea, vomiting and diarrhea within hours of eating contaminated food.",
  },
  {
    name: "Graphic Design School",
    img: "../image/image-product/book4.webp",
    price: "80.00",
    vendor: "Duong",
    amount: 12,
    des: "The best graphic design books offer insights and inspiration for graphic designers of all types. They offer pages of insider knowledge, anecdotes, ideas and even career advice.",
  },
  {
    name: "Black Night",
    img: "../image/image-product/book5.webp",
    price: "39.00",
    vendor: "Hoang",
    amount: 15,
    des: "Learn about the animals that make the forest their home by day and at night. This creative approach of looking at animal habitats in the forest puts readers close up to deer, bear, quail, crickets, mice, foxes, and more.",
  },
  {
    name: "Stay Healthy",
    img: "../image/image-product/book6.webp",
    price: "29.00",
    vendor: "Duong",
    amount: 102,
    des: "Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.",
  },
  {
    name: "Monsoon",
    img: "../image/image-product/book7.webp",
    price: "40.00",
    vendor: "Thai",
    amount: 33,
    des: "A seasonal prevailing wind in the region of South and Southeast Asia, blowing from the southwest between May and September and bringing rain (the wet monsoon ), or from the northeast between October and April (the dry monsoon ).",
  },
  {
    name: "The Big Book Of Science",
    img: "../image/image-product/book8.webp",
    price: "28.00",
    vendor: "Hoang",
    amount: 55,
    des: "The intellectual and practical activity encompassing the systematic study of the structure and behaviour of the physical and natural world through observation and experiment.",
  },
  {
    name: "By The Air",
    img: "../image/image-product/book9.webp",
    price: "70.00",
    vendor: "Duy",
    amount: 13,
    des: "In life, there are no accidents. Things happen for a reason. Date with a purpose as you watch how, your date treat others, while keeping an open mind, as your willingness to learn from their mistakes while minimizing own. While dating, give very little of yourself, but once fully committed, give it all and rejoice with the happiness that follows with it.",
  },
  {
    name: "Numen: A Sacredr",
    img: "../image/image-product/book10.webp",
    price: "102.00",
    vendor: "Duong",
    amount: 90,
    des: "Every talented sales rep or manager wants to take their career to a higher level. But if you're only focused on meeting quotas and expanding your territory, then you're doing it all wrong. You have to think differently—to step outside your comfort zone and play offense instead of defense—if you're really going to go places.",
  },
  {
    name: "One: Pot, Pan, Planet",
    img: "../image/image-product/book11.webp",
    price: "27.05",
    vendor: "Thai",
    amount: 103,
    des: "A night sky with billions of stars always puts my mind at ease. Whenever I get frustrated, I look at the stars and they will instantly cheer me up. All of a sudden, my problems seem so tiny and I feel like I can conquer them all. Overall, a star-lit sky is truly magical and surreal, just like heaven.",
  },
  {
    name: "The Key To The Tarot",
    img: "../image/image-product/book12.webp",
    price: "109.10",
    vendor: "Hoang",
    amount: 200,
    des: "There is a spiritual component to tarot cards, which may appeal to those who don't associate with organized religion. That said, tarot may go against your faith, or you may find it hard to believe. It's also not a replacement for therapy, though it can complement it.",
  },
  {
    name: "Self-Care",
    img: "../image/image-product/book13.webp",
    price: "50.00",
    vendor: "Duong",
    amount: 20,
    des: "Taking care of yourself can feel like a really big task, but it doesn't have to be overwhelming. Learn to manage your physical, mental, and emotional health so that you can enjoy your day-to-day life more and reduce the risk of various health problems later down the road.",
  },
  {
    name: "The Original Rider Waite",
    img: "../image/image-product/book14.webp",
    price: "208.00",
    vendor: "Duy",
    amount: 05,
    des: "The Original Rider-Waite(R) Tarot Pack includes a Celtic Cross card-spread guide and an updated version of The Pictorial Key to the Tarot, written by Arthur Edward Waite. This new edition includes a thoughtful foreword by Liz Greene, who not only places tarot in a historical context, but also situates it in a broader context. She describes tarot as a series of pictorial portrayals of the archetypal human life journey.",
  },
  {
    name: "Product Media",
    img: "../image/image-product/book3.webp",
    price: "300.00",
    vendor: "Thai",
    amount: 34,
    des: "Media production means the making of a motion picture, television show, video, commercial, Internet video, or other viewable programming provided to viewers via a movie theater or transmitted through broadcast radio wave, cable, satellite, wireless, or Internet.",
  },
];

// End info products

// title shop
var titleShop = document.querySelector(".title-shop span");
titleShop.textContent = products[bId].name;

// Images product
var productBig = document.querySelector(".product-images #img-big");
var productSmall = document.querySelectorAll(".product-image .img-small");
productBig.src = products[bId].img;
productSmall[3].src = products[bId].img;

for (let i = 0; i < productSmall.length; i++) {
  productSmall[i].onclick = () => {
    productBig.src = productSmall[i].src;
  };
}

// Name product
var productName = document.querySelector(".products-info-detail h2");
var productName2 = document.querySelector(".book-name");
productName.textContent = products[bId].name;
productName2.textContent = products[bId].name;

// Price product
var productPrice = document.querySelector(".products-info-detail .price span");
productPrice.textContent = products[bId].price;

// Vendor product
var productVendor = document.querySelector(".products-info-detail .vendor span");
var author = document.querySelector(".author");
productVendor.textContent = products[bId].vendor;
author.textContent = products[bId].vendor;

// Amount product
var productAmount = document.querySelector(".products-info-detail .amount span");
productAmount.textContent = products[bId].amount;

// Description product
var productDescription = document.querySelector(
  ".products-info-detail .description span"
);
productDescription.textContent = products[bId].des;

// Effect Buy
var btnBuy = document.getElementById("btn-buy");
btnBuy.onclick = () => {
    swal("Good job!", "Successful purchase!", "success");
};

// Review
var labelContent = document.querySelectorAll(".label-content h3");
var displayContent = document.querySelector('.display-content');
var customerReview = document.querySelector('.customer-review');
var shipping = document.querySelector('.shipping');

labelContent[0].onclick = () => {
    labelContent[0].style.color = 'red';
    labelContent[1].style.color = '#212529';
    labelContent[2].style.color = '#212529';

    displayContent.style.display = 'block';
    customerReview.style.display = 'none';
    shipping.style.display = 'none';
}

labelContent[1].onclick = () => {
    labelContent[1].style.color = 'red';
    labelContent[0].style.color = '#212529';
    labelContent[2].style.color = '#212529';

    displayContent.style.display = 'none';
    customerReview.style.display = 'block';
    shipping.style.display = 'none';
}

labelContent[2].onclick = () => {
    labelContent[2].style.color = 'red';
    labelContent[1].style.color = '#212529';
    labelContent[0].style.color = '#212529';

    customerReview.style.display = 'none';
    displayContent.style.display = 'none';
    shipping.style.display = 'flex';
}
