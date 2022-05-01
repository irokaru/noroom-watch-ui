import { fetchRoomInfomation } from "#/application/services/RoomService";
import { get } from "#/infrastructure/RoomAPI";

jest.mock("#/infrastructure/RoomAPI");

describe("fetchRoomInfomation", () => {
  test("正常に取れるか", async () => {
    const returnValue = {
      data: {
        status: "success",
        temperature: 0,
        humidity: 0,
      },
    };

    (get as jest.Mock).mockImplementation(() => Promise.resolve(returnValue));

    const result = await fetchRoomInfomation();
    expect(result).toEqual(returnValue.data);
  });

  test("successじゃないときはエラー扱いになるか", async () => {
    const returnValue = {
      data: {
        status: "error",
        temperature: 25,
        humidity: 60,
      },
    };

    const expectValue = {
      status: "error",
      temperature: 0,
      humidity: 0,
    };

    (get as jest.Mock).mockImplementation(() => Promise.resolve(returnValue));

    const result = await fetchRoomInfomation();
    expect(result).toEqual(expectValue);
  });

  test("例外時にエラー扱いになるか", async () => {
    const expectValue = {
      status: "error",
      temperature: 0,
      humidity: 0,
    };

    (get as jest.Mock).mockImplementation(() =>
      Promise.reject({ status: "error" })
    );

    const result = await fetchRoomInfomation();
    expect(result).toEqual(expectValue);
  });
});
