const customer = { name: 'Acme', size: 'Large', active: true }

const { name, size } = customer
console.log(name, size)

const { name: companyName } = customer
console.log(companyName)

const partial = { name: 'Globex' }
const { size: partialSize = 'Small' } = partial
console.log(partialSize)

const [year, month, day] = '2026-08-27'.split('-')
console.log(`${day}/${month}/${year}`)

const [username, domain] = 'walmyr@example.com'.split('@')
console.log(username, domain)

const describeCustomer = ({ name, size }) => `${name} is ${size}`
console.log(describeCustomer(customer))
