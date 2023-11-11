test('testを利用してテストケースを作成', () => {
  const result = true // test結果
  const expected = true // 期待値
  expect(result).toBe(expected) // expect関数とtoBe関数を利用して結果を評価
})

it('itを利用してテストケースを作成', () => {
  expect(true).toBe(true)
})