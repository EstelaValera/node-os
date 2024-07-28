const getOSInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');

function printSystemInfo() {
    console.log('--- Información del Sistema Operativo ---');
    const osInfo = getOSInfo();
    for (const [key, value] of Object.entries(osInfo)) {
        console.log(`${key}: ${value}`);
    }

    console.log('\n--- Información de las Interfaces de Red ---');
    const networkInfo = getNetworkInfo();
    for (const [iface, infos] of Object.entries(networkInfo)) {
        console.log(`Interfaz ${iface}:`);
        infos.forEach(info => {
            console.log(`\tFamilia: ${info.Familia} Dirección: ${info.Dirección} Interno: ${info.Interno}`);
        });
    }
}

printSystemInfo();