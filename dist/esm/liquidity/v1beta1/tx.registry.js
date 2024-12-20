import { MsgCreatePool, MsgDepositWithinBatch, MsgWithdrawWithinBatch, MsgSwapWithinBatch, MsgDirectSwap } from "./tx";
export const registry = [["/liquidity.v1beta1.MsgCreatePool", MsgCreatePool], ["/liquidity.v1beta1.MsgDepositWithinBatch", MsgDepositWithinBatch], ["/liquidity.v1beta1.MsgWithdrawWithinBatch", MsgWithdrawWithinBatch], ["/liquidity.v1beta1.MsgSwapWithinBatch", MsgSwapWithinBatch], ["/liquidity.v1beta1.MsgDirectSwap", MsgDirectSwap]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createPool(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgCreatePool",
                value: MsgCreatePool.encode(value).finish()
            };
        },
        depositWithinBatch(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
                value: MsgDepositWithinBatch.encode(value).finish()
            };
        },
        withdrawWithinBatch(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
                value: MsgWithdrawWithinBatch.encode(value).finish()
            };
        },
        swap(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
                value: MsgSwapWithinBatch.encode(value).finish()
            };
        },
        directSwap(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
                value: MsgDirectSwap.encode(value).finish()
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
                value: MsgCreatePool.fromPartial(value)
            };
        },
        depositWithinBatch(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
                value: MsgDepositWithinBatch.fromPartial(value)
            };
        },
        withdrawWithinBatch(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
                value: MsgWithdrawWithinBatch.fromPartial(value)
            };
        },
        swap(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
                value: MsgSwapWithinBatch.fromPartial(value)
            };
        },
        directSwap(value) {
            return {
                typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
                value: MsgDirectSwap.fromPartial(value)
            };
        }
    }
};
