import { SetData,GetDataLocal } from "./localstorage.js";
import { Get_Data } from "./FetchData.js";
let URL = "./json-files/homeslider.json";
// start variables
export let language = document.querySelector(".language");
export let content = document.querySelector(".content");
export let data_content = document.querySelectorAll("#data");
export let country = document.querySelector(".country");
export let content_Currency = document.querySelector(".content-Currency");
export let logo_cunt = document.querySelector(".logo_cunt");
export let input_Search = document.querySelector("#search");
export let icon_search = document.querySelector(".icon_search");
let images_src = ["./images/homepage/slider/1.webp","./images/homepage/slider/2.webp","./images/homepage/slider/3.webp","./images/homepage/slider/4.webp"];
let next_btn = document.querySelector(".next");
let back_btn = document.querySelector(".back");
let slider_images = document.querySelector(".slider_images");
let scrollRight = document.querySelector(".right");

// end variables
icon_search.addEventListener("click",() => {
    location.href = "./pagesHtml/search.html";
    localStorage.setItem("value",input_Search.value);
})
//  start show menu lang
ActiveClass();
export function ActiveClass() {
    language.addEventListener("click",() => {
        content.classList.toggle("active");
        content_Currency.classList.remove("active");
    })
}

// end show menu lang

//  start show menu currency
ShowMenu();
export function ShowMenu() {
    country.addEventListener("click",() => {
        content_Currency.classList.toggle("active");
        content.classList.remove("active");
    })
}

// end show menu currency


//start chang content of languages an currency
GetContent_Currency()
export function GetContent_Currency() {
    data_content.forEach(Element => {
        Element.addEventListener("click",() => {
            logo_cunt.src = Element.children[0].src;
            country.innerText = Element.children[1].innerText;
            content_Currency.classList.remove("active");
        })

    })
}
//end chang content of languages an currency

// start slider images
Random_images();
function Random_images() {
    let TimeChang = setInterval(() => {
        let random_src = Math.floor(Math.random() * images_src.length);
        slider_images.style.backgroundImage = `url(${images_src[random_src]})`
    },3000)
}
let items_prodcut = [];
// start fetch data 
let CONTAINER_ITEMS = document.querySelector(".CONTAINER-ITEMS");
Get_Data(URL).then(data => {
    let result = "";
    data.forEach(Element => {
        result += `<div class='ITEM d-flex align-items-center justify-content-center flex-column col-lg-3 '>
        <div class="item-image ">
            <div class="over-leaye">
                <h6 class="select">select option</h6>
                <h6 id="quick">quick view</h6>
            </div>
            <img class = 'src' src="${Element.src[0].src1}" alt="">
        </div>
        <div class="data-item d-flex align-items-center justify-content-center flex-column">
            <p class="title">${Element.brand}</p>
            <p class="discraption">${Element.title}</p>
            <p><span class="sale-price">${Element.sale}</span> <span class="pricrnow">${Element.price}</span></p>
        </div>
        </div>`;
    })
    CONTAINER_ITEMS.innerHTML += result;
    items_prodcut = document.body.querySelectorAll(".ITEM");
})
// end fetch data

