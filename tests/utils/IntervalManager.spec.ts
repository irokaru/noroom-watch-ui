import { IntervalManager } from "#/utils/IntervalManager";

describe("getInstance", () => {
  test("インスタンスが得られるか", () => {
    const im = IntervalManager.getInstance();
    expect(im).toBeInstanceOf(IntervalManager);
  });

  test("new したら叱られるか", () => {
    try {
      new IntervalManager();
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toEqual(
          "Use IntervalManager.getInstance() instead of new."
        );
      }
    }
  });
});

describe("interval settings", () => {
  test("インターバルの登録と削除ができるか", () => {
    const func = () => 1 + 1;
    const im = IntervalManager.getInstance();
    im.setInterval("key1", func, 10);

    expect(im.existsInterval("key1")).toBeTruthy();
    expect(im.existsInterval("key2")).toBeFalsy();

    expect(im.clearInterval("key1")).toBeTruthy();
    expect(im.clearInterval("key1")).toBeFalsy();
    expect(im.clearInterval("key2")).toBeFalsy();
  });
});
