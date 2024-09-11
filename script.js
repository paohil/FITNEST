// Sample Cart Interactivity
document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const productItems = document.querySelectorAll(".product-item");

    productItems.forEach(item => {
        item.addEventListener("click", () => {
            const productName = item.querySelector("h4").innerText;
            const productPrice = item.querySelector("p").innerText;
            cart.push({ name: productName, price: productPrice });
            alert(`${productName} added to cart!`);
        });
    });
});
