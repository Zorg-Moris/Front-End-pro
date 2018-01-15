"use strict";

let stompClient = null;
let socket = new SockJS('/shop');

function connect() {
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/frontend/listItems', function (getAllItems) {
            console.log(getAllItems.body)
        });
        stompClient.send("/backend/getAllItems",{}, JSON.stringify("trigger"));
    });
}

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

$(function () {
     connect();
     $("form").on('submit', function (e) {
        e.preventDefault();
     });
});