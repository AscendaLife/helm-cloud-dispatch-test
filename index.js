console.log('hello');

function add(a, b) {
  return a + b;
}

// 简单的测试代码，验证 add 函数结果是否正确
function test(actual, expected, name) {
  if (actual === expected) {
    console.log(`PASS: ${name} => ${actual}`);
  } else {
    console.error(`FAIL: ${name} => 期望 ${expected}，实际 ${actual}`);
    process.exitCode = 1;
  }
}

test(add(1, 2), 3, 'add(1, 2)');
test(add(-1, 1), 0, 'add(-1, 1)');
test(add(0, 0), 0, 'add(0, 0)');
test(add(2.5, 0.5), 3, 'add(2.5, 0.5)');
