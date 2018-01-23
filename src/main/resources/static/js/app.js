"use strict";
let stompClient = null;
let socket = new SockJS('/shop');
let product;

function connect() {
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/frontend/listItems', function (getAllItems) {
            product=JSON.parse(getAllItems.body);
        });

        stompClient.send("/backend/getAllItems",{}, "trigger");


    });
}

$(document).ready(function () {

    connect();
    console.log(product);
    displayAllProd();

       $("#menRef").click(function () {
           displayProdGender(men);
       });

       $("#femenRef").click(function () {
           displayProdGender(woman);

       });

       $("#allProd").click(function () {
           displayAllProd();
       });

       $("#clothesBtn").click(function () {

           categoryProd(statusGender, parts, shirt);
       });

       $("#shoesBtn").click(function () {
           categoryProd(statusGender, shoes);
       });

       $("#sideMenu").on("click", "#Shoes", function () {
           categoryProd(statusGender, shoes);
       });

       $("#sideMenu").on("click", "#Shirt", function () {
           categoryProd(statusGender, shirt);
       });

       $("#sideMenu").on("click", "#Parts", function () {
           categoryProd(statusGender, parts);
       });

       $("#cartBtn").on("click", ".cartBtn", function () {
           addCart();
       });
});