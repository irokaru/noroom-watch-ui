/**
 * 全画面表示
 * @param {Document} element
 * @returns {void}
 */
export const onFull = (element: Document): void => {
  const elm = element.documentElement;
  elm.requestFullscreen();
};

/**
 * 全画面表示解除
 * @param {Document} element
 * @returns {void}
 */
export const offFull = (element: Document): void => {
  element.exitFullscreen();
};

/**
 * 全画面か否か
 * @param {Document} element
 * @returns {boolean}
 */
export const isFull = (element: Document): boolean => {
  return Boolean(element.fullscreenElement);
};

/**
 * 全画面表示切り替え
 * @param {Document} element
 * @returns {void}
 */
export const switchFull = (element: Document): void => {
  return isFull(element) ? offFull(element) : onFull(element);
};
