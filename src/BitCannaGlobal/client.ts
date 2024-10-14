//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as bcnaTxRegistry from "../bcna/tx.registry";
import * as bcnaTxAmino from "../bcna/tx.amino";
export const bitCannaGlobalAminoConverters = {
  ...bcnaTxAmino.AminoConverter
};
export const bitCannaGlobalProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...bcnaTxRegistry.registry];
export const getSigningBitCannaGlobalClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...bitCannaGlobalProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...bitCannaGlobalAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningBitCannaGlobalClient = async ({
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
  } = getSigningBitCannaGlobalClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};