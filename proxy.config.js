const PROXY_CONFIG = [
    {
        context: [
            "/v1/telemetry"
        ],
        "target": 'https://telemetry-dev.theall.ai',
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true
    }
]

module.exports = PROXY_CONFIG;
