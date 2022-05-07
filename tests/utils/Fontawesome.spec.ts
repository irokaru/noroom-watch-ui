import { TWeather } from "#/domain/Weather";
import { weatherToSolidIcon } from "#/utils/Fontawesome";

describe("weatherToSolidIcon", () => {
  test("正しく変換できるか", () => {
    const suites: [TWeather, string[]][] = [
      ["Thunderstorm", ["fas", "cloud-bolt"]],
      ["Drizzle", ["fas", "cloud-rain"]],
      ["Rain", ["fas", "cloud-rain"]],
      ["Snow", ["fas", "snowflake"]],
      ["Mist", ["fas", "smog"]],
      ["Smoke", ["fas", "smog"]],
      ["Haze", ["fas", "smog"]],
      ["Fog", ["fas", "smog"]],
      ["Sand", ["fas", "smog"]],
      ["Dust", ["fas", "smog"]],
      ["Ash", ["fas", "smog"]],
      ["Squall", ["fas", "smog"]],
      ["Tornado", ["fas", "tornado"]],
      ["Clear", ["fas", "sun"]],
      ["Clouds", ["fas", "cloud"]],
    ];

    for (const [weather, expectValue] of suites) {
      expect(weatherToSolidIcon(weather)).toEqual(expectValue);
    }
  });
});
