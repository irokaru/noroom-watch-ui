import { TWeather } from "#/domain/Weather";

const weatherToSolidIconLib: { [key in TWeather]: string[] } = {
  Thunderstorm: ["solid", "cloud-bolt"],
  Drizzle: ["solid", "fa-cloud-hail"],
  Rain: ["solid", "cloud-shower"],
  Snow: ["solid", "snowflake"],
  Mist: ["solid", "cloud-fog"],
  Smoke: ["solid", "cloud-fog"],
  Haze: ["solid", "cloud-fog"],
  Fog: ["solid", "cloud-fog"],
  Sand: ["solid", "cloud-fog"],
  Dust: ["solid", "cloud-fog"],
  Ash: ["solid", "cloud-fog"],
  Squall: ["solid", "cloud-fog"],
  Tornado: ["solid", "tornado"],
  Clear: ["solid", "sun"],
  Clouds: ["solid", "clouds"],
};

export const weatherToSolidIcon = (weather: TWeather): string[] => {
  return weatherToSolidIconLib[weather];
};
