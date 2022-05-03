import { createWeather, Weather } from "@/domain/Weather";
import { get } from "@/infrastructure/WeatherAPI";

export const fetchWeather = async (): Promise<Weather | null> => {
  try {
    const res = await get();
    const weather = res.data;

    if (weather.status !== "success") {
      return null;
    }

    return createWeather(weather);
  } catch (_) {
    return null;
  }
};
