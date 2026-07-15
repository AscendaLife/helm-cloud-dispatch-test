console.log('hello');

function subtract(a, b) {
  return a - b;
}

// 测试代码
console.log(subtract(5, 3) === 2 ? 'PASS: 5 - 3 = 2' : 'FAIL: 5 - 3');
console.log(subtract(0, 0) === 0 ? 'PASS: 0 - 0 = 0' : 'FAIL: 0 - 0');
console.log(subtract(-2, -5) === 3 ? 'PASS: -2 - (-5) = 3' : 'FAIL: -2 - (-5)');

module.exports = { subtract };
