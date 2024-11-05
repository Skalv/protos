import { OriginTx, OriginTxAmino, OriginTxSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClass {
    /** class_id is the unique identifier of the credit class. */
    classId: string;
}
export interface EventCreateClassProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventCreateClass";
    value: Uint8Array;
}
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClassAmino {
    /** class_id is the unique identifier of the credit class. */
    class_id?: string;
}
export interface EventCreateClassAminoMsg {
    type: "/regen.ecocredit.v1.EventCreateClass";
    value: EventCreateClassAmino;
}
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClassSDKType {
    class_id: string;
}
/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProject {
    /** project_id is the unique identifier of the project. */
    projectId: string;
}
export interface EventCreateProjectProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventCreateProject";
    value: Uint8Array;
}
/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProjectAmino {
    /** project_id is the unique identifier of the project. */
    project_id?: string;
}
export interface EventCreateProjectAminoMsg {
    type: "/regen.ecocredit.v1.EventCreateProject";
    value: EventCreateProjectAmino;
}
/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProjectSDKType {
    project_id: string;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatch {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
}
export interface EventCreateBatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventCreateBatch";
    value: Uint8Array;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatchAmino {
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
}
export interface EventCreateBatchAminoMsg {
    type: "/regen.ecocredit.v1.EventCreateBatch";
    value: EventCreateBatchAmino;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatchSDKType {
    batch_denom: string;
}
/** EventMint is an event emitted when credits are minted to a credit batch. */
export interface EventMint {
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were minted.
     */
    batchDenom: string;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the minting of credits within the credit batch.
     */
    originTx?: OriginTx;
}
export interface EventMintProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventMint";
    value: Uint8Array;
}
/** EventMint is an event emitted when credits are minted to a credit batch. */
export interface EventMintAmino {
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were minted.
     */
    batch_denom?: string;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the minting of credits within the credit batch.
     */
    origin_tx?: OriginTxAmino;
}
export interface EventMintAminoMsg {
    type: "/regen.ecocredit.v1.EventMint";
    value: EventMintAmino;
}
/** EventMint is an event emitted when credits are minted to a credit batch. */
export interface EventMintSDKType {
    batch_denom: string;
    origin_tx?: OriginTxSDKType;
}
/**
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */
export interface EventTransfer {
    /**
     * sender is the sender of the credits. In the case that the credits were
     * transferred from a base account, this will be the account address. In the
     * case that the credits were transferred from a module, this will be the
     * module address (i.e. either the ecocredit module or basket submodule).
     */
    sender: string;
    /**
     * recipient is the recipient of the credits. In the case that the credits
     * were transferred to a base account, this will be the account address. In
     * the case that the credits were transferred to a module, this will be the
     * module address (i.e. either the ecocredit module or basket submodule).
     */
    recipient: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /** tradable_amount is the decimal number of tradable credits received. */
    tradableAmount: string;
    /** retired_amount is the decimal number of retired credits received. */
    retiredAmount: string;
}
export interface EventTransferProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventTransfer";
    value: Uint8Array;
}
/**
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */
export interface EventTransferAmino {
    /**
     * sender is the sender of the credits. In the case that the credits were
     * transferred from a base account, this will be the account address. In the
     * case that the credits were transferred from a module, this will be the
     * module address (i.e. either the ecocredit module or basket submodule).
     */
    sender?: string;
    /**
     * recipient is the recipient of the credits. In the case that the credits
     * were transferred to a base account, this will be the account address. In
     * the case that the credits were transferred to a module, this will be the
     * module address (i.e. either the ecocredit module or basket submodule).
     */
    recipient?: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
    /** tradable_amount is the decimal number of tradable credits received. */
    tradable_amount?: string;
    /** retired_amount is the decimal number of retired credits received. */
    retired_amount?: string;
}
export interface EventTransferAminoMsg {
    type: "/regen.ecocredit.v1.EventTransfer";
    value: EventTransferAmino;
}
/**
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */
export interface EventTransferSDKType {
    sender: string;
    recipient: string;
    batch_denom: string;
    tradable_amount: string;
    retired_amount: string;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetire {
    /**
     * owner is the account that owns the retired credits. This will be the
     * account receiving credits in the case that credits were retired upon
     * issuance using Msg/CreateBatch, retired upon transfer using Msg/Send,
     * retired upon taking from a basket using basket.Msg/Take, or retired
     * upon purchase using marketplace.Msg/BuyDirect.
     */
    owner: string;
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were retired.
     */
    batchDenom: string;
    /** amount is the decimal number of credits that have been retired. */
    amount: string;
    /**
     * jurisdiction is the jurisdiction of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    jurisdiction: string;
}
export interface EventRetireProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventRetire";
    value: Uint8Array;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetireAmino {
    /**
     * owner is the account that owns the retired credits. This will be the
     * account receiving credits in the case that credits were retired upon
     * issuance using Msg/CreateBatch, retired upon transfer using Msg/Send,
     * retired upon taking from a basket using basket.Msg/Take, or retired
     * upon purchase using marketplace.Msg/BuyDirect.
     */
    owner?: string;
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were retired.
     */
    batch_denom?: string;
    /** amount is the decimal number of credits that have been retired. */
    amount?: string;
    /**
     * jurisdiction is the jurisdiction of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    jurisdiction?: string;
}
export interface EventRetireAminoMsg {
    type: "/regen.ecocredit.v1.EventRetire";
    value: EventRetireAmino;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetireSDKType {
    owner: string;
    batch_denom: string;
    amount: string;
    jurisdiction: string;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancel {
    /** owner is the account which has cancelled the credits. */
    owner: string;
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were cancelled.
     */
    batchDenom: string;
    /** amount is the decimal number of credits that have been cancelled. */
    amount: string;
}
export interface EventCancelProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventCancel";
    value: Uint8Array;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancelAmino {
    /** owner is the account which has cancelled the credits. */
    owner?: string;
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were cancelled.
     */
    batch_denom?: string;
    /** amount is the decimal number of credits that have been cancelled. */
    amount?: string;
}
export interface EventCancelAminoMsg {
    type: "/regen.ecocredit.v1.EventCancel";
    value: EventCancelAmino;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancelSDKType {
    owner: string;
    batch_denom: string;
    amount: string;
}
/**
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */
export interface EventUpdateClassAdmin {
    /** class_id is the unique identifier of the class that was updated. */
    classId: string;
}
export interface EventUpdateClassAdminProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventUpdateClassAdmin";
    value: Uint8Array;
}
/**
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */
export interface EventUpdateClassAdminAmino {
    /** class_id is the unique identifier of the class that was updated. */
    class_id?: string;
}
export interface EventUpdateClassAdminAminoMsg {
    type: "/regen.ecocredit.v1.EventUpdateClassAdmin";
    value: EventUpdateClassAdminAmino;
}
/**
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */
export interface EventUpdateClassAdminSDKType {
    class_id: string;
}
/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */
export interface EventUpdateClassIssuers {
    /** class_id is the unique identifier of the class that was updated. */
    classId: string;
}
export interface EventUpdateClassIssuersProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventUpdateClassIssuers";
    value: Uint8Array;
}
/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */
export interface EventUpdateClassIssuersAmino {
    /** class_id is the unique identifier of the class that was updated. */
    class_id?: string;
}
export interface EventUpdateClassIssuersAminoMsg {
    type: "/regen.ecocredit.v1.EventUpdateClassIssuers";
    value: EventUpdateClassIssuersAmino;
}
/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */
export interface EventUpdateClassIssuersSDKType {
    class_id: string;
}
/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */
export interface EventUpdateClassMetadata {
    /** class_id is the unique identifier of the class that was updated. */
    classId: string;
}
export interface EventUpdateClassMetadataProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventUpdateClassMetadata";
    value: Uint8Array;
}
/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */
export interface EventUpdateClassMetadataAmino {
    /** class_id is the unique identifier of the class that was updated. */
    class_id?: string;
}
export interface EventUpdateClassMetadataAminoMsg {
    type: "/regen.ecocredit.v1.EventUpdateClassMetadata";
    value: EventUpdateClassMetadataAmino;
}
/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */
export interface EventUpdateClassMetadataSDKType {
    class_id: string;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */
export interface EventUpdateProjectAdmin {
    /** project_id is the unique identifier of the project that was updated. */
    projectId: string;
}
export interface EventUpdateProjectAdminProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventUpdateProjectAdmin";
    value: Uint8Array;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */
export interface EventUpdateProjectAdminAmino {
    /** project_id is the unique identifier of the project that was updated. */
    project_id?: string;
}
export interface EventUpdateProjectAdminAminoMsg {
    type: "/regen.ecocredit.v1.EventUpdateProjectAdmin";
    value: EventUpdateProjectAdminAmino;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */
export interface EventUpdateProjectAdminSDKType {
    project_id: string;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */
export interface EventUpdateProjectMetadata {
    /** project_id is the unique identifier of the project that was updated. */
    projectId: string;
}
export interface EventUpdateProjectMetadataProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventUpdateProjectMetadata";
    value: Uint8Array;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */
export interface EventUpdateProjectMetadataAmino {
    /** project_id is the unique identifier of the project that was updated. */
    project_id?: string;
}
export interface EventUpdateProjectMetadataAminoMsg {
    type: "/regen.ecocredit.v1.EventUpdateProjectMetadata";
    value: EventUpdateProjectMetadataAmino;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */
export interface EventUpdateProjectMetadataSDKType {
    project_id: string;
}
/** EventSealBatch is emitted when a batch is sealed. */
export interface EventSealBatch {
    /** batch_denom is the denom of the batch that was sealed. */
    batchDenom: string;
}
export interface EventSealBatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventSealBatch";
    value: Uint8Array;
}
/** EventSealBatch is emitted when a batch is sealed. */
export interface EventSealBatchAmino {
    /** batch_denom is the denom of the batch that was sealed. */
    batch_denom?: string;
}
export interface EventSealBatchAminoMsg {
    type: "/regen.ecocredit.v1.EventSealBatch";
    value: EventSealBatchAmino;
}
/** EventSealBatch is emitted when a batch is sealed. */
export interface EventSealBatchSDKType {
    batch_denom: string;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */
export interface EventAddCreditType {
    /** abbreviation is the abbreviation of the credit type. */
    abbreviation: string;
}
export interface EventAddCreditTypeProtoMsg {
    typeUrl: "/regen.ecocredit.v1.EventAddCreditType";
    value: Uint8Array;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */
export interface EventAddCreditTypeAmino {
    /** abbreviation is the abbreviation of the credit type. */
    abbreviation?: string;
}
export interface EventAddCreditTypeAminoMsg {
    type: "/regen.ecocredit.v1.EventAddCreditType";
    value: EventAddCreditTypeAmino;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */
export interface EventAddCreditTypeSDKType {
    abbreviation: string;
}
export declare const EventCreateClass: {
    typeUrl: string;
    encode(message: EventCreateClass, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreateClass;
    fromPartial(object: Partial<EventCreateClass>): EventCreateClass;
    fromAmino(object: EventCreateClassAmino): EventCreateClass;
    toAmino(message: EventCreateClass): EventCreateClassAmino;
    fromAminoMsg(object: EventCreateClassAminoMsg): EventCreateClass;
    fromProtoMsg(message: EventCreateClassProtoMsg): EventCreateClass;
    toProto(message: EventCreateClass): Uint8Array;
    toProtoMsg(message: EventCreateClass): EventCreateClassProtoMsg;
};
export declare const EventCreateProject: {
    typeUrl: string;
    encode(message: EventCreateProject, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreateProject;
    fromPartial(object: Partial<EventCreateProject>): EventCreateProject;
    fromAmino(object: EventCreateProjectAmino): EventCreateProject;
    toAmino(message: EventCreateProject): EventCreateProjectAmino;
    fromAminoMsg(object: EventCreateProjectAminoMsg): EventCreateProject;
    fromProtoMsg(message: EventCreateProjectProtoMsg): EventCreateProject;
    toProto(message: EventCreateProject): Uint8Array;
    toProtoMsg(message: EventCreateProject): EventCreateProjectProtoMsg;
};
export declare const EventCreateBatch: {
    typeUrl: string;
    encode(message: EventCreateBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreateBatch;
    fromPartial(object: Partial<EventCreateBatch>): EventCreateBatch;
    fromAmino(object: EventCreateBatchAmino): EventCreateBatch;
    toAmino(message: EventCreateBatch): EventCreateBatchAmino;
    fromAminoMsg(object: EventCreateBatchAminoMsg): EventCreateBatch;
    fromProtoMsg(message: EventCreateBatchProtoMsg): EventCreateBatch;
    toProto(message: EventCreateBatch): Uint8Array;
    toProtoMsg(message: EventCreateBatch): EventCreateBatchProtoMsg;
};
export declare const EventMint: {
    typeUrl: string;
    encode(message: EventMint, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventMint;
    fromPartial(object: Partial<EventMint>): EventMint;
    fromAmino(object: EventMintAmino): EventMint;
    toAmino(message: EventMint): EventMintAmino;
    fromAminoMsg(object: EventMintAminoMsg): EventMint;
    fromProtoMsg(message: EventMintProtoMsg): EventMint;
    toProto(message: EventMint): Uint8Array;
    toProtoMsg(message: EventMint): EventMintProtoMsg;
};
export declare const EventTransfer: {
    typeUrl: string;
    encode(message: EventTransfer, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventTransfer;
    fromPartial(object: Partial<EventTransfer>): EventTransfer;
    fromAmino(object: EventTransferAmino): EventTransfer;
    toAmino(message: EventTransfer): EventTransferAmino;
    fromAminoMsg(object: EventTransferAminoMsg): EventTransfer;
    fromProtoMsg(message: EventTransferProtoMsg): EventTransfer;
    toProto(message: EventTransfer): Uint8Array;
    toProtoMsg(message: EventTransfer): EventTransferProtoMsg;
};
export declare const EventRetire: {
    typeUrl: string;
    encode(message: EventRetire, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventRetire;
    fromPartial(object: Partial<EventRetire>): EventRetire;
    fromAmino(object: EventRetireAmino): EventRetire;
    toAmino(message: EventRetire): EventRetireAmino;
    fromAminoMsg(object: EventRetireAminoMsg): EventRetire;
    fromProtoMsg(message: EventRetireProtoMsg): EventRetire;
    toProto(message: EventRetire): Uint8Array;
    toProtoMsg(message: EventRetire): EventRetireProtoMsg;
};
export declare const EventCancel: {
    typeUrl: string;
    encode(message: EventCancel, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCancel;
    fromPartial(object: Partial<EventCancel>): EventCancel;
    fromAmino(object: EventCancelAmino): EventCancel;
    toAmino(message: EventCancel): EventCancelAmino;
    fromAminoMsg(object: EventCancelAminoMsg): EventCancel;
    fromProtoMsg(message: EventCancelProtoMsg): EventCancel;
    toProto(message: EventCancel): Uint8Array;
    toProtoMsg(message: EventCancel): EventCancelProtoMsg;
};
export declare const EventUpdateClassAdmin: {
    typeUrl: string;
    encode(message: EventUpdateClassAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateClassAdmin;
    fromPartial(object: Partial<EventUpdateClassAdmin>): EventUpdateClassAdmin;
    fromAmino(object: EventUpdateClassAdminAmino): EventUpdateClassAdmin;
    toAmino(message: EventUpdateClassAdmin): EventUpdateClassAdminAmino;
    fromAminoMsg(object: EventUpdateClassAdminAminoMsg): EventUpdateClassAdmin;
    fromProtoMsg(message: EventUpdateClassAdminProtoMsg): EventUpdateClassAdmin;
    toProto(message: EventUpdateClassAdmin): Uint8Array;
    toProtoMsg(message: EventUpdateClassAdmin): EventUpdateClassAdminProtoMsg;
};
export declare const EventUpdateClassIssuers: {
    typeUrl: string;
    encode(message: EventUpdateClassIssuers, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateClassIssuers;
    fromPartial(object: Partial<EventUpdateClassIssuers>): EventUpdateClassIssuers;
    fromAmino(object: EventUpdateClassIssuersAmino): EventUpdateClassIssuers;
    toAmino(message: EventUpdateClassIssuers): EventUpdateClassIssuersAmino;
    fromAminoMsg(object: EventUpdateClassIssuersAminoMsg): EventUpdateClassIssuers;
    fromProtoMsg(message: EventUpdateClassIssuersProtoMsg): EventUpdateClassIssuers;
    toProto(message: EventUpdateClassIssuers): Uint8Array;
    toProtoMsg(message: EventUpdateClassIssuers): EventUpdateClassIssuersProtoMsg;
};
export declare const EventUpdateClassMetadata: {
    typeUrl: string;
    encode(message: EventUpdateClassMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateClassMetadata;
    fromPartial(object: Partial<EventUpdateClassMetadata>): EventUpdateClassMetadata;
    fromAmino(object: EventUpdateClassMetadataAmino): EventUpdateClassMetadata;
    toAmino(message: EventUpdateClassMetadata): EventUpdateClassMetadataAmino;
    fromAminoMsg(object: EventUpdateClassMetadataAminoMsg): EventUpdateClassMetadata;
    fromProtoMsg(message: EventUpdateClassMetadataProtoMsg): EventUpdateClassMetadata;
    toProto(message: EventUpdateClassMetadata): Uint8Array;
    toProtoMsg(message: EventUpdateClassMetadata): EventUpdateClassMetadataProtoMsg;
};
export declare const EventUpdateProjectAdmin: {
    typeUrl: string;
    encode(message: EventUpdateProjectAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateProjectAdmin;
    fromPartial(object: Partial<EventUpdateProjectAdmin>): EventUpdateProjectAdmin;
    fromAmino(object: EventUpdateProjectAdminAmino): EventUpdateProjectAdmin;
    toAmino(message: EventUpdateProjectAdmin): EventUpdateProjectAdminAmino;
    fromAminoMsg(object: EventUpdateProjectAdminAminoMsg): EventUpdateProjectAdmin;
    fromProtoMsg(message: EventUpdateProjectAdminProtoMsg): EventUpdateProjectAdmin;
    toProto(message: EventUpdateProjectAdmin): Uint8Array;
    toProtoMsg(message: EventUpdateProjectAdmin): EventUpdateProjectAdminProtoMsg;
};
export declare const EventUpdateProjectMetadata: {
    typeUrl: string;
    encode(message: EventUpdateProjectMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateProjectMetadata;
    fromPartial(object: Partial<EventUpdateProjectMetadata>): EventUpdateProjectMetadata;
    fromAmino(object: EventUpdateProjectMetadataAmino): EventUpdateProjectMetadata;
    toAmino(message: EventUpdateProjectMetadata): EventUpdateProjectMetadataAmino;
    fromAminoMsg(object: EventUpdateProjectMetadataAminoMsg): EventUpdateProjectMetadata;
    fromProtoMsg(message: EventUpdateProjectMetadataProtoMsg): EventUpdateProjectMetadata;
    toProto(message: EventUpdateProjectMetadata): Uint8Array;
    toProtoMsg(message: EventUpdateProjectMetadata): EventUpdateProjectMetadataProtoMsg;
};
export declare const EventSealBatch: {
    typeUrl: string;
    encode(message: EventSealBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventSealBatch;
    fromPartial(object: Partial<EventSealBatch>): EventSealBatch;
    fromAmino(object: EventSealBatchAmino): EventSealBatch;
    toAmino(message: EventSealBatch): EventSealBatchAmino;
    fromAminoMsg(object: EventSealBatchAminoMsg): EventSealBatch;
    fromProtoMsg(message: EventSealBatchProtoMsg): EventSealBatch;
    toProto(message: EventSealBatch): Uint8Array;
    toProtoMsg(message: EventSealBatch): EventSealBatchProtoMsg;
};
export declare const EventAddCreditType: {
    typeUrl: string;
    encode(message: EventAddCreditType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAddCreditType;
    fromPartial(object: Partial<EventAddCreditType>): EventAddCreditType;
    fromAmino(object: EventAddCreditTypeAmino): EventAddCreditType;
    toAmino(message: EventAddCreditType): EventAddCreditTypeAmino;
    fromAminoMsg(object: EventAddCreditTypeAminoMsg): EventAddCreditType;
    fromProtoMsg(message: EventAddCreditTypeProtoMsg): EventAddCreditType;
    toProto(message: EventAddCreditType): Uint8Array;
    toProtoMsg(message: EventAddCreditType): EventAddCreditTypeProtoMsg;
};
