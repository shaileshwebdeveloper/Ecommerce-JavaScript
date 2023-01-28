cartData = JSON.parse(localStorage.getItem("cart"));

let total = cartData.reduce(function(sum, elem, index, arr){
  return sum + Number(elem.price.slice(1))
}, 0)


let length =  cartData.length

document.querySelector('p').innerText = `You have ${length} & Total is Rs ${total}`



cartData.map((elem, index) => {
  let box = document.createElement("div");

  let img = document.createElement("img");
  img.src = elem.image_url;
  img.style.width = "200px";

  let name = document.createElement("p");
  name.textContent = elem.name;

  let price = document.createElement("p");
  price.innerText = elem.price;

  let btn = document.createElement('button')
  btn.innerText = "Remove"
  btn.addEventListener('click', function(){
      removeItem(elem, index)
  })

  box.append(img, name, price, btn);

  document.querySelector("#container").append(box);
});



 
function removeItem(elem, index){

     cartData.splice(index, 1)
     localStorage.setItem('cart', JSON.stringify(cartData))
     window.location.reload()

}