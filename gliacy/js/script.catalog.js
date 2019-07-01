"use strict";var catalogList=document.querySelector(".catalog__list"),catalogTemplate=document.querySelector("#catalog-ice-cream").content.querySelector(".catalog__item"),iceCreamTitle=["Сливочное с апельсиновым джемом и цитрусовой стружкой","Сливочно-кофейное с кусочками шоколада","Сливочно-клубничное с присыпкой из белого шоколада","Сливочное крем-брюле с карамельной подливкой","Сливочное с брусничным джемом","Сливочно-черничное с цельными ягодами черники","Сливочно-лимонное с карамельной присыпкой","Сливочное с шоколадной стружкой","Сливочно-ванильное с кусочками шоколада","Сливочноe с ментоловым сиропом","Сливочное с кусочками черного шоколада","Сливочное с мятным сиропом","Сливочное с апельсиновым джемом и цитрусовой стружкой","Сливочно-кофейное с кусочками шоколада","Сливочно-клубничное с присыпкой из белого шоколада","Сливочное крем-брюле с карамельной подливкой","Сливочное с брусничным джемом","Сливочно-черничное с цельными ягодами черники","Сливочно-лимонное с карамельной присыпкой","Сливочное с шоколадной стружкой","Сливочно-ванильное с кусочками шоколада","Сливочноe с ментоловым сиропом","Сливочное с кусочками черного шоколада","Сливочное с мятным сиропом"],iceCreamImg=["img/catalog-ice-cream/ice-cream-1.png","img/catalog-ice-cream/ice-cream-2.png","img/catalog-ice-cream/ice-cream-3.png","img/catalog-ice-cream/ice-cream-4.png","img/catalog-ice-cream/ice-cream-5.png","img/catalog-ice-cream/ice-cream-6.png","img/catalog-ice-cream/ice-cream-7.png","img/catalog-ice-cream/ice-cream-8.png","img/catalog-ice-cream/ice-cream-9.png","img/catalog-ice-cream/ice-cream-10.png","img/catalog-ice-cream/ice-cream-11.png","img/catalog-ice-cream/ice-cream-12.png","img/catalog-ice-cream/ice-cream-1.png","img/catalog-ice-cream/ice-cream-2.png","img/catalog-ice-cream/ice-cream-3.png","img/catalog-ice-cream/ice-cream-4.png","img/catalog-ice-cream/ice-cream-5.png","img/catalog-ice-cream/ice-cream-6.png","img/catalog-ice-cream/ice-cream-7.png","img/catalog-ice-cream/ice-cream-8.png","img/catalog-ice-cream/ice-cream-9.png","img/catalog-ice-cream/ice-cream-10.png","img/catalog-ice-cream/ice-cream-11.png","img/catalog-ice-cream/ice-cream-12.png"],iceCreamPrice=[250,445,285,370,450,315,445,230,500,370,200,455,350,455,360,215,340,430,320,350,300,290,325,400],iceCreamFat=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,0,5,10],iceCream=[];iceCreamImg.forEach(function(e,t){var c={title:iceCreamTitle[t],img:iceCreamImg[t],price:iceCreamPrice[t],fat:iceCreamFat[t]};iceCream.push(c)});var createdIceCream=function(){iceCream.forEach(function(e,t){var c=catalogTemplate.cloneNode(!0);c.querySelector("a").textContent=iceCream[t].title,c.querySelector("img").src=iceCream[t].img,c.querySelector("span").textContent=iceCream[t].price,c.querySelector("p").insertAdjacentHTML("beforeend","<span>/кг</span>"),catalogList.appendChild(c)})};createdIceCream(),window.catalogItemBtns=document.querySelectorAll(".catalog__btn");var buyList=document.querySelector(".buy-section__list"),buyItem=document.querySelectorAll(".buy-section__item"),buyTemplate=document.querySelector("#buy-icecream").content.querySelector(".buy-section__item"),allBuyElement=document.querySelectorAll("#icecream-price-kg"),basketEmpty=document.querySelector("#basketEmpty"),basketText=document.querySelector("#basket"),createdTotalPrice=document.querySelector("#total-price"),kgUpBtn=document.querySelector("#kg-up"),kgDownBtn=document.querySelector("#kg-down");basketEmpty.textContent="Нет товаров",basketText.textContent="Пусто";var totalPrice=[],sumTotalPrice=0;createdTotalPrice.textContent=sumTotalPrice;var clickBtnItem=function(r){r.addEventListener("click",function(e){window.buyElement=buyTemplate.cloneNode(!0),buyElement.querySelector("img").src=e.path[2].querySelector("img").src,buyElement.querySelector(".buy-section__descr").textContent=e.path[2].querySelector("a").text,buyElement.querySelector("#icecream-price").textContent=e.path[2].querySelector("span").textContent;var t=buyElement.querySelector("#buy-kg").textContent=1;buyElement.querySelector("#icecream-price-kg").textContent=e.path[2].querySelector("span").textContent,buyElement.querySelector("#kg-up").addEventListener("click",function(e){t<10&&(t+=.5,e.path[2].querySelector("#buy-kg").textContent=t,e.path[3].querySelector("#icecream-price-kg").textContent=e.path[2].querySelector("#icecream-price").textContent*t,sumTotalPrice+=Number(e.path[2].querySelector("#icecream-price").textContent)/2,createdTotalPrice.textContent=sumTotalPrice,e.path[2].querySelector("#kg-down").style.display="block"),10===t&&(e.path[2].querySelector("#kg-up").style.display="none")}),buyElement.querySelector("#kg-down").addEventListener("click",function(e){.5<t&&(t-=.5,e.path[2].querySelector("#buy-kg").textContent=t,e.path[3].querySelector("#icecream-price-kg").textContent=e.path[2].querySelector("#icecream-price").textContent*t,sumTotalPrice-=Number(e.path[2].querySelector("#icecream-price").textContent)/2,createdTotalPrice.textContent=sumTotalPrice,e.path[2].querySelector("#kg-up").style.display="block"),.5===t&&(e.path[2].querySelector("#kg-down").style.display="none")}),buyElement.querySelector("#buy-button-close").addEventListener("click",function(e){buyList.removeChild(e.path[2]),sumTotalPrice-=Number(e.path[2].querySelector("#icecream-price-kg").textContent),createdTotalPrice.textContent=sumTotalPrice,c(),r.classList.remove("catalog__btn--active"),r.style.padding="13px 80px",r.textContent="Заказать",r.disabled=!1}),buyList.appendChild(buyElement),sumTotalPrice+=Number(e.path[2].querySelector("span").textContent),createdTotalPrice.textContent=sumTotalPrice;var c=function(){var e=document.querySelectorAll("#icecream-price-kg").length;e<=0?(basketEmpty.textContent="Нет товаров",basketText.textContent="Пусто"):1===e?(basketEmpty.textContent="Вы выбрали",basketText.textContent=e+" товар"):e<=4?basketText.textContent=e+" товара":5<=e&&(basketText.textContent=e+" товаров")};c(),r.classList.add("catalog__btn--active"),r.style.padding="13px 55px",r.textContent="Уже в корзине",r.disabled=!0})},functionCatalogItemBtns=function(){catalogItemBtns.forEach(function(e,t){var c=catalogItemBtns[t];clickBtnItem(c)})};functionCatalogItemBtns();var minPrice=document.querySelector("#min-price"),maxPrice=document.querySelector("#max-price"),rowPricebBarMin=document.querySelector(".bar-min"),rowPricebBarMax=document.querySelector(".bar-max"),togglePriceMin=document.querySelector(".range-min"),togglePriceMax=document.querySelector(".range-max"),rowPrice=document.querySelector(".scale"),rowPriceWidth=rowPrice.clientWidth-20;minPrice.textContent=200,maxPrice.textContent=500,togglePriceMin.addEventListener("mousedown",function(c){c.preventDefault();var r={x:c.clientX},t=function(e){c.preventDefault();var t=r.x-e.clientX;r={x:e.clientX},togglePriceMin.style.left=togglePriceMin.offsetLeft-t+"px",rowPricebBarMin.style.width=togglePriceMin.offsetLeft+"px",minPrice.textContent=200+2*togglePriceMin.offsetLeft,togglePriceMin.offsetLeft<=0&&(togglePriceMin.style.left="0px",rowPricebBarMin.style.width=0,minPrice.textContent=200),togglePriceMin.offsetLeft>=rowPriceWidth&&(togglePriceMin.style.left=rowPriceWidth+"px",rowPricebBarMin.style.width="100%",minPrice.textContent=500),togglePriceMin.offsetLeft>=togglePriceMax.offsetLeft-20&&(togglePriceMin.style.left=togglePriceMax.offsetLeft-20+"px",rowPricebBarMin.style.width=togglePriceMin.offsetLeft+"px",minPrice.textContent=500-2*(150-togglePriceMin.offsetLeft))},o=function(e){c.preventDefault(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",o)}),togglePriceMax.addEventListener("mousedown",function(c){c.preventDefault();var r={x:c.clientX},t=function(e){c.preventDefault();var t=r.x-e.clientX;r={x:e.clientX},togglePriceMax.style.left=togglePriceMax.offsetLeft-t+"px",rowPricebBarMax.style.width=160-togglePriceMax.offsetLeft+"px",maxPrice.textContent=500-2*(150-togglePriceMax.offsetLeft),togglePriceMax.offsetLeft<=0&&(togglePriceMax.style.left="0px",rowPricebBarMax.style.width="100%",maxPrice.textContent=200),togglePriceMax.offsetLeft>=rowPriceWidth&&(togglePriceMax.style.left=rowPriceWidth+"px",rowPricebBarMax.style.width=0,maxPrice.textContent=500),togglePriceMax.offsetLeft<=togglePriceMin.offsetLeft+20&&(togglePriceMax.style.left=togglePriceMin.offsetLeft+20+"px",rowPricebBarMax.style.width=160-togglePriceMax.offsetLeft+"px",maxPrice.textContent=500-2*(150-togglePriceMax.offsetLeft))},o=function(e){c.preventDefault(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",o)});var filterBtn=document.querySelector(".filter__btn"),filterType=document.querySelectorAll(".filter__type option"),filterFat=document.querySelectorAll(".filter__fat input"),filterTopping=document.querySelectorAll(".filter__checkbox input");filterBtn.addEventListener("click",function(e){e.preventDefault();for(var t=document.querySelectorAll(".catalog__item"),c=0;c<t.length;c++)catalogList.removeChild(t[c]);var r=iceCream.slice(),o={type:"",fat:"",topping:[]};filterType.forEach(function(e){e.selected&&(o.type=e.value)}),filterFat.forEach(function(e){e.checked&&(o.fat=e.value)}),filterTopping.forEach(function(e,t){e.checked&&(o.topping[t]=e.name)});var n=function(){r.forEach(function(e,t){var c=catalogTemplate.cloneNode(!0);c.querySelector("a").textContent=r[t].title,c.querySelector("img").src=r[t].img,c.querySelector("span").textContent=r[t].price,c.querySelector("p").insertAdjacentHTML("beforeend","<span>/кг</span>"),clickBtnItem(c.querySelector("button")),catalogList.appendChild(c)})};r=iceCream.filter(function(e){return"0%"===o.fat?0===e.fat:"to 30%"===o.fat?e.fat<=30:"above 30%"===o.fat?30<=e.fat:0<=e.fat}).filter(function(e){return e.price>=minPrice.textContent&&e.price<=maxPrice.textContent}),"by popularity"===o.type||("first cheap"===o.type?r.sort(function(e,t){return e.price-t.price}):"first dear"===o.type?r.sort(function(e,t){return t.price-e.price}):r.sort(function(e,t){return e.fat-t.fat})),n()});var buyBtnForm=document.querySelector("#buy-btn-form");buyBtnForm.addEventListener("click",function(e){for(var t=e.path[1].querySelectorAll(".buy-section__item"),c=e.path[1].querySelector("#total-price").textContent,r="Вы заказали мороженое :\n",o=1,n=0;n<=t.length;n++)if(t.length>n){var i=t[n].querySelector(".buy-section__descr").textContent;r+=o+") "+t[n].querySelector("#buy-kg").textContent+" кг "+i+" на сумму "+t[n].querySelector("#icecream-price-kg").textContent+" руб.\n",o+=1}t.length<=0?r="Корзина пуста":r+="Общая сумма к оплате "+c+" руб.",alert(r)});var Coordinate=function(e,t){this._x=e,this._y=t};Coordinate.prototype.setX=function(e){this.x=e},Coordinate.prototype.setY=function(e){this.y=e};var coord1=new Coordinate(120,50),coord2=new Coordinate(100,150);console.log(coord1),console.log(coord2);