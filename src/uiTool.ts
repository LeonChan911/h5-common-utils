/**
* @description: 获得滚动最大ScrollTop 
* @param {
*         element?: HTMLElement
*       }
* @return {number}
*/
export const getScrollTop = (element?: HTMLElement) => {
  if (element) {
    return element.scrollTop;
  }

  return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
};

/**
 * @description: 获得滚动最大ScrollHeight
 * @param {
*         element?: HTMLElement
*       }
* @return {number}
*/

export const getScrollHeight = (element?: HTMLElement) => {
  if (element) {
    return element.scrollHeight;
  }

  return Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollTop
  );
};


const preventDefaultTouchMove = (e: TouchEvent) => {
  e.preventDefault();
};

/**
 * @description: 禁止滚动
 * @param {
*         element?: HTMLElement
*       }
* @return {void}
*/
export const preventScroll = (
  element: HTMLElement = document.documentElement
) => {
  // eslint-disable-next-line
  element.addEventListener('touchmove', preventDefaultTouchMove, {
    passive: false,
  });
};

/**
 * @description: 允许滚动
*/
export const allowScroll = (
  element: HTMLElement = document.documentElement
) => {
  // eslint-disable-next-line
  element.removeEventListener('touchmove', preventDefaultTouchMove);
};

/**
 * @description: 瀑布流行列转化
 * @param {
*          columns: T[]
*       }
* @return { left: T[],right: T[]}
*/

export function columnToRow<T>(columns: T[]) {
  const left: T[] = [];
  const right: T[] = [];
  columns.forEach((item, index) => {
    if (index % 2 === 0) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  return {
    left,
    right,
  };
}

export const hColor2RGB = (hexColor: string, opacity: number) => {
  if (hexColor.slice(0, 1) === '#') {
    if (hexColor.length > 4) {
      const r = parseInt(hexColor.substring(1, 3), 16);
      const g = parseInt(hexColor.substring(3, 5), 16);
      const b = parseInt(hexColor.substring(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else {
      const r = parseInt(
        `${hexColor.substring(1, 2)}${hexColor.substring(1, 2)}`,
        16
      );
      const g = parseInt(
        `${hexColor.substring(2, 3)}${hexColor.substring(2, 3)}`,
        16
      );
      const b = parseInt(
        `${hexColor.substring(3, 4)}${hexColor.substring(3, 4)}`,
        16
      );
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
  } else {
    return hexColor;
  }
};