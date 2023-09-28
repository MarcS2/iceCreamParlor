

// SECTION global variables 
const iceCream = [{
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}
]

const toppings = [{
  name: 'Sprinkles',
  price: .25,
  quantity: 0,
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Cookie Chunks',
  price: .5,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  price: 4,
  quantity: false,
},
{
  name: 'Banana Split',
  price: 6,
  quantity: false,
},
{
  name: 'Cup',
  price: 2,
  quantity: false,
},

]

// !SECTION

function addContainer(selectedContainer) {
  containers.forEach(container => {
    if (container.quantity) {
      return
    } else {
      const foundContainer = containers.find(container => container.name = selectedContainer)
      // @ts-ignore
      foundContainer.quantity = true
      calculateTotal()
      drawContainer()
    }
  })
}


function drawContainer() {
  let receipt = ''
  containers.forEach(container => {
    if (container.quantity) {

      let receipt = `<p>${container.name} | Price$${container.price}</p>`
      const cartElem = document.getElementById('cartContainer')
      // @ts-ignore
      cartElem.innerHTML = receipt
    }
  })
}


function addScoop(selectedScoop) {
  const foundScoop = iceCream.find(i => i.name == selectedScoop)
  // @ts-ignore
  foundScoop.quantity++
  calculateTotal()
  drawScoop()
}


function addTopping(selectedTop) {
  console.log(`topping param = ${selectedTop}`)

  const foundTop = toppings.find(topping => topping.name == selectedTop)
  console.log(foundTop)

  // @ts-ignore
  foundTop.quantity++
  calculateTotal()
  draw()
}


function drawScoop() {
  let receipt = ''
  iceCream.forEach(i => {
    if (i.quantity) {
      let totalPrice = (i.price * i.quantity)
      receipt += `<p>${i.name} | Qty: ${i.quantity} | Price: $${totalPrice}</p>`
    }
  })

  const cartElem = document.getElementById('cartScoop')
  // @ts-ignore
  cartElem.innerHTML = receipt
}

// draws only toppings to page
function draw() {
  let receipt = ''
  toppings.forEach(topping => {
    if (topping.quantity > 0) {
      let totalPrice = (topping.price * topping.quantity).toFixed(2)
      receipt += `<p>${topping.name} | Qty: ${topping.quantity} | Price: $${totalPrice}</p>`

    }
  })

  // @ts-ignore
  const cartElem = document.getElementById('cartTop')

  // @ts-ignore
  cartElem.innerHTML = receipt




}


function calculateTotal() {
  let totalPrice = 0
  iceCream.forEach(i => {
    totalPrice += (i.price * i.quantity)

  })
  toppings.forEach(topping => {
    totalPrice += (topping.price * topping.quantity)
  })
  containers.forEach(container => {
    if (container.quantity) {
      totalPrice += container.price
    } else {
      return
    }
  })


  console.log(totalPrice)

  const total = document.getElementById('total')
  // @ts-ignore
  total.innerText = totalPrice.toFixed(2)

}


function checkout() {
  iceCream.forEach(i => i.quantity = 0)
  toppings.forEach(topping => topping.quantity = 0)
  calculateTotal()
  draw()
  drawScoop()
}