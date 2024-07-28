const os = require('os');

function getOSInfo() {
    const info = {
        Nombre: os.hostname(),
        Tipo: os.type(),
        Versión: os.version(),
        Arquitectura: os.arch(),
        CPUs: os.cpus().length,
        MemoriaTotal: (os.totalmem() / (1024 ** 2)).toFixed(2) + ' MB',
        MemoriaLibre: (os.freemem() / (1024 ** 2)).toFixed(2) + ' MB'
    };
    return info;
}

module.exports = getOSInfo;