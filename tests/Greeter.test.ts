import { Greeter } from '../src/main'

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl')
})
