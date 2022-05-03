import { App, Plugin } from "vue";

export const EventManager: Plugin = {
  install: (app: App, ..._options: any[]) => {
    const intervals: { [key: string]: number } = {};

    /**
     * インターバル処理を登録するやつ
     * @param {string} key
     * @param {Function} func
     * @param {number} ms
     */
    app.config.globalProperties.$setInterval = (
      key: string,
      func: () => any,
      ms: number
    ) => {
      const id = setInterval(() => func(), ms);
      intervals[key] = id;
    };

    /**
     * インターバル処理を登録しているかどうか
     * @param {string} key
     * @returns {boolean}
     */
    app.config.globalProperties.$existsInterval = (key: string): boolean => {
      return key in intervals;
    };

    /**
     * インターバル処理を解除するやつ
     * @param {string} key
     * @returns {boolean}
     */
    app.config.globalProperties.$clearInterval = (key: string): boolean => {
      if (!app.config.globalProperties.$existsInterval(key)) return false;

      clearInterval(intervals[key]);

      return true;
    };
  },
};
