const os = require('os');

function getNetworkInfo() {
    const interfaces = os.networkInterfaces();
    const result = {};

    for (const [name, infos] of Object.entries(interfaces)) {
        result[name] = infos.map(info => ({
            Familia: info.family,
            Dirección: info.address,
            Interno: info.internal
        }));
    }

    return result;
}

module.exports = getNetworkInfo;
