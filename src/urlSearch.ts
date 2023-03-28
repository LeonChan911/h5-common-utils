import qs from 'qs';

/**
 * @description: 获取url参数
 * @param {
*       param: string
*       }
* @return {string | undefined}
*/

export const getQueryParams = (param: string): string | undefined => {
    const queryObj = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
    });
    if (!queryObj || !queryObj[param]) {
        return;
    }
    const paramValue = queryObj[param];

    return (Array.isArray(paramValue) ? paramValue[0] : paramValue) as string;
};

/**
 * @description: 替换更新url参数
 * @param {
*      uri: string, key: string, value: string
*       }
* @return {string}
*/
export const updateQueryStringParameter = (uri: string, key: string, value: string): string => {
    if (!value) {
        return uri;
    }
    const re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    const separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
}