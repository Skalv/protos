import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Params {
    /** Set the status to active to indicate that the contract is to be executed in begin blocker. */
    isExecutionEnabled: boolean;
    /** registry_contract is the address of the registry contract that will be used to register contract executions in begin blocker. */
    registryContract: string;
    /** Maximum aggregate total gas to be used for the contract executions in the BeginBlocker. */
    maxBeginBlockTotalGas: bigint;
    /** the maximum gas limit each individual contract can consume in the BeginBlocker. */
    maxContractGasLimit: bigint;
    /** min_gas_price defines the minimum gas price the contracts must pay to be executed in the BeginBlocker. */
    minGasPrice: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/injective.wasmx.v1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /** Set the status to active to indicate that the contract is to be executed in begin blocker. */
    is_execution_enabled?: boolean;
    /** registry_contract is the address of the registry contract that will be used to register contract executions in begin blocker. */
    registry_contract?: string;
    /** Maximum aggregate total gas to be used for the contract executions in the BeginBlocker. */
    max_begin_block_total_gas?: string;
    /** the maximum gas limit each individual contract can consume in the BeginBlocker. */
    max_contract_gas_limit?: string;
    /** min_gas_price defines the minimum gas price the contracts must pay to be executed in the BeginBlocker. */
    min_gas_price?: string;
}
export interface ParamsAminoMsg {
    type: "/injective.wasmx.v1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    is_execution_enabled: boolean;
    registry_contract: string;
    max_begin_block_total_gas: bigint;
    max_contract_gas_limit: bigint;
    min_gas_price: string;
}
export interface ContractRegistrationRequestProposal {
    title: string;
    description: string;
    contractRegistrationRequest: ContractRegistrationRequest;
}
export interface ContractRegistrationRequestProposalProtoMsg {
    typeUrl: "/injective.wasmx.v1.ContractRegistrationRequestProposal";
    value: Uint8Array;
}
export interface ContractRegistrationRequestProposalAmino {
    title?: string;
    description?: string;
    contract_registration_request?: ContractRegistrationRequestAmino;
}
export interface ContractRegistrationRequestProposalAminoMsg {
    type: "/injective.wasmx.v1.ContractRegistrationRequestProposal";
    value: ContractRegistrationRequestProposalAmino;
}
export interface ContractRegistrationRequestProposalSDKType {
    title: string;
    description: string;
    contract_registration_request: ContractRegistrationRequestSDKType;
}
export interface BatchContractRegistrationRequestProposal {
    title: string;
    description: string;
    contractRegistrationRequests: ContractRegistrationRequest[];
}
export interface BatchContractRegistrationRequestProposalProtoMsg {
    typeUrl: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal";
    value: Uint8Array;
}
export interface BatchContractRegistrationRequestProposalAmino {
    title?: string;
    description?: string;
    contract_registration_requests?: ContractRegistrationRequestAmino[];
}
export interface BatchContractRegistrationRequestProposalAminoMsg {
    type: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal";
    value: BatchContractRegistrationRequestProposalAmino;
}
export interface BatchContractRegistrationRequestProposalSDKType {
    title: string;
    description: string;
    contract_registration_requests: ContractRegistrationRequestSDKType[];
}
export interface ContractRegistrationRequest {
    /** Unique Identifier for contract instance to be registered. */
    contractAddress: string;
    /** Maximum gas to be used for the smart contract execution. */
    gasLimit: bigint;
    /** gas price to be used for the smart contract execution. */
    gasPrice: string;
    pinContract: boolean;
}
export interface ContractRegistrationRequestProtoMsg {
    typeUrl: "/injective.wasmx.v1.ContractRegistrationRequest";
    value: Uint8Array;
}
export interface ContractRegistrationRequestAmino {
    /** Unique Identifier for contract instance to be registered. */
    contract_address?: string;
    /** Maximum gas to be used for the smart contract execution. */
    gas_limit?: string;
    /** gas price to be used for the smart contract execution. */
    gas_price?: string;
    pin_contract?: boolean;
}
export interface ContractRegistrationRequestAminoMsg {
    type: "/injective.wasmx.v1.ContractRegistrationRequest";
    value: ContractRegistrationRequestAmino;
}
export interface ContractRegistrationRequestSDKType {
    contract_address: string;
    gas_limit: bigint;
    gas_price: string;
    pin_contract: boolean;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const ContractRegistrationRequestProposal: {
    typeUrl: string;
    encode(message: ContractRegistrationRequestProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractRegistrationRequestProposal;
    fromPartial(object: Partial<ContractRegistrationRequestProposal>): ContractRegistrationRequestProposal;
    fromAmino(object: ContractRegistrationRequestProposalAmino): ContractRegistrationRequestProposal;
    toAmino(message: ContractRegistrationRequestProposal): ContractRegistrationRequestProposalAmino;
    fromAminoMsg(object: ContractRegistrationRequestProposalAminoMsg): ContractRegistrationRequestProposal;
    fromProtoMsg(message: ContractRegistrationRequestProposalProtoMsg): ContractRegistrationRequestProposal;
    toProto(message: ContractRegistrationRequestProposal): Uint8Array;
    toProtoMsg(message: ContractRegistrationRequestProposal): ContractRegistrationRequestProposalProtoMsg;
};
export declare const BatchContractRegistrationRequestProposal: {
    typeUrl: string;
    encode(message: BatchContractRegistrationRequestProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchContractRegistrationRequestProposal;
    fromPartial(object: Partial<BatchContractRegistrationRequestProposal>): BatchContractRegistrationRequestProposal;
    fromAmino(object: BatchContractRegistrationRequestProposalAmino): BatchContractRegistrationRequestProposal;
    toAmino(message: BatchContractRegistrationRequestProposal): BatchContractRegistrationRequestProposalAmino;
    fromAminoMsg(object: BatchContractRegistrationRequestProposalAminoMsg): BatchContractRegistrationRequestProposal;
    fromProtoMsg(message: BatchContractRegistrationRequestProposalProtoMsg): BatchContractRegistrationRequestProposal;
    toProto(message: BatchContractRegistrationRequestProposal): Uint8Array;
    toProtoMsg(message: BatchContractRegistrationRequestProposal): BatchContractRegistrationRequestProposalProtoMsg;
};
export declare const ContractRegistrationRequest: {
    typeUrl: string;
    encode(message: ContractRegistrationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractRegistrationRequest;
    fromPartial(object: Partial<ContractRegistrationRequest>): ContractRegistrationRequest;
    fromAmino(object: ContractRegistrationRequestAmino): ContractRegistrationRequest;
    toAmino(message: ContractRegistrationRequest): ContractRegistrationRequestAmino;
    fromAminoMsg(object: ContractRegistrationRequestAminoMsg): ContractRegistrationRequest;
    fromProtoMsg(message: ContractRegistrationRequestProtoMsg): ContractRegistrationRequest;
    toProto(message: ContractRegistrationRequest): Uint8Array;
    toProtoMsg(message: ContractRegistrationRequest): ContractRegistrationRequestProtoMsg;
};
