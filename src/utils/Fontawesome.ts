import { TWeather } from "#/domain/Weather";

const weatherToSolidIconLib: { [key in TWeather]: string[] } = {
  Thunderstorm: ["fas", "cloud-bolt"],
  Drizzle: ["fas", "fa-cloud-hail"],
  Rain: ["fas", "cloud-shower"],
  Snow: ["fas", "snowflake"],
  Mist: ["fas", "cloud-fog"],
  Smoke: ["fas", "cloud-fog"],
  Haze: ["fas", "cloud-fog"],
  Fog: ["fas", "cloud-fog"],
  Sand: ["fas", "cloud-fog"],
  Dust: ["fas", "cloud-fog"],
  Ash: ["fas", "cloud-fog"],
  Squall: ["fas", "cloud-fog"],
  Tornado: ["fas", "tornado"],
  Clear: ["fas", "sun"],
  Clouds: ["fas", "clouds"],
};

export const weatherToSolidIcon = (weather: TWeather): string[] => {
  return weatherToSolidIconLib[weather];
};
