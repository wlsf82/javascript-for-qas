const testEmail = 'walmyr@example.com'
console.log(testEmail)

let attempts = 0
attempts = attempts + 1
attempts = attempts + 1
console.log(attempts)

const sizes = ['Small', 'Medium']
sizes.push('Large')
console.log(sizes)

const customer = { name: 'Acme', size: 'Small' }
customer.size = 'Large'
console.log(customer)

const frozen = Object.freeze({ name: 'Globex', size: 'Small' })
frozen.size = 'Large'
console.log(frozen)
