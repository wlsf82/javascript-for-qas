const customers = [
  { name: 'Acme', size: 'Large', active: true },
  { name: 'Globex', size: 'Small', active: false },
  { name: 'Initech', size: 'Large', active: true },
]

customers.forEach((customer) => console.log(customer.name))

console.log(customers.map((customer) => customer.name))

console.log(customers.filter((customer) => customer.size === 'Large'))

console.log(customers.find((customer) => customer.name === 'Globex'))
console.log(customers.find((customer) => customer.name === 'Nothing'))

console.log(customers.some((customer) => !customer.active))
console.log(customers.every((customer) => customer.active))

// every() in an empty array is true, so a test that checks that every row
// shows a price passes on a page with no rows. Check the quantity as well.
console.log([].every((customer) => customer.active))
