import ShadowWrapper from "#/components/ShadowWrapper.vue";
import { shallowMount } from "@vue/test-utils";

describe("ShadowWrapper", () => {
  test("isNightによってclassの値が変更される", () => {
    const suites: [boolean, string[]][] = [
      [true, ["is-night"]],
      [false, []],
    ];

    for (const [isNight, expectClassesValue] of suites) {
      const wrapper = shallowMount(ShadowWrapper, {
        props: { isNight },
      });
      expect(wrapper.get("#shadow").classes()).toEqual(expectClassesValue);
    }
  });
});
