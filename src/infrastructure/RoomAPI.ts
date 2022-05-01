import { IRoomResponse } from "#/interfaces/RoomResponse";
import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export const get = (): Promise<IRoomResponse> => {
  return axios.get(`${ENDPOINT}/api/room`);
};
