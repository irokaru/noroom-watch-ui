import { DomainBase } from "./Base";

export interface IWeatherValueType {
  weather: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  icon: string;
}

export class Weather implements DomainBase, IWeatherValueType {
  readonly weather!: string;
  readonly temp!: number;
  readonly temp_max!: number;
  readonly temp_min!: number;
  readonly icon!: string;

  constructor(init: Partial<IWeatherValueType>) {
    Object.assign(this, init);
  }
  getJson() {
    return {
      weather: this.weather,
      temp: this.temp,
      temp_max: this.temp_max,
      temp_min: this.temp_min,
      icon: this.icon,
    };
  }
}

export const createWeather = (init: Partial<Weather>): Weather => {
  return new Weather(init);
};
