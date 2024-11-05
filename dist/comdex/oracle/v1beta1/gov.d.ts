import { BinaryReader, BinaryWriter } from "../../../binary";
export interface UpdateAdminProposal {
    title: string;
    description: string;
    address: string;
}
export interface UpdateAdminProposalProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.UpdateAdminProposal";
    value: Uint8Array;
}
export interface UpdateAdminProposalAmino {
    title?: string;
    description?: string;
    address?: string;
}
export interface UpdateAdminProposalAminoMsg {
    type: "/comdex.oracle.v1beta1.UpdateAdminProposal";
    value: UpdateAdminProposalAmino;
}
export interface UpdateAdminProposalSDKType {
    title: string;
    description: string;
    address: string;
}
export declare const UpdateAdminProposal: {
    typeUrl: string;
    encode(message: UpdateAdminProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateAdminProposal;
    fromPartial(object: Partial<UpdateAdminProposal>): UpdateAdminProposal;
    fromAmino(object: UpdateAdminProposalAmino): UpdateAdminProposal;
    toAmino(message: UpdateAdminProposal): UpdateAdminProposalAmino;
    fromAminoMsg(object: UpdateAdminProposalAminoMsg): UpdateAdminProposal;
    fromProtoMsg(message: UpdateAdminProposalProtoMsg): UpdateAdminProposal;
    toProto(message: UpdateAdminProposal): Uint8Array;
    toProtoMsg(message: UpdateAdminProposal): UpdateAdminProposalProtoMsg;
};
