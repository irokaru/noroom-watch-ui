/**
 * 日付をフォーマットを整えて返す
 * @param {string} date
 * @param {string} format
 * @returns {string}
 */
export const formatDate = (date: string, format: string): string => {
  if (!date) return "";

  const weekdayArray = ["日", "月", "火", "水", "木", "金", "土"];
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const weekday = weekdayArray[d.getDay()];
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const secounds = d.getSeconds();

  const replaceArray: { [key: string]: string | number } = {
    YYYY: year,
    Y: year,
    MM: String(month).padStart(2, "0"),
    M: month,
    dd: String(day).padStart(2, "0"),
    d: day,
    WW: weekday,
    hh: String(hours).padStart(2, "0"),
    h: hours,
    mm: String(minutes).padStart(2, "0"),
    m: minutes,
    ss: String(secounds).padStart(2, "0"),
    s: secounds,
  };

  const replaceStr = "(" + Object.keys(replaceArray).join("|") + ")";

  const regex = new RegExp(replaceStr, "g");
  const ret = format.replace(regex, (str) => String(replaceArray[str]));

  return ret;
};

/**
 * 時刻を比べるやつ
 * @param {string} t1
 * @param {string} exp
 * @param {string} t2
 * @returns {boolean}
 */
export const compare = (t1: string, exp: string, t2: string): boolean => {
  const d1 = Number(t1.replace(/:/g, ""));
  const d2 = Number(t2.replace(/:/g, ""));

  const map: { [key: string]: (arg0: number, arg1: number) => boolean } = {
    "<": (a, b) => a < b,
    "<=": (a, b) => a <= b,
    ">": (a, b) => a > b,
    ">=": (a, b) => a >= b,
  };

  return map[exp](d1, d2);
};
