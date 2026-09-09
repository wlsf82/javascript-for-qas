import { faker } from '@faker-js/faker'
import _ from 'lodash'

console.log(faker.person.fullName())
console.log(faker.internet.email())
console.log(faker.company.name())
console.log(faker.location.city())

const buildCustomer = (overrides = {}) => ({
  name: faker.company.name(),
  email: faker.internet.email(),
  city: faker.location.city(),
  active: true,
  ...overrides,
})

console.log(buildCustomer())
console.log(buildCustomer({ name: 'Acme Corporation' }))

faker.seed(42)
console.log(faker.person.fullName())

const customers = [
  { name: 'Acme', size: 'Large' },
  { name: 'Globex', size: 'Small' },
  { name: 'Initech', size: 'Large' },
]
console.log(_.groupBy(customers, 'size'))
