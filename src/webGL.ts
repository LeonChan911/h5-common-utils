/**
 * @description: 判断是否支持WebGL
 * @param {*}
 * @return {boolean}
 */
export const detectWebGLContext = () => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl')
        || canvas.getContext('experimental-webgl');
    if (gl && gl instanceof WebGLRenderingContext) {
        const ext = gl.getExtension('OES_texture_float');
        if (ext) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}