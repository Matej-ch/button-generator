export default {
    install: (app, options) => {
        // inject a globally available $hexToRgba() method
        app.config.globalProperties.$hexToRgba = (hex,alpha) => {
            let value = hex.match(/[A-Za-z0-9]{2}/g);

            value = value.map(function(v) { return parseInt(v, 16) });

            return "rgb(" + value.join(",") + ',' + alpha + ")";
        }
    }
}