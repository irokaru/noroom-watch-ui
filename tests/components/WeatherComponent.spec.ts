import WeatherComponent from "#/components/WeatherComponent.vue";
import { createWeather, Weather } from "#/domain/Weather";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { shallowMount } from "@vue/test-utils";

describe("WeatherComponent", () => {
  test("入力値通りにアイコンが表示されるか", () => {
    const suites: [Partial<Weather>, string][] = [
      [{ weather: "晴", temp_max: 0, temp_min: 0 }, "fas,sun"],
      [{ weather: "曇", temp_max: 0, temp_min: 0 }, "fas,cloud"],
      [{ weather: "雨", temp_max: 0, temp_min: 0 }, "fas,cloud-rain"],
      [{ weather: "雪", temp_max: 0, temp_min: 0 }, "fas,snowflake"],
      [{ weather: "あ", temp_max: 0, temp_min: 0 }, "fas,circle-question"],
    ];

    for (const [weather, expectIconTagValue] of suites) {
      const wrapper = shallowMount(WeatherComponent, {
        props: { weather: createWeather(weather) },
        components: { fa: FontAwesomeIcon },
      });
      expect(wrapper.get("#weather .main fa-stub").attributes().icon).toEqual(
        expectIconTagValue
      );
    }
  });

  test("入力値通りに温湿度が表示されるか", () => {
    const suites: [Partial<Weather>, string, string][] = [
      [{ weather: "晴", temp_max: 0, temp_min: 0 }, "0.0℃", "0.0℃"],
      [{ weather: "晴", temp_max: 12.3, temp_min: 12.3 }, "12.3℃", "12.3℃"],
      [{ weather: "晴", temp_max: 12.345, temp_min: 12.345 }, "12.3℃", "12.3℃"],
    ];

    for (const [weather, expectMaxTempValue, expectMinTempValue] of suites) {
      const wrapper = shallowMount(WeatherComponent, {
        props: { weather: createWeather(weather) },
        components: { fa: FontAwesomeIcon },
      });
      expect(wrapper.get("#weather .temp-box .temp-max").text()).toEqual(
        expectMaxTempValue
      );
      expect(wrapper.get("#weather .temp-box .temp-min").text()).toEqual(
        expectMinTempValue
      );
    }
  });
});
