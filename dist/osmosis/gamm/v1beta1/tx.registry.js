"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/osmosis.gamm.v1beta1.MsgJoinPool", tx_1.MsgJoinPool], ["/osmosis.gamm.v1beta1.MsgExitPool", tx_1.MsgExitPool], ["/osmosis.gamm.v1beta1.MsgSwapExactAmountIn", tx_1.MsgSwapExactAmountIn], ["/osmosis.gamm.v1beta1.MsgSwapExactAmountOut", tx_1.MsgSwapExactAmountOut], ["/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn", tx_1.MsgJoinSwapExternAmountIn], ["/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut", tx_1.MsgJoinSwapShareAmountOut], ["/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut", tx_1.MsgExitSwapExternAmountOut], ["/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn", tx_1.MsgExitSwapShareAmountIn]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        joinPool(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
                value: tx_1.MsgJoinPool.encode(value).finish()
            };
        },
        exitPool(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
                value: tx_1.MsgExitPool.encode(value).finish()
            };
        },
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
                value: tx_1.MsgSwapExactAmountIn.encode(value).finish()
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
                value: tx_1.MsgSwapExactAmountOut.encode(value).finish()
            };
        },
        joinSwapExternAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
                value: tx_1.MsgJoinSwapExternAmountIn.encode(value).finish()
            };
        },
        joinSwapShareAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
                value: tx_1.MsgJoinSwapShareAmountOut.encode(value).finish()
            };
        },
        exitSwapExternAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
                value: tx_1.MsgExitSwapExternAmountOut.encode(value).finish()
            };
        },
        exitSwapShareAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
                value: tx_1.MsgExitSwapShareAmountIn.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        joinPool(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
                value
            };
        },
        exitPool(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
                value
            };
        },
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
                value
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
                value
            };
        },
        joinSwapExternAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
                value
            };
        },
        joinSwapShareAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
                value
            };
        },
        exitSwapExternAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
                value
            };
        },
        exitSwapShareAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
                value
            };
        }
    },
    fromPartial: {
        joinPool(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
                value: tx_1.MsgJoinPool.fromPartial(value)
            };
        },
        exitPool(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
                value: tx_1.MsgExitPool.fromPartial(value)
            };
        },
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
                value: tx_1.MsgSwapExactAmountIn.fromPartial(value)
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
                value: tx_1.MsgSwapExactAmountOut.fromPartial(value)
            };
        },
        joinSwapExternAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
                value: tx_1.MsgJoinSwapExternAmountIn.fromPartial(value)
            };
        },
        joinSwapShareAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
                value: tx_1.MsgJoinSwapShareAmountOut.fromPartial(value)
            };
        },
        exitSwapExternAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
                value: tx_1.MsgExitSwapExternAmountOut.fromPartial(value)
            };
        },
        exitSwapShareAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
                value: tx_1.MsgExitSwapShareAmountIn.fromPartial(value)
            };
        }
    }
};
