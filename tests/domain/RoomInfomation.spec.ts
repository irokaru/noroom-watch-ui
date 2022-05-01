import { createRoomInfomation } from "#/domain/RoomInfomations";

describe("RoomInfomation", () => {
  test("RoomInfomationが生成されるか", () => {
    const params = {
      temperature: 25,
      humidity: 50,
    };

    const result = createRoomInfomation(params);
    expect(params).toEqual(result.getJson());
  });
});
