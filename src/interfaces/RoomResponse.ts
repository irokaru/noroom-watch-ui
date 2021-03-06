import { IRoomInfomationValueType } from "#/domain/RoomInfomations";
import { AxiosResponse } from "axios";

export type TRoomResponse = {
  status: "success" | string;
} & IRoomInfomationValueType;

export type RoomResponse = AxiosResponse<TRoomResponse>;
