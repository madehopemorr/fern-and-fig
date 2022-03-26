var cartItems = [];
var isTotalHidden = true;

var chineseMoneyPlant = {
    name: "Chinese Money Plant",
    price: 12
}

var cheesePlant = {
    name: "Cheese Plant",
    price: 12
}

var aloeVera = {
    name: "Aloe Vera",
    price: 14
}

function addToCart(item) {
    cartItems.push(item);

document.getElementById("itemCounter").innerHTML = cartItems.length;
showTotal();
}

function clickCart() {
    isTotalHidden = !isTotalHidden;
    showTotal();
}

function showTotal() {
    var orderTotal = document.getElementById("orderTotal");
    orderTotal.innerHTML="";

    if (isTotalHidden === false) {
        var total = 0;
        for (var i = 0; i < cartItems.length; i++) {
            total += cartItems[i].price;
        }
        orderTotal.innerHTML += "Total: $" + total;
    }
}