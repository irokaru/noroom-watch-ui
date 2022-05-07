import TimeComponent from "#/components/TimeComponent.vue";
import { shallowMount } from "@vue/test-utils";

describe("TimeComponent", () => {
  test("入力通りに文字列が出力されるか", () => {
    const suites: [Date, string, string][] = [
      [new Date(0), "01/01 Thu", "09:00:00"],
      [new Date(2022, 11, 31, 23, 59, 59), "12/31 Sat", "23:59:59"],
    ];

    for (const [date, expectDayValue, expectTimeValue] of suites) {
      const wrapper = shallowMount(TimeComponent, {
        props: { date },
      });
      expect(wrapper.get("#time .date").text()).toEqual(expectDayValue);
      expect(wrapper.get("#time .times").text()).toEqual(expectTimeValue);
    }
  });
});
