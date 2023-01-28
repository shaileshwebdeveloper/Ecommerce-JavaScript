let cartData = JSON.parse(localStorage.getItem('cart')) || []

    let mensData = [
     
            {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$1470',
               strikedoffprice : '$2299'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$1270',
               strikedoffprice : '$3599'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$1990',
               strikedoffprice : '$2999'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$1170',
               strikedoffprice : '$2599'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$1110',
               strikedoffprice : '$2199'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$1140',
               strikedoffprice : '$2589'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$110',
               strikedoffprice : '$259'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$2070',
               strikedoffprice : '$4299'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$970',
               strikedoffprice : '$29'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$1070',
               strikedoffprice : '$2099'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$570',
               strikedoffprice : '$699'
            },        {
               image_url: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_960_720.jpg',
               name : 'MEN"S REEBOK RUNNING SHOES',
               price : '$170',
               strikedoffprice : '$599'
            },

    ]
 
   
    mensData.map((elem) => {

        let box = document.createElement('div')

        let img = document.createElement('img')
        img.src = elem.image_url
        img.style.width = "200px"

        let name = document.createElement('p')
        name.textContent = elem.name

        let price = document.createElement('p')
        price.innerText = elem.price

  let btn =  document.createElement('button')
  btn.innerText = "Add to Cart"
    btn.addEventListener('click', () => {
        addToCart(elem)
    })


        box.append(img, name, price, btn)

        document.querySelector('#container').append(box)


    })


    
   function addToCart(elem){
      cartData.push(elem)
      localStorage.setItem('cart', JSON.stringify(cartData))
      alert('item added to cart')
   }