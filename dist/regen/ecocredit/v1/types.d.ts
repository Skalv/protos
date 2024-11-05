import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { CreditType, CreditTypeAmino, CreditTypeSDKType } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface Params {
    /** credit_class_fee is the fixed fee charged on creation of a new credit class */
    creditClassFee: Coin[];
    /** basket_fee is the fixed fee charged on creation of a new basket */
    basketFee: Coin[];
    /**
     * allowed_class_creators is an allowlist defining the addresses with
     * the required permissions to create credit classes
     */
    allowedClassCreators: string[];
    /**
     * allowlist_enabled is a param that enables/disables the allowlist for credit
     * creation
     */
    allowlistEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/regen.ecocredit.v1.Params";
    value: Uint8Array;
}
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface ParamsAmino {
    /** credit_class_fee is the fixed fee charged on creation of a new credit class */
    credit_class_fee?: CoinAmino[];
    /** basket_fee is the fixed fee charged on creation of a new basket */
    basket_fee?: CoinAmino[];
    /**
     * allowed_class_creators is an allowlist defining the addresses with
     * the required permissions to create credit classes
     */
    allowed_class_creators?: string[];
    /**
     * allowlist_enabled is a param that enables/disables the allowlist for credit
     * creation
     */
    allowlist_enabled?: boolean;
}
export interface ParamsAminoMsg {
    type: "/regen.ecocredit.v1.Params";
    value: ParamsAmino;
}
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface ParamsSDKType {
    credit_class_fee: CoinSDKType[];
    basket_fee: CoinSDKType[];
    allowed_class_creators: string[];
    allowlist_enabled: boolean;
}
/**
 * OriginTx is a reference to an external transaction or an operation
 * related to an action on Regen Ledger.
 */
export interface OriginTx {
    /**
     * type of the transaction originating the mint process. Eg: Polygon,
     * Ethereum, Verra...
     */
    typ: string;
    /** the id of a transaction based on a type (tx id, serial number) */
    id: string;
}
export interface OriginTxProtoMsg {
    typeUrl: "/regen.ecocredit.v1.OriginTx";
    value: Uint8Array;
}
/**
 * OriginTx is a reference to an external transaction or an operation
 * related to an action on Regen Ledger.
 */
export interface OriginTxAmino {
    /**
     * type of the transaction originating the mint process. Eg: Polygon,
     * Ethereum, Verra...
     */
    typ?: string;
    /** the id of a transaction based on a type (tx id, serial number) */
    id?: string;
}
export interface OriginTxAminoMsg {
    type: "/regen.ecocredit.v1.OriginTx";
    value: OriginTxAmino;
}
/**
 * OriginTx is a reference to an external transaction or an operation
 * related to an action on Regen Ledger.
 */
export interface OriginTxSDKType {
    typ: string;
    id: string;
}
/** CreditTypeProposal is a gov Content type for adding a credit type. */
export interface CreditTypeProposal {
    /** title is the title of the proposal. */
    title: string;
    /** description is the description of the proposal. */
    description: string;
    /**
     * credit_type is the credit type to be added to the network if the proposal
     * passes.
     */
    creditType?: CreditType;
}
export interface CreditTypeProposalProtoMsg {
    typeUrl: "/regen.ecocredit.v1.CreditTypeProposal";
    value: Uint8Array;
}
/** CreditTypeProposal is a gov Content type for adding a credit type. */
export interface CreditTypeProposalAmino {
    /** title is the title of the proposal. */
    title?: string;
    /** description is the description of the proposal. */
    description?: string;
    /**
     * credit_type is the credit type to be added to the network if the proposal
     * passes.
     */
    credit_type?: CreditTypeAmino;
}
export interface CreditTypeProposalAminoMsg {
    type: "/regen.ecocredit.v1.CreditTypeProposal";
    value: CreditTypeProposalAmino;
}
/** CreditTypeProposal is a gov Content type for adding a credit type. */
export interface CreditTypeProposalSDKType {
    title: string;
    description: string;
    credit_type?: CreditTypeSDKType;
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
export declare const OriginTx: {
    typeUrl: string;
    encode(message: OriginTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OriginTx;
    fromPartial(object: Partial<OriginTx>): OriginTx;
    fromAmino(object: OriginTxAmino): OriginTx;
    toAmino(message: OriginTx): OriginTxAmino;
    fromAminoMsg(object: OriginTxAminoMsg): OriginTx;
    fromProtoMsg(message: OriginTxProtoMsg): OriginTx;
    toProto(message: OriginTx): Uint8Array;
    toProtoMsg(message: OriginTx): OriginTxProtoMsg;
};
export declare const CreditTypeProposal: {
    typeUrl: string;
    encode(message: CreditTypeProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CreditTypeProposal;
    fromPartial(object: Partial<CreditTypeProposal>): CreditTypeProposal;
    fromAmino(object: CreditTypeProposalAmino): CreditTypeProposal;
    toAmino(message: CreditTypeProposal): CreditTypeProposalAmino;
    fromAminoMsg(object: CreditTypeProposalAminoMsg): CreditTypeProposal;
    fromProtoMsg(message: CreditTypeProposalProtoMsg): CreditTypeProposal;
    toProto(message: CreditTypeProposal): Uint8Array;
    toProtoMsg(message: CreditTypeProposal): CreditTypeProposalProtoMsg;
};
