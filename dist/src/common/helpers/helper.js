"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypeOrmOptions = void 0;
const config_1 = require("../config");
function createTypeOrmOptions(uriConfigPath) {
    const typeormOptions = (0, config_1.getConfig)().get(uriConfigPath);
    return typeormOptions;
}
exports.createTypeOrmOptions = createTypeOrmOptions;
//# sourceMappingURL=helper.js.map