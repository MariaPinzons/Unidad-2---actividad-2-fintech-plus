const { transfer } = require('../src/transaction');

test('basic transfer', () => {
    expect(transfer(100, 50)).toBe(50);
});