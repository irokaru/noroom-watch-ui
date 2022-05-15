import { fetchWeather } from "#/application/services/WeatherService";
import { get } from "#/infrastructure/WeatherAPI";

jest.mock("#/infrastructure/WeatherAPI");

describe("fetchWeather", () => {
  test("正常に取れるか", async () => {
    const returnValue = {
      data: {
        status: "success",
        weather: "晴",
        temp_max: 30,
        temp_min: 10,
      },
    };

    (get as jest.Mock).mockImplementation(() => Promise.resolve(returnValue));

    const result = await fetchWeather();
    expect(result).toEqual(returnValue.data);
  });

  test("successじゃないときはエラー扱いになるか", async () => {
    const returnValue = {
      data: {
        status: "error",
        weather: "雨",
        temp: 25,
        temp_max: 30,
        temp_min: 10,
        icon: "iconurl",
      },
    };

    (get as jest.Mock).mockImplementation(() => Promise.resolve(returnValue));

    const result = await fetchWeather();
    expect(result).toBeNull();
  });

  test("例外時にエラー扱いになるか", async () => {
    (get as jest.Mock).mockImplementation(() =>
      Promise.reject({ status: "error" })
    );

    const result = await fetchWeather();
    expect(result).toBeNull();
  });
});
