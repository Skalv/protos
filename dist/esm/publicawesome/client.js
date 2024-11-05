//@ts-nocheck
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as stargazeAllocV1beta1TxRegistry from "../stargaze/alloc/v1beta1/tx.registry";
import * as stargazeClaimV1beta1TxRegistry from "../stargaze/claim/v1beta1/tx.registry";
import * as stargazeAllocV1beta1TxAmino from "../stargaze/alloc/v1beta1/tx.amino";
import * as stargazeClaimV1beta1TxAmino from "../stargaze/claim/v1beta1/tx.amino";
export const publicawesomeAminoConverters = {
    ...stargazeAllocV1beta1TxAmino.AminoConverter,
    ...stargazeClaimV1beta1TxAmino.AminoConverter
};
export const publicawesomeProtoRegistry = [...stargazeAllocV1beta1TxRegistry.registry, ...stargazeClaimV1beta1TxRegistry.registry];
export const getSigningPublicawesomeClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...publicawesomeProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...publicawesomeAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningPublicawesomeClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningPublicawesomeClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
