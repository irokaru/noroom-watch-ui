import { TWeather } from "#/domain/Weather";

const weatherToSolidIconLib: { [key in TWeather]: string[] } = {
  Thunderstorm: ["fas", "cloud-bolt"],
  Drizzle: ["fas", "cloud-rain"],
  Rain: ["fas", "cloud-rain"],
  Snow: ["fas", "snowflake"],
  Mist: ["fas", "smog"],
  Smoke: ["fas", "smog"],
  Haze: ["fas", "smog"],
  Fog: ["fas", "smog"],
  Sand: ["fas", "smog"],
  Dust: ["fas", "smog"],
  Ash: ["fas", "smog"],
  Squall: ["fas", "smog"],
  Tornado: ["fas", "tornado"],
  Clear: ["fas", "sun"],
  Clouds: ["fas", "cloud"],
};

export const weatherToSolidIcon = (weather: TWeather): string[] => {
  return weatherToSolidIconLib[weather];
};
