/*///////  HEADER CONTENT    /////////*/
const menuNavegation = document.getElementsByClassName("menu-navegation")[0];
const mainMenu = document.getElementById("main-menu");
const menuGts = document.getElementById("menu-gts");
const menuRetro = document.getElementById("menu-retro");
const menuElectric = document.getElementById("menu-electric");
const menuSprint = document.getElementById("menu-sprint");


/*/////// HOME CONTENT ////////////*/
const home = document.getElementsByClassName("home")[0];

/*/////// GTS-SUPER CONTENT ////////////*/
const gtsSuper = document.getElementsByClassName("gts-super")[0];


/*/////// RETRO CONTENT ////////////*/
const retro = document.getElementsByClassName("retro")[0];

/*/////// ELECTRIC CONTENT ////////////*/
const electric = document.getElementsByClassName("electric")[0];

/*/////// SPRINT CONTENT ////////////*/
const sprint = document.getElementsByClassName("sprint")[0];

/*/////// PROFILE CONTENT ////////////*/
const profile = document.getElementsByClassName("profile")[0];
const formProfile = document.getElementsByClassName("form-profile")[0];

/*/////// ADDRESS CONTENT ////////////*/
const address = document.getElementsByClassName("address")[0];
const formAddress = document.getElementsByClassName("form-address")[0];

/*/////// SHIPPING CONTENT ////////////*/
const shipping = document.getElementsByClassName("shipping")[0];
const formShipping = document.getElementsByClassName("form-shipping")[0];


/*/////// PAYMENT-DETAILS CONTENT ////////////*/
const paymentDetails = document.getElementsByClassName("payment-details")[0];
const buttonBuyNow = document.getElementsByClassName("button-buy-now")[0];
const first = document.getElementsByClassName("first")[0];
const price1 = document.getElementsByClassName("price1")[0];
const price2 = document.getElementsByClassName("price2")[0];
const price3 = document.getElementsByClassName("price3")[0];
const price4 = document.getElementsByClassName("price4")[0];
const fourth = document.getElementsByClassName("fourth")[0];
let totalPrice = document.getElementsByClassName("total-price")[0];

/*/////// PAYMENT-DETAILS CONTENT ////////////*/
const orderCompleted = document.getElementsByClassName("order-completed")[0];

/*SMALL TOP PICTURES */

let firstSmallPicture = document.getElementsByClassName("first-small-picture");
let secondSmallPicture = document.getElementsByClassName("second-small-picture");

let gtsRightPicture = document.getElementsByClassName("gts-right-picture")[0];
let gtsLeftPicture = document.getElementsByClassName("gts-left-picture")[0];

let retroRightPicture = document.getElementsByClassName('retro-right-picture')[0];
let retroLeftPicture = document.getElementsByClassName('retro-left-picture')[0];

let electricRightPicture = document.getElementsByClassName('electric-right-picture')[0];
let electricLeftPicture = document.getElementsByClassName('electric-left-picture')[0];

let sprintRightPicture = document.getElementsByClassName('sprint-right-picture')[0];
let sprintLeftPicture = document.getElementsByClassName('sprint-left-picture')[0];

/*/////// GENERAL CONTENT ////////////*/
let smallScreenProduct = document.getElementsByClassName("small-screen-product");
let prices = document.getElementsByClassName("prices");
let colorName = document.getElementsByClassName("color-name");

/*/////// GENERAL OBJECT CONTENT ////////////*/

let storePurchase = {

};

/*////// BUY BUTTON ///////////*/

let buyButton = document.getElementsByClassName("buy-button");

/*////// BIG PICTURE //////*/

let imageBig = document.getElementsByClassName("image-big");

/*////// COLOR PICTURE //////*/

let bikeColors = document.getElementsByClassName("bike-colors");


/*//// SMALL GENERAL ////*/
let helmetSrc = "/assets/small-screen/helmet.png";
let glovesSrc = "/assets/small-screen/gloves.png";

/*///////////// BIG GENERAL /////*/
let helmetBfSrc = "/assets/BF-products/helment-BF.png";
let glovesBfSrc = "/assets/BF-products/gloves-BF.png";


/*//// SMALL SCREEN ////*/

/* RETRO */
let retroRightSrc = "/assets/small-screen/retro/retro-green-right.png";
let retroLeftSrc = "/assets/small-screen/retro/retro-green-left.png";
let retroLeftWhiteSrc = "/assets/small-screen/retro/retro-white-left.png";
let retroRightWhiteSrc = "/assets/small-screen/retro/retro-white-right.png";
let retroLeftPinkSrc = "/assets/small-screen/retro/retro-pink-left.png";
let retroRightPinkSrc = "/assets/small-screen/retro/retro-pink-right.png";

/* SUPER */
let superRightSrc = "/assets/small-screen/gts/gts-brown-right.png";
let superLeftSrc = "/assets/small-screen/gts/gts-brown-left.png";
let superRightBlackSrc = "/assets/small-screen/gts/gts-black-right.png";
let superLeftBlackSrc = "/assets/small-screen/gts/gts-black-left.png";
let superRightRedSrc = "/assets/small-screen/gts/gts-red-right.png";
let superLeftRedSrc = "/assets/small-screen/gts/gts-red-left.png";
let superRightBrownSrc = "/assets/small-screen/gts/gts-brown-right.png";
let superLeftBrownSrc = "/assets/small-screen/gts/gts-brown-left.png";
let superRightWhiteSrc = "/assets/small-screen/gts/gts-white-right.png";
let superLeftWhiteSrc = "/assets/small-screen/gts/gts-white-left.png";
let superRightGoldSrc = "/assets/small-screen/gts/gts-gold-right.png";
let superLeftGoldSrc = "/assets/small-screen/gts/gts-gold-left.png";

