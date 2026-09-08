function buildEmail(username) {
  return `${username}@example.com`
}
console.log(buildEmail('walmyr'))

const buildEmailArrow = (username) => `${username}@example.com`
console.log(buildEmailArrow('walmyr'))

const totalPrice = (price, quantity) => price * quantity
console.log(totalPrice(19.99, 3))
console.log(totalPrice(19.99, 3))

const runCase = (name, action) => {
  console.log(`Running: ${name}`)
  action()
  console.log(`Completed: ${name}`)
}
runCase('registers a customer', () => console.log('  ... filling the form'))

const buildCustomer = (name, size) => ({ name, size, active: true })
const first = buildCustomer('Acme', 'Large')
const second = buildCustomer('Globex', 'Small')
first.size = 'Medium'
console.log(first)
console.log(second)
