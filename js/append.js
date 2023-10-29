// -------Plans----------------
let fluid = document.querySelector(".plans .row1 .swap .fluid");

let perMonth = document.querySelectorAll(".plans .row2 .plan .top .per-month");
let perYear = document.querySelectorAll(".plans .row2 .plan .top .per-year");
let month = document.querySelectorAll(".plans .row2 .plan .top .per .month");
let year = document.querySelectorAll(".plans .row2 .plan .top .per .year");


fluid.onclick = function () {
    this.classList.add("transition-5ms");
    this.classList.toggle("clicked");

    perMonth.forEach(function (ele) {
        ele.classList.toggle("active");
        ele.classList.toggle("hide");
    })
    perYear.forEach(function (ele) {
        ele.classList.toggle("hide");
        ele.classList.toggle("active");
    })
    month.forEach(function (ele) {
        ele.classList.toggle("hide");
        ele.classList.toggle("active");
    })
    year.forEach(function (ele) {
        ele.classList.toggle("hide");
        ele.classList.toggle("active");
    })
}













// -------------Functions--------------------------

function removeClass (className, listItems) {
    listItems.forEach(function (item) {
        item.classList.remove(className);
    });
};
function removeChildrenClass (className, listItems, childnum) {
    listItems.forEach(function (item) {
        item.children[childnum].classList.remove(className);
    });
};
function addChildrenClass (className, listItems, childnum) {
    listItems.forEach(function (item) {
        item.children[childnum].classList.add(className);
    });
};