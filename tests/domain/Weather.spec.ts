import { createWeather, IWeatherValueType } from "#/domain/Weather";

describe("Weather", () => {
  test("Weatherが生成されるか", () => {
    const params: IWeatherValueType = {
      weather: "Clear",
      temp: 25,
      temp_max: 30,
      temp_min: 10,
      icon: "iconiconicon",
    };

    const result = createWeather(params);
    expect(params).toEqual(result.getJson());
  });
});
