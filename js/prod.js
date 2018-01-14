"use strict";

let product = [{
        category: "shirt",
        sex: "men",
        size: 41,
        brand: "Brave Soul",
        price: 590,
        foto: "imgDB/shirt_black.jpg",
        short_description: "Рубашка от Brave Soul выполнена из легкого текстиля. Модель прямого кроя. Детали: отложной воротник, планка и манжеты на пуговицах.",
        full_description: "Состав: Полиэстер - 65%, Хлопок - 35%.Длина: 75 см. Длина рукава: 63 см.Сезон: мульти.Цвет: черный. Узор: однотонный.Застежка: на пуговицах Тип силуэта: приталенный."
    },

    {
        category: "shirt",
        sex: "men",
        size: 42,
        brand: "Piazza Italia",
        price: 580,
        foto: "imgDB/shirt_white.jpg",
        short_description: "Рубашка Piazza Italia выполнена из хлопкового текстиля. Детали: приталенный крой, застежка на пуговицы.",
        full_description: "Состав: Хлопок - 97%, Эластан - 3%. Страна производства: Бангладеш. Длина: 75 см.Длина рукава: 68 см.Сезон: мульти.Цвет: белый.Узор: однотонный.Застежка: на пуговицах.Тип силуэта: приталенный."
    },
    {
        category: "shirt",
        sex: "men",
        size: 42,
        brand: "Pepe Jeans",
        price: 2250,
        foto: "imgDB/shirt_green.jpg",
        short_description: "Рубашка Pepe Jeans выполнена из хлопкового текстиля. Модель прямого силуэта со слегка удлиненной спинкой. Детали: отложной воротник, застежка и манжеты на пуговицах, один нагрудный карман",
        full_description: "Состав: Хлопок - 100%. Страна производства: Индия.Длина: 77 см. Длина рукава: 66 см. Сезон: мульти.Цвет: зеленый. Узор: клетка. Застежка: без застежки. Тип силуэта: прямой. Карманы: 1."
    },

    {
        category: "shirt",
        sex: "men",
        size: 41,
        brand: "Warren Webber",
        price: 1340,
        foto: "imgDB/shirt_warren.jpg",
        short_description: "Рубашка Warren Webber выполнена из хлопкового текстиля. Модель приталенного кроя. Детали: воротник баттен-даун, планка на пуговицах, длинные рукава.",
        full_description: "Состав: Хлопок - 100%. Длина: 75 см. Длина рукава: 67 см.Сезон: мульти.Цвет: зеленый. Узор: клетка. Застежка: на пуговицах. Тип силуэта: приталенный."
    },

    {
        category: "pants",
        sex: "men",
        size: 45,
        brand: "Mango Man",
        price: 1799,
        foto: "imgDB/parts_mangoMan.jpg",
        short_description: "Линия Tailored. Slim-fit. По бокам два кармана. Шлевки. Сзади два прорезных кармана с пуговицами. Потайная застежка на молнию, пуговицу и крючок.",
        full_description: "Состав: Полиэстер - 68%, Вискоза - 29%, Эластан - 3%.Длина по внутреннему шву: 85 см. Длина по боковому шву: 110 см. Сезон: мульти. Цвет: синий.Узор: однотонный. Застежка: на молнии.Посадка: slim fit.Карманы: 4.Цвет фурнитуры: в тон изделия."
    },

    {
        category: "pants",
        sex: "men",
        size: 48,
        brand: "Mango Man",
        price: 1899,
        foto: "imgDB/parts_mangoMan_blue.jpg",
        short_description: "Линия Tailored. Slim-fit. Легкая ткань. Структурная ткань. Шлевки. По бокам два кармана. Сзади два прорезных кармана с пуговицами. Потайная застежка на молнию, пуговицу и крючок.",
        full_description: "Состав: Полиэстер - 88%, Вискоза - 12%.Сезон: мульти.Цвет: синий. Узор: однотонный. Застежка: на молнии. Посадка: slim fit ."
    },

    {
        category: "pants",
        sex: "men",
        size: 46,
        brand: "Topman",
        price: 1720,
        foto: "imgDB/parts_Topman_greey.jpg",
        short_description: "Брюки Topman выполнены из гладкого текстиля. Модель зауженного кроя. Детали: застежка на молнию и крючок, шлевки для ремня, четыре кармана, принт.",
        full_description: "Состав: Полиэстер - 84%, Вискоза - 14%, Эластан - 2%. Сезон: мульти. Цвет: серый. Узор: клетка. Застежка: на молнии. Посадка: slim fit. Карманы: 5."
    },

    {
        category: "pants",
        sex: "men",
        size: 46,
        brand: "oodji",
        price: 546,
        foto: "imgDB/parts_oodji_black.jpg",
        short_description: "Брюки oodji выполнены из эластичного текстиля. Детали: застежка на молнию и пуговицу, шлевки для ремня, два кармана спереди, сзади два прорезных кармана на пуговицах.",
        full_description: "Состав: Полиэстер - 70%, Вискоза - 30%.Высота: 25 см. Длина по внутреннему шву: 84 см. Длина по боковому шву: 108 см. Сезон: мульти.Цвет: черный. Узор: однотонный. Застежка: на молнии. Посадка: straight fit. Карманы: 4."
    },
    {
        category: "shoes",
        sex: "men",
        size: 41,
        brand: "Salamander",
        price: 1832,
        foto: "imgDB/shoes_salamander_black.jpg",
        short_description: "Материал верха: натуральная кожа Внутренний материал: натуральная кожа. Материал подошвы: полимер.Материал стельки: натуральная кожа.",
        full_description: "Материал верха: натуральная кожа. Внутренний материал: натуральная кожа. Материал подошвы: полимер. Материал стельки: натуральная кожа.Страна производства: Россия. Сезон: мульти. Цвет: коричневый. Узор: однотонный. Застежка: на шнурках."
    },

    {
        category: "shoes",
        sex: "men",
        size: 43,
        brand: "Vitacci",
        price: 1625,
        foto: "imgDB/shoes_Vitacci_black.jpg",
        short_description: "Материал верха: натуральная кожа. Внутренний материал: натуральная кожа. Материал подошвы: резина. Материал стельки: натуральная кожа.",
        full_description: "Материал верха: натуральная кожа. Внутренний материал: натуральная кожа. Материал подошвы: резина. Материал стельки: натуральная кожа. Сезон: мульти. Цвет: синий. Узор: однотонный. Застежка: на шнурках. Детали обуви: перфорация."
    },

    {
        category: "shoes",
        sex: "men",
        size: 42,
        brand: "Barbour",
        price: 3553,
        foto: "imgDB/shoes_Barbour_braun.jpg",
        short_description: "Материал верха: натуральная кожа. Внутренний материал: натуральная кожа.Материал подошвы: резина.",
        full_description: "Материал верха: натуральная кожа. Внутренний материал: натуральная кожа. Материал подошвы: резина. Материал стельки: натуральная кожа. Страна производства: Индия. Сезон: мульти. Цвет: коричневый. Узор: однотонный. Застежка: на шнурках."
    },

    {
        category: "shoes",
        sex: "men",
        size: 44,
        brand: "Call It Spring",
        price: 1232,
        foto: "imgDB/shoes_Call_It_Spring_black.jpg",
        short_description: "Материал верха: искусственная кожа. Внутренний материал: текстиль.Материал подошвы: искусственный материал.",
        full_description: "Материал верха: искусственная кожа.Внутренний материал: текстиль.Материал подошвы: искусственный материал. Материал стельки: искусственная кожа. Сезон: мульти. Цвет: черный. Узор: однотонный. Застежка: на шнурках."
    },

    {
        category: "blouse",
        sex: "femen",
        size: 44,
        brand: "oodji",
        price: 469,
        foto: "imgDB/blouse_oodji_red.jpg",
        short_description: "Блуза oodji выполнена из вискозы с узором в горошек. Детали: застежка на потайные пуговицы, небольшой воротник-стойка.",
        full_description: "Состав: Вискоза - 100%. Длина: 65 см. Длина рукава: 61 см.Сезон: мульти.Цвет: бордовый.Узор: горох.Застежка: на пуговицах.Тип силуэта: прямой."
    },
    {
        category: "shirt",
        sex: "femen",
        size: 42,
        brand: "oodji",
        price: 459,
        foto: "imgDB/shirt_femen_oodji_sq.jpg",
        short_description: "Клетчатая рубашка oodji выполнена из хлопкового текстиля. Детали: приталенный крой, застежка на пуговицы.",
        full_description: "Состав: Хлопок - 63%, Полиамид - 32%, Эластан - 5%."
    },
    {
        category: "shirt",
        sex: "femen",
        size: 41,
        brand: "Gerry Weber",
        price: 2740,
        foto: "imgDB/shirt_femen_garryWeber.jpg",
        short_description: "Рубашка Gerry Weber выполнена из хлопкового текстиля. Детали: широкие манжеты с разрезами, застежка на пуговицах.",
        full_description: "Состав: Хлопок - 72%, Акрил - 25%, Эластан - 3%.Страна производства: Турция.Длина: 62 см.Длина рукава: 59 см. Сезон: мульти.Цвет: серый.  Узор: полоска.Застежка: на пуговицах.Тип силуэта: прямой."
    },

    {
        category: "shirt",
        sex: "femen",
        size: 42,
        brand: "Fred Perry",
        price: 2740,
        foto: "imgDB/shirt_femen_Fred_Perry_white.jpg",
        short_description: "Рубашка Fred Perry выполнена из хлопкового текстиля. Детали: застежка на пуговицах, отложной воротник.",
        full_description: "Состав: Хлопок - 100%. Длина: 64 см.Длина рукава: 59 см.Сезон: мульти.Цвет: белый.Узор: однотонный.Застежка: на пуговицах.Детали одежды: вышивка.Тип силуэта: прямой.Цвет фурнитуры: золотой."
    },

    {
        category: "parts",
        sex: "femen",
        size: 42,
        brand: "oodji",
        price: 369,
        foto: "imgDB/leggins_oodji_blu.jpg",
        short_description: "Леггинсы oodji выполнены из трикотажа. Модель прилегающего силуэта. Детали: эластичный пояс.",
        full_description: "Состав: Полиэстер - 74%, Вискоза - 23%, Эластан - 3%. Высота: 26 см. Длина по внутреннему шву: 77 см. Длина по боковому шву: 102 см.Ширина по низу: 12 см.Сезон: мульти.Цвет: синий.Узор: однотонный.Застежка: без застежки."
    },


    {
        category: "parts",
        sex: "femen",
        size: 42,
        brand: "River Island",
        price: 1278,
        foto: "imgDB/parts_femen_River_Island.jpg",
        short_description: "Брюки River Island выполнены из плотного струящегося текстиля. Детали: зауженный крой, застежка на молнию и крючок, боковые карманы.",
        full_description: "Состав: Полиэстер - 100%.Страна производства: Румыния. Длина по внутреннему шву: 63 см.Длина по боковому шву: 92 см. Ширина по низу: 15 см. Сезон: мульти. Цвет: черный. Узор: однотонный.Застежка: на молнии. Посадка: slim fit.Карманы: 2."
    },

     {
        category: "parts",
        sex: "femen",
        size: 42,
        brand: "Dorothy Perkins",
        price: 960,
        foto: "imgDB/parts_femen_Dorothy_Perkins.jpg",
        short_description: "Брюки Dorothy Perkins выполнены из плотного текстиля. Детали: шлевки для ремня; застежка на молнию, пуговицу и крючок; два боковых кармана; имитация карманов сзади. Пояс в комплекте.",
        full_description: "Состав: Полиэстер - 73%, Вискоза - 19%, Эластан - 8%.Страна производства: Вьетнам. Высота: 28 см.  Длина по внутреннему шву: 68 см.  Длина по боковому шву: 94 см. Ширина по низу: 17 см.Сезон: мульти.  Цвет: зеленый. Узор: однотонный.Застежка: на крючках, на молнии, на пуговицах.Детали одежды: пояс/ремень.Посадка: slim fit.Талия: высокая.Карманы: 2."
    },
    {
        category: "parts",
        sex: "femen",
        size: 42,
        brand: "Gerry Weber",
        price: 3130,
        foto: "imgDB/parts_femen_garryWeber.jpg",
        short_description: "Брюки Gerry Weber выполнены из эластичного текстиля. Детали: застежка на молнию и пуговицу, карманы спереди.",
        full_description: "Состав: Хлопок - 60%, Акрил - 36%, Эластан - 4%. Страна производства: Республика Македония. Высота: 23 см. Длина по внутреннему шву: 73 см. Длина по боковому шву: 97 см. Сезон: мульти. Цвет: коричневый.Узор: другое. Застежка: на молнии.Посадка: slim fit.Талия: стандартная. Карманы: 2."
    },
    {
        category: "shoes",
        sex: "femen",
        size: 39,
        brand: "Vitacci",
        price: 2590,
        foto: "imgDB/shoes_femen_Vitacci_black.jpg",
        short_description: "Материал верха: натуральная кожа. Внутренний материал: натуральная кожа.Материал подошвы: полимер.",
        full_description: "Материал стельки: натуральная кожа.Высота каблука: 11 см. Сезон: мульти.Цвет: черный.Узор: однотонный.Застежка: без застежки. Высота каблука: высокий."
    },

    {
        category: "shoes",
        sex: "femen",
        size: 42,
        brand: "Vitacci",
        price: 2680,
        foto: "imgDB/shoes_femen_Vitacci_black_snake.jpg",
        short_description: "Утонченная остроносая обувь – хит сезона осень-зима 2016/17. Она зрительно вытягивает силуэт, добавляя вам изящества и грациозности, и придает женственности любому образу.",
        full_description: "Материал верха: натуральная кожа, натуральная лаковая кожа.Внутренний материал: натуральная кожа.Материал подошвы: искусственный материал.Материал стельки: натуральная кожа.  Высота каблука: 11 см. Сезон: мульти.Цвет: черный. Узор: однотонный.Застежка: без застежки. Высота каблука: высокийю."
    },

    {
        category: "shoes",
        sex: "femen",
        size: 41,
        brand: "Vitacci",
        price: 2530,
        foto: "imgDB/shoes_femen_Vitacci_black_suede.jpg",
        short_description: "Утонченная остроносая обувь – хит сезона осень-зима 2016/17. Она зрительно вытягивает силуэт, добавляя вам изящества и грациозности, и придает женственности любому образу.",
        full_description: "Материал верха: натуральный велюр.Внутренний материал: натуральная кожа.Материал подошвы: резина.Материал стельки: натуральная кожа. Высота каблука: 11 см.Сезон: мульти.Цвет: черный.Узор: однотонный.Застежка: без застежки.Высота каблука: высокий."
     },

     {
        category: "shoes",
        sex: "femen",
        size: 41,
        brand: "Vitacci",
        price: 2590,
        foto: "imgDB/shoes_femen_Vitacci_black_lacquer.jpg",
        short_description: "Материал верха: натуральная лаковая кожа.Внутренний материал: натуральная кожа.Материал подошвы: полимер",
        full_description: "Материал верха: натуральная лаковая кожа.Внутренний материал: натуральная кожа.Материал подошвы: полимер."
     },
]