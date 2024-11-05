import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OriginTx, OriginTxAmino, OriginTxSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClass {
    /** admin is the address of the account that created the credit class. */
    admin: string;
    /** issuers are the account addresses of the approved issuers. */
    issuers: string[];
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: string;
    /** credit_type_abbrev is the abbreviation of a credit type (e.g. "C", "BIO"). */
    creditTypeAbbrev: string;
    /**
     * fee specifies the fee to pay for the creation of the credit class.
     * acceptable fees for creating a credit class can be found in the governance
     * parameters for the ecocredit module.
     */
    fee?: Coin;
}
export interface MsgCreateClassProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateClass";
    value: Uint8Array;
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClassAmino {
    /** admin is the address of the account that created the credit class. */
    admin?: string;
    /** issuers are the account addresses of the approved issuers. */
    issuers?: string[];
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata?: string;
    /** credit_type_abbrev is the abbreviation of a credit type (e.g. "C", "BIO"). */
    credit_type_abbrev?: string;
    /**
     * fee specifies the fee to pay for the creation of the credit class.
     * acceptable fees for creating a credit class can be found in the governance
     * parameters for the ecocredit module.
     */
    fee?: CoinAmino;
}
export interface MsgCreateClassAminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateClass";
    value: MsgCreateClassAmino;
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClassSDKType {
    admin: string;
    issuers: string[];
    metadata: string;
    credit_type_abbrev: string;
    fee?: CoinSDKType;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
    /** class_id is the unique identifier of the credit class. */
    classId: string;
}
export interface MsgCreateClassResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse";
    value: Uint8Array;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponseAmino {
    /** class_id is the unique identifier of the credit class. */
    class_id?: string;
}
export interface MsgCreateClassResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateClassResponse";
    value: MsgCreateClassResponseAmino;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponseSDKType {
    class_id: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProject {
    /**
     * issuer is the address of an approved issuer for the credit class through
     * which batches will be issued. It is not required, however, that this same
     * issuer issue all batches for a project.
     */
    issuer: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project will be created.
     */
    classId: string;
    /** metadata is any arbitrary metadata attached to the project. */
    metadata: string;
    /**
     * jurisdiction is the jurisdiction of the project backing the credits
     * in this batch. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters. country-code is required, while sub-national-code
     * and postal-code are optional and can be added for increased precision.
     */
    jurisdiction: string;
    /** reference_id is any arbitrary string used to reference the project. */
    referenceId: string;
}
export interface MsgCreateProjectProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateProject";
    value: Uint8Array;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProjectAmino {
    /**
     * issuer is the address of an approved issuer for the credit class through
     * which batches will be issued. It is not required, however, that this same
     * issuer issue all batches for a project.
     */
    issuer?: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project will be created.
     */
    class_id?: string;
    /** metadata is any arbitrary metadata attached to the project. */
    metadata?: string;
    /**
     * jurisdiction is the jurisdiction of the project backing the credits
     * in this batch. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters. country-code is required, while sub-national-code
     * and postal-code are optional and can be added for increased precision.
     */
    jurisdiction?: string;
    /** reference_id is any arbitrary string used to reference the project. */
    reference_id?: string;
}
export interface MsgCreateProjectAminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateProject";
    value: MsgCreateProjectAmino;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProjectSDKType {
    issuer: string;
    class_id: string;
    metadata: string;
    jurisdiction: string;
    reference_id: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponse {
    /** project_id is the unique identifier of the newly created project. */
    projectId: string;
}
export interface MsgCreateProjectResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse";
    value: Uint8Array;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponseAmino {
    /** project_id is the unique identifier of the newly created project. */
    project_id?: string;
}
export interface MsgCreateProjectResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateProjectResponse";
    value: MsgCreateProjectResponseAmino;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponseSDKType {
    project_id: string;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatch {
    /** issuer is the address of the batch issuer. */
    issuer: string;
    /**
     * project_id is the unique identifier of the project within which the credit
     * batch will be created.
     */
    projectId: string;
    /** issuance are the credits issued in the batch. */
    issuance: BatchIssuance[];
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
    /**
     * If open is true we will enable future minting.
     * Otherwise we will seal the batch and disable the future minting.
     */
    open: boolean;
    /**
     * A reference to a transaction or an event referencing the transaction
     * which caused the transfer from other chain or registry.
     * If not set (null), it means that the batch originate in Regen Ledger
     * (doesn't come from external registry).
     */
    originTx?: OriginTx;
    /** reference note for accounting, will be passed to an event */
    note: string;
}
export interface MsgCreateBatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateBatch";
    value: Uint8Array;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatchAmino {
    /** issuer is the address of the batch issuer. */
    issuer?: string;
    /**
     * project_id is the unique identifier of the project within which the credit
     * batch will be created.
     */
    project_id?: string;
    /** issuance are the credits issued in the batch. */
    issuance?: BatchIssuanceAmino[];
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
    /**
     * If open is true we will enable future minting.
     * Otherwise we will seal the batch and disable the future minting.
     */
    open?: boolean;
    /**
     * A reference to a transaction or an event referencing the transaction
     * which caused the transfer from other chain or registry.
     * If not set (null), it means that the batch originate in Regen Ledger
     * (doesn't come from external registry).
     */
    origin_tx?: OriginTxAmino;
    /** reference note for accounting, will be passed to an event */
    note?: string;
}
export interface MsgCreateBatchAminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateBatch";
    value: MsgCreateBatchAmino;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatchSDKType {
    issuer: string;
    project_id: string;
    issuance: BatchIssuanceSDKType[];
    metadata: string;
    start_date?: Date;
    end_date?: Date;
    open: boolean;
    origin_tx?: OriginTxSDKType;
    note: string;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */
export interface BatchIssuance {
    /** recipient is the account of the recipient. */
    recipient: string;
    /**
     * tradable_amount is the number of credits in this issuance that can be
     * traded by this recipient. Decimal values are acceptable.
     */
    tradableAmount: string;
    /**
     * retired_amount is the number of credits in this issuance that are
     * effectively retired by the issuer on receipt. Decimal values are
     * acceptable.
     */
    retiredAmount: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the beneficiary or buyer of
     * the retired credits. This must be provided if retired_amount is positive.
     * It is a string of the form <country-code>[-<sub-national-code>[
     * <postal-code>]], with the first two fields conforming to ISO 3166-2, and
     * postal-code being up to 64 alphanumeric characters.
     */
    retirementJurisdiction: string;
}
export interface BatchIssuanceProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchIssuance";
    value: Uint8Array;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */
export interface BatchIssuanceAmino {
    /** recipient is the account of the recipient. */
    recipient?: string;
    /**
     * tradable_amount is the number of credits in this issuance that can be
     * traded by this recipient. Decimal values are acceptable.
     */
    tradable_amount?: string;
    /**
     * retired_amount is the number of credits in this issuance that are
     * effectively retired by the issuer on receipt. Decimal values are
     * acceptable.
     */
    retired_amount?: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the beneficiary or buyer of
     * the retired credits. This must be provided if retired_amount is positive.
     * It is a string of the form <country-code>[-<sub-national-code>[
     * <postal-code>]], with the first two fields conforming to ISO 3166-2, and
     * postal-code being up to 64 alphanumeric characters.
     */
    retirement_jurisdiction?: string;
}
export interface BatchIssuanceAminoMsg {
    type: "/regen.ecocredit.v1.BatchIssuance";
    value: BatchIssuanceAmino;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */
export interface BatchIssuanceSDKType {
    recipient: string;
    tradable_amount: string;
    retired_amount: string;
    retirement_jurisdiction: string;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
    /** batch_denom is the unique identifier of the newly created batch. */
    batchDenom: string;
}
export interface MsgCreateBatchResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse";
    value: Uint8Array;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponseAmino {
    /** batch_denom is the unique identifier of the newly created batch. */
    batch_denom?: string;
}
export interface MsgCreateBatchResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateBatchResponse";
    value: MsgCreateBatchResponseAmino;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponseSDKType {
    batch_denom: string;
}
/** MsgMintBatchCredits is a request type for MintBatchCredits Msg RPC. */
export interface MsgMintBatchCredits {
    /**
     * Issuer must equal to the batch.issuer address.
     * Signer of the msg.
     */
    issuer: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /** issuance are the credits issued in the batch. */
    issuance: BatchIssuance[];
    /**
     * A reference to a transaction or an event referencing the transaction
     * which caused the transfer from other chain or registry.
     */
    originTx?: OriginTx;
    /** reference note for accounting, will be passed to an event */
    note: string;
}
export interface MsgMintBatchCreditsProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits";
    value: Uint8Array;
}
/** MsgMintBatchCredits is a request type for MintBatchCredits Msg RPC. */
export interface MsgMintBatchCreditsAmino {
    /**
     * Issuer must equal to the batch.issuer address.
     * Signer of the msg.
     */
    issuer?: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
    /** issuance are the credits issued in the batch. */
    issuance?: BatchIssuanceAmino[];
    /**
     * A reference to a transaction or an event referencing the transaction
     * which caused the transfer from other chain or registry.
     */
    origin_tx?: OriginTxAmino;
    /** reference note for accounting, will be passed to an event */
    note?: string;
}
export interface MsgMintBatchCreditsAminoMsg {
    type: "/regen.ecocredit.v1.MsgMintBatchCredits";
    value: MsgMintBatchCreditsAmino;
}
/** MsgMintBatchCredits is a request type for MintBatchCredits Msg RPC. */
export interface MsgMintBatchCreditsSDKType {
    issuer: string;
    batch_denom: string;
    issuance: BatchIssuanceSDKType[];
    origin_tx?: OriginTxSDKType;
    note: string;
}
/** MsgSealBatch request type for MsgSealBatch RPC. */
export interface MsgSealBatch {
    /**
     * Issuer must equal to the batch.issuer address.
     * Signer of the msg.
     */
    issuer: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
}
export interface MsgSealBatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgSealBatch";
    value: Uint8Array;
}
/** MsgSealBatch request type for MsgSealBatch RPC. */
export interface MsgSealBatchAmino {
    /**
     * Issuer must equal to the batch.issuer address.
     * Signer of the msg.
     */
    issuer?: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
}
export interface MsgSealBatchAminoMsg {
    type: "/regen.ecocredit.v1.MsgSealBatch";
    value: MsgSealBatchAmino;
}
/** MsgSealBatch request type for MsgSealBatch RPC. */
export interface MsgSealBatchSDKType {
    issuer: string;
    batch_denom: string;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponse {
}
export interface MsgMintBatchCreditsResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse";
    value: Uint8Array;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponseAmino {
}
export interface MsgMintBatchCreditsResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse";
    value: MsgMintBatchCreditsResponseAmino;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponseSDKType {
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponse {
}
export interface MsgSealBatchResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse";
    value: Uint8Array;
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponseAmino {
}
export interface MsgSealBatchResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgSealBatchResponse";
    value: MsgSealBatchResponseAmino;
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponseSDKType {
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSend {
    /** sender is the address of the account sending credits. */
    sender: string;
    /** sender is the address of the account receiving credits. */
    recipient: string;
    /** credits are the credits being sent. */
    credits: MsgSend_SendCredits[];
}
export interface MsgSendProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgSend";
    value: Uint8Array;
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSendAmino {
    /** sender is the address of the account sending credits. */
    sender?: string;
    /** sender is the address of the account receiving credits. */
    recipient?: string;
    /** credits are the credits being sent. */
    credits?: MsgSend_SendCreditsAmino[];
}
export interface MsgSendAminoMsg {
    type: "/regen.ecocredit.v1.MsgSend";
    value: MsgSendAmino;
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSendSDKType {
    sender: string;
    recipient: string;
    credits: MsgSend_SendCreditsSDKType[];
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */
export interface MsgSend_SendCredits {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /**
     * tradable_amount is the number of credits in this transfer that can be
     * traded by the recipient. Decimal values are acceptable within the
     * precision returned by Query/Precision.
     */
    tradableAmount: string;
    /**
     * retired_amount is the number of credits in this transfer that are
     * effectively retired by the issuer on receipt. Decimal values are
     * acceptable within the precision returned by Query/Precision.
     */
    retiredAmount: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the beneficiary or buyer
     * of the retired credits. This must be provided if retired_amount is
     * positive. It is a string of the form <country-code>[-<sub-national-code>[
     * <postal-code>]], with the first two fields conforming to ISO 3166-2, and
     * postal-code being up to 64 alphanumeric characters.
     */
    retirementJurisdiction: string;
}
export interface MsgSend_SendCreditsProtoMsg {
    typeUrl: "/regen.ecocredit.v1.SendCredits";
    value: Uint8Array;
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */
export interface MsgSend_SendCreditsAmino {
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
    /**
     * tradable_amount is the number of credits in this transfer that can be
     * traded by the recipient. Decimal values are acceptable within the
     * precision returned by Query/Precision.
     */
    tradable_amount?: string;
    /**
     * retired_amount is the number of credits in this transfer that are
     * effectively retired by the issuer on receipt. Decimal values are
     * acceptable within the precision returned by Query/Precision.
     */
    retired_amount?: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the beneficiary or buyer
     * of the retired credits. This must be provided if retired_amount is
     * positive. It is a string of the form <country-code>[-<sub-national-code>[
     * <postal-code>]], with the first two fields conforming to ISO 3166-2, and
     * postal-code being up to 64 alphanumeric characters.
     */
    retirement_jurisdiction?: string;
}
export interface MsgSend_SendCreditsAminoMsg {
    type: "/regen.ecocredit.v1.SendCredits";
    value: MsgSend_SendCreditsAmino;
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */
export interface MsgSend_SendCreditsSDKType {
    batch_denom: string;
    tradable_amount: string;
    retired_amount: string;
    retirement_jurisdiction: string;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {
}
export interface MsgSendResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgSendResponse";
    value: Uint8Array;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponseAmino {
}
export interface MsgSendResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgSendResponse";
    value: MsgSendResponseAmino;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponseSDKType {
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetire {
    /** holder is the credit holder address. */
    holder: string;
    /** credits are the credits being retired. */
    credits: MsgRetire_RetireCredits[];
    /**
     * jurisdiction is the jurisdiction of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    jurisdiction: string;
}
export interface MsgRetireProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgRetire";
    value: Uint8Array;
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetireAmino {
    /** holder is the credit holder address. */
    holder?: string;
    /** credits are the credits being retired. */
    credits?: MsgRetire_RetireCreditsAmino[];
    /**
     * jurisdiction is the jurisdiction of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    jurisdiction?: string;
}
export interface MsgRetireAminoMsg {
    type: "/regen.ecocredit.v1.MsgRetire";
    value: MsgRetireAmino;
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetireSDKType {
    holder: string;
    credits: MsgRetire_RetireCreditsSDKType[];
    jurisdiction: string;
}
/** RetireCredits specifies a batch and the number of credits being retired. */
export interface MsgRetire_RetireCredits {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /**
     * amount is the number of credits being retired.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount: string;
}
export interface MsgRetire_RetireCreditsProtoMsg {
    typeUrl: "/regen.ecocredit.v1.RetireCredits";
    value: Uint8Array;
}
/** RetireCredits specifies a batch and the number of credits being retired. */
export interface MsgRetire_RetireCreditsAmino {
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
    /**
     * amount is the number of credits being retired.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount?: string;
}
export interface MsgRetire_RetireCreditsAminoMsg {
    type: "/regen.ecocredit.v1.RetireCredits";
    value: MsgRetire_RetireCreditsAmino;
}
/** RetireCredits specifies a batch and the number of credits being retired. */
export interface MsgRetire_RetireCreditsSDKType {
    batch_denom: string;
    amount: string;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponse {
}
export interface MsgRetireResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgRetireResponse";
    value: Uint8Array;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponseAmino {
}
export interface MsgRetireResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgRetireResponse";
    value: MsgRetireResponseAmino;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponseSDKType {
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancel {
    /** holder is the credit holder address. */
    holder: string;
    /** credits are the credits being cancelled. */
    credits: MsgCancel_CancelCredits[];
}
export interface MsgCancelProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCancel";
    value: Uint8Array;
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancelAmino {
    /** holder is the credit holder address. */
    holder?: string;
    /** credits are the credits being cancelled. */
    credits?: MsgCancel_CancelCreditsAmino[];
}
export interface MsgCancelAminoMsg {
    type: "/regen.ecocredit.v1.MsgCancel";
    value: MsgCancelAmino;
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancelSDKType {
    holder: string;
    credits: MsgCancel_CancelCreditsSDKType[];
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */
export interface MsgCancel_CancelCredits {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /**
     * amount is the number of credits being cancelled.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount: string;
}
export interface MsgCancel_CancelCreditsProtoMsg {
    typeUrl: "/regen.ecocredit.v1.CancelCredits";
    value: Uint8Array;
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */
export interface MsgCancel_CancelCreditsAmino {
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
    /**
     * amount is the number of credits being cancelled.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount?: string;
}
export interface MsgCancel_CancelCreditsAminoMsg {
    type: "/regen.ecocredit.v1.CancelCredits";
    value: MsgCancel_CancelCreditsAmino;
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */
export interface MsgCancel_CancelCreditsSDKType {
    batch_denom: string;
    amount: string;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponse {
}
export interface MsgCancelResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCancelResponse";
    value: Uint8Array;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponseAmino {
}
export interface MsgCancelResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgCancelResponse";
    value: MsgCancelResponseAmino;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponseSDKType {
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdmin {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique identifier of the credit class. */
    classId: string;
    /** new_admin is the address of the new admin of the credit class. */
    newAdmin: string;
}
export interface MsgUpdateClassAdminProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin";
    value: Uint8Array;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdminAmino {
    /** admin is the address of the account that is the admin of the credit class. */
    admin?: string;
    /** class_id is the unique identifier of the credit class. */
    class_id?: string;
    /** new_admin is the address of the new admin of the credit class. */
    new_admin?: string;
}
export interface MsgUpdateClassAdminAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassAdmin";
    value: MsgUpdateClassAdminAmino;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdminSDKType {
    admin: string;
    class_id: string;
    new_admin: string;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponse {
}
export interface MsgUpdateClassAdminResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponseAmino {
}
export interface MsgUpdateClassAdminResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse";
    value: MsgUpdateClassAdminResponseAmino;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponseSDKType {
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuers {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique identifier of the credit class. */
    classId: string;
    /** add_issuers are the issuers to add to the class issuers list. */
    addIssuers: string[];
    /** remove_issuers are the issuers to remove from the class issuers list. */
    removeIssuers: string[];
}
export interface MsgUpdateClassIssuersProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers";
    value: Uint8Array;
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuersAmino {
    /** admin is the address of the account that is the admin of the credit class. */
    admin?: string;
    /** class_id is the unique identifier of the credit class. */
    class_id?: string;
    /** add_issuers are the issuers to add to the class issuers list. */
    add_issuers?: string[];
    /** remove_issuers are the issuers to remove from the class issuers list. */
    remove_issuers?: string[];
}
export interface MsgUpdateClassIssuersAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassIssuers";
    value: MsgUpdateClassIssuersAmino;
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuersSDKType {
    admin: string;
    class_id: string;
    add_issuers: string[];
    remove_issuers: string[];
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponse {
}
export interface MsgUpdateClassIssuersResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse";
    value: Uint8Array;
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponseAmino {
}
export interface MsgUpdateClassIssuersResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse";
    value: MsgUpdateClassIssuersResponseAmino;
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponseSDKType {
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadata {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique identifier of the credit class. */
    classId: string;
    /**
     * metadata is the updated arbitrary metadata to be attached to the credit
     * class.
     */
    metadata: string;
}
export interface MsgUpdateClassMetadataProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata";
    value: Uint8Array;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadataAmino {
    /** admin is the address of the account that is the admin of the credit class. */
    admin?: string;
    /** class_id is the unique identifier of the credit class. */
    class_id?: string;
    /**
     * metadata is the updated arbitrary metadata to be attached to the credit
     * class.
     */
    metadata?: string;
}
export interface MsgUpdateClassMetadataAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassMetadata";
    value: MsgUpdateClassMetadataAmino;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadataSDKType {
    admin: string;
    class_id: string;
    metadata: string;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponse {
}
export interface MsgUpdateClassMetadataResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse";
    value: Uint8Array;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponseAmino {
}
export interface MsgUpdateClassMetadataResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse";
    value: MsgUpdateClassMetadataResponseAmino;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponseSDKType {
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdmin {
    /** admin is the project's current admin address. */
    admin: string;
    /** new_admin is the address of the new admin of the project. */
    newAdmin: string;
    /** project_id is the unique identifier of the project (e.g. VERRA1). */
    projectId: string;
}
export interface MsgUpdateProjectAdminProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin";
    value: Uint8Array;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdminAmino {
    /** admin is the project's current admin address. */
    admin?: string;
    /** new_admin is the address of the new admin of the project. */
    new_admin?: string;
    /** project_id is the unique identifier of the project (e.g. VERRA1). */
    project_id?: string;
}
export interface MsgUpdateProjectAdminAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateProjectAdmin";
    value: MsgUpdateProjectAdminAmino;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdminSDKType {
    admin: string;
    new_admin: string;
    project_id: string;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponse {
}
export interface MsgUpdateProjectAdminResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponseAmino {
}
export interface MsgUpdateProjectAdminResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse";
    value: MsgUpdateProjectAdminResponseAmino;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponseSDKType {
}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadata {
    /** admin is project admin address. */
    admin: string;
    /** new_metadata is the metadata to update the project with. */
    newMetadata: string;
    /** project_id is the unique identifier of the project (e.g. VERRA1). */
    projectId: string;
}
export interface MsgUpdateProjectMetadataProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata";
    value: Uint8Array;
}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadataAmino {
    /** admin is project admin address. */
    admin?: string;
    /** new_metadata is the metadata to update the project with. */
    new_metadata?: string;
    /** project_id is the unique identifier of the project (e.g. VERRA1). */
    project_id?: string;
}
export interface MsgUpdateProjectMetadataAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateProjectMetadata";
    value: MsgUpdateProjectMetadataAmino;
}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadataSDKType {
    admin: string;
    new_metadata: string;
    project_id: string;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponse {
}
export interface MsgUpdateProjectMetadataResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponseAmino {
}
export interface MsgUpdateProjectMetadataResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse";
    value: MsgUpdateProjectMetadataResponseAmino;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponseSDKType {
}
export declare const MsgCreateClass: {
    typeUrl: string;
    encode(message: MsgCreateClass, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClass;
    fromPartial(object: Partial<MsgCreateClass>): MsgCreateClass;
    fromAmino(object: MsgCreateClassAmino): MsgCreateClass;
    toAmino(message: MsgCreateClass): MsgCreateClassAmino;
    fromAminoMsg(object: MsgCreateClassAminoMsg): MsgCreateClass;
    fromProtoMsg(message: MsgCreateClassProtoMsg): MsgCreateClass;
    toProto(message: MsgCreateClass): Uint8Array;
    toProtoMsg(message: MsgCreateClass): MsgCreateClassProtoMsg;
};
export declare const MsgCreateClassResponse: {
    typeUrl: string;
    encode(message: MsgCreateClassResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClassResponse;
    fromPartial(object: Partial<MsgCreateClassResponse>): MsgCreateClassResponse;
    fromAmino(object: MsgCreateClassResponseAmino): MsgCreateClassResponse;
    toAmino(message: MsgCreateClassResponse): MsgCreateClassResponseAmino;
    fromAminoMsg(object: MsgCreateClassResponseAminoMsg): MsgCreateClassResponse;
    fromProtoMsg(message: MsgCreateClassResponseProtoMsg): MsgCreateClassResponse;
    toProto(message: MsgCreateClassResponse): Uint8Array;
    toProtoMsg(message: MsgCreateClassResponse): MsgCreateClassResponseProtoMsg;
};
export declare const MsgCreateProject: {
    typeUrl: string;
    encode(message: MsgCreateProject, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProject;
    fromPartial(object: Partial<MsgCreateProject>): MsgCreateProject;
    fromAmino(object: MsgCreateProjectAmino): MsgCreateProject;
    toAmino(message: MsgCreateProject): MsgCreateProjectAmino;
    fromAminoMsg(object: MsgCreateProjectAminoMsg): MsgCreateProject;
    fromProtoMsg(message: MsgCreateProjectProtoMsg): MsgCreateProject;
    toProto(message: MsgCreateProject): Uint8Array;
    toProtoMsg(message: MsgCreateProject): MsgCreateProjectProtoMsg;
};
export declare const MsgCreateProjectResponse: {
    typeUrl: string;
    encode(message: MsgCreateProjectResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProjectResponse;
    fromPartial(object: Partial<MsgCreateProjectResponse>): MsgCreateProjectResponse;
    fromAmino(object: MsgCreateProjectResponseAmino): MsgCreateProjectResponse;
    toAmino(message: MsgCreateProjectResponse): MsgCreateProjectResponseAmino;
    fromAminoMsg(object: MsgCreateProjectResponseAminoMsg): MsgCreateProjectResponse;
    fromProtoMsg(message: MsgCreateProjectResponseProtoMsg): MsgCreateProjectResponse;
    toProto(message: MsgCreateProjectResponse): Uint8Array;
    toProtoMsg(message: MsgCreateProjectResponse): MsgCreateProjectResponseProtoMsg;
};
export declare const MsgCreateBatch: {
    typeUrl: string;
    encode(message: MsgCreateBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBatch;
    fromPartial(object: Partial<MsgCreateBatch>): MsgCreateBatch;
    fromAmino(object: MsgCreateBatchAmino): MsgCreateBatch;
    toAmino(message: MsgCreateBatch): MsgCreateBatchAmino;
    fromAminoMsg(object: MsgCreateBatchAminoMsg): MsgCreateBatch;
    fromProtoMsg(message: MsgCreateBatchProtoMsg): MsgCreateBatch;
    toProto(message: MsgCreateBatch): Uint8Array;
    toProtoMsg(message: MsgCreateBatch): MsgCreateBatchProtoMsg;
};
export declare const BatchIssuance: {
    typeUrl: string;
    encode(message: BatchIssuance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchIssuance;
    fromPartial(object: Partial<BatchIssuance>): BatchIssuance;
    fromAmino(object: BatchIssuanceAmino): BatchIssuance;
    toAmino(message: BatchIssuance): BatchIssuanceAmino;
    fromAminoMsg(object: BatchIssuanceAminoMsg): BatchIssuance;
    fromProtoMsg(message: BatchIssuanceProtoMsg): BatchIssuance;
    toProto(message: BatchIssuance): Uint8Array;
    toProtoMsg(message: BatchIssuance): BatchIssuanceProtoMsg;
};
export declare const MsgCreateBatchResponse: {
    typeUrl: string;
    encode(message: MsgCreateBatchResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBatchResponse;
    fromPartial(object: Partial<MsgCreateBatchResponse>): MsgCreateBatchResponse;
    fromAmino(object: MsgCreateBatchResponseAmino): MsgCreateBatchResponse;
    toAmino(message: MsgCreateBatchResponse): MsgCreateBatchResponseAmino;
    fromAminoMsg(object: MsgCreateBatchResponseAminoMsg): MsgCreateBatchResponse;
    fromProtoMsg(message: MsgCreateBatchResponseProtoMsg): MsgCreateBatchResponse;
    toProto(message: MsgCreateBatchResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBatchResponse): MsgCreateBatchResponseProtoMsg;
};
export declare const MsgMintBatchCredits: {
    typeUrl: string;
    encode(message: MsgMintBatchCredits, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMintBatchCredits;
    fromPartial(object: Partial<MsgMintBatchCredits>): MsgMintBatchCredits;
    fromAmino(object: MsgMintBatchCreditsAmino): MsgMintBatchCredits;
    toAmino(message: MsgMintBatchCredits): MsgMintBatchCreditsAmino;
    fromAminoMsg(object: MsgMintBatchCreditsAminoMsg): MsgMintBatchCredits;
    fromProtoMsg(message: MsgMintBatchCreditsProtoMsg): MsgMintBatchCredits;
    toProto(message: MsgMintBatchCredits): Uint8Array;
    toProtoMsg(message: MsgMintBatchCredits): MsgMintBatchCreditsProtoMsg;
};
export declare const MsgSealBatch: {
    typeUrl: string;
    encode(message: MsgSealBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSealBatch;
    fromPartial(object: Partial<MsgSealBatch>): MsgSealBatch;
    fromAmino(object: MsgSealBatchAmino): MsgSealBatch;
    toAmino(message: MsgSealBatch): MsgSealBatchAmino;
    fromAminoMsg(object: MsgSealBatchAminoMsg): MsgSealBatch;
    fromProtoMsg(message: MsgSealBatchProtoMsg): MsgSealBatch;
    toProto(message: MsgSealBatch): Uint8Array;
    toProtoMsg(message: MsgSealBatch): MsgSealBatchProtoMsg;
};
export declare const MsgMintBatchCreditsResponse: {
    typeUrl: string;
    encode(_: MsgMintBatchCreditsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMintBatchCreditsResponse;
    fromPartial(_: Partial<MsgMintBatchCreditsResponse>): MsgMintBatchCreditsResponse;
    fromAmino(_: MsgMintBatchCreditsResponseAmino): MsgMintBatchCreditsResponse;
    toAmino(_: MsgMintBatchCreditsResponse): MsgMintBatchCreditsResponseAmino;
    fromAminoMsg(object: MsgMintBatchCreditsResponseAminoMsg): MsgMintBatchCreditsResponse;
    fromProtoMsg(message: MsgMintBatchCreditsResponseProtoMsg): MsgMintBatchCreditsResponse;
    toProto(message: MsgMintBatchCreditsResponse): Uint8Array;
    toProtoMsg(message: MsgMintBatchCreditsResponse): MsgMintBatchCreditsResponseProtoMsg;
};
export declare const MsgSealBatchResponse: {
    typeUrl: string;
    encode(_: MsgSealBatchResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSealBatchResponse;
    fromPartial(_: Partial<MsgSealBatchResponse>): MsgSealBatchResponse;
    fromAmino(_: MsgSealBatchResponseAmino): MsgSealBatchResponse;
    toAmino(_: MsgSealBatchResponse): MsgSealBatchResponseAmino;
    fromAminoMsg(object: MsgSealBatchResponseAminoMsg): MsgSealBatchResponse;
    fromProtoMsg(message: MsgSealBatchResponseProtoMsg): MsgSealBatchResponse;
    toProto(message: MsgSealBatchResponse): Uint8Array;
    toProtoMsg(message: MsgSealBatchResponse): MsgSealBatchResponseProtoMsg;
};
export declare const MsgSend: {
    typeUrl: string;
    encode(message: MsgSend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSend;
    fromPartial(object: Partial<MsgSend>): MsgSend;
    fromAmino(object: MsgSendAmino): MsgSend;
    toAmino(message: MsgSend): MsgSendAmino;
    fromAminoMsg(object: MsgSendAminoMsg): MsgSend;
    fromProtoMsg(message: MsgSendProtoMsg): MsgSend;
    toProto(message: MsgSend): Uint8Array;
    toProtoMsg(message: MsgSend): MsgSendProtoMsg;
};
export declare const MsgSend_SendCredits: {
    typeUrl: string;
    encode(message: MsgSend_SendCredits, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSend_SendCredits;
    fromPartial(object: Partial<MsgSend_SendCredits>): MsgSend_SendCredits;
    fromAmino(object: MsgSend_SendCreditsAmino): MsgSend_SendCredits;
    toAmino(message: MsgSend_SendCredits): MsgSend_SendCreditsAmino;
    fromAminoMsg(object: MsgSend_SendCreditsAminoMsg): MsgSend_SendCredits;
    fromProtoMsg(message: MsgSend_SendCreditsProtoMsg): MsgSend_SendCredits;
    toProto(message: MsgSend_SendCredits): Uint8Array;
    toProtoMsg(message: MsgSend_SendCredits): MsgSend_SendCreditsProtoMsg;
};
export declare const MsgSendResponse: {
    typeUrl: string;
    encode(_: MsgSendResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse;
    fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse;
    fromAmino(_: MsgSendResponseAmino): MsgSendResponse;
    toAmino(_: MsgSendResponse): MsgSendResponseAmino;
    fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse;
    fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse;
    toProto(message: MsgSendResponse): Uint8Array;
    toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg;
};
export declare const MsgRetire: {
    typeUrl: string;
    encode(message: MsgRetire, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRetire;
    fromPartial(object: Partial<MsgRetire>): MsgRetire;
    fromAmino(object: MsgRetireAmino): MsgRetire;
    toAmino(message: MsgRetire): MsgRetireAmino;
    fromAminoMsg(object: MsgRetireAminoMsg): MsgRetire;
    fromProtoMsg(message: MsgRetireProtoMsg): MsgRetire;
    toProto(message: MsgRetire): Uint8Array;
    toProtoMsg(message: MsgRetire): MsgRetireProtoMsg;
};
export declare const MsgRetire_RetireCredits: {
    typeUrl: string;
    encode(message: MsgRetire_RetireCredits, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRetire_RetireCredits;
    fromPartial(object: Partial<MsgRetire_RetireCredits>): MsgRetire_RetireCredits;
    fromAmino(object: MsgRetire_RetireCreditsAmino): MsgRetire_RetireCredits;
    toAmino(message: MsgRetire_RetireCredits): MsgRetire_RetireCreditsAmino;
    fromAminoMsg(object: MsgRetire_RetireCreditsAminoMsg): MsgRetire_RetireCredits;
    fromProtoMsg(message: MsgRetire_RetireCreditsProtoMsg): MsgRetire_RetireCredits;
    toProto(message: MsgRetire_RetireCredits): Uint8Array;
    toProtoMsg(message: MsgRetire_RetireCredits): MsgRetire_RetireCreditsProtoMsg;
};
export declare const MsgRetireResponse: {
    typeUrl: string;
    encode(_: MsgRetireResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRetireResponse;
    fromPartial(_: Partial<MsgRetireResponse>): MsgRetireResponse;
    fromAmino(_: MsgRetireResponseAmino): MsgRetireResponse;
    toAmino(_: MsgRetireResponse): MsgRetireResponseAmino;
    fromAminoMsg(object: MsgRetireResponseAminoMsg): MsgRetireResponse;
    fromProtoMsg(message: MsgRetireResponseProtoMsg): MsgRetireResponse;
    toProto(message: MsgRetireResponse): Uint8Array;
    toProtoMsg(message: MsgRetireResponse): MsgRetireResponseProtoMsg;
};
export declare const MsgCancel: {
    typeUrl: string;
    encode(message: MsgCancel, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancel;
    fromPartial(object: Partial<MsgCancel>): MsgCancel;
    fromAmino(object: MsgCancelAmino): MsgCancel;
    toAmino(message: MsgCancel): MsgCancelAmino;
    fromAminoMsg(object: MsgCancelAminoMsg): MsgCancel;
    fromProtoMsg(message: MsgCancelProtoMsg): MsgCancel;
    toProto(message: MsgCancel): Uint8Array;
    toProtoMsg(message: MsgCancel): MsgCancelProtoMsg;
};
export declare const MsgCancel_CancelCredits: {
    typeUrl: string;
    encode(message: MsgCancel_CancelCredits, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancel_CancelCredits;
    fromPartial(object: Partial<MsgCancel_CancelCredits>): MsgCancel_CancelCredits;
    fromAmino(object: MsgCancel_CancelCreditsAmino): MsgCancel_CancelCredits;
    toAmino(message: MsgCancel_CancelCredits): MsgCancel_CancelCreditsAmino;
    fromAminoMsg(object: MsgCancel_CancelCreditsAminoMsg): MsgCancel_CancelCredits;
    fromProtoMsg(message: MsgCancel_CancelCreditsProtoMsg): MsgCancel_CancelCredits;
    toProto(message: MsgCancel_CancelCredits): Uint8Array;
    toProtoMsg(message: MsgCancel_CancelCredits): MsgCancel_CancelCreditsProtoMsg;
};
export declare const MsgCancelResponse: {
    typeUrl: string;
    encode(_: MsgCancelResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelResponse;
    fromPartial(_: Partial<MsgCancelResponse>): MsgCancelResponse;
    fromAmino(_: MsgCancelResponseAmino): MsgCancelResponse;
    toAmino(_: MsgCancelResponse): MsgCancelResponseAmino;
    fromAminoMsg(object: MsgCancelResponseAminoMsg): MsgCancelResponse;
    fromProtoMsg(message: MsgCancelResponseProtoMsg): MsgCancelResponse;
    toProto(message: MsgCancelResponse): Uint8Array;
    toProtoMsg(message: MsgCancelResponse): MsgCancelResponseProtoMsg;
};
export declare const MsgUpdateClassAdmin: {
    typeUrl: string;
    encode(message: MsgUpdateClassAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassAdmin;
    fromPartial(object: Partial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin;
    fromAmino(object: MsgUpdateClassAdminAmino): MsgUpdateClassAdmin;
    toAmino(message: MsgUpdateClassAdmin): MsgUpdateClassAdminAmino;
    fromAminoMsg(object: MsgUpdateClassAdminAminoMsg): MsgUpdateClassAdmin;
    fromProtoMsg(message: MsgUpdateClassAdminProtoMsg): MsgUpdateClassAdmin;
    toProto(message: MsgUpdateClassAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateClassAdmin): MsgUpdateClassAdminProtoMsg;
};
export declare const MsgUpdateClassAdminResponse: {
    typeUrl: string;
    encode(_: MsgUpdateClassAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassAdminResponse;
    fromPartial(_: Partial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse;
    fromAmino(_: MsgUpdateClassAdminResponseAmino): MsgUpdateClassAdminResponse;
    toAmino(_: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateClassAdminResponseAminoMsg): MsgUpdateClassAdminResponse;
    fromProtoMsg(message: MsgUpdateClassAdminResponseProtoMsg): MsgUpdateClassAdminResponse;
    toProto(message: MsgUpdateClassAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseProtoMsg;
};
export declare const MsgUpdateClassIssuers: {
    typeUrl: string;
    encode(message: MsgUpdateClassIssuers, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassIssuers;
    fromPartial(object: Partial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers;
    fromAmino(object: MsgUpdateClassIssuersAmino): MsgUpdateClassIssuers;
    toAmino(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersAmino;
    fromAminoMsg(object: MsgUpdateClassIssuersAminoMsg): MsgUpdateClassIssuers;
    fromProtoMsg(message: MsgUpdateClassIssuersProtoMsg): MsgUpdateClassIssuers;
    toProto(message: MsgUpdateClassIssuers): Uint8Array;
    toProtoMsg(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersProtoMsg;
};
export declare const MsgUpdateClassIssuersResponse: {
    typeUrl: string;
    encode(_: MsgUpdateClassIssuersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassIssuersResponse;
    fromPartial(_: Partial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse;
    fromAmino(_: MsgUpdateClassIssuersResponseAmino): MsgUpdateClassIssuersResponse;
    toAmino(_: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseAmino;
    fromAminoMsg(object: MsgUpdateClassIssuersResponseAminoMsg): MsgUpdateClassIssuersResponse;
    fromProtoMsg(message: MsgUpdateClassIssuersResponseProtoMsg): MsgUpdateClassIssuersResponse;
    toProto(message: MsgUpdateClassIssuersResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseProtoMsg;
};
export declare const MsgUpdateClassMetadata: {
    typeUrl: string;
    encode(message: MsgUpdateClassMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassMetadata;
    fromPartial(object: Partial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata;
    fromAmino(object: MsgUpdateClassMetadataAmino): MsgUpdateClassMetadata;
    toAmino(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataAmino;
    fromAminoMsg(object: MsgUpdateClassMetadataAminoMsg): MsgUpdateClassMetadata;
    fromProtoMsg(message: MsgUpdateClassMetadataProtoMsg): MsgUpdateClassMetadata;
    toProto(message: MsgUpdateClassMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataProtoMsg;
};
export declare const MsgUpdateClassMetadataResponse: {
    typeUrl: string;
    encode(_: MsgUpdateClassMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassMetadataResponse;
    fromPartial(_: Partial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse;
    fromAmino(_: MsgUpdateClassMetadataResponseAmino): MsgUpdateClassMetadataResponse;
    toAmino(_: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateClassMetadataResponseAminoMsg): MsgUpdateClassMetadataResponse;
    fromProtoMsg(message: MsgUpdateClassMetadataResponseProtoMsg): MsgUpdateClassMetadataResponse;
    toProto(message: MsgUpdateClassMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseProtoMsg;
};
export declare const MsgUpdateProjectAdmin: {
    typeUrl: string;
    encode(message: MsgUpdateProjectAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectAdmin;
    fromPartial(object: Partial<MsgUpdateProjectAdmin>): MsgUpdateProjectAdmin;
    fromAmino(object: MsgUpdateProjectAdminAmino): MsgUpdateProjectAdmin;
    toAmino(message: MsgUpdateProjectAdmin): MsgUpdateProjectAdminAmino;
    fromAminoMsg(object: MsgUpdateProjectAdminAminoMsg): MsgUpdateProjectAdmin;
    fromProtoMsg(message: MsgUpdateProjectAdminProtoMsg): MsgUpdateProjectAdmin;
    toProto(message: MsgUpdateProjectAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateProjectAdmin): MsgUpdateProjectAdminProtoMsg;
};
export declare const MsgUpdateProjectAdminResponse: {
    typeUrl: string;
    encode(_: MsgUpdateProjectAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectAdminResponse;
    fromPartial(_: Partial<MsgUpdateProjectAdminResponse>): MsgUpdateProjectAdminResponse;
    fromAmino(_: MsgUpdateProjectAdminResponseAmino): MsgUpdateProjectAdminResponse;
    toAmino(_: MsgUpdateProjectAdminResponse): MsgUpdateProjectAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateProjectAdminResponseAminoMsg): MsgUpdateProjectAdminResponse;
    fromProtoMsg(message: MsgUpdateProjectAdminResponseProtoMsg): MsgUpdateProjectAdminResponse;
    toProto(message: MsgUpdateProjectAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateProjectAdminResponse): MsgUpdateProjectAdminResponseProtoMsg;
};
export declare const MsgUpdateProjectMetadata: {
    typeUrl: string;
    encode(message: MsgUpdateProjectMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectMetadata;
    fromPartial(object: Partial<MsgUpdateProjectMetadata>): MsgUpdateProjectMetadata;
    fromAmino(object: MsgUpdateProjectMetadataAmino): MsgUpdateProjectMetadata;
    toAmino(message: MsgUpdateProjectMetadata): MsgUpdateProjectMetadataAmino;
    fromAminoMsg(object: MsgUpdateProjectMetadataAminoMsg): MsgUpdateProjectMetadata;
    fromProtoMsg(message: MsgUpdateProjectMetadataProtoMsg): MsgUpdateProjectMetadata;
    toProto(message: MsgUpdateProjectMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateProjectMetadata): MsgUpdateProjectMetadataProtoMsg;
};
export declare const MsgUpdateProjectMetadataResponse: {
    typeUrl: string;
    encode(_: MsgUpdateProjectMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectMetadataResponse;
    fromPartial(_: Partial<MsgUpdateProjectMetadataResponse>): MsgUpdateProjectMetadataResponse;
    fromAmino(_: MsgUpdateProjectMetadataResponseAmino): MsgUpdateProjectMetadataResponse;
    toAmino(_: MsgUpdateProjectMetadataResponse): MsgUpdateProjectMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateProjectMetadataResponseAminoMsg): MsgUpdateProjectMetadataResponse;
    fromProtoMsg(message: MsgUpdateProjectMetadataResponseProtoMsg): MsgUpdateProjectMetadataResponse;
    toProto(message: MsgUpdateProjectMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateProjectMetadataResponse): MsgUpdateProjectMetadataResponseProtoMsg;
};
