const text = '{"name":"Acme","size":"Large","active":true}'
const parsed = JSON.parse(text)
console.log(parsed.name, typeof text, typeof parsed)

const customer = { name: 'Acme', size: 'Large', active: true }
console.log(JSON.stringify(customer))
console.log(JSON.stringify(customer, null, 2))

// Only the name survives as it was. The date becomes a string, and both the function
// and the undefined are discarded without any warning.
console.log(JSON.stringify({ name: 'Acme', createdAt: new Date(), notify: () => {}, missing: undefined }))

const defaults = { name: 'Acme', address: { city: 'Madrid' } }
const shallow = { ...defaults }
shallow.address.city = 'Barcelona'
console.log(defaults.address.city)

const fresh = { name: 'Acme', address: { city: 'Madrid' } }
const deep = structuredClone(fresh)
deep.address.city = 'Barcelona'
console.log(fresh.address.city)

// JSON.parse('it is not json') // This is commented out as it fails with `SyntaxError: Unexpected token`
