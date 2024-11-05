import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditType {
    /**
     * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
     * name, used in batch denominations within the CreditType. It must be unique.
     */
    abbreviation: string;
    /** name is the name of the credit type (e.g. carbon, biodiversity). */
    name: string;
    /** unit is the measurement unit of the credit type (e.g. kg, ton). */
    unit: string;
    /** precision is the decimal precision of the credit type. */
    precision: number;
}
export interface CreditTypeProtoMsg {
    typeUrl: "/regen.ecocredit.v1.CreditType";
    value: Uint8Array;
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditTypeAmino {
    /**
     * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
     * name, used in batch denominations within the CreditType. It must be unique.
     */
    abbreviation?: string;
    /** name is the name of the credit type (e.g. carbon, biodiversity). */
    name?: string;
    /** unit is the measurement unit of the credit type (e.g. kg, ton). */
    unit?: string;
    /** precision is the decimal precision of the credit type. */
    precision?: number;
}
export interface CreditTypeAminoMsg {
    type: "/regen.ecocredit.v1.CreditType";
    value: CreditTypeAmino;
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditTypeSDKType {
    abbreviation: string;
    name: string;
    unit: string;
    precision: number;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface Class {
    /**
     * key is the table row identifier of the credit class used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: bigint;
    /**
     * id is the unique identifier of the credit class auto-generated from the
     * credit type abbreviation and the credit class sequence number.
     */
    id: string;
    /** admin is the admin of the credit class. */
    admin: Uint8Array;
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: string;
    /** credit_type_abbrev is the abbreviation of the credit type. */
    creditTypeAbbrev: string;
}
export interface ClassProtoMsg {
    typeUrl: "/regen.ecocredit.v1.Class";
    value: Uint8Array;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface ClassAmino {
    /**
     * key is the table row identifier of the credit class used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key?: string;
    /**
     * id is the unique identifier of the credit class auto-generated from the
     * credit type abbreviation and the credit class sequence number.
     */
    id?: string;
    /** admin is the admin of the credit class. */
    admin?: string;
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata?: string;
    /** credit_type_abbrev is the abbreviation of the credit type. */
    credit_type_abbrev?: string;
}
export interface ClassAminoMsg {
    type: "/regen.ecocredit.v1.Class";
    value: ClassAmino;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface ClassSDKType {
    key: bigint;
    id: string;
    admin: Uint8Array;
    metadata: string;
    credit_type_abbrev: string;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuer {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a class issuer to a credit class.
     */
    classKey: bigint;
    /** issuer is the approved issuer of the credit class. */
    issuer: Uint8Array;
}
export interface ClassIssuerProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ClassIssuer";
    value: Uint8Array;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuerAmino {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a class issuer to a credit class.
     */
    class_key?: string;
    /** issuer is the approved issuer of the credit class. */
    issuer?: string;
}
export interface ClassIssuerAminoMsg {
    type: "/regen.ecocredit.v1.ClassIssuer";
    value: ClassIssuerAmino;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuerSDKType {
    class_key: bigint;
    issuer: Uint8Array;
}
/** Project represents the high-level on-chain information for a project. */
export interface Project {
    /**
     * key is the table row identifier of the project used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: bigint;
    /**
     * id is the unique identifier of the project either auto-generated from the
     * credit class id and project sequence number or provided upon creation.
     */
    id: string;
    /** admin is the admin of the project. */
    admin: Uint8Array;
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project to a credit class.
     */
    classKey: bigint;
    /**
     * jurisdiction is the jurisdiction of the project.
     * Full documentation can be found in MsgCreateProject.jurisdiction.
     */
    jurisdiction: string;
    /** metadata is any arbitrary metadata attached to the project. */
    metadata: string;
    /** reference_id is any arbitrary string used to reference the project. */
    referenceId: string;
}
export interface ProjectProtoMsg {
    typeUrl: "/regen.ecocredit.v1.Project";
    value: Uint8Array;
}
/** Project represents the high-level on-chain information for a project. */
export interface ProjectAmino {
    /**
     * key is the table row identifier of the project used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key?: string;
    /**
     * id is the unique identifier of the project either auto-generated from the
     * credit class id and project sequence number or provided upon creation.
     */
    id?: string;
    /** admin is the admin of the project. */
    admin?: string;
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project to a credit class.
     */
    class_key?: string;
    /**
     * jurisdiction is the jurisdiction of the project.
     * Full documentation can be found in MsgCreateProject.jurisdiction.
     */
    jurisdiction?: string;
    /** metadata is any arbitrary metadata attached to the project. */
    metadata?: string;
    /** reference_id is any arbitrary string used to reference the project. */
    reference_id?: string;
}
export interface ProjectAminoMsg {
    type: "/regen.ecocredit.v1.Project";
    value: ProjectAmino;
}
/** Project represents the high-level on-chain information for a project. */
export interface ProjectSDKType {
    key: bigint;
    id: string;
    admin: Uint8Array;
    class_key: bigint;
    jurisdiction: string;
    metadata: string;
    reference_id: string;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface Batch {
    /**
     * key is the table row identifier of the credit batch used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: bigint;
    /**
     * issuer is the address that created the batch and which is
     * authorized to mint more credits if open=true.
     */
    issuer: Uint8Array;
    /**
     * project_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a credit batch to a project.
     */
    projectKey: bigint;
    /**
     * denom is the unique identifier of the credit batch formed from the
     * project id, the batch sequence number, and the start and end date of the
     * credit batch.
     */
    denom: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    startDate?: Date;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate?: Date;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuanceDate?: Date;
    /**
     * open tells if it's possible to mint new credits in the future.
     * Once `open` is set to false, it can't be toggled any more.
     */
    open: boolean;
}
export interface BatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1.Batch";
    value: Uint8Array;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface BatchAmino {
    /**
     * key is the table row identifier of the credit batch used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key?: string;
    /**
     * issuer is the address that created the batch and which is
     * authorized to mint more credits if open=true.
     */
    issuer?: string;
    /**
     * project_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a credit batch to a project.
     */
    project_key?: string;
    /**
     * denom is the unique identifier of the credit batch formed from the
     * project id, the batch sequence number, and the start and end date of the
     * credit batch.
     */
    denom?: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata?: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    start_date?: string;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    end_date?: string;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuance_date?: string;
    /**
     * open tells if it's possible to mint new credits in the future.
     * Once `open` is set to false, it can't be toggled any more.
     */
    open?: boolean;
}
export interface BatchAminoMsg {
    type: "/regen.ecocredit.v1.Batch";
    value: BatchAmino;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface BatchSDKType {
    key: bigint;
    issuer: Uint8Array;
    project_key: bigint;
    denom: string;
    metadata: string;
    start_date?: Date;
    end_date?: Date;
    issuance_date?: Date;
    open: boolean;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequence {
    /**
     * credit_type_abbrev is the credit type abbreviation. This links a class
     * sequence to a credit type.
     */
    creditTypeAbbrev: string;
    /**
     * next_sequence is the next sequence number for a credit class within the
     * credit type. The sequence number is used to generate a class id.
     */
    nextSequence: bigint;
}
export interface ClassSequenceProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ClassSequence";
    value: Uint8Array;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequenceAmino {
    /**
     * credit_type_abbrev is the credit type abbreviation. This links a class
     * sequence to a credit type.
     */
    credit_type_abbrev?: string;
    /**
     * next_sequence is the next sequence number for a credit class within the
     * credit type. The sequence number is used to generate a class id.
     */
    next_sequence?: string;
}
export interface ClassSequenceAminoMsg {
    type: "/regen.ecocredit.v1.ClassSequence";
    value: ClassSequenceAmino;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequenceSDKType {
    credit_type_abbrev: string;
    next_sequence: bigint;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequence {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project sequence to a credit class.
     */
    classKey: bigint;
    /**
     * next_sequence is the next sequence number for a project within the credit
     * class. The sequence number is used to generate a project id.
     */
    nextSequence: bigint;
}
export interface ProjectSequenceProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ProjectSequence";
    value: Uint8Array;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequenceAmino {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project sequence to a credit class.
     */
    class_key?: string;
    /**
     * next_sequence is the next sequence number for a project within the credit
     * class. The sequence number is used to generate a project id.
     */
    next_sequence?: string;
}
export interface ProjectSequenceAminoMsg {
    type: "/regen.ecocredit.v1.ProjectSequence";
    value: ProjectSequenceAmino;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequenceSDKType {
    class_key: bigint;
    next_sequence: bigint;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequence {
    /**
     * project_key is the table row identifier of the project used internally for
     * efficient lookups. This links a batch sequence to a project.
     */
    projectKey: bigint;
    /**
     * next_sequence is the next sequence number for a credit batch within the
     * project. The sequence number is used to generate a batch denom.
     */
    nextSequence: bigint;
}
export interface BatchSequenceProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchSequence";
    value: Uint8Array;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequenceAmino {
    /**
     * project_key is the table row identifier of the project used internally for
     * efficient lookups. This links a batch sequence to a project.
     */
    project_key?: string;
    /**
     * next_sequence is the next sequence number for a credit batch within the
     * project. The sequence number is used to generate a batch denom.
     */
    next_sequence?: string;
}
export interface BatchSequenceAminoMsg {
    type: "/regen.ecocredit.v1.BatchSequence";
    value: BatchSequenceAmino;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequenceSDKType {
    project_key: bigint;
    next_sequence: bigint;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalance {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch balance to a credit batch.
     */
    batchKey: bigint;
    /** address is the address of the credit holder. */
    address: Uint8Array;
    /** tradable is the tradable amount of credits. */
    tradable: string;
    /** retired is the retired amount of credits. */
    retired: string;
    /** escrowed is the amount of credits locked up in escrow for the marketplace. */
    escrowed: string;
}
export interface BatchBalanceProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchBalance";
    value: Uint8Array;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalanceAmino {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch balance to a credit batch.
     */
    batch_key?: string;
    /** address is the address of the credit holder. */
    address?: string;
    /** tradable is the tradable amount of credits. */
    tradable?: string;
    /** retired is the retired amount of credits. */
    retired?: string;
    /** escrowed is the amount of credits locked up in escrow for the marketplace. */
    escrowed?: string;
}
export interface BatchBalanceAminoMsg {
    type: "/regen.ecocredit.v1.BatchBalance";
    value: BatchBalanceAmino;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalanceSDKType {
    batch_key: bigint;
    address: Uint8Array;
    tradable: string;
    retired: string;
    escrowed: string;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupply {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch supply to a credit batch.
     */
    batchKey: bigint;
    /**
     * tradable_amount is the total number of tradable credits in the credit
     * batch. Some of the issued credits may be cancelled and will be removed from
     * tradable_amount and tracked in amount_cancelled. tradable_amount +
     * retired_amount + amount_cancelled will always sum to the original credit
     * issuance amount.
     */
    tradableAmount: string;
    /**
     * retired_amount is the total amount of credits that have been retired from
     * the credit batch.
     */
    retiredAmount: string;
    /**
     * cancelled_amount is the number of credits in the batch that have been
     * cancelled, effectively undoing the issuance. The sum of total_amount and
     * amount_cancelled will always equal the original credit issuance amount.
     */
    cancelledAmount: string;
}
export interface BatchSupplyProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchSupply";
    value: Uint8Array;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupplyAmino {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch supply to a credit batch.
     */
    batch_key?: string;
    /**
     * tradable_amount is the total number of tradable credits in the credit
     * batch. Some of the issued credits may be cancelled and will be removed from
     * tradable_amount and tracked in amount_cancelled. tradable_amount +
     * retired_amount + amount_cancelled will always sum to the original credit
     * issuance amount.
     */
    tradable_amount?: string;
    /**
     * retired_amount is the total amount of credits that have been retired from
     * the credit batch.
     */
    retired_amount?: string;
    /**
     * cancelled_amount is the number of credits in the batch that have been
     * cancelled, effectively undoing the issuance. The sum of total_amount and
     * amount_cancelled will always equal the original credit issuance amount.
     */
    cancelled_amount?: string;
}
export interface BatchSupplyAminoMsg {
    type: "/regen.ecocredit.v1.BatchSupply";
    value: BatchSupplyAmino;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupplySDKType {
    batch_key: bigint;
    tradable_amount: string;
    retired_amount: string;
    cancelled_amount: string;
}
/**
 * BatchOrigTx will index batch mint operations using orig tx ID to handle
 * potential double minting errors
 */
export interface BatchOrigTx {
    /** the id of an originating transaction or opeartion. */
    txId: string;
    /**
     * type of the transaction originating the mint process. Eg: Polygon,
     * Ethereum, Verra...
     */
    typ: string;
    /** reference note for accounting, will be passed to an event */
    note: string;
    /** batch_denom is the unique ID of the credit batch. */
    batchDenom: string;
}
export interface BatchOrigTxProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchOrigTx";
    value: Uint8Array;
}
/**
 * BatchOrigTx will index batch mint operations using orig tx ID to handle
 * potential double minting errors
 */
export interface BatchOrigTxAmino {
    /** the id of an originating transaction or opeartion. */
    tx_id?: string;
    /**
     * type of the transaction originating the mint process. Eg: Polygon,
     * Ethereum, Verra...
     */
    typ?: string;
    /** reference note for accounting, will be passed to an event */
    note?: string;
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom?: string;
}
export interface BatchOrigTxAminoMsg {
    type: "/regen.ecocredit.v1.BatchOrigTx";
    value: BatchOrigTxAmino;
}
/**
 * BatchOrigTx will index batch mint operations using orig tx ID to handle
 * potential double minting errors
 */
export interface BatchOrigTxSDKType {
    tx_id: string;
    typ: string;
    note: string;
    batch_denom: string;
}
export declare const CreditType: {
    typeUrl: string;
    encode(message: CreditType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CreditType;
    fromPartial(object: Partial<CreditType>): CreditType;
    fromAmino(object: CreditTypeAmino): CreditType;
    toAmino(message: CreditType): CreditTypeAmino;
    fromAminoMsg(object: CreditTypeAminoMsg): CreditType;
    fromProtoMsg(message: CreditTypeProtoMsg): CreditType;
    toProto(message: CreditType): Uint8Array;
    toProtoMsg(message: CreditType): CreditTypeProtoMsg;
};
export declare const Class: {
    typeUrl: string;
    encode(message: Class, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Class;
    fromPartial(object: Partial<Class>): Class;
    fromAmino(object: ClassAmino): Class;
    toAmino(message: Class): ClassAmino;
    fromAminoMsg(object: ClassAminoMsg): Class;
    fromProtoMsg(message: ClassProtoMsg): Class;
    toProto(message: Class): Uint8Array;
    toProtoMsg(message: Class): ClassProtoMsg;
};
export declare const ClassIssuer: {
    typeUrl: string;
    encode(message: ClassIssuer, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClassIssuer;
    fromPartial(object: Partial<ClassIssuer>): ClassIssuer;
    fromAmino(object: ClassIssuerAmino): ClassIssuer;
    toAmino(message: ClassIssuer): ClassIssuerAmino;
    fromAminoMsg(object: ClassIssuerAminoMsg): ClassIssuer;
    fromProtoMsg(message: ClassIssuerProtoMsg): ClassIssuer;
    toProto(message: ClassIssuer): Uint8Array;
    toProtoMsg(message: ClassIssuer): ClassIssuerProtoMsg;
};
export declare const Project: {
    typeUrl: string;
    encode(message: Project, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Project;
    fromPartial(object: Partial<Project>): Project;
    fromAmino(object: ProjectAmino): Project;
    toAmino(message: Project): ProjectAmino;
    fromAminoMsg(object: ProjectAminoMsg): Project;
    fromProtoMsg(message: ProjectProtoMsg): Project;
    toProto(message: Project): Uint8Array;
    toProtoMsg(message: Project): ProjectProtoMsg;
};
export declare const Batch: {
    typeUrl: string;
    encode(message: Batch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Batch;
    fromPartial(object: Partial<Batch>): Batch;
    fromAmino(object: BatchAmino): Batch;
    toAmino(message: Batch): BatchAmino;
    fromAminoMsg(object: BatchAminoMsg): Batch;
    fromProtoMsg(message: BatchProtoMsg): Batch;
    toProto(message: Batch): Uint8Array;
    toProtoMsg(message: Batch): BatchProtoMsg;
};
export declare const ClassSequence: {
    typeUrl: string;
    encode(message: ClassSequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClassSequence;
    fromPartial(object: Partial<ClassSequence>): ClassSequence;
    fromAmino(object: ClassSequenceAmino): ClassSequence;
    toAmino(message: ClassSequence): ClassSequenceAmino;
    fromAminoMsg(object: ClassSequenceAminoMsg): ClassSequence;
    fromProtoMsg(message: ClassSequenceProtoMsg): ClassSequence;
    toProto(message: ClassSequence): Uint8Array;
    toProtoMsg(message: ClassSequence): ClassSequenceProtoMsg;
};
export declare const ProjectSequence: {
    typeUrl: string;
    encode(message: ProjectSequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProjectSequence;
    fromPartial(object: Partial<ProjectSequence>): ProjectSequence;
    fromAmino(object: ProjectSequenceAmino): ProjectSequence;
    toAmino(message: ProjectSequence): ProjectSequenceAmino;
    fromAminoMsg(object: ProjectSequenceAminoMsg): ProjectSequence;
    fromProtoMsg(message: ProjectSequenceProtoMsg): ProjectSequence;
    toProto(message: ProjectSequence): Uint8Array;
    toProtoMsg(message: ProjectSequence): ProjectSequenceProtoMsg;
};
export declare const BatchSequence: {
    typeUrl: string;
    encode(message: BatchSequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchSequence;
    fromPartial(object: Partial<BatchSequence>): BatchSequence;
    fromAmino(object: BatchSequenceAmino): BatchSequence;
    toAmino(message: BatchSequence): BatchSequenceAmino;
    fromAminoMsg(object: BatchSequenceAminoMsg): BatchSequence;
    fromProtoMsg(message: BatchSequenceProtoMsg): BatchSequence;
    toProto(message: BatchSequence): Uint8Array;
    toProtoMsg(message: BatchSequence): BatchSequenceProtoMsg;
};
export declare const BatchBalance: {
    typeUrl: string;
    encode(message: BatchBalance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchBalance;
    fromPartial(object: Partial<BatchBalance>): BatchBalance;
    fromAmino(object: BatchBalanceAmino): BatchBalance;
    toAmino(message: BatchBalance): BatchBalanceAmino;
    fromAminoMsg(object: BatchBalanceAminoMsg): BatchBalance;
    fromProtoMsg(message: BatchBalanceProtoMsg): BatchBalance;
    toProto(message: BatchBalance): Uint8Array;
    toProtoMsg(message: BatchBalance): BatchBalanceProtoMsg;
};
export declare const BatchSupply: {
    typeUrl: string;
    encode(message: BatchSupply, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchSupply;
    fromPartial(object: Partial<BatchSupply>): BatchSupply;
    fromAmino(object: BatchSupplyAmino): BatchSupply;
    toAmino(message: BatchSupply): BatchSupplyAmino;
    fromAminoMsg(object: BatchSupplyAminoMsg): BatchSupply;
    fromProtoMsg(message: BatchSupplyProtoMsg): BatchSupply;
    toProto(message: BatchSupply): Uint8Array;
    toProtoMsg(message: BatchSupply): BatchSupplyProtoMsg;
};
export declare const BatchOrigTx: {
    typeUrl: string;
    encode(message: BatchOrigTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchOrigTx;
    fromPartial(object: Partial<BatchOrigTx>): BatchOrigTx;
    fromAmino(object: BatchOrigTxAmino): BatchOrigTx;
    toAmino(message: BatchOrigTx): BatchOrigTxAmino;
    fromAminoMsg(object: BatchOrigTxAminoMsg): BatchOrigTx;
    fromProtoMsg(message: BatchOrigTxProtoMsg): BatchOrigTx;
    toProto(message: BatchOrigTx): Uint8Array;
    toProtoMsg(message: BatchOrigTx): BatchOrigTxProtoMsg;
};
