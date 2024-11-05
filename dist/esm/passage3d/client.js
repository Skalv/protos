//@ts-nocheck
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as passage3dClaimV1beta1TxRegistry from "./claim/v1beta1/tx.registry";
import * as passage3dClaimV1beta1TxAmino from "./claim/v1beta1/tx.amino";
export const passage3dAminoConverters = {
    ...passage3dClaimV1beta1TxAmino.AminoConverter
};
export const passage3dProtoRegistry = [...passage3dClaimV1beta1TxRegistry.registry];
export const getSigningPassage3dClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...passage3dProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...passage3dAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningPassage3dClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningPassage3dClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
