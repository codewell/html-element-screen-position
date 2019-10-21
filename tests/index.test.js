const htmlElementScreenPosition = require('../src');

const createElement = (offsetParent = undefined) => ({
  offsetParent,
  offsetLeft: 7,
  offsetTop: 13,
});

test('No parent', () => {
  expect(
    htmlElementScreenPosition(createElement())
  )
    .toEqual({ x: 7, y: 13 });
});

test('One parent', () => {
  expect(
    htmlElementScreenPosition(createElement(createElement()))
  )
    .toEqual({ x: (7 * 2), y: (13 * 2) });
});

test('Two parents', () => {
  expect(
    htmlElementScreenPosition(createElement(createElement(createElement())))
  )
    .toEqual({ x: (7 * 3), y: (13 * 3) });
});