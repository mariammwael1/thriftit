function goToSearch(event) {
  event.preventDefault();

  const input = document.getElementById("searchInput").value;

  window.location.href = "search.html?query=" + input;
}





console.log("index.js is loaded");















































































document.getElementById("submit-product").addEventListener("click", function() {
  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const color = document.getElementById("product-color").value;
  const size = document.getElementById("product-size").value;
  const condition = document.getElementById("product-condition").value;
  const image = document.getElementById("product-image").files[0] ? URL.createObjectURL(document.getElementById("product-image").files[0]) : "";

  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.push({ name, price, color, size, condition, image });

  localStorage.setItem("products", JSON.stringify(products));

  alert("Product added successfully!");
});