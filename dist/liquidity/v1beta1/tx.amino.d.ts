import { MsgCreatePool, MsgDepositWithinBatch, MsgWithdrawWithinBatch, MsgSwapWithinBatch, MsgDirectSwap } from "./tx";
export declare const AminoConverter: {
    "/liquidity.v1beta1.MsgCreatePool": {
        aminoType: string;
        toAmino: (message: MsgCreatePool) => import("./tx").MsgCreatePoolAmino;
        fromAmino: (object: import("./tx").MsgCreatePoolAmino) => MsgCreatePool;
    };
    "/liquidity.v1beta1.MsgDepositWithinBatch": {
        aminoType: string;
        toAmino: (message: MsgDepositWithinBatch) => import("./tx").MsgDepositWithinBatchAmino;
        fromAmino: (object: import("./tx").MsgDepositWithinBatchAmino) => MsgDepositWithinBatch;
    };
    "/liquidity.v1beta1.MsgWithdrawWithinBatch": {
        aminoType: string;
        toAmino: (message: MsgWithdrawWithinBatch) => import("./tx").MsgWithdrawWithinBatchAmino;
        fromAmino: (object: import("./tx").MsgWithdrawWithinBatchAmino) => MsgWithdrawWithinBatch;
    };
    "/liquidity.v1beta1.MsgSwapWithinBatch": {
        aminoType: string;
        toAmino: (message: MsgSwapWithinBatch) => import("./tx").MsgSwapWithinBatchAmino;
        fromAmino: (object: import("./tx").MsgSwapWithinBatchAmino) => MsgSwapWithinBatch;
    };
    "/liquidity.v1beta1.MsgDirectSwap": {
        aminoType: string;
        toAmino: (message: MsgDirectSwap) => import("./tx").MsgDirectSwapAmino;
        fromAmino: (object: import("./tx").MsgDirectSwapAmino) => MsgDirectSwap;
    };
};
