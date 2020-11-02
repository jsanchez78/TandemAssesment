const q = require('./Questions')
test('Test random assortment of Trivia Questions', () => {
  expect(q.questions.sort(() => 0.5 - Math.random()).slice(0, 10)).toBe(q.questions.sort(() => 0.5 - Math.random()).slice(0, 10))
});
