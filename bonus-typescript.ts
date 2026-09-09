const buildEmail = (username: string): string => `${username}@example.com`

console.log(buildEmail('walmyr'))
// console.log(buildEmail())

type Size = 'Small' | 'Medium' | 'Large'

interface Customer {
  name: string
  size: Size
  active: boolean
  email?: string
}

const buildCustomer = (overrides: Partial<Customer> = {}): Customer => ({
  name: 'Acme Corporation',
  size: 'Small',
  active: true,
  ...overrides,
})

console.log(buildCustomer({ size: 'Large' }))
// console.log(buildCustomer({ sixe: 'Large' }))
