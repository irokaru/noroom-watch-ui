/**
 * 日付をフォーマットを整えて返す
 * @param {string | number | Date} date
 * @param {string} format
 * @returns {string}
 */
export const formatDate = (
  date: string | number | Date,
  format: string
): string => {
  const weekdayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

  return format.replace(regex, (str) => String(replaceArray[str]));
};

/**
 * 時刻を比べるやつ
 * @param {string} t1 hh:mm
 * @param {string} ope
 * @param {string} t2 hh:mm
 * @returns {boolean}
 */
export const compare = (t1: string, ope: string, t2: string): boolean => {
  const timeReg = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;

  if (!t1.match(timeReg)) throw new Error("t1 is not time format (hh:mm)");
  if (!t2.match(timeReg)) throw new Error("t2 is not time format (hh:mm)");

  const d1 = Number(t1.replace(/:/g, ""));
  const d2 = Number(t2.replace(/:/g, ""));

  const map: { [key: string]: (arg0: number, arg1: number) => boolean } = {
    "<": (a, b) => a < b,
    "<=": (a, b) => a <= b,
    ">": (a, b) => a > b,
    ">=": (a, b) => a >= b,
  };

  if (!Object.keys(map).includes(ope)) throw new Error("invalid ope");

  return map[ope](d1, d2);
};

/**
 * 間の時間かどうかの判定をする
 * @param now
 * @param startTime hh:mm
 * @param endTime hh:mm
 * @returns {boolean}
 */
export const between = (
  now: Date,
  startTime: string,
  endTime: string
): boolean => {
  const nowTime = formatDate(now, "hh:mm");

  return compare(startTime, "<=", endTime)
    ? compare(startTime, "<=", nowTime) && compare(nowTime, "<=", endTime)
    : compare(startTime, "<=", nowTime) || compare(nowTime, "<=", endTime);
};
