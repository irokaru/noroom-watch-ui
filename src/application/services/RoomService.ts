import { get } from "#/infrastructure/RoomAPI";
import { TRoomResponse } from "#/interfaces/RoomResponse";

export const fetchRoomInfomation = async (): Promise<TRoomResponse> => {
  try {
    const res = await get();
    const room = res.data;

    if (room.status !== "success") {
      return {
        status: "error",
        temperature: 0,
        humidity: 0,
      };
    }

    return room;
  } catch (_) {
    return {
      status: "error",
      temperature: 0,
      humidity: 0,
    };
  }
};
