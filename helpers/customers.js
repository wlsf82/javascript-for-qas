export const DEFAULT_SIZE = 'Small'

export const buildEmail = (username) => `${username}@example.com`

export const buildCustomer = (name, size = DEFAULT_SIZE) => ({ name, size, active: true })
