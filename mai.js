let item = document.getElementById("name");
let myform = document.querySelector(".form");
let clear = document.getElementById("clear");
let items = JSON.parse(localStorage.getItem("task")) ? JSON.parse(localStorage.getItem("task")) : [];
let data = JSON.parse(localStorage.getItem("task")) ? JSON.parse(localStorage.getItem("task")) : [];
let list = function (name) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    document.getElementById("list").appendChild(li);
}
data.map((name) => { list(name) });
myform.addEventListener("submit", onsub);
function onsub(e) {
    e.preventDefault();
    list(item.value);
    items.push(item.value);
    localStorage.setItem("task", JSON.stringify(items));
    item.value = '';
}
clear.addEventListener('click', function () {
    localStorage.clear();
    document.getElementById("list").innerHTML = '';
});
