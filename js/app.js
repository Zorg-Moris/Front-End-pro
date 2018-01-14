"use strict";

let itemShow = (item, index) => "<div class = 'prod' data-index = " + index +
    '><img src = ' + item.foto + ">" + "<br/>" + item.brand + "<br/>" +
    item.price + " " + "грн." + "</div>";


function displayAllProd() {
    let str = "";
    product.forEach(function (item, index) {
        str += itemShow(item, index);
    });
    $("#showProd").html(str);
}

displayAllProd();