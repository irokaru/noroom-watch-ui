export class IntervalManager {
  private static _instance: IntervalManager = new IntervalManager();
  private _intervals: { [key: string]: number } = {};

  constructor() {
    if (IntervalManager._instance)
      throw new Error("Use IntervalManager.getInstance() instead of new.");
    IntervalManager._instance = this;
  }

  public static getInstance(): IntervalManager {
    return IntervalManager._instance;
  }

  /**
   * インターバル処理を登録するやつ
   * @param {string} key
   * @param {Function} func
   * @param {number} ms
   * @param {any} instance
   */
  setInterval = (key: string, func: () => any, ms: number, instance?: any) => {
    const id = instance
      ? window.setInterval((() => func()).bind(instance), ms)
      : window.setInterval(() => func(), ms);
    this._intervals[key] = id;
  };

  /**
   * インターバル処理を登録しているかどうか
   * @param {string} key
   * @returns {boolean}
   */
  existsInterval = (key: string): boolean => {
    return key in this._intervals;
  };

  /**
   * インターバル処理を解除するやつ
   * @param {string} key
   * @returns {boolean}
   */
  clearInterval = (key: string): boolean => {
    if (!this.existsInterval(key)) return false;

    clearInterval(this._intervals[key]);
    delete this._intervals[key];

    return true;
  };
}
