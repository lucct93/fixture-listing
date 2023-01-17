"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.configProvider = exports.CONFIG = void 0;
const dotenv = require("dotenv");
const config = require("config");
exports.CONFIG = 'ConfigProviderToken';
exports.configProvider = {
    provide: exports.CONFIG,
    useFactory: () => {
        dotenv.config();
        return Promise.resolve().then(() => require('config'));
    },
};
const getConfig = () => {
    return config;
};
exports.getConfig = getConfig;
//# sourceMappingURL=config.provider.js.map