// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector ('.quantity input')

  let priceSubtotal = 0
 const p = document.getElementsByClassName(product)
 for (let i = 0; i < p.length;i++){
  console.log(p[i])
 }
const pp = p[i].getElementsByClassName("price")[i][1].innerHTML
const pq = p[i].getElementsByClassName("quantity")[i][1].innerHTML

priceSubtotal = priceSubtotal + (pp * pq)

priceSubtotal.toFixed(2)
document.getElementsByClassName("subtotal").innerText = "$" + priceSubtotal

  console.log(document.getElementsByClassName("subtotal").innerText);
  //... your code goes here
}

function calculateAll() {
    // ITERATION 2
const quantityInputs = document.getElementsByClassName("quantity")
  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("quantity",updateSubtotal())
  }

      // ITERATION 3

      

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
