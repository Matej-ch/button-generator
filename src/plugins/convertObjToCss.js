export default {
    install: (app, options) => {
        // inject a globally available $hexToRgba() method
        app.config.globalProperties.$objToCss = (obj) => {
            Object.keys(obj).forEach((key) => (obj[key] === "") && delete obj[key]);
            return JSON.stringify(obj)
                .replace(/['"]+/g,'')
                .replace(/,+/g,'; ')
                .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
                .toLowerCase();
        }
    }
}