import { Action } from "./claim_record";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface ClaimAuthorization {
    contractAddress: string;
    action: Action;
}
export interface ClaimAuthorizationProtoMsg {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization";
    value: Uint8Array;
}
export interface ClaimAuthorizationAmino {
    contract_address?: string;
    action?: Action;
}
export interface ClaimAuthorizationAminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization";
    value: ClaimAuthorizationAmino;
}
export interface ClaimAuthorizationSDKType {
    contract_address: string;
    action: Action;
}
/** Params defines the claim module's parameters. */
export interface Params {
    airdropEnabled: boolean;
    airdropStartTime: Date;
    durationUntilDecay: Duration;
    durationOfDecay: Duration;
    /** denom of claimable asset */
    claimDenom: string;
    /** list of contracts and their allowed claim actions */
    allowedClaimers: ClaimAuthorization[];
}
export interface ParamsProtoMsg {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the claim module's parameters. */
export interface ParamsAmino {
    airdrop_enabled?: boolean;
    airdrop_start_time?: string;
    duration_until_decay?: DurationAmino;
    duration_of_decay?: DurationAmino;
    /** denom of claimable asset */
    claim_denom?: string;
    /** list of contracts and their allowed claim actions */
    allowed_claimers: ClaimAuthorizationAmino[];
}
export interface ParamsAminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
    airdrop_enabled: boolean;
    airdrop_start_time: Date;
    duration_until_decay: DurationSDKType;
    duration_of_decay: DurationSDKType;
    claim_denom: string;
    allowed_claimers: ClaimAuthorizationSDKType[];
}
export declare const ClaimAuthorization: {
    typeUrl: string;
    encode(message: ClaimAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimAuthorization;
    fromPartial(object: Partial<ClaimAuthorization>): ClaimAuthorization;
    fromAmino(object: ClaimAuthorizationAmino): ClaimAuthorization;
    toAmino(message: ClaimAuthorization): ClaimAuthorizationAmino;
    fromAminoMsg(object: ClaimAuthorizationAminoMsg): ClaimAuthorization;
    fromProtoMsg(message: ClaimAuthorizationProtoMsg): ClaimAuthorization;
    toProto(message: ClaimAuthorization): Uint8Array;
    toProtoMsg(message: ClaimAuthorization): ClaimAuthorizationProtoMsg;
};
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
