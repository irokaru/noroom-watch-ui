import { RoomResponse } from "#/interfaces/RoomResponse";
import axios from "axios";

const ENDPOINT = "http://localhost:3000";

export const get = (): Promise<RoomResponse> => {
  return axios.get(`${ENDPOINT}/api/room`);
};
