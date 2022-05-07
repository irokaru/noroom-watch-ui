import RoomComponent from "#/components/RoomComponent.vue";
import {
  createRoomInfomation,
  RoomInformation,
} from "#/domain/RoomInfomations";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { shallowMount } from "@vue/test-utils";

describe("RoomComponent", () => {
  test("入力値通りに文字列が出力されるか", () => {
    const suites: [Partial<RoomInformation>, string, string][] = [
      [{ temperature: 0, humidity: 0 }, "0.0℃", "0％"],
      [{ temperature: 12.3, humidity: 50 }, "12.3℃", "50％"],
      [{ temperature: 12.345, humidity: 60 }, "12.3℃", "60％"],
    ];

    for (const [room, expectTemparetureValue, expectHumidityValue] of suites) {
      const wrapper = shallowMount(RoomComponent, {
        props: { room: createRoomInfomation(room) },
        components: { fa: FontAwesomeIcon },
      });
      expect(wrapper.get("#room .temperature .value").text()).toEqual(
        expectTemparetureValue
      );
      expect(wrapper.get("#room .humidity .value").text()).toEqual(
        expectHumidityValue
      );
    }
  });
});
