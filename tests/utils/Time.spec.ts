import { compare, formatDate } from "#/utils/Time";

describe("formatDate", () => {
  test("指定したフォーマット通りに文字列が出力されるか", () => {
    const suites: [string | number | Date, string, string][] = [
      ["0", "", ""],
      [0, "", ""],
      [0, "YMdhms", "197011900"],
      [0, "YYYY/MM/dd hh:mm:ss", "1970/01/01 09:00:00"],
      [new Date(0), "YYYY/MM/dd hh:mm:ss", "1970/01/01 09:00:00"],
    ];

    for (const [date, format, expectValue] of suites) {
      expect(formatDate(date, format)).toEqual(expectValue);
    }
  });
});

describe("compare", () => {
  test("時刻比べが正しくできるか", () => {
    const suites: [string, string, string, boolean][] = [
      ["11:59", "<", "12:00", true],
      ["12:00", "<", "12:00", false],
      ["12:00", "<", "12:01", true],

      ["11:59", ">", "12:00", false],
      ["12:00", ">", "12:00", false],
      ["12:00", ">", "12:01", false],

      ["11:59", "<=", "12:00", true],
      ["12:00", "<=", "12:00", true],
      ["12:00", "<=", "12:01", true],

      ["11:59", ">=", "12:00", false],
      ["12:00", ">=", "12:00", true],
      ["12:00", ">=", "12:01", false],
    ];

    for (const [t1, o, t2, expectValue] of suites) {
      expect(compare(t1, o, t2)).toEqual(expectValue);
    }
  });

  test("日時じゃないものが入力されたら例外が発生するか", () => {
    const suites: [string, string, string, string][] = [
      ["0:0", "<=", "00:00", "t1 is not time format (hh:mm)"],
      ["24:00", "<=", "00:00", "t1 is not time format (hh:mm)"],
      ["23:59", "<=", "0:0", "t2 is not time format (hh:mm)"],
      ["23:59", "<=", "24:00", "t2 is not time format (hh:mm)"],
    ];

    for (const [t1, o, t2, expectValue] of suites) {
      expect(() => {
        compare(t1, o, t2);
      }).toThrowError(expectValue);
    }
  });

  test("比較演算子が不正なとき例外が発生するか", () => {
    const suites: string[] = ["＜", "＞", "=", "＜＝", "＞＝", "+", "-"];

    for (const ope of suites) {
      expect(() => {
        compare("00:00", ope, "00:00");
      }).toThrowError("invalid ope");
    }
  });
});
