//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as liquidityV1beta1TxRegistry from "./v1beta1/tx.registry";
import * as liquidityV1beta1TxAmino from "./v1beta1/tx.amino";
export const liquidityAminoConverters = {
  ...liquidityV1beta1TxAmino.AminoConverter
};
export const liquidityProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...liquidityV1beta1TxRegistry.registry];
export const getSigningLiquidityClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...liquidityProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...liquidityAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningLiquidityClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningLiquidityClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};