import { TWeather } from "#/domain/Weather";
import { weatherToSolidIcon } from "#/utils/Fontawesome";

describe("weatherToSolidIcon", () => {
  test("正しく変換できるか", () => {
    const suites: [TWeather, string[]][] = [
      ["晴", ["fas", "sun"]],
      ["曇", ["fas", "cloud"]],
      ["雨", ["fas", "cloud-rain"]],
      ["雪", ["fas", "snowflake"]],
      ["あ", ["fas", "circle-question"]],
    ];

    for (const [weather, expectValue] of suites) {
      expect(weatherToSolidIcon(weather)).toEqual(expectValue);
    }
  });
});
