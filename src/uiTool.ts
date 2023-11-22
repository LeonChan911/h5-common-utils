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
  element.addEventListener("touchmove", preventDefaultTouchMove, {
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
  element.removeEventListener("touchmove", preventDefaultTouchMove);
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

/**
 * @description: 16进制转RGB
 * @param {
 *          hexColor: string;
 *          opacity: number;
 *       }
 * @return string;
 */

export const hColor2RGB = (hexColor: string, opacity: number) => {
  if (hexColor.slice(0, 1) === "#") {
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

/**
 * @description: requestAnimationFrame的封装
 * @param {
 *          fn: () => void;
 *          delay: number;
 *       }
 * @return () => void)
 */

export const setTimeOuts = (fn: () => void, delay: number): (() => void) => {
  let timer: number;
  const stime = +new Date();
  const loop = () => {
    const etime = +new Date();
    if (stime + delay <= etime) {
      fn();
      return;
    }
    timer = requestAnimationFrame(loop);
  };
  timer = requestAnimationFrame(loop);
  return () => {
    cancelAnimationFrame(timer);
  };
};

/**
 * @description: 转换成rem
 * @param {
 *          px: number;
 *          designPx: number; 75/37.5
 *          isNumber:boolean
 *       }
 * @return () => void)
 */
export const turnRem = (
  px: number,
  designPx: 75 | 37.5,
  isNumber?: boolean
) => {
  const rootFontSize = +document.documentElement.style.fontSize.slice(0, -2);
  if (isNumber) {
    return Number((px / designPx) * rootFontSize);
  }
  return `${(px / 75) * rootFontSize}px`;
};

/**
 * @description: 底纹词动画
 * @param {
 *        size: number; data.length
*         interval: number;
*         height: number; 底纹词高度
 *       }
 * @return () => void)
 */

export const animationAndKeyFrame = ({
  size,
  interval,
  height,
}: {
  size: number;
  interval: number;
  height: number;
}) => {
  const time = size * interval;
  const section = 100 / (size + 0.1);
  let str = `animation: switch ${time}s ease-out infinite;@keyframes switch {0%{top:${
    height / 2
  };}`;
  for (let i = 0; i < size; i++) {
    const start = (i + 0.06) * section;
    const end =
      i !== size - 1
        ? (i + 0.06 + 0.87) * section
        : (i + 0.06 + 0.97) * section;
    const top = height * i;
    const str_ = `${start}%,${end}%{top:-${top}}`;
    str =
      i !== size - 1
        ? str + str_
        : `${str + str_}100%{top:-${height * i + height / 2}}}`;
  }
  return str;
};
