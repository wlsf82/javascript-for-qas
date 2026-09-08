const describeStatus = (statusCode) => {
  if (statusCode >= 500) return 'Erro de servidor'
  if (statusCode >= 400) return 'Erro de cliente'
  if (statusCode >= 200) return 'Sucesso'
  return 'Outra coisa'
}

console.log(describeStatus(500), describeStatus(404), describeStatus(200), describeStatus(100))

if ('') {
  console.log('An empty string is truthy')
} else {
  console.log('An empty string is falsy')
}

if ([]) {
  console.log('An empty array is truthy')
} else {
  console.log('An empty array is falsy')
}

const describeCount = (count) =>
  count === 1 ? `Found ${count} customer` : `Found ${count} customers`

console.log(describeCount(1))
console.log(describeCount(3))

// An if statement around an assertion allows the test to decide not to assert anything,
// so it stays green even if the functionality isn't working.