/* SPRINT */
let sprintLeftSrc = "/assets/small-screen/sprint/grey-left.png";
let sprintRightSrc = "/assets/small-screen/sprint/grey-right.png";
let sprintLeftYellowSrc = "/assets/small-screen/sprint/yellow-left.png";
let sprintRightYellowSrc = "/assets/small-screen/sprint/yellow-right.png";

/* ELECTRIC */
let electricLeftSrc = "/assets/small-screen/electric/grey-left.png";
let electricRightSrc = "/assets/small-screen/electric/grey-right.png";
let electricRightRedSrc = "/assets/small-screen/electric/red-right.png";
let electricLeftRedSrc = "/assets/small-screen/electric/red-left.png";

/*///////////// BIG SCREEN /////////*/
/* RETRO */
let retroRightBfSrc = "/assets/BF-products/retro/retro-green-right-BF.png";
let retroLeftBfSrc = "/assets/BF-products/retro/retro-green-left-BF.png";




/* SUPER */
let superLeftBfSrc = "/assets/BF-products/gts-super/gts-brown.png";
let superRightBfSrc = "/assets/BF-products/gts-super/gts-brown-left.png";



/* SPRINT */
let sprintRightBfSrc = "/assets/BF-products/sprint/sprint-grey-right-BF.png";
let sprintLeftBfSrc = "/assets/BF-products/sprint/sprint-grey-left-BF.png";



/* ELECTRIC */

let electricRightBfSrc = "/assets/BF-products/electric/electric-grey-right-BF.png";
let electricLeftBfSrc = "/assets/BF-products/electric/electric-grey-left-BF.png";


/* ARRAY */
let bigScreen = [superLeftBfSrc, retroRightBfSrc, electricRightBfSrc, sprintRightBfSrc];

/*///////////// BIG COLOR SCREEN /////////*/
/* SUPER */
let superLeftBfWhiteSrc = "/assets/BF-products/gts-super/gts-white-left.png";
let superRightBfWhiteSrc = "/assets/BF-products/gts-super/gts-white-right.png"
let superLeftBfRedSrc = "/assets/BF-products/gts-super/gts-red-left.png";
let superRightBfRedSrc = "/assets/BF-products/gts-super/gts-red-right.png";
let superLeftBfBlackSrc = "/assets/BF-products/gts-super/gts-black-left.png";
let superRightBfBlackSrc = "/assets/BF-products/gts-super/gts-black-right.png";
let superLeftBfGoldSrc = "/assets/BF-products/gts-super/gts-gold-left.png";
let superRightBfGoldSrc = "/assets/BF-products/gts-super/gts-gold-right.png";
let superLeftBfBrownSrc = "/assets/BF-products/gts-super/gts-brown-left.png";
let superRightBfBrownSrc = "/assets/BF-products/gts-super/gts-brown.png";

/* ELECTRIC */
let electricLeftBfRedSrc = '/assets/BF-products/electric/electric-red-left-BF.png';
let electricRightBfRedSrc = '/assets/BF-products/electric/electric-red-right-BF.png';
let electricLeftBfGreySrc = '/assets/BF-products/electric/electric-grey-left-BF.png';
let electricRightBfGreySrc = '/assets/BF-products/electric/electric-grey-right-BF.png';

/* RETRO */
let retroLeftBfGreenSrc = '/assets/BF-products/retro/retro-green-left-BF.png';
let retroRightBfGreenSrc = '/assets/BF-products/retro/retro-green-right-BF.png';
let retroLeftBfPinkSrc = '/assets/BF-products/retro/retro-pink-left-BF.png';
let retroRightBfPinkSrc = '/assets/BF-products/retro/retro-pink-right-BF.png';
let retroLeftBfWhiteSrc = '/assets/BF-products/retro/retro-white-left-BF.png';
let retroRightBfWhiteSrc = '/assets/BF-products/retro/retro-white-right-BF.png';

/* SPRINT */
let sprintLeftBfGreySrc = '/assets/BF-products/sprint/sprint-grey-left-BF.png';
let sprintRightBfGreySrc = '/assets/BF-products/sprint/sprint-grey-right-BF.png';
let sprintLeftBfYellowSrc = '/assets/BF-products/sprint/sprint-yellow-left-BF.png';
let sprintRightBfYellowSrc = '/assets/BF-products/sprint/sprint-yellow-right-BF.png';


/*////////  HEADER LISTEN     //////////*/

mainMenu.addEventListener("click", function_mainMenu);
menuGts.addEventListener("click", function_menuGts);
menuRetro.addEventListener("click", function_menuRetro);
menuElectric.addEventListener("click", function_menuElectric);
menuSprint.addEventListener("click", function_menuSprint);



/*//////// BUTTON LISTEN //////////*/
for (let i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", function_buybutton);
}

formProfile.addEventListener("submit", function_formProfile);
formAddress.addEventListener("submit", function_formAddress);
formShipping.addEventListener("submit", function_formShipping);

buttonBuyNow.addEventListener("click", function_buttonBuyNow)

/*//////// GENERAL LISTEN //////////*/
for (let i = 0; i < smallScreenProduct.length; i++) {
  smallScreenProduct[i].addEventListener("click", function_smallScreenProduct);

}

for (let i = 0; i < bikeColors.length; i++) {
  bikeColors[i].addEventListener("click", function_bikeColors);
}



/*////////   FUNCTIONS /////////*/

