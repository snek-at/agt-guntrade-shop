"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_MAP = void 0;
const shift_left_1 = require("shift-left");
const errors_1 = require("./errors");
const getErrorText = (context) => context.sourceMessage;
exports.ERROR_MAP = {
    [errors_1.pluginErrorCodes.bulkOperationFailed]: {
        text: getErrorText,
        level: `ERROR`,
        category: `USER`,
    },
    [errors_1.pluginErrorCodes.apiConflict]: {
        text: () => (0, shift_left_1.shiftLeft) `
    Your operation was canceled. You might have another production site for this Shopify store.

    Shopify only allows one bulk operation at a time for a given shop, so we recommend that you
    avoid having two production sites that point to the same Shopify store.

    If the duplication is intentional, please wait for the other operation to finish before trying
    again. Otherwise, consider deleting the other site or pointing it to a test store instead.
  `,
        level: `ERROR`,
        category: `USER`,
    },
    /**
     * If we don't know what it is, we haven't done our due
     * diligence to handle it explicitly. That means it's our
     * fault, so THIRD_PARTY indicates us, the plugin authors.
     */
    [errors_1.pluginErrorCodes.unknownSourcingFailure]: {
        text: getErrorText,
        level: `ERROR`,
        category: `THIRD_PARTY`,
    },
    [errors_1.pluginErrorCodes.unknownApiError]: {
        text: getErrorText,
        level: `ERROR`,
        category: `THIRD_PARTY`,
    },
};
//# sourceMappingURL=error-map.js.map