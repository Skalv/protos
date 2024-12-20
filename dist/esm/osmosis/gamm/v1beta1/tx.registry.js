import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
export const registry = [["/osmosis.gamm.v1beta1.MsgJoinPool", MsgJoinPool], ["/osmosis.gamm.v1beta1.MsgExitPool", MsgExitPool], ["/osmosis.gamm.v1beta1.MsgSwapExactAmountIn", MsgSwapExactAmountIn], ["/osmosis.gamm.v1beta1.MsgSwapExactAmountOut", MsgSwapExactAmountOut], ["/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn", MsgJoinSwapExternAmountIn], ["/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut", MsgJoinSwapShareAmountOut], ["/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut", MsgExitSwapExternAmountOut], ["/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn", MsgExitSwapShareAmountIn]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        joinPool(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
                value: MsgJoinPool.encode(value).finish()
            };
        },
        exitPool(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
                value: MsgExitPool.encode(value).finish()
            };
        },
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
                value: MsgSwapExactAmountIn.encode(value).finish()
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
                value: MsgSwapExactAmountOut.encode(value).finish()
            };
        },
        joinSwapExternAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
                value: MsgJoinSwapExternAmountIn.encode(value).finish()
            };
        },
        joinSwapShareAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
                value: MsgJoinSwapShareAmountOut.encode(value).finish()
            };
        },
        exitSwapExternAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
                value: MsgExitSwapExternAmountOut.encode(value).finish()
            };
        },
        exitSwapShareAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
                value: MsgExitSwapShareAmountIn.encode(value).finish()
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
                value: MsgJoinPool.fromPartial(value)
            };
        },
        exitPool(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
                value: MsgExitPool.fromPartial(value)
            };
        },
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
                value: MsgSwapExactAmountIn.fromPartial(value)
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
                value: MsgSwapExactAmountOut.fromPartial(value)
            };
        },
        joinSwapExternAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
                value: MsgJoinSwapExternAmountIn.fromPartial(value)
            };
        },
        joinSwapShareAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
                value: MsgJoinSwapShareAmountOut.fromPartial(value)
            };
        },
        exitSwapExternAmountOut(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
                value: MsgExitSwapExternAmountOut.fromPartial(value)
            };
        },
        exitSwapShareAmountIn(value) {
            return {
                typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
                value: MsgExitSwapShareAmountIn.fromPartial(value)
            };
        }
    }
};
