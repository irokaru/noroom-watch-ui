import {
  createRoomInfomation,
  RoomInformation,
} from "@/domain/RoomInfomations";
import { get } from "@/infrastructure/RoomAPI";

export const fetchRoomInfomation =
  async (): Promise<RoomInformation | null> => {
    try {
      const res = await get();
      const room = res.data;

      if (room.status !== "success") {
        return null;
      }

      return createRoomInfomation(room);
    } catch (_) {
      return null;
    }
  };
