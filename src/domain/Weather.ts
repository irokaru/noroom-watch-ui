import { DomainBase } from "./Base";

export type TWeather = "晴" | "曇" | "雨" | "雪" | string;

export interface IWeatherValueType {
  weather: TWeather;
  temp_max: number;
  temp_min: number;
}

export class Weather implements DomainBase, IWeatherValueType {
  readonly weather!: TWeather;
  readonly temp_max!: number;
  readonly temp_min!: number;

  constructor(init: Partial<IWeatherValueType>) {
    Object.assign(this, init);
  }
  getJson() {
    return {
      weather: this.weather,
      temp_max: this.temp_max,
      temp_min: this.temp_min,
    };
  }
}

export const createWeather = (init: Partial<Weather>): Weather => {
  return new Weather(init);
};
