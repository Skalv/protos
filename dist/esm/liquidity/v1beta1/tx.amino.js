//@ts-nocheck
import { MsgCreatePool, MsgDepositWithinBatch, MsgWithdrawWithinBatch, MsgSwapWithinBatch, MsgDirectSwap } from "./tx";
export const AminoConverter = {
    "/liquidity.v1beta1.MsgCreatePool": {
        aminoType: "/liquidity.v1beta1.MsgCreatePool",
        toAmino: MsgCreatePool.toAmino,
        fromAmino: MsgCreatePool.fromAmino
    },
    "/liquidity.v1beta1.MsgDepositWithinBatch": {
        aminoType: "/liquidity.v1beta1.MsgDepositWithinBatch",
        toAmino: MsgDepositWithinBatch.toAmino,
        fromAmino: MsgDepositWithinBatch.fromAmino
    },
    "/liquidity.v1beta1.MsgWithdrawWithinBatch": {
        aminoType: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
        toAmino: MsgWithdrawWithinBatch.toAmino,
        fromAmino: MsgWithdrawWithinBatch.fromAmino
    },
    "/liquidity.v1beta1.MsgSwapWithinBatch": {
        aminoType: "/liquidity.v1beta1.MsgSwapWithinBatch",
        toAmino: MsgSwapWithinBatch.toAmino,
        fromAmino: MsgSwapWithinBatch.fromAmino
    },
    "/liquidity.v1beta1.MsgDirectSwap": {
        aminoType: "/liquidity.v1beta1.MsgDirectSwap",
        toAmino: MsgDirectSwap.toAmino,
        fromAmino: MsgDirectSwap.fromAmino
    }
};
