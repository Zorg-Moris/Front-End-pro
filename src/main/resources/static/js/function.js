"use strict";

let statusGender = "";
let men = "men";
let woman = "femen";
let shirt = "shirt";
let parts = "parts";
let shoes = "shoes";


let itemShow = (item, index) => `<div class = 'prod' data-index = ${index}>
<img src = ${item.foto}><br/>${item.brand}<br/>${item.price}
 ${"грн."}/<br/><a href="#" >Подробнее</a></div>`;


function displayAllProd() {
    $("#chosen-good").html("Все товары");
    let str = "";
    statusGender = "";
    product.forEach(function (item, index) {
        str += itemShow(item, index);
    });
    $("#showProd").html(str);
};

function choseProd(status, param1, param2) {

    let categoryGender = "";

    if (status === men) {
        if (param1 === parts) {
            categoryGender = "Мужская одежда";
            $("#chosen-good").html(categoryGender);
        } else if (param1 === shirt) {
            categoryGender = "Мужская одежда";
            $("#chosen-good").html(categoryGender);
        } else {
            categoryGender = "Мужская обувь";
            $("#chosen-good").html(categoryGender);
        }
    }
    if (status === woman) {
        if (param1 === parts) {
            categoryGender = "Женская одежда";
            $("#chosen-good").html(categoryGender);
        } else if (param1 === shirt) {
            categoryGender = "Женская одежда";
            $("#chosen-good").html(categoryGender);
        } else {
            categoryGender = "Женская обувь";
            $("#chosen-good").html(categoryGender);
        }
    } else if (status === "") {
        if (param1 === parts || param2 === shirt) {
            categoryGender = "Все товары категории: Одежда";
            $("#chosen-good").html(categoryGender);
        } else {
            categoryGender = "Все товары категории: Обувь";
            $("#chosen-good").html(categoryGender);
        }
    }
};


function categoryProd(status, param1, param2) {
    let str = "";

    choseProd(status, param1, param2);
    product.forEach(function (item, index) {
        if ((item.sex === status) && (param1 === item.category || param2 === item.category)) {
            str += itemShow(item, index);

        } else if ((status === "") && (param1 === item.category || param2 === item.category)) {
            {
                str += itemShow(item, index);
            }
        }
    });
    $("#showProd").html(str);
};


function displayProdGender(status) {

    statusGender = status;
    if (status === men) {
        $("#chosen-good").html("Мужчинам");
    } else {
        $("#chosen-good").html("Женщинам");
    }

    sidePanel(status);

    let str = "";
    product.forEach(function (item, index) {
        if (item.sex === status) {
            str += itemShow(item, index);
        }
    });
    $("#showProd").html(str);
};


function sidePanel(status) {
    let str = "";

    if (status === men) {

        str += `<p><span><b>Категории:</b></span></p>
            <p>Мужская обувь:</p>
            <ul>
                <li id="menShoes">Туфли</li>
            </ul>
            <p>Мужская Одежда:</p>
            <ul>
                <li id = "menShirt">Рубашки</li>
                <li id = "menParts">Брюки</li>
            </ul>`
    }
    if (status === woman) {
        str += `<p><span><b>Категории:</b></span></p>
                  <p>Женская обувь:</p>
            <ul>
                <li id="womenShoes">Туфли</li>
            </ul>
            <p>Женская Одежда:</p>
            <ul>
                <li id="womenShirt">Рубашки/Блузы</li>
                <li id="womenParts">Брюки</li>
            </ul> `
    }

    $("aside").html(str);

};