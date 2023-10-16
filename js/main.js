/* этот код помечает картинки, для удобства разработки */
let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0"></span>`
  );
  i++;
}

/* конфигурация */
let width = 380; // ширина картинки
let count = 1; // видимое количество изображений

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0; // положение ленты прокрутки

carousel.querySelector(".prev").onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};

/* этот код помечает картинки, для удобства разработки */
// let blockSale = block_sale.querySelector(".block_sale");
let j = 1;
for (let li of block_sale.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0"></span>`
  );
  j++;
}

/* конфигурация */
let widthSale = 380; // ширина картинки
let countSale = 1; // видимое количество изображений

let listSale = block_sale.querySelector("ul");
let listElemsSale = block_sale.querySelectorAll("li");

let positionSale = 0; // положение ленты прокрутки

block_sale.querySelector(".prev").onclick = function () {
  // сдвиг влево
  positionSale += widthSale * countSale;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  positionSale = Math.min(positionSale, 0);
  listSale.style.marginLeft = positionSale + "px";
};

block_sale.querySelector(".next").onclick = function () {
  // сдвиг вправо
  positionSale -= widthSale * countSale;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  positionSale = Math.max(
    positionSale,
    -widthSale * (listElemsSale.length - countSale)
  );
  listSale.style.marginLeft = positionSale + "px";
};

document.addEventListener("DOMContentLoaded", function () {
  const catalogButton = document.getElementById("catalogButton");
  const catalogList = document.getElementById("navbar-brand-list");

  catalogButton.addEventListener("click", function () {
    if (
      catalogList.style.display === "none" ||
      catalogList.style.display === ""
    ) {
      catalogList.style.display = "block";
    } else {
      catalogList.style.display = "none";
    }
  });
});
