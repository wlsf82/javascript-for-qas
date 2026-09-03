const name = 'Acme Corporation'
const employees = 240
const active = true
let notSetYet
const phone = null

const sizes = ['Small', 'Medium', 'Large']
const customer = { name: 'Acme Corporation', size: 'Large', active: true }

console.log(sizes.length)
console.log(sizes[0])
console.log(customer.name, customer.active)

console.log(typeof name, typeof employees, typeof active, typeof notSetYet, typeof phone)
console.log(Array.isArray(sizes), Array.isArray(customer))
