//@ts-nocheck
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as bcnaTxRegistry from "../bcna/tx.registry";
import * as bcnaTxAmino from "../bcna/tx.amino";
export const bitCannaGlobalAminoConverters = {
    ...bcnaTxAmino.AminoConverter
};
export const bitCannaGlobalProtoRegistry = [...bcnaTxRegistry.registry];
export const getSigningBitCannaGlobalClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...bitCannaGlobalProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...bitCannaGlobalAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningBitCannaGlobalClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningBitCannaGlobalClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
