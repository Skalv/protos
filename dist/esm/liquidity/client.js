//@ts-nocheck
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as liquidityV1beta1TxRegistry from "./v1beta1/tx.registry";
import * as liquidityV1beta1TxAmino from "./v1beta1/tx.amino";
export const liquidityAminoConverters = {
    ...liquidityV1beta1TxAmino.AminoConverter
};
export const liquidityProtoRegistry = [...liquidityV1beta1TxRegistry.registry];
export const getSigningLiquidityClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...liquidityProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...liquidityAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningLiquidityClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningLiquidityClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
