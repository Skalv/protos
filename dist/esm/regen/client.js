//@ts-nocheck
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as regenDataV1TxRegistry from "./data/v1/tx.registry";
import * as regenDataV1alpha2TxRegistry from "./data/v1alpha2/tx.registry";
import * as regenEcocreditBasketV1TxRegistry from "./ecocredit/basket/v1/tx.registry";
import * as regenEcocreditMarketplaceV1TxRegistry from "./ecocredit/marketplace/v1/tx.registry";
import * as regenEcocreditV1TxRegistry from "./ecocredit/v1/tx.registry";
import * as regenEcocreditV1alpha1TxRegistry from "./ecocredit/v1alpha1/tx.registry";
import * as regenGroupV1alpha1TxRegistry from "./group/v1alpha1/tx.registry";
import * as regenDataV1TxAmino from "./data/v1/tx.amino";
import * as regenDataV1alpha2TxAmino from "./data/v1alpha2/tx.amino";
import * as regenEcocreditBasketV1TxAmino from "./ecocredit/basket/v1/tx.amino";
import * as regenEcocreditMarketplaceV1TxAmino from "./ecocredit/marketplace/v1/tx.amino";
import * as regenEcocreditV1TxAmino from "./ecocredit/v1/tx.amino";
import * as regenEcocreditV1alpha1TxAmino from "./ecocredit/v1alpha1/tx.amino";
import * as regenGroupV1alpha1TxAmino from "./group/v1alpha1/tx.amino";
export const regenAminoConverters = {
    ...regenDataV1TxAmino.AminoConverter,
    ...regenDataV1alpha2TxAmino.AminoConverter,
    ...regenEcocreditBasketV1TxAmino.AminoConverter,
    ...regenEcocreditMarketplaceV1TxAmino.AminoConverter,
    ...regenEcocreditV1TxAmino.AminoConverter,
    ...regenEcocreditV1alpha1TxAmino.AminoConverter,
    ...regenGroupV1alpha1TxAmino.AminoConverter
};
export const regenProtoRegistry = [...regenDataV1TxRegistry.registry, ...regenDataV1alpha2TxRegistry.registry, ...regenEcocreditBasketV1TxRegistry.registry, ...regenEcocreditMarketplaceV1TxRegistry.registry, ...regenEcocreditV1TxRegistry.registry, ...regenEcocreditV1alpha1TxRegistry.registry, ...regenGroupV1alpha1TxRegistry.registry];
export const getSigningRegenClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...regenProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...regenAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningRegenClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningRegenClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
