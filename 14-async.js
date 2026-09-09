setTimeout(() => console.log('The customer arrived'), 1000)
console.log('I asked the customer')

console.log(fetch('https://jsonplaceholder.typicode.com/users/1'))

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then((user) => console.log('with then:', user.name))

const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
const user = await response.json()
console.log('with await:', user.name)

const getName = async () => 'Acme'
console.log(getName())
console.log(await getName())

const [firstResponse, secondResponse] = await Promise.all([
  fetch('https://jsonplaceholder.typicode.com/users/1'),
  fetch('https://jsonplaceholder.typicode.com/users/2'),
])
const [firstUser, secondUser] = await Promise.all([firstResponse.json(), secondResponse.json()])
console.log(firstUser.name, secondUser.name)
