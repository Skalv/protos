import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const umeeAminoConverters: {
    "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1/tx").MsgAggregateExchangeRatePrevote) => import("./oracle/v1/tx").MsgAggregateExchangeRatePrevoteAmino;
        fromAmino: (object: import("./oracle/v1/tx").MsgAggregateExchangeRatePrevoteAmino) => import("./oracle/v1/tx").MsgAggregateExchangeRatePrevote;
    };
    "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1/tx").MsgAggregateExchangeRateVote) => import("./oracle/v1/tx").MsgAggregateExchangeRateVoteAmino;
        fromAmino: (object: import("./oracle/v1/tx").MsgAggregateExchangeRateVoteAmino) => import("./oracle/v1/tx").MsgAggregateExchangeRateVote;
    };
    "/umee.oracle.v1.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1/tx").MsgDelegateFeedConsent) => import("./oracle/v1/tx").MsgDelegateFeedConsentAmino;
        fromAmino: (object: import("./oracle/v1/tx").MsgDelegateFeedConsentAmino) => import("./oracle/v1/tx").MsgDelegateFeedConsent;
    };
    "/umee.leverage.v1.MsgSupply": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgSupply) => import("./leverage/v1/tx").MsgSupplyAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgSupplyAmino) => import("./leverage/v1/tx").MsgSupply;
    };
    "/umee.leverage.v1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgWithdraw) => import("./leverage/v1/tx").MsgWithdrawAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgWithdrawAmino) => import("./leverage/v1/tx").MsgWithdraw;
    };
    "/umee.leverage.v1.MsgCollateralize": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgCollateralize) => import("./leverage/v1/tx").MsgCollateralizeAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgCollateralizeAmino) => import("./leverage/v1/tx").MsgCollateralize;
    };
    "/umee.leverage.v1.MsgDecollateralize": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgDecollateralize) => import("./leverage/v1/tx").MsgDecollateralizeAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgDecollateralizeAmino) => import("./leverage/v1/tx").MsgDecollateralize;
    };
    "/umee.leverage.v1.MsgBorrow": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgBorrow) => import("./leverage/v1/tx").MsgBorrowAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgBorrowAmino) => import("./leverage/v1/tx").MsgBorrow;
    };
    "/umee.leverage.v1.MsgRepay": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgRepay) => import("./leverage/v1/tx").MsgRepayAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgRepayAmino) => import("./leverage/v1/tx").MsgRepay;
    };
    "/umee.leverage.v1.MsgLiquidate": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgLiquidate) => import("./leverage/v1/tx").MsgLiquidateAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgLiquidateAmino) => import("./leverage/v1/tx").MsgLiquidate;
    };
};
export declare const umeeProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningUmeeClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningUmeeClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