/*/////////////////MAIN MENU///////////*/
function function_mainMenu() {
  if (menuNavegation.classList.contains("menu-navegation_notShow")) {
    menuNavegation.classList.replace("menu-navegation_notShow", "menu-navegation");
  }

  if (home.classList.contains("home_notShow")) {
    home.classList.replace("home_notShow", "home");
  }

  if (gtsSuper.classList.contains("gts-super_show")) {
    gtsSuper.classList.replace("gts-super_show", "gts-super");
  }

  if (retro.classList.contains("retro_show")) {
    retro.classList.replace("retro_show", "retro");
  }

  if (electric.classList.contains("electric_show")) {
    electric.classList.replace("electric_show", "electric");
  }

  if (sprint.classList.contains("sprint_show")) {
    sprint.classList.replace("sprint_show", "sprint");
  }

  if (profile.classList.contains("profile_show")) {
    profile.classList.replace("profile_show", "profile");
  }

  if (address.classList.contains("address_show")) {
    address.classList.replace("address_show", "address");
  }

  if (shipping.classList.contains("shipping_show")) {
    shipping.classList.replace("shipping_show", "shipping");
  }

  if (paymentDetails.classList.contains("payment-details_show")) {
    paymentDetails.classList.replace("payment-details_show", "payment-details");
  }


  if (orderCompleted.classList.contains("order-completed_show")) {
    orderCompleted.classList.replace("order-completed_show", "order-completed");
  }



}

/*/////////////////GTS SUPER MENU///////////*/
function function_menuGts() {
  gtsSuper.classList.replace("gts-super", "gts-super_show");
  home.classList.replace("home", "home_notShow");

  if (retro.classList.contains("retro_show")) {
    retro.classList.replace("retro_show", "retro");
  }

  if (electric.classList.contains("electric_show")) {
    electric.classList.replace("electric_show", "electric");
  }

  if (sprint.classList.contains("sprint_show")) {
    sprint.classList.replace("sprint_show", "sprint");
  }



  for (i = 0; i < imageBig.length; i++) {
    imageBig[i].setAttribute("src", bigScreen[i]);
  }

  for (let i = 0; i < firstSmallPicture.length; i++) {
    firstSmallPicture[i].setAttribute("src", superLeftBrownSrc);
  }
  for (let i = 0; i < secondSmallPicture.length; i++) {
    secondSmallPicture[i].setAttribute("src", superRightBrownSrc);
  }

  /*CONTENT CHANGE*/

  for (i = 0; i < prices.length; i++) {
    prices[i].innerHTML =
      `<h3 class="old-price"><s>6500€</s></h3>
            <h3 class="actual-price">5700€</h3>`
  }
  for (i = 0; i < colorName.length; i++) {
    colorName[i].innerHTML =
      `BROWN`
  }

  /*CHANGE BUTTON CLASSES*/

  for (let i = 0; i < buyButton.length; i++) {
    if (buyButton[i].classList.contains("button-white-gts")) {
      buyButton[i].classList.replace("button-white-gts", "button-brown-gts");
    }
    if (buyButton[i].classList.contains("button-red-gts")) {
      buyButton[i].classList.replace("button-red-gts", "button-brown-gts");
    }
    if (buyButton[i].classList.contains("button-black-gts")) {
      buyButton[i].classList.replace("button-black-gts", "button-brown-gts");
    }
    if (buyButton[i].classList.contains("button-gold-gts")) {
      buyButton[i].classList.replace("button-gold-gts", "button-brown-gts");
    }
  }
}
/*/////////////////RETRO MENU///////////*/
function function_menuRetro() {
  retro.classList.replace("retro", "retro_show");
  home.classList.replace("home", "home_notShow");


  if (gtsSuper.classList.contains("gts-super_show")) {
    gtsSuper.classList.replace("gts-super_show", "gts-super");
  }

  if (electric.classList.contains("electric_show")) {
    electric.classList.replace("electric_show", "electric");
  }

  if (sprint.classList.contains("sprint_show")) {
    sprint.classList.replace("sprint_show", "sprint");
  }




  for (i = 0; i < imageBig.length; i++) {
    imageBig[i].setAttribute("src", bigScreen[i]);
  }

  for (let i = 0; i < firstSmallPicture.length; i++) {
    firstSmallPicture[i].setAttribute("src", retroRightSrc);
  }
  for (let i = 0; i < secondSmallPicture.length; i++) {
    secondSmallPicture[i].setAttribute("src", retroLeftSrc);
  }

  /*CONTENT CHANGE*/
  for (i = 0; i < prices.length; i++) {
    prices[i].innerHTML =
      `<h3 class="old-price"><s>4500€</s></h3>
            <h3 class="actual-price">3700€</h3>`
  }
  for (i = 0; i < colorName.length; i++) {
    colorName[i].innerHTML =
      `GREEN`
  }
  /*CHANGE BUTTON CLASSES*/


}
/*/////////////////ELECTRIC MENU///////////*/
function function_menuElectric() {
  electric.classList.replace("electric", "electric_show");
  home.classList.replace("home", "home_notShow");

  if (gtsSuper.classList.contains("gts-super_show")) {
    gtsSuper.classList.replace("gts-super_show", "gts-super");
  }

  if (retro.classList.contains("retro_show")) {
    retro.classList.replace("retro_show", "retro");
  }

  if (sprint.classList.contains("sprint_show")) {
    sprint.classList.replace("sprint_show", "sprint");
  }

  if (profile.classList.contains("profile_show")) {
    profile.classList.replace("profile_show", "profile");
  }

  for (let i = 0; i < firstSmallPicture.length; i++) {
    firstSmallPicture[i].setAttribute("src", electricRightSrc);
  }
  for (let i = 0; i < secondSmallPicture.length; i++) {
    secondSmallPicture[i].setAttribute("src", electricLeftSrc);
  }

  for (i = 0; i < imageBig.length; i++) {
    imageBig[i].setAttribute("src", bigScreen[i]);
  }

  /*CONTENT CHANGE*/
  for (i = 0; i < prices.length; i++) {
    prices[i].innerHTML =
      `<h3 class="old-price"><s>7500€</s></h3>
            <h3 class="actual-price">6375€</h3>`
  }
  for (i = 0; i < colorName.length; i++) {
    colorName[i].innerHTML =
      `GREY`
  }
  /*CHANGE BUTTON CLASSES*/
}
/*/////////////////SPRINT MENU///////////*/
function function_menuSprint() {
  sprint.classList.replace("sprint", "sprint_show");
  home.classList.replace("home", "home_notShow");

  if (gtsSuper.classList.contains("gts-super_show")) {
    gtsSuper.classList.replace("gts-super_show", "gts-super");
  }

  if (retro.classList.contains("retro_show")) {
    retro.classList.replace("retro_show", "retro");
  }

  if (electric.classList.contains("electric_show")) {
    electric.classList.replace("electric_show", "electric");
  }





  for (i = 0; i < imageBig.length; i++) {
    imageBig[i].setAttribute("src", bigScreen[i]);
  }

  for (let i = 0; i < firstSmallPicture.length; i++) {
    firstSmallPicture[i].setAttribute("src", sprintRightSrc);
  }
  for (let i = 0; i < secondSmallPicture.length; i++) {
    secondSmallPicture[i].setAttribute("src", sprintLeftSrc);
  }

  /*CONTENT CHANGE*/
  for (i = 0; i < prices.length; i++) {
    prices[i].innerHTML =
      `<h3 class="old-price"><s>5999€</s></h3>
            <h3 class="actual-price">5099€</h3>`
  }
  for (i = 0; i < colorName.length; i++) {
    colorName[i].innerHTML =
      `SILVER GREY`
  }
}

