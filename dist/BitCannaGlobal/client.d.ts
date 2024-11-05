import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const bitCannaGlobalAminoConverters: {
    "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid": {
        aminoType: string;
        toAmino: (message: import("../bcna/tx").MsgCreateBitcannaid) => import("../bcna/tx").MsgCreateBitcannaidAmino;
        fromAmino: (object: import("../bcna/tx").MsgCreateBitcannaidAmino) => import("../bcna/tx").MsgCreateBitcannaid;
    };
    "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid": {
        aminoType: string;
        toAmino: (message: import("../bcna/tx").MsgUpdateBitcannaid) => import("../bcna/tx").MsgUpdateBitcannaidAmino;
        fromAmino: (object: import("../bcna/tx").MsgUpdateBitcannaidAmino) => import("../bcna/tx").MsgUpdateBitcannaid;
    };
    "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid": {
        aminoType: string;
        toAmino: (message: import("../bcna/tx").MsgDeleteBitcannaid) => import("../bcna/tx").MsgDeleteBitcannaidAmino;
        fromAmino: (object: import("../bcna/tx").MsgDeleteBitcannaidAmino) => import("../bcna/tx").MsgDeleteBitcannaid;
    };
    "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain": {
        aminoType: string;
        toAmino: (message: import("../bcna/tx").MsgCreateSupplychain) => import("../bcna/tx").MsgCreateSupplychainAmino;
        fromAmino: (object: import("../bcna/tx").MsgCreateSupplychainAmino) => import("../bcna/tx").MsgCreateSupplychain;
    };
    "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain": {
        aminoType: string;
        toAmino: (message: import("../bcna/tx").MsgUpdateSupplychain) => import("../bcna/tx").MsgUpdateSupplychainAmino;
        fromAmino: (object: import("../bcna/tx").MsgUpdateSupplychainAmino) => import("../bcna/tx").MsgUpdateSupplychain;
    };
    "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain": {
        aminoType: string;
        toAmino: (message: import("../bcna/tx").MsgDeleteSupplychain) => import("../bcna/tx").MsgDeleteSupplychainAmino;
        fromAmino: (object: import("../bcna/tx").MsgDeleteSupplychainAmino) => import("../bcna/tx").MsgDeleteSupplychain;
    };
};
export declare const bitCannaGlobalProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningBitCannaGlobalClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningBitCannaGlobalClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
