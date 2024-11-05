"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn", tx_1.MsgSwapExactAmountIn], ["/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut", tx_1.MsgSwapExactAmountOut]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
                value: tx_1.MsgSwapExactAmountIn.encode(value).finish()
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
                value: tx_1.MsgSwapExactAmountOut.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
                value
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
                value
            };
        }
    },
    fromPartial: {
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
                value: tx_1.MsgSwapExactAmountIn.fromPartial(value)
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
                value: tx_1.MsgSwapExactAmountOut.fromPartial(value)
            };
        }
    }
};
