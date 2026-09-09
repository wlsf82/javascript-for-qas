class Customer {
  constructor(name, size) {
    this.name = name
    this.size = size
    this.active = true
  }

  describe() {
    return `${this.name} is ${this.size}`
  }

  deactivate() {
    this.active = false
  }
}

const oo = new Customer('Acme', 'Large')
console.log(oo.describe())
oo.deactivate()
console.log(oo.active)

const buildCustomer = (name, size) => ({ name, size, active: true })
const describe = ({ name, size }) => `${name} is ${size}`
const deactivate = (customer) => ({ ...customer, active: false })

const original = buildCustomer('Globex', 'Small')
const deactivated = deactivate(original)
console.log(describe(original))
console.log(original.active, deactivated.active)

const detached = oo.describe
try {
  console.log(detached())
} catch (error) {
  console.log('the `this` disappeared:', error.message)
}

// For test data I would use the functional style: each call returns a new object,
// so no test can change the data that another test depends on.
// Besides that, I use less keywords to achieve the same results.