/*CHANGE BUTTON CLASSES*/



/*BUTTONS*/

function function_buybutton() {

  menuNavegation.classList.replace("menu-navegation", "menu-navegation_notShow");


  if (gtsSuper.classList.contains("gts-super_show")) {
    gtsSuper.classList.replace("gts-super_show", "gts-super");
  }

  if (retro.classList.contains("retro_show")) {
    retro.classList.replace("retro_show", "retro");
  }

  if (electric.classList.contains("electric_show")) {
    electric.classList.replace("electric_show", "electric");
  }

  if (sprint.classList.contains("sprint_show")) {
    sprint.classList.replace("sprint_show", "sprint");
  }

  for (let i = 0; i < buyButton.length; i++) {
    if (buyButton[i].classList.contains("button-brown-gts")) {

      storePurchase = {
        model: "GTS SUPER",
        color: "BROWN",
        PRICE: 5700,
        helmet: 0,
        gloves: 0
      };
      console.log(storePurchase);

    }

    if (buyButton[i].classList.contains("button-white-gts")) {

      storePurchase = {
        model: "GTS SUPER",
        color: "WHITE",
        PRICE: 5950,
        helmet: 0,
        gloves: 0
      };
      console.log(storePurchase);

    }
    if (buyButton[i].classList.contains("button-red-gts")) {

      storePurchase = {
        model: "GTS SUPER",
        color: "RED",
        PRICE: 5950,
        helmet: 0,
        gloves: 0
      };
      console.log(storePurchase);

    }
    if (buyButton[i].classList.contains("button-black-gts")) {

      storePurchase = {
        model: "GTS SUPER",
        color: "BLACK",
        PRICE: 5950,
        helmet: 0,
        gloves: 0
      };
      console.log(storePurchase);

    }
    if (buyButton[i].classList.contains("button-gold-gts")) {

      storePurchase = {
        model: "GTS SUPER",
        color: "GOLD",
        PRICE: 6800,
        helmet: 0,
        gloves: 0
      };
      console.log(storePurchase);

    }

  }
  /*//////TIMING*/////////*/
  let timeOrder = document.querySelectorAll(".time-order");
  let time = document.querySelectorAll(".time");

  let discount = 300;
  let function_timing = setInterval(() => {
    console.log(discount);
    if (discount !== 0) {
      discount--;
    }
    if (orderCompleted.classList.contains("order-completed_show")) {
      clearInterval(function_timing);
    }
    if (home.classList.contains("home")) {
      clearInterval(function_timing);
    }

    for (let i = 0; i < timeOrder.length; i++) {
      if (discount == 240) {
        timeOrder[i].classList.replace("time-order", "time-order_show");
        time[i].innerHTML = discount / 60;
      }
      if (discount == 235) {
        timeOrder[i].classList.replace("time-order_show", "time-order");
      }

      if (discount == 180) {
        timeOrder[i].classList.replace("time-order", "time-order_show");
        time[i].innerHTML = discount / 60;
      }
      if (discount == 175) {
        timeOrder[i].classList.replace("time-order_show", "time-order");
      }

      if (discount == 120) {
        timeOrder[i].classList.replace("time-order", "time-order_show");
        time[i].innerHTML = discount / 60;
      }
      if (discount == 115) {
        timeOrder[i].classList.replace("time-order_show", "time-order");
      }

      if (discount == 60) {
        timeOrder[i].classList.replace("time-order", "time-order_show");
        time[i].innerHTML = discount / 60;
      }
      if (discount == 55) {
        timeOrder[i].classList.replace("time-order_show", "time-order");
      }

    }



    if (discount == 0) {


      if (profile.classList.contains("profile_show")) {
        profile.classList.replace("profile_show", "profile");
      }
      if (home.classList.contains("home_notShow")) {
        home.classList.replace("home_notShow", "home");
      }

      if (menuNavegation.classList.contains("menu-navegation_notShow")) {
        menuNavegation.classList.replace("menu-navegation_notShow", "menu-navegation");

      }
      if (address.classList.contains("address_show")) {
        address.classList.replace("address_show", "address");
      }
      if (shipping.classList.contains("shipping_show")) {
        shipping.classList.replace("shipping_show", "shipping");
      }
      if (paymentDetails.classList.contains("payment-details_show")) {
        paymentDetails.classList.replace("payment-details_show", "payment-details");
      }
      clearInterval(function_timing);
      alert("Your time have finished");

    }

  }, 1000);





  profile.classList.replace("profile", "profile_show");


}

function function_formProfile(e) {
  e.preventDefault();
  profile.classList.replace("profile_show", "profile");
  address.classList.replace("address", "address_show");

  if (email) {
    storePurchase.email = email.value;
    console.log(storePurchase);
  }




}

