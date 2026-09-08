const nameFromPage = '  Acme Corporation  '
console.log(nameFromPage.trim())
console.log(nameFromPage.trim().length)

console.log('ACME' === 'Acme')
console.log('ACME'.toLowerCase() === 'Acme'.toLowerCase())

console.log('2026-08-27'.split('-').reverse().join('/'))

console.log(Number('R$ 1.234,56'.replace('R$ ', '').replaceAll('.', '').replace(',', '.')))

console.log('a-b-c-d'.replace('-', '/'))
console.log('a-b-c-d'.replaceAll('-', '/'))
