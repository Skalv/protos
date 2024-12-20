import { BinaryReader, BinaryWriter } from "../../../binary";
export interface BlacklistEthereumAddressesProposal {
    title: string;
    description: string;
    blacklistAddresses: string[];
}
export interface BlacklistEthereumAddressesProposalProtoMsg {
    typeUrl: "/injective.peggy.v1.BlacklistEthereumAddressesProposal";
    value: Uint8Array;
}
export interface BlacklistEthereumAddressesProposalAmino {
    title?: string;
    description?: string;
    blacklist_addresses?: string[];
}
export interface BlacklistEthereumAddressesProposalAminoMsg {
    type: "/injective.peggy.v1.BlacklistEthereumAddressesProposal";
    value: BlacklistEthereumAddressesProposalAmino;
}
export interface BlacklistEthereumAddressesProposalSDKType {
    title: string;
    description: string;
    blacklist_addresses: string[];
}
export interface RevokeEthereumBlacklistProposal {
    title: string;
    description: string;
    blacklistAddresses: string[];
}
export interface RevokeEthereumBlacklistProposalProtoMsg {
    typeUrl: "/injective.peggy.v1.RevokeEthereumBlacklistProposal";
    value: Uint8Array;
}
export interface RevokeEthereumBlacklistProposalAmino {
    title?: string;
    description?: string;
    blacklist_addresses?: string[];
}
export interface RevokeEthereumBlacklistProposalAminoMsg {
    type: "/injective.peggy.v1.RevokeEthereumBlacklistProposal";
    value: RevokeEthereumBlacklistProposalAmino;
}
export interface RevokeEthereumBlacklistProposalSDKType {
    title: string;
    description: string;
    blacklist_addresses: string[];
}
export declare const BlacklistEthereumAddressesProposal: {
    typeUrl: string;
    encode(message: BlacklistEthereumAddressesProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlacklistEthereumAddressesProposal;
    fromPartial(object: Partial<BlacklistEthereumAddressesProposal>): BlacklistEthereumAddressesProposal;
    fromAmino(object: BlacklistEthereumAddressesProposalAmino): BlacklistEthereumAddressesProposal;
    toAmino(message: BlacklistEthereumAddressesProposal): BlacklistEthereumAddressesProposalAmino;
    fromAminoMsg(object: BlacklistEthereumAddressesProposalAminoMsg): BlacklistEthereumAddressesProposal;
    fromProtoMsg(message: BlacklistEthereumAddressesProposalProtoMsg): BlacklistEthereumAddressesProposal;
    toProto(message: BlacklistEthereumAddressesProposal): Uint8Array;
    toProtoMsg(message: BlacklistEthereumAddressesProposal): BlacklistEthereumAddressesProposalProtoMsg;
};
export declare const RevokeEthereumBlacklistProposal: {
    typeUrl: string;
    encode(message: RevokeEthereumBlacklistProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RevokeEthereumBlacklistProposal;
    fromPartial(object: Partial<RevokeEthereumBlacklistProposal>): RevokeEthereumBlacklistProposal;
    fromAmino(object: RevokeEthereumBlacklistProposalAmino): RevokeEthereumBlacklistProposal;
    toAmino(message: RevokeEthereumBlacklistProposal): RevokeEthereumBlacklistProposalAmino;
    fromAminoMsg(object: RevokeEthereumBlacklistProposalAminoMsg): RevokeEthereumBlacklistProposal;
    fromProtoMsg(message: RevokeEthereumBlacklistProposalProtoMsg): RevokeEthereumBlacklistProposal;
    toProto(message: RevokeEthereumBlacklistProposal): Uint8Array;
    toProtoMsg(message: RevokeEthereumBlacklistProposal): RevokeEthereumBlacklistProposalProtoMsg;
};
