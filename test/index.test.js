const {currrencyNet, sum} = require('./production')
test("trying test", () => {
    expect(1+2).toBe(3)
})

// const currencynetObj = new currrencyNet('NGN', false)
test('testing sum method', () => {
    expect(sum(10, 20, 40)).toBe(70)
})