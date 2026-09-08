const sizes = ['Small', 'Medium', 'Large']

for (let i = 0; i < sizes.length; i++) {
  console.log(`${i}: ${sizes[i]}`)
}

for (const size of sizes) {
  console.log(size)
}

const customer = { name: 'Acme Corporation', size: 'Large', active: true }

for (const key in customer) {
  console.log(`${key}: ${customer[key]}`)
}

let attempts = 0
while (attempts < 3) {
  console.log(`Attempt ${attempts}`)
  attempts++
}

const statuses = ['draft', 'active', 'archived']
for (const status of statuses) {
  if (status === 'draft') continue
  console.log(status)
}

for (const size of sizes) {
  console.log(`accepts the size ${size}`)
}
