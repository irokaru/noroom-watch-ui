import { TWeather } from "#/domain/Weather";

const weatherToSolidIconLib: { [key in TWeather]: string[] } = {
  晴: ["fas", "sun"],
  曇: ["fas", "cloud"],
  雨: ["fas", "cloud-rain"],
  雪: ["fas", "snowflake"],
};

export const weatherToSolidIcon = (weather: TWeather): string[] => {
  if (!Object.keys(weatherToSolidIconLib).includes(weather))
    return ["fas", "circle-question"];
  return weatherToSolidIconLib[weather];
};
