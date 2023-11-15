// グループ1
describe("before/after timing", () => {
  // グループ1の前後処理
  beforeAll(() => console.log("1 - beforeAll"));
  afterAll(() => console.log("1 - afterAll"));
  beforeEach(() => console.log("1 - beforeEach"));
  afterEach(() => console.log("1 - afterEach"));
  // グループ1のテスト1
  test("", () => console.log("1 - test1"));
  // グループ2
  describe("Scoped / Nested block", () => {
    // グループ2の前後処理
    beforeAll(() => console.log("2 - beforeAll"));
    afterAll(() => console.log("2 - afterAll"));
    beforeEach(() => console.log("2 - beforeEach"));
    afterEach(() => console.log("2 - afterEach"));
    // グループ2のテスト1
    test("", () => console.log("2 - test1"));
    // グループ2のテスト2
    test("", () => console.log("2 - test2"));
  });
});
// 1. 1 - beforeAll
// 2. 1 - beforeEach
// 3. 1 - test // グループ 1 のテスト 1
// 4. 1 - afterEach
// 5. 2 - beforeAll
// 6. 1 - beforeEach // 【注意】グループ 1 の前後処理が実行されている
// 7. 2 - beforeEach
// 8. 2 - test // グループ 2 のテスト 1
// 9. 2 - afterEach
// 10. 1 - afterEach // 【注意】グループ 1 の前後処理が実行されている
// 11. 1 - beforeEach // 【注意】グループ 1 の前後処理が実行されている
// 12. 2 - beforeEach
// 13. 2 - test // グループ 2 のテスト 2
// 14. 2 - afterEach
// 15. 1 - afterEach // 【注意】グループ 1 の前後処理が実行されている
// 16. 2 - afterAll
// 17. 1 - afterAll
