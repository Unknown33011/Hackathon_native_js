let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0"></span>`
  );
  i++;
}

let width = 380;
let count = 1;

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0;

carousel.querySelector(".prev").onclick = function () {
  position += width * count;

  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  position -= width * count;

  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};

let j = 1;
for (let li of block_sale.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0"></span>`
  );
  j++;
}

let widthSale = 380;
let countSale = 1;

let listSale = block_sale.querySelector("ul");
let listElemsSale = block_sale.querySelectorAll("li");

let positionSale = 0;

block_sale.querySelector(".prev").onclick = function () {
  positionSale += widthSale * countSale;
  positionSale = Math.min(positionSale, 0);
  listSale.style.marginLeft = positionSale + "px";
};

block_sale.querySelector(".next").onclick = function () {
  positionSale -= widthSale * countSale;
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
