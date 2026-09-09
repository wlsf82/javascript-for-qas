const sizes = ['Small', 'Medium']
const copy = [...sizes]
copy.push('Large')
console.log(sizes, copy)

const notACopy = sizes
notACopy.push('Huge')
console.log(sizes)

const defaultCustomer = { name: 'Acme', size: 'Small', active: true, email: 'contact@acme.com' }
console.log({ ...defaultCustomer, size: 'Large' })
console.log({ ...defaultCustomer, active: false })
console.log(defaultCustomer)

const { email, ...withoutEmail } = defaultCustomer
console.log(withoutEmail)

const buildCustomer = (overrides = {}) => ({
  name: 'Acme',
  size: 'Small',
  active: true,
  ...overrides,
})
console.log(buildCustomer())
console.log(buildCustomer({ size: 'Large' }))
console.log(buildCustomer({ name: 'Globex', active: false }))

const logSizes = (...values) => console.log(`Received ${values.length} sizes`)
logSizes('Small', 'Medium', 'Large')
