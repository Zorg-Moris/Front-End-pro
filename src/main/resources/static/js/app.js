"use strict";
let stompClient = null;
let socket = new SockJS('/shop');

function connect() {
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/frontend/listItems', function (getAllItems) {
//            console.log(getAllItems.body)
        });
        product.forEach(item => {
            stompClient.send("/backend/getAllItems",{}, JSON.stringify(item));
        });

    });
}

$(document).ready(function () {

    connect();

    console.log('inside');

    displayAllProd();

    $("#menRef").click(function () {
        displayProdGender(men);
    });

    $("#femenRef").click(function () {
        displayProdGender(woman);
    });

    $("#clothesBtn").click(function () {

        categoryProd(statusGender, parts, shirt);
    });

    $("#allProd").click(function () {

        displayAllProd();
    });

    $("#shoesBtn").click(function () {
        categoryProd(statusGender, shoes);
    });

    $("#sideMenu").on("click", "#menShoes", function (event) {
        categoryProd(statusGender, shoes);
    });

    $("#sideMenu").on("click", "#menShirt", function (event) {
        categoryProd(statusGender, shirt);
    });

    $("#sideMenu").on("click", "#menParts", function (event) {
        categoryProd(statusGender, parts);
    });

    $("#sideMenu").on("click", "#womenShoes", function (event) {
        categoryProd(statusGender, shoes);
    });

    $("#sideMenu").on("click", "#womenShirt", function (event) {
        categoryProd(statusGender, shirt);
    });

    $("#sideMenu").on("click", "#womenParts", function (event) {
        categoryProd(statusGender, parts);
    });
});