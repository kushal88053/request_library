const request = require('request-promise').defaults({
    proxy: "http://67.43.227.227:1679" // Proxy server's IP
});

(async () => {
    try {
        const body = await request('https://httpbin.org/ip');
        console.log('The IP address seen by httpbin is:', JSON.parse(body).origin);
    } catch (error) {
        console.error('Failed to retrieve IP:', error);
    }
})();
