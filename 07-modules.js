import { DEFAULT_SIZE, buildEmail, buildCustomer } from './helpers/customers.js'

console.log(DEFAULT_SIZE)
console.log(buildEmail('walmyr'))

const first = buildCustomer('Acme', 'Large')
const second = buildCustomer('Globex')

first.size = 'Medium'
console.log(first)
console.log(second)
