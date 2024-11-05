//@ts-nocheck
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as umeeLeverageV1TxRegistry from "./leverage/v1/tx.registry";
import * as umeeOracleV1TxRegistry from "./oracle/v1/tx.registry";
import * as umeeLeverageV1TxAmino from "./leverage/v1/tx.amino";
import * as umeeOracleV1TxAmino from "./oracle/v1/tx.amino";
export const umeeAminoConverters = {
    ...umeeLeverageV1TxAmino.AminoConverter,
    ...umeeOracleV1TxAmino.AminoConverter
};
export const umeeProtoRegistry = [...umeeLeverageV1TxRegistry.registry, ...umeeOracleV1TxRegistry.registry];
export const getSigningUmeeClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...umeeProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...umeeAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningUmeeClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningUmeeClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
