import placeholderFunction from '../cli';

test('placeholder test', () => {
  expect(1).toEqual(1);
});

test('placeholder test coverage', () => {
  const result = placeholderFunction(1, 2);
  expect(result).toEqual(3);
});
