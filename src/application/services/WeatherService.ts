import { createWeather, Weather } from "#/domain/Weather";
import { get } from "#/infrastructure/WeatherAPI";

export const fetchWeather = async (): Promise<
  Weather | { status: "error" }
> => {
  try {
    const res = await get();
    const weather = res.data;

    if (weather.status !== "success") {
      return {
        status: "error",
      };
    }

    return createWeather(weather);
  } catch (_) {
    return { status: "error" };
  }
};
