import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export const registry = [["/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool", MsgCreateStableswapPool], ["/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors", MsgStableSwapAdjustScalingFactors]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createStableswapPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
                value: MsgCreateStableswapPool.encode(value).finish()
            };
        },
        stableSwapAdjustScalingFactors(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
                value: MsgStableSwapAdjustScalingFactors.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createStableswapPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
                value
            };
        },
        stableSwapAdjustScalingFactors(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
                value
            };
        }
    },
    fromPartial: {
        createStableswapPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
                value: MsgCreateStableswapPool.fromPartial(value)
            };
        },
        stableSwapAdjustScalingFactors(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
                value: MsgStableSwapAdjustScalingFactors.fromPartial(value)
            };
        }
    }
};