function function_formAddress(event) {
  event.preventDefault();
  address.classList.replace("address_show", "address");
  shipping.classList.replace("shipping", "shipping_show");
}

function function_formShipping(event) {
  event.preventDefault();
  shipping.classList.replace("shipping_show", "shipping");
  paymentDetails.classList.replace("payment-details", "payment-details_show");


  if (freeShipment.checked) {
    storePurchase.priceShipment = 0;
    storePurchase.shipment = freeShipment.value;
    console.log(storePurchase);
  }
  if (premium.checked) {
    storePurchase.priceShipment = 250;
    storePurchase.shipment = premium.value;
    console.log(storePurchase);
  }
  if (extraShipping.checked) {
    storePurchase.priceShipment = 150;
    storePurchase.shipment = extraShipping.value;
    console.log(storePurchase);
  }
  first.innerHTML = `${storePurchase.model}`;
  price1.innerHTML = `${storePurchase.PRICE}€ `;
  price2.innerHTML = `${storePurchase.helmet}€`;
  price3.innerHTML = `${storePurchase.gloves}€`;
  fourth.innerHTML = `${storePurchase.shipment} SHIPPING`;
  price4.innerHTML = `${storePurchase.priceShipment} €`;

  let precioModel = storePurchase.PRICE;
  let precioHelmet = storePurchase.helmet;
  let precioGloves = storePurchase.gloves;
  let precioShipment = storePurchase.priceShipment;
  totalPrice.innerHTML = precioModel + precioHelmet + precioGloves + precioShipment;
  totalPrice.innerHTML += " €";
}

function function_buttonBuyNow() {
  paymentDetails.classList.replace("payment-details_show", "payment-details");
  orderCompleted.classList.replace("order-completed", "order-completed_show");

  orderCompleted.innerHTML = `<div class="order-completed-center">
        <h2 class="order-processed">THANK YOU! YOUR ORDER IS BEING PROCESSED</h2>
        <p>We have send a email to "${storePurchase.email}" with all information</p>
        <img src="assets/motorcycles/gts-super/red.png" alt="green vespa motorbike" class="order-processed-image"">
      </div>`


  function_timing = setInterval(() => {


    clearInterval(function_timing);

    console.log(function_timing);

  }, 1000);


}



/*/////////////////SMALL SCREEN///////////*/
function function_smallScreenProduct(event) {


  if (event.target.matches(".helmet-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", helmetBfSrc);
    }

  }

  if (event.target.matches(".gloves-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", glovesBfSrc);
    }
  }
  /*GTS PICTURE*/

  /*BROWN COLOR*/
  if (event.target.matches(".gts-right-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superRightBfSrc);
    }
  }

  if (event.target.matches(".gts-left-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superLeftBfSrc);
    }
  }
  /*BLACK COLOR*/
  if (event.target.matches(".gts-right-black-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superLeftBfBlackSrc);
    }

  }

  if (event.target.matches(".gts-left-black-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superRightBfBlackSrc);
    }
  }

  /*GOLD COLOR*/
  if (event.target.matches(".gts-right-gold-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superLeftBfGoldSrc);
    }

  }

  if (event.target.matches(".gts-left-gold-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superRightBfGoldSrc);
    }
  }

  /*WHITE COLOR*/
  if (event.target.matches(".gts-right-white-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superLeftBfWhiteSrc);
    }

  }

  if (event.target.matches(".gts-left-white-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superRightBfWhiteSrc);
    }
  }

  /*RED COLOR*/
  if (event.target.matches(".gts-right-red-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superLeftBfRedSrc);
    }

  }

  if (event.target.matches(".gts-left-red-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superRightBfRedSrc);
    }
  }



  /*RETRO PICTURE*/
  /*GREEN COLOR*/
  if (event.target.matches(".retro-right-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", retroRightBfSrc);
    }
  }
  if (event.target.matches(".retro-left-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", retroLeftBfSrc);
    }
  }
  /*PINK COLOR*/
  if (event.target.matches('.retro-right-pink-picture')) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', retroRightBfPinkSrc);
    }
  }

  if (event.target.matches('.retro-left-pink-picture')) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', retroLeftBfPinkSrc);
    }
  }
  /*WHITE COLOR*/
  if (event.target.matches('.retro-right-white-picture')) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', retroRightBfWhiteSrc);
    }
  }

  if (event.target.matches('.retro-left-white-picture')) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', retroLeftBfWhiteSrc);
    }
  }





  /*ELECTRIC PICTURE*/
  /*GREY COLOR*/
  if (event.target.matches(".electric-right-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", electricRightBfSrc);
    }
  }

  if (event.target.matches(".electric-left-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", electricLeftBfSrc);
    }
  }
  /*RED COLOR*/
  if (event.target.matches(".electric-right-red-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", electricRightBfRedSrc);
    }
  }

  if (event.target.matches(".electric-left-red-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", electricLeftBfRedSrc);
    }
  }


  /*SPRINT PICTURE*/
  /*GREY COLOR*/
  if (event.target.matches(".sprint-right-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", sprintRightBfSrc);
    }
  }

  if (event.target.matches(".sprint-left-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", sprintLeftBfSrc);
    }
  }
  /*YELLOW COLOR*/
  if (event.target.matches(".sprint-right-yellow-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", sprintRightBfYellowSrc);
    }
  }

  if (event.target.matches(".sprint-left-yellow-picture")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", sprintLeftBfYellowSrc);
    }
  }

}

//////////////////////////*COLOR CHANGE*///////////////////////////

function function_bikeColors(event) {

  //GTS SUPER

  if (event.target.matches(".gts-super-white")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superRightBfWhiteSrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", superRightWhiteSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", superLeftWhiteSrc);
    }

    if (gtsRightPicture.classList.contains("gts-right-picture")) {
      gtsRightPicture.classList.replace("gts-right-picture", "gts-right-white-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-picture")) {
      gtsLeftPicture.classList.replace("gts-left-picture", "gts-left-white-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-gold-picture")) {
      gtsRightPicture.classList.replace("gts-right-gold-picture", "gts-right-white-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-gold-picture")) {
      gtsLeftPicture.classList.replace("gts-left-gold-picture", "gts-left-white-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-black-picture")) {
      gtsRightPicture.classList.replace("gts-right-black-picture", "gts-right-white-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-black-picture")) {
      gtsLeftPicture.classList.replace("gts-left-black-picture", "gts-left-white-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-red-picture")) {
      gtsRightPicture.classList.replace("gts-right-red-picture", "gts-right-white-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-red-picture")) {
      gtsLeftPicture.classList.replace("gts-left-red-picture", "gts-left-white-picture");
    }
    /*CONTENT CHANGE*/
    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>7000€</s></h3>
    <h3 class="actual-price">5950€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `WHITE`
    }
    /*CHANGE BUTTON CLASSES*/
    for (let i = 0; i < buyButton.length; i++) {
      if (buyButton[i].classList.contains("button-brown-gts")) {
        buyButton[i].classList.replace("button-brown-gts", "button-white-gts");
      }
      if (buyButton[i].classList.contains("button-red-gts")) {
        buyButton[i].classList.replace("button-red-gts", "button-white-gts");
      }
      if (buyButton[i].classList.contains("button-black-gts")) {
        buyButton[i].classList.replace("button-black-gts", "button-white-gts");
      }
      if (buyButton[i].classList.contains("button-gold-gts")) {
        buyButton[i].classList.replace("button-gold-gts", "button-white-gts");
      }
    }



  }


  if (event.target.matches(".gts-super-red")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superRightBfRedSrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", superRightRedSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", superLeftRedSrc);
    }

    if (gtsRightPicture.classList.contains("gts-right-picture")) {
      gtsRightPicture.classList.replace("gts-right-picture", "gts-right-red-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-picture")) {
      gtsLeftPicture.classList.replace("gts-left-picture", "gts-left-red-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-gold-picture")) {
      gtsRightPicture.classList.replace("gts-right-gold-picture", "gts-right-red-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-gold-picture")) {
      gtsLeftPicture.classList.replace("gts-left-gold-picture", "gts-left-red-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-black-picture")) {
      gtsRightPicture.classList.replace("gts-right-black-picture", "gts-right-red-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-black-picture")) {
      gtsLeftPicture.classList.replace("gts-left-black-picture", "gts-left-red-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-white-picture")) {
      gtsRightPicture.classList.replace("gts-right-white-picture", "gts-right-red-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-white-picture")) {
      gtsLeftPicture.classList.replace("gts-left-white-picture", "gts-left-red-picture");
    }
    /*CONTENT CHANGE*/
    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>7000€</s></h3>
    <h3 class="actual-price">5950€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `RED`
    }
    /*CHANGE BUTTON CLASSES*/
    for (let i = 0; i < buyButton.length; i++) {
      if (buyButton[i].classList.contains("button-brown-gts")) {
        buyButton[i].classList.replace("button-brown-gts", "button-red-gts");
      }
      if (buyButton[i].classList.contains("button-white-gts")) {
        buyButton[i].classList.replace("button-white-gts", "button-red-gts");
      }
      if (buyButton[i].classList.contains("button-black-gts")) {
        buyButton[i].classList.replace("button-black-gts", "button-red-gts");
      }
      if (buyButton[i].classList.contains("button-gold-gts")) {
        buyButton[i].classList.replace("button-gold-gts", "button-red-gts");
      }
    }


  }

  if (event.target.matches(".gts-super-black")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superRightBfBlackSrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", superRightBlackSrc);

    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", superLeftBlackSrc);
    }

    if (gtsRightPicture.classList.contains("gts-right-picture")) {
      gtsRightPicture.classList.replace("gts-right-picture", "gts-right-black-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-picture")) {
      gtsLeftPicture.classList.replace("gts-left-picture", "gts-left-black-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-gold-picture")) {
      gtsRightPicture.classList.replace("gts-right-gold-picture", "gts-right-black-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-gold-picture")) {
      gtsLeftPicture.classList.replace("gts-left-gold-picture", "gts-left-black-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-white-picture")) {
      gtsRightPicture.classList.replace("gts-right-white-picture", "gts-right-black-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-white-picture")) {
      gtsLeftPicture.classList.replace("gts-left-white-picture", "gts-left-black-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-red-picture")) {
      gtsRightPicture.classList.replace("gts-right-red-picture", "gts-right-black-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-red-picture")) {
      gtsLeftPicture.classList.replace("gts-left-red-picture", "gts-left-black-picture");
    }
    /*CONTENT CHANGE*/
    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>7000€</s></h3>
    <h3 class="actual-price">5950€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `BLACK`
    }
    /*CHANGE BUTTON CLASSES*/
    for (let i = 0; i < buyButton.length; i++) {
      if (buyButton[i].classList.contains("button-brown-gts")) {
        buyButton[i].classList.replace("button-brown-gts", "button-black-gts");
      }
      if (buyButton[i].classList.contains("button-white-gts")) {
        buyButton[i].classList.replace("button-white-gts", "button-black-gts");
      }
      if (buyButton[i].classList.contains("button-red-gts")) {
        buyButton[i].classList.replace("button-red-gts", "button-black-gts");
      }
      if (buyButton[i].classList.contains("button-gold-gts")) {
        buyButton[i].classList.replace("button-gold-gts", "button-black-gts");
      }
    }

  }

  if (event.target.matches(".gts-super-gold")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superRightBfGoldSrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", superRightGoldSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", superLeftGoldSrc);
    }

    if (gtsRightPicture.classList.contains("gts-right-picture")) {
      gtsRightPicture.classList.replace("gts-right-picture", "gts-right-gold-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-picture")) {
      gtsLeftPicture.classList.replace("gts-left-picture", "gts-left-gold-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-black-picture")) {
      gtsRightPicture.classList.replace("gts-right-black-picture", "gts-right-gold-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-black-picture")) {
      gtsLeftPicture.classList.replace("gts-left-black-picture", "gts-left-gold-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-red-picture")) {
      gtsRightPicture.classList.replace("gts-right-red-picture", "gts-right-gold-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-red-picture")) {
      gtsLeftPicture.classList.replace("gts-left-red-picture", "gts-left-gold-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-white-picture")) {
      gtsRightPicture.classList.replace("gts-right-white-picture", "gts-right-gold-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-white-picture")) {
      gtsLeftPicture.classList.replace("gts-left-white-picture", "gts-left-gold-picture");
    }
    /*CONTENT CHANGE*/
    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>8000€</s></h3>
    <h3 class="actual-price">6800€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `GOLD`
    }

    /*CHANGE BUTTON CLASSES*/
    for (let i = 0; i < buyButton.length; i++) {
      if (buyButton[i].classList.contains("button-brown-gts")) {
        buyButton[i].classList.replace("button-brown-gts", "button-gold-gts");
      }
      if (buyButton[i].classList.contains("button-white-gts")) {
        buyButton[i].classList.replace("button-white-gts", "button-gold-gts");
      }
      if (buyButton[i].classList.contains("button-red-gts")) {
        buyButton[i].classList.replace("button-red-gts", "button-gold-gts");
      }
      if (buyButton[i].classList.contains("button-black-gts")) {
        buyButton[i].classList.replace("button-black-gts", "button-gold-gts");
      }
    }



  }

  if (event.target.matches(".gts-super-brown")) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute("src", superRightBfBrownSrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", superLeftBrownSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", superRightBrownSrc);
    }

    if (gtsRightPicture.classList.contains("gts-right-gold-picture")) {
      gtsRightPicture.classList.replace("gts-right-gold-picture", "gts-right-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-gold-picture")) {
      gtsLeftPicture.classList.replace("gts-left-gold-picture", "gts-left-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-white-picture")) {
      gtsRightPicture.classList.replace("gts-right-white-picture", "gts-right-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-white-picture")) {
      gtsLeftPicture.classList.replace("gts-left-white-picture", "gts-left-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-red-picture")) {
      gtsRightPicture.classList.replace("gts-right-red-picture", "gts-right-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-red-picture")) {
      gtsLeftPicture.classList.replace("gts-left-red-picture", "gts-left-picture");
    }
    if (gtsRightPicture.classList.contains("gts-right-black-picture")) {
      gtsRightPicture.classList.replace("gts-right-black-picture", "gts-right-picture");
    }
    if (gtsLeftPicture.classList.contains("gts-left-black-picture")) {
      gtsLeftPicture.classList.replace("gts-left-black-picture", "gts-left-picture");
    }
    /*CONTENT CHANGE*/
    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>6500€</s></h3>
    <h3 class="actual-price">5700€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `BROWN`
    }

    /*CHANGE BUTTON CLASSES*/
    for (let i = 0; i < buyButton.length; i++) {
      if (buyButton[i].classList.contains("button-gold-gts")) {
        buyButton[i].classList.replace("button-gold-gts", "button-brown-gts");
      }
      if (buyButton[i].classList.contains("button-white-gts")) {
        buyButton[i].classList.replace("button-white-gts", "button-brown-gts");
      }
      if (buyButton[i].classList.contains("button-red-gts")) {
        buyButton[i].classList.replace("button-red-gts", "button-brown-gts");
      }
      if (buyButton[i].classList.contains("button-black-gts")) {
        buyButton[i].classList.replace("button-black-gts", "button-brown-gts");
      }
    }

  }

  //RETRO


  if (event.target.matches('.retro-green-color')) {

    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', retroRightBfGreenSrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", retroRightSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", retroLeftSrc);
    }

    if (retroRightPicture.classList.contains("retro-right-white-picture")) {
      retroRightPicture.classList.replace("retro-right-white-picture", "retro-right-picture");
    }
    if (retroLeftPicture.classList.contains("retro-left-white-picture")) {
      retroLeftPicture.classList.replace("retro-left-white-picture", "retro-left-picture");
    }
    if (retroRightPicture.classList.contains("retro-right-pink-picture")) {
      retroRightPicture.classList.replace("retro-right-pink-picture", "retro-right-picture");
    }
    if (retroLeftPicture.classList.contains("retro-left-pink-picture")) {
      retroLeftPicture.classList.replace("retro-left-pink-picture", "retro-left-picture");
    }
    /*CONTENT CHANGE*/

    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>4500€</s></h3>
    <h3 class="actual-price">3700€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `GREEN`
    }

  }

  if (event.target.matches('.retro-white-color')) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', retroRightBfWhiteSrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", retroRightWhiteSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", retroLeftWhiteSrc);
    }

    if (retroRightPicture.classList.contains("retro-right-picture")) {
      retroRightPicture.classList.replace("retro-right-picture", "retro-right-white-picture");
    }
    if (retroLeftPicture.classList.contains("retro-left-picture")) {
      retroLeftPicture.classList.replace("retro-left-picture", "retro-left-white-picture");
    }
    if (retroRightPicture.classList.contains("retro-right-pink-picture")) {
      retroRightPicture.classList.replace("retro-right-pink-picture", "retro-right-white-picture");
    }
    if (retroLeftPicture.classList.contains("retro-left-pink-picture")) {
      retroLeftPicture.classList.replace("retro-left-pink-picture", "retro-left-white-picture");
    }

    /*CONTENT CHANGE*/

    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>4700€</s></h3>
    <h3 class="actual-price">3995€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `WHITE`
    }

  }

  if (event.target.matches('.retro-pink-color')) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', retroRightBfPinkSrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", retroRightPinkSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", retroLeftPinkSrc);
    }


    if (retroRightPicture.classList.contains("retro-right-white-picture")) {
      retroRightPicture.classList.replace("retro-right-white-picture", "retro-right-pink-picture");
    }
    if (retroLeftPicture.classList.contains("retro-left-white-picture")) {
      retroLeftPicture.classList.replace("retro-left-white-picture", "retro-left-pink-picture");
    }
    if (retroRightPicture.classList.contains("retro-right-picture")) {
      retroRightPicture.classList.replace("retro-right-picture", "retro-right-pink-picture");
    }
    if (retroLeftPicture.classList.contains("retro-left-picture")) {
      retroLeftPicture.classList.replace("retro-left-picture", "retro-left-pink-picture");
    }



    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>4700€</s></h3>
    <h3 class="actual-price">3995€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `PINK`
    }

  }

  //ELECTRIC
  //RED COLOR
  if (event.target.matches('.electric-red-color')) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', electricRightBfRedSrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", electricRightRedSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", electricLeftRedSrc);
    }

    if (electricRightPicture.classList.contains("electric-right-picture")) {
      electricRightPicture.classList.replace("electric-right-picture", "electric-right-red-picture");
    }
    if (electricLeftPicture.classList.contains("electric-left-picture")) {
      electricLeftPicture.classList.replace("electric-left-picture", "electric-left-red-picture");
    }

    /*CONTENT CHANGE*/
    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>7800€</s></h3>
    <h3 class="actual-price">6630€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `RED`
    }

  }
  //GREY COLOR
  if (event.target.matches('.electric-grey-color')) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', electricRightBfGreySrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", electricRightSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", electricLeftSrc);
    }

    if (electricRightPicture.classList.contains("electric-right-red-picture")) {
      electricRightPicture.classList.replace("electric-right-red-picture", "electric-right-picture");
    }
    if (electricLeftPicture.classList.contains("electric-left-red-picture")) {
      electricLeftPicture.classList.replace("electric-left-red-picture", "electric-left-picture");
    }

    /*CONTENT CHANGE*/
    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>7500€</s></h3>
    <h3 class="actual-price">6375€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `GREY`
    }
  }

  //SPRINT
  //GREY COLOR
  if (event.target.matches('.sprint-grey-color')) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', sprintRightBfGreySrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", sprintRightSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", sprintLeftSrc);
    }

    if (sprintRightPicture.classList.contains("sprint-right-yellow-picture")) {
      sprintRightPicture.classList.replace("sprint-right-yellow-picture", "sprint-right-picture");
    }
    if (sprintLeftPicture.classList.contains("sprint-left-yellow-picture")) {
      sprintLeftPicture.classList.replace("sprint-left-yellow-picture", "sprint-left-picture");
    }


    /*CONTENT CHANGE*/
    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>5999€</s></h3>
    <h3 class="actual-price">5099€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `SILVER GREY`
    }
  }

  //YELLOW COLOR
  if (event.target.matches('.sprint-yellow-color')) {
    for (let i = 0; i < imageBig.length; i++) {
      imageBig[i].setAttribute('src', sprintRightBfYellowSrc);
    }
    for (let i = 0; i < firstSmallPicture.length; i++) {
      firstSmallPicture[i].setAttribute("src", sprintRightYellowSrc);
    }
    for (let i = 0; i < secondSmallPicture.length; i++) {
      secondSmallPicture[i].setAttribute("src", sprintLeftYellowSrc);
    }

    if (sprintRightPicture.classList.contains("sprint-right-picture")) {
      sprintRightPicture.classList.replace("sprint-right-picture", "sprint-right-yellow-picture");
    }
    if (sprintLeftPicture.classList.contains("sprint-left-picture")) {
      sprintLeftPicture.classList.replace("sprint-left-picture", "sprint-left-yellow-picture");
    }

    /*CONTENT CHANGE*/
    for (i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        `<h3 class="old-price"> <s>6399€</s></h3>
    <h3 class="actual-price">5440€</h3>`
    }
    for (i = 0; i < colorName.length; i++) {
      colorName[i].innerHTML =
        `PALE YELLOW`
    }
  }

}




