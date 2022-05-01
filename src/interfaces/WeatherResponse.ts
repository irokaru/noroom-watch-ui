import { IWeatherValueType } from "#/domain/Weather";
import { AxiosResponse } from "axios";

export type TWeatherResponse = {
  status: "success" | string;
} & IWeatherValueType;

export type WeatherResponse = AxiosResponse<TWeatherResponse>;
