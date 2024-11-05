import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const publicawesomeAminoConverters: {
    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
        aminoType: string;
        toAmino: (message: import("../stargaze/claim/v1beta1/tx").MsgInitialClaim) => import("../stargaze/claim/v1beta1/tx").MsgInitialClaimAmino;
        fromAmino: (object: import("../stargaze/claim/v1beta1/tx").MsgInitialClaimAmino) => import("../stargaze/claim/v1beta1/tx").MsgInitialClaim;
    };
    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: (message: import("../stargaze/claim/v1beta1/tx").MsgClaimFor) => import("../stargaze/claim/v1beta1/tx").MsgClaimForAmino;
        fromAmino: (object: import("../stargaze/claim/v1beta1/tx").MsgClaimForAmino) => import("../stargaze/claim/v1beta1/tx").MsgClaimFor;
    };
    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: (message: import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount) => import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccountAmino;
        fromAmino: (object: import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccountAmino) => import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount;
    };
};
export declare const publicawesomeProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPublicawesomeClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPublicawesomeClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
