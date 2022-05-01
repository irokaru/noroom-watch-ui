import {
  createRoomInfomation,
  RoomInformation,
} from "#/domain/RoomInfomations";
import { get } from "#/infrastructure/RoomAPI";

export const fetchRoomInfomation = async (): Promise<
  RoomInformation | { status: "error" }
> => {
  try {
    const res = await get();
    const room = res.data;

    if (room.status !== "success") {
      return {
        status: "error",
      };
    }

    return createRoomInfomation(room);
  } catch (_) {
    return {
      status: "error",
    };
  }
};
