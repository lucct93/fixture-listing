"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmptyAndApplyTypeOrmOperator = void 0;
const typeorm_1 = require("typeorm");
function removeEmptyAndApplyTypeOrmOperator(object, equalExceptions) {
    const newObj = {};
    Object.keys(object).forEach((k) => {
        if (object[k] === Object(object[k]))
            newObj[k] = removeEmptyAndApplyTypeOrmOperator(object[k], equalExceptions);
        else if (object[k] !== undefined && !equalExceptions.includes(k))
            newObj[k] = (0, typeorm_1.Like)(`%${object[k]}%`);
        else if (object[k] !== undefined)
            newObj[k] = object[k];
    });
    return newObj;
}
exports.removeEmptyAndApplyTypeOrmOperator = removeEmptyAndApplyTypeOrmOperator;
//# sourceMappingURL=helpers.js.map