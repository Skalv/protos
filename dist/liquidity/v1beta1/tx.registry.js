"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/liquidity.v1beta1.MsgCreatePool", tx_1.MsgCreatePool], ["/liquidity.v1beta1.MsgDepositWithinBatch", tx_1.MsgDepositWithinBatch], ["/liquidity.v1beta1.MsgWithdrawWithinBatch", tx_1.MsgWithdrawWithinBatch], ["/liquidity.v1beta1.MsgSwapWithinBatch", tx_1.MsgSwapWithinBatch], ["/liquidity.v1beta1.MsgDirectSwap", tx_1.MsgDirectSwap]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createPool(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgCreatePool",
                value: tx_1.MsgCreatePool.encode(value).finish()
            };
        },
        depositWithinBatch(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
                value: tx_1.MsgDepositWithinBatch.encode(value).finish()
            };
        },
        withdrawWithinBatch(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
                value: tx_1.MsgWithdrawWithinBatch.encode(value).finish()
            };
        },
        swap(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
                value: tx_1.MsgSwapWithinBatch.encode(value).finish()
            };
        },
        directSwap(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
                value: tx_1.MsgDirectSwap.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createPool(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgCreatePool",
                value
            };
        },
        depositWithinBatch(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
                value
            };
        },
        withdrawWithinBatch(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
                value
            };
        },
        swap(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
                value
            };
        },
        directSwap(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
                value
            };
        }
    },
    fromPartial: {
        createPool(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgCreatePool",
                value: tx_1.MsgCreatePool.fromPartial(value)
            };
        },
        depositWithinBatch(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
                value: tx_1.MsgDepositWithinBatch.fromPartial(value)
            };
        },
        withdrawWithinBatch(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
                value: tx_1.MsgWithdrawWithinBatch.fromPartial(value)
            };
        },
        swap(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
                value: tx_1.MsgSwapWithinBatch.fromPartial(value)
            };
        },
        directSwap(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
                value: tx_1.MsgDirectSwap.fromPartial(value)
            };
        }
    }
};
