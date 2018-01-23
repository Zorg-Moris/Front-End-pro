"use strict";

let index;

$("#sideMenu").on("click", ".infoProd", function (event) {
    event.preventDefault();
    $("#overlay").fadeIn(400, function () {
        $("#modalShowProd").css("display", "block").animate({
            opacity: 1,
            top: "25%"
        }, 300);
    });
    let idProd = $(this).attr("class");
    index = $(event.target).parent().data("index");
    
    modalInfoProd(index);
});


$('#modalClose, #overlay').click(function () {
    $("#modalShowProd")
        .animate({
                opacity: 0,
                top: "55%"
            }, 300,
            function () {
                $(this).css("display", "none");
                $('#overlay').fadeOut(400);
            });
});

function modalInfoProd(index) {
    let brand = product[index].brand;
    let price = product[index].price;
    let description = product[index].short_description;
    let fdescription = product[index].full_description;
    let foto = `<img src="${product[index].foto}">`;

    $("#brandModal").html(brand);
    $("#priceModal").html(`${price}  Грн.`);
    $("#imgModal").html(foto);
    $("#sDescription").html(description);
    $("#fDiscription").html(fdescription);
};




