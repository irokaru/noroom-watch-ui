import { WeatherResponse } from "#/interfaces/WeatherResponse";
import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export const get = (): Promise<WeatherResponse> => {
  return axios.get(`${ENDPOINT}/api/weather`);
};
