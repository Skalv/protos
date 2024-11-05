import { Token, TokenAmino, TokenSDKType } from "./leverage";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * UpdateRegistryProposal defines a governance proposal type where the token
 * registry can be updated in the Umee capital facility. Note, the registry
 * defined in the proposal replaces the current registry in its entirety.
 */
export interface UpdateRegistryProposal {
    title: string;
    description: string;
    registry: Token[];
}
export interface UpdateRegistryProposalProtoMsg {
    typeUrl: "/umee.leverage.v1.UpdateRegistryProposal";
    value: Uint8Array;
}
/**
 * UpdateRegistryProposal defines a governance proposal type where the token
 * registry can be updated in the Umee capital facility. Note, the registry
 * defined in the proposal replaces the current registry in its entirety.
 */
export interface UpdateRegistryProposalAmino {
    title?: string;
    description?: string;
    registry?: TokenAmino[];
}
export interface UpdateRegistryProposalAminoMsg {
    type: "/umee.leverage.v1.UpdateRegistryProposal";
    value: UpdateRegistryProposalAmino;
}
/**
 * UpdateRegistryProposal defines a governance proposal type where the token
 * registry can be updated in the Umee capital facility. Note, the registry
 * defined in the proposal replaces the current registry in its entirety.
 */
export interface UpdateRegistryProposalSDKType {
    title: string;
    description: string;
    registry: TokenSDKType[];
}
export declare const UpdateRegistryProposal: {
    typeUrl: string;
    encode(message: UpdateRegistryProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateRegistryProposal;
    fromPartial(object: Partial<UpdateRegistryProposal>): UpdateRegistryProposal;
    fromAmino(object: UpdateRegistryProposalAmino): UpdateRegistryProposal;
    toAmino(message: UpdateRegistryProposal): UpdateRegistryProposalAmino;
    fromAminoMsg(object: UpdateRegistryProposalAminoMsg): UpdateRegistryProposal;
    fromProtoMsg(message: UpdateRegistryProposalProtoMsg): UpdateRegistryProposal;
    toProto(message: UpdateRegistryProposal): Uint8Array;
    toProtoMsg(message: UpdateRegistryProposal): UpdateRegistryProposalProtoMsg;
};