/*////////////////////////////////IÑAKI//////////////////////////////////////*/

// PASSWORD VALIDATION
function Validate() {
  let password = document.getElementById("pswd1").value;
  let confirmPassword = document.getElementById("pswd2").value;
  if (password != confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
}


////////////////////////////////*VICTOR******/

const helmetGift = document.querySelector(".helmet-gift");
const inputRadio = document.querySelectorAll(".input-radio");
const timeShipment = document.querySelector(".timeShipment");

for (let i = 0; i < inputRadio.length; i++) {
  inputRadio[i].addEventListener("click", function_inputRadio)
}

let fecha = new Date();
console.log(fecha.getDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());

// Se convierte el día de la semana de un número a un texto
let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(diaSemana[fecha.getDay()]);

let mesAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function function_inputRadio() {

  if (freeShipment.checked) {
    helmetGift.classList.replace("helmet-gift", "helmet-gift_show");
    timeShipment.innerHTML = `${diaSemana[fecha.getDay() + 3]}, ${fecha.getDate() + 3} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}`;
  }

  if (premium.checked) {
    helmetGift.classList.replace("helmet-gift", "helmet-gift_show")
    timeShipment.innerHTML = `${diaSemana[fecha.getDay() + 1]}, ${fecha.getDate() + 1} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}`;
  }

  if (extraShipping.checked) {
    helmetGift.classList.replace("helmet-gift", "helmet-gift_show")
    timeShipment.innerHTML = `${diaSemana[fecha.getDay() + 2]}, ${fecha.getDate() + 2} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}`;
  }

}

/*
  if (inputRadio[i]) {
    helmetGift.classList.replace("helmet-gift", "helmet-gift_show")
  }*/



