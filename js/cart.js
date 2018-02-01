"use strict";

let cart = [];
let infoWs = " ";


function cartProd(index) {
    this.id = product[index].id;
    this.category = product[index].category;
    this.sex = product[index].sex;
    this.size = product[index].size;
    this.brand = product[index].brand;
    this.price = product[index].price;
    this.foto = product[index].foto;
    this.short_description = product[index].short_description;
    this.full_description = product[index].full_description;
    this.quantity = 1;
}


$(document).ready(function () {

    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        $("#cartMessage").removeClass("cartMessageVis");
        displayCart();
    } else {
        $("#cartMessage").addClass("cartMessageVis");
    }
});

function checkLocalStorage() {
    if (localStorage.getItem("cart") && cart.length > 0) {
        cart = JSON.parse(localStorage.getItem("cart"));
        $("#cartMessage").removeClass("cartMessageVis");
    } else {
        delete localStorage["cart"];
        $("#cartMessage").addClass("cartMessageVis");
    }
};

function addlocalStorage() {
    let addStorage = JSON.stringify(cart);
    localStorage.setItem("cart", addStorage);
}

function refreshArr(arr) {
    if (localStorage.getItem("cart")) {
        delete localStorage["cart"];
    }
    addlocalStorage();
};

function addInfoCart() {
    $.toast({
        text: "ТОВАР УСПЕШНО ДОБАВЛЕН В КОРЗИНУ",
        showHideTransition: 'slide',
        allowToastClose: true,
        hideAfter: 3000,
        stack: 30,
        position: 'top-center',
        bgColor: '#F0F8FF',
        textColor: '#000000',
        textAlign: 'center',
        loader: true,
        loaderBg: '#9EC600',

    });
}

function addNewProduct() {
    let newProdCart = new cartProd(index);
    infoWs = newProdCart;
    cart.push(newProdCart);
    refreshArr(cart);
    addInfoCart();

};

function checkProductCart() {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == product[index].id) {
            return i;
        }
    }
};

function addCart() {

    let item = checkProductCart();

    if (cart.length === 0) {
        addNewProduct();
    } else if (item >= 0) {
        cart[item].quantity += 1;
        refreshArr(cart);
        addInfoCart();
        return;
    } else {
        addNewProduct();
    }
};


let itemShowCart = (item, index) => `<div class="infoProdCart" data-index=${index}>
<div class="cartImg"><img src = ${item.foto}></div>
<div class="nameBrandCart">${item.brand}</div>
<div class="priceCart">${item.price} грн.</div>
<div class="quantityCart">
<input class="inputCart" type="text" value="${item.quantity}">
    </div>
    <div class="totalPrice">${totalPrice(item)} грн. </div>
    <div class="delete">
    <input class="deleteBtn" type="button" value="Удалить">
    </div>
  </div>`;

function checkCart() {
    if (cart.length !== 0) {
        $("#buyBtn").removeAttr("disabled");
    } else {
        $("#buyBtn").attr("disabled", true);
    }
};

function displayCart() {
    let str = "";
    cart.forEach(function (item, index) {
        str += itemShowCart(item, index);
    });
    $("#cartShowProd").html(str);
    checkCart();
    totalPriceCart();
};


let totalPrice = (item) => item.price * item.quantity;

function totalPriceCart() {
    let totalPriceProd = 0;
    let totalPrice = 0;

    cart.forEach(function (item, index) {
        totalPriceProd = cart[index].price * cart[index].quantity;
        totalPrice += totalPriceProd;
    })
    $("#tpCart").html(`${totalPrice} грн.`);
};

function changePrice(index, quantity) {
    cart[index].quantity = quantity;
    refreshArr(cart);
    let quantity = cart[index].quantity;
    let price = cart[index].price;
    return price * quantity;
};

$("#cartShowProd").on("input", ".inputCart", function (event) {
    let index = $(event.target).parent().parent().data("index");
    let quantity = $(this).val();

    let regex = /^\d+$/;
    let Ok = regex.test(quantity);

    if (!Ok || quantity === 0 || quantity === "") {
        $(this).addClass("alarm");
        $(this).focus();
        $(".alarmMess").toggleClass("alarmMessVis");
        return;
    } else {
        $(this).removeClass("alarm");
        $(".alarmMess").removeClass("alarmMessVis");
        cart[index].quantity = quantity;
        refreshArr(cart);
        displayCart();
    }
});

$("#cartShowProd").on("click", ".deleteBtn", function (event) {
    let index = $(event.target).parent().parent().data("index");
    cart.splice(index, 1);
    refreshArr(cart);
    checkLocalStorage();
    displayCart();

});


let formName = document.forms.contact_form.elements.name;
let formLastName = document.forms.contact_form.elements.lastName;

function checkValidation(formName) {
    let regex = /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/u;

    formName.onblur = function () {
        //let nameVal = form.elements.name.value;
        let nameVal = formName.value;
        let Ok = regex.test(nameVal);

        if (!Ok) {

            formName.focus();
            formName.classList.add("alarmForm");

        } else {
            formName.classList.remove("alarmForm");
            formName.classList.add("validForm");
        }
    }
};


// $("#buyBtn").click(function () {
//     $("#orderForm").toggleClass("contact_formVis");
//     $("#orderForm").on("click", "input", function (event) {
//         let formName = $(event.target).parent().parent();
//         checkValidation(formName);
//     });

// });


$("#buyBtn").click(function () {
    $("#orderForm").toggleClass("contact_formVis")
    checkValidation(formName);
    checkValidation(formLastName);
});

$("#submitBtn").click(function () {
    wsBtn(info)
});