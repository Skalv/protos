import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const liquidityAminoConverters: {
    "/liquidity.v1beta1.MsgCreatePool": {
        aminoType: string;
        toAmino: (message: import("./v1beta1/tx").MsgCreatePool) => import("./v1beta1/tx").MsgCreatePoolAmino;
        fromAmino: (object: import("./v1beta1/tx").MsgCreatePoolAmino) => import("./v1beta1/tx").MsgCreatePool;
    };
    "/liquidity.v1beta1.MsgDepositWithinBatch": {
        aminoType: string;
        toAmino: (message: import("./v1beta1/tx").MsgDepositWithinBatch) => import("./v1beta1/tx").MsgDepositWithinBatchAmino;
        fromAmino: (object: import("./v1beta1/tx").MsgDepositWithinBatchAmino) => import("./v1beta1/tx").MsgDepositWithinBatch;
    };
    "/liquidity.v1beta1.MsgWithdrawWithinBatch": {
        aminoType: string;
        toAmino: (message: import("./v1beta1/tx").MsgWithdrawWithinBatch) => import("./v1beta1/tx").MsgWithdrawWithinBatchAmino;
        fromAmino: (object: import("./v1beta1/tx").MsgWithdrawWithinBatchAmino) => import("./v1beta1/tx").MsgWithdrawWithinBatch;
    };
    "/liquidity.v1beta1.MsgSwapWithinBatch": {
        aminoType: string;
        toAmino: (message: import("./v1beta1/tx").MsgSwapWithinBatch) => import("./v1beta1/tx").MsgSwapWithinBatchAmino;
        fromAmino: (object: import("./v1beta1/tx").MsgSwapWithinBatchAmino) => import("./v1beta1/tx").MsgSwapWithinBatch;
    };
    "/liquidity.v1beta1.MsgDirectSwap": {
        aminoType: string;
        toAmino: (message: import("./v1beta1/tx").MsgDirectSwap) => import("./v1beta1/tx").MsgDirectSwapAmino;
        fromAmino: (object: import("./v1beta1/tx").MsgDirectSwapAmino) => import("./v1beta1/tx").MsgDirectSwap;
    };
};
export declare const liquidityProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningLiquidityClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningLiquidityClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
