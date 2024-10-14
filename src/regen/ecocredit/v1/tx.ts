//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { OriginTx, OriginTxAmino, OriginTxSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
export interface MsgMintBatchCreditsResponse {}
export interface MsgMintBatchCreditsResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse";
  value: Uint8Array;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponseAmino {}
export interface MsgMintBatchCreditsResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse";
  value: MsgMintBatchCreditsResponseAmino;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponseSDKType {}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponse {}
export interface MsgSealBatchResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse";
  value: Uint8Array;
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponseAmino {}
export interface MsgSealBatchResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgSealBatchResponse";
  value: MsgSealBatchResponseAmino;
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponseSDKType {}
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
export interface MsgSendResponse {}
export interface MsgSendResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgSendResponse";
  value: Uint8Array;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponseAmino {}
export interface MsgSendResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgSendResponse";
  value: MsgSendResponseAmino;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponseSDKType {}
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
export interface MsgRetireResponse {}
export interface MsgRetireResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgRetireResponse";
  value: Uint8Array;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponseAmino {}
export interface MsgRetireResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgRetireResponse";
  value: MsgRetireResponseAmino;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponseSDKType {}
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
export interface MsgCancelResponse {}
export interface MsgCancelResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgCancelResponse";
  value: Uint8Array;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponseAmino {}
export interface MsgCancelResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgCancelResponse";
  value: MsgCancelResponseAmino;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponseSDKType {}
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
export interface MsgUpdateClassAdminResponse {}
export interface MsgUpdateClassAdminResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponseAmino {}
export interface MsgUpdateClassAdminResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse";
  value: MsgUpdateClassAdminResponseAmino;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponseSDKType {}
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
export interface MsgUpdateClassIssuersResponse {}
export interface MsgUpdateClassIssuersResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse";
  value: Uint8Array;
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponseAmino {}
export interface MsgUpdateClassIssuersResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse";
  value: MsgUpdateClassIssuersResponseAmino;
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponseSDKType {}
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
export interface MsgUpdateClassMetadataResponse {}
export interface MsgUpdateClassMetadataResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponseAmino {}
export interface MsgUpdateClassMetadataResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse";
  value: MsgUpdateClassMetadataResponseAmino;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponseSDKType {}
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
export interface MsgUpdateProjectAdminResponse {}
export interface MsgUpdateProjectAdminResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponseAmino {}
export interface MsgUpdateProjectAdminResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse";
  value: MsgUpdateProjectAdminResponseAmino;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponseSDKType {}
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
export interface MsgUpdateProjectMetadataResponse {}
export interface MsgUpdateProjectMetadataResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponseAmino {}
export interface MsgUpdateProjectMetadataResponseAminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse";
  value: MsgUpdateProjectMetadataResponseAmino;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponseSDKType {}
function createBaseMsgCreateClass(): MsgCreateClass {
  return {
    admin: "",
    issuers: [],
    metadata: "",
    creditTypeAbbrev: "",
    fee: undefined
  };
}
export const MsgCreateClass = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
  encode(message: MsgCreateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.issuers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.creditTypeAbbrev !== "") {
      writer.uint32(34).string(message.creditTypeAbbrev);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.issuers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.creditTypeAbbrev = reader.string();
          break;
        case 5:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateClass>): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    message.admin = object.admin ?? "";
    message.issuers = object.issuers?.map(e => e) || [];
    message.metadata = object.metadata ?? "";
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateClassAmino): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    message.issuers = object.issuers?.map(e => e) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
      message.creditTypeAbbrev = object.credit_type_abbrev;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgCreateClass): MsgCreateClassAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = message.issuers;
    }
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClassAminoMsg): MsgCreateClass {
    return MsgCreateClass.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClassProtoMsg): MsgCreateClass {
    return MsgCreateClass.decode(message.value);
  },
  toProto(message: MsgCreateClass): Uint8Array {
    return MsgCreateClass.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClass): MsgCreateClassProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
      value: MsgCreateClass.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClassResponse(): MsgCreateClassResponse {
  return {
    classId: ""
  };
}
export const MsgCreateClassResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse",
  encode(message: MsgCreateClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateClassResponse>): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateClassResponseAmino): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: MsgCreateClassResponse): MsgCreateClassResponseAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClassResponseAminoMsg): MsgCreateClassResponse {
    return MsgCreateClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClassResponseProtoMsg): MsgCreateClassResponse {
    return MsgCreateClassResponse.decode(message.value);
  },
  toProto(message: MsgCreateClassResponse): Uint8Array {
    return MsgCreateClassResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClassResponse): MsgCreateClassResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse",
      value: MsgCreateClassResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProject(): MsgCreateProject {
  return {
    issuer: "",
    classId: "",
    metadata: "",
    jurisdiction: "",
    referenceId: ""
  };
}
export const MsgCreateProject = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
  encode(message: MsgCreateProject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.jurisdiction !== "") {
      writer.uint32(34).string(message.jurisdiction);
    }
    if (message.referenceId !== "") {
      writer.uint32(42).string(message.referenceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.jurisdiction = reader.string();
          break;
        case 5:
          message.referenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateProject>): MsgCreateProject {
    const message = createBaseMsgCreateProject();
    message.issuer = object.issuer ?? "";
    message.classId = object.classId ?? "";
    message.metadata = object.metadata ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.referenceId = object.referenceId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateProjectAmino): MsgCreateProject {
    const message = createBaseMsgCreateProject();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
      message.jurisdiction = object.jurisdiction;
    }
    if (object.reference_id !== undefined && object.reference_id !== null) {
      message.referenceId = object.reference_id;
    }
    return message;
  },
  toAmino(message: MsgCreateProject): MsgCreateProjectAmino {
    const obj: any = {};
    obj.issuer = message.issuer === "" ? undefined : message.issuer;
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
    obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProjectAminoMsg): MsgCreateProject {
    return MsgCreateProject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProjectProtoMsg): MsgCreateProject {
    return MsgCreateProject.decode(message.value);
  },
  toProto(message: MsgCreateProject): Uint8Array {
    return MsgCreateProject.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProject): MsgCreateProjectProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
      value: MsgCreateProject.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProjectResponse(): MsgCreateProjectResponse {
  return {
    projectId: ""
  };
}
export const MsgCreateProjectResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse",
  encode(message: MsgCreateProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProjectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateProjectResponse>): MsgCreateProjectResponse {
    const message = createBaseMsgCreateProjectResponse();
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateProjectResponseAmino): MsgCreateProjectResponse {
    const message = createBaseMsgCreateProjectResponse();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    return message;
  },
  toAmino(message: MsgCreateProjectResponse): MsgCreateProjectResponseAmino {
    const obj: any = {};
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProjectResponseAminoMsg): MsgCreateProjectResponse {
    return MsgCreateProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProjectResponseProtoMsg): MsgCreateProjectResponse {
    return MsgCreateProjectResponse.decode(message.value);
  },
  toProto(message: MsgCreateProjectResponse): Uint8Array {
    return MsgCreateProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProjectResponse): MsgCreateProjectResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse",
      value: MsgCreateProjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBatch(): MsgCreateBatch {
  return {
    issuer: "",
    projectId: "",
    issuance: [],
    metadata: "",
    startDate: undefined,
    endDate: undefined,
    open: false,
    originTx: undefined,
    note: ""
  };
}
export const MsgCreateBatch = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
  encode(message: MsgCreateBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    for (const v of message.issuance) {
      BatchIssuance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.open === true) {
      writer.uint32(56).bool(message.open);
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.note !== "") {
      writer.uint32(74).string(message.note);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.issuance.push(BatchIssuance.decode(reader, reader.uint32()));
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.open = reader.bool();
          break;
        case 8:
          message.originTx = OriginTx.decode(reader, reader.uint32());
          break;
        case 9:
          message.note = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateBatch>): MsgCreateBatch {
    const message = createBaseMsgCreateBatch();
    message.issuer = object.issuer ?? "";
    message.projectId = object.projectId ?? "";
    message.issuance = object.issuance?.map(e => BatchIssuance.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.open = object.open ?? false;
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    message.note = object.note ?? "";
    return message;
  },
  fromAmino(object: MsgCreateBatchAmino): MsgCreateBatch {
    const message = createBaseMsgCreateBatch();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    message.issuance = object.issuance?.map(e => BatchIssuance.fromAmino(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.start_date !== undefined && object.start_date !== null) {
      message.startDate = fromTimestamp(Timestamp.fromAmino(object.start_date));
    }
    if (object.end_date !== undefined && object.end_date !== null) {
      message.endDate = fromTimestamp(Timestamp.fromAmino(object.end_date));
    }
    if (object.open !== undefined && object.open !== null) {
      message.open = object.open;
    }
    if (object.origin_tx !== undefined && object.origin_tx !== null) {
      message.originTx = OriginTx.fromAmino(object.origin_tx);
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = object.note;
    }
    return message;
  },
  toAmino(message: MsgCreateBatch): MsgCreateBatchAmino {
    const obj: any = {};
    obj.issuer = message.issuer === "" ? undefined : message.issuer;
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    if (message.issuance) {
      obj.issuance = message.issuance.map(e => e ? BatchIssuance.toAmino(e) : undefined);
    } else {
      obj.issuance = message.issuance;
    }
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.start_date = message.startDate ? Timestamp.toAmino(toTimestamp(message.startDate)) : undefined;
    obj.end_date = message.endDate ? Timestamp.toAmino(toTimestamp(message.endDate)) : undefined;
    obj.open = message.open === false ? undefined : message.open;
    obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
    obj.note = message.note === "" ? undefined : message.note;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBatchAminoMsg): MsgCreateBatch {
    return MsgCreateBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBatchProtoMsg): MsgCreateBatch {
    return MsgCreateBatch.decode(message.value);
  },
  toProto(message: MsgCreateBatch): Uint8Array {
    return MsgCreateBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBatch): MsgCreateBatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
      value: MsgCreateBatch.encode(message).finish()
    };
  }
};
function createBaseBatchIssuance(): BatchIssuance {
  return {
    recipient: "",
    tradableAmount: "",
    retiredAmount: "",
    retirementJurisdiction: ""
  };
}
export const BatchIssuance = {
  typeUrl: "/regen.ecocredit.v1.BatchIssuance",
  encode(message: BatchIssuance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }
    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }
    if (message.retirementJurisdiction !== "") {
      writer.uint32(34).string(message.retirementJurisdiction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchIssuance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchIssuance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.tradableAmount = reader.string();
          break;
        case 3:
          message.retiredAmount = reader.string();
          break;
        case 4:
          message.retirementJurisdiction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BatchIssuance>): BatchIssuance {
    const message = createBaseBatchIssuance();
    message.recipient = object.recipient ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    return message;
  },
  fromAmino(object: BatchIssuanceAmino): BatchIssuance {
    const message = createBaseBatchIssuance();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
      message.tradableAmount = object.tradable_amount;
    }
    if (object.retired_amount !== undefined && object.retired_amount !== null) {
      message.retiredAmount = object.retired_amount;
    }
    if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
      message.retirementJurisdiction = object.retirement_jurisdiction;
    }
    return message;
  },
  toAmino(message: BatchIssuance): BatchIssuanceAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
    obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
    obj.retirement_jurisdiction = message.retirementJurisdiction === "" ? undefined : message.retirementJurisdiction;
    return obj;
  },
  fromAminoMsg(object: BatchIssuanceAminoMsg): BatchIssuance {
    return BatchIssuance.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchIssuanceProtoMsg): BatchIssuance {
    return BatchIssuance.decode(message.value);
  },
  toProto(message: BatchIssuance): Uint8Array {
    return BatchIssuance.encode(message).finish();
  },
  toProtoMsg(message: BatchIssuance): BatchIssuanceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchIssuance",
      value: BatchIssuance.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBatchResponse(): MsgCreateBatchResponse {
  return {
    batchDenom: ""
  };
}
export const MsgCreateBatchResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse",
  encode(message: MsgCreateBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateBatchResponse>): MsgCreateBatchResponse {
    const message = createBaseMsgCreateBatchResponse();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateBatchResponseAmino): MsgCreateBatchResponse {
    const message = createBaseMsgCreateBatchResponse();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: MsgCreateBatchResponse): MsgCreateBatchResponseAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBatchResponseAminoMsg): MsgCreateBatchResponse {
    return MsgCreateBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBatchResponseProtoMsg): MsgCreateBatchResponse {
    return MsgCreateBatchResponse.decode(message.value);
  },
  toProto(message: MsgCreateBatchResponse): Uint8Array {
    return MsgCreateBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBatchResponse): MsgCreateBatchResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse",
      value: MsgCreateBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMintBatchCredits(): MsgMintBatchCredits {
  return {
    issuer: "",
    batchDenom: "",
    issuance: [],
    originTx: undefined,
    note: ""
  };
}
export const MsgMintBatchCredits = {
  typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
  encode(message: MsgMintBatchCredits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    for (const v of message.issuance) {
      BatchIssuance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(34).fork()).ldelim();
    }
    if (message.note !== "") {
      writer.uint32(42).string(message.note);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintBatchCredits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBatchCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.issuance.push(BatchIssuance.decode(reader, reader.uint32()));
          break;
        case 4:
          message.originTx = OriginTx.decode(reader, reader.uint32());
          break;
        case 5:
          message.note = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMintBatchCredits>): MsgMintBatchCredits {
    const message = createBaseMsgMintBatchCredits();
    message.issuer = object.issuer ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.issuance = object.issuance?.map(e => BatchIssuance.fromPartial(e)) || [];
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    message.note = object.note ?? "";
    return message;
  },
  fromAmino(object: MsgMintBatchCreditsAmino): MsgMintBatchCredits {
    const message = createBaseMsgMintBatchCredits();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    message.issuance = object.issuance?.map(e => BatchIssuance.fromAmino(e)) || [];
    if (object.origin_tx !== undefined && object.origin_tx !== null) {
      message.originTx = OriginTx.fromAmino(object.origin_tx);
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = object.note;
    }
    return message;
  },
  toAmino(message: MsgMintBatchCredits): MsgMintBatchCreditsAmino {
    const obj: any = {};
    obj.issuer = message.issuer === "" ? undefined : message.issuer;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    if (message.issuance) {
      obj.issuance = message.issuance.map(e => e ? BatchIssuance.toAmino(e) : undefined);
    } else {
      obj.issuance = message.issuance;
    }
    obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
    obj.note = message.note === "" ? undefined : message.note;
    return obj;
  },
  fromAminoMsg(object: MsgMintBatchCreditsAminoMsg): MsgMintBatchCredits {
    return MsgMintBatchCredits.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintBatchCreditsProtoMsg): MsgMintBatchCredits {
    return MsgMintBatchCredits.decode(message.value);
  },
  toProto(message: MsgMintBatchCredits): Uint8Array {
    return MsgMintBatchCredits.encode(message).finish();
  },
  toProtoMsg(message: MsgMintBatchCredits): MsgMintBatchCreditsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
      value: MsgMintBatchCredits.encode(message).finish()
    };
  }
};
function createBaseMsgSealBatch(): MsgSealBatch {
  return {
    issuer: "",
    batchDenom: ""
  };
}
export const MsgSealBatch = {
  typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
  encode(message: MsgSealBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSealBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSealBatch>): MsgSealBatch {
    const message = createBaseMsgSealBatch();
    message.issuer = object.issuer ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromAmino(object: MsgSealBatchAmino): MsgSealBatch {
    const message = createBaseMsgSealBatch();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: MsgSealBatch): MsgSealBatchAmino {
    const obj: any = {};
    obj.issuer = message.issuer === "" ? undefined : message.issuer;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: MsgSealBatchAminoMsg): MsgSealBatch {
    return MsgSealBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSealBatchProtoMsg): MsgSealBatch {
    return MsgSealBatch.decode(message.value);
  },
  toProto(message: MsgSealBatch): Uint8Array {
    return MsgSealBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgSealBatch): MsgSealBatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
      value: MsgSealBatch.encode(message).finish()
    };
  }
};
function createBaseMsgMintBatchCreditsResponse(): MsgMintBatchCreditsResponse {
  return {};
}
export const MsgMintBatchCreditsResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse",
  encode(_: MsgMintBatchCreditsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintBatchCreditsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBatchCreditsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgMintBatchCreditsResponse>): MsgMintBatchCreditsResponse {
    const message = createBaseMsgMintBatchCreditsResponse();
    return message;
  },
  fromAmino(_: MsgMintBatchCreditsResponseAmino): MsgMintBatchCreditsResponse {
    const message = createBaseMsgMintBatchCreditsResponse();
    return message;
  },
  toAmino(_: MsgMintBatchCreditsResponse): MsgMintBatchCreditsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintBatchCreditsResponseAminoMsg): MsgMintBatchCreditsResponse {
    return MsgMintBatchCreditsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintBatchCreditsResponseProtoMsg): MsgMintBatchCreditsResponse {
    return MsgMintBatchCreditsResponse.decode(message.value);
  },
  toProto(message: MsgMintBatchCreditsResponse): Uint8Array {
    return MsgMintBatchCreditsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintBatchCreditsResponse): MsgMintBatchCreditsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse",
      value: MsgMintBatchCreditsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSealBatchResponse(): MsgSealBatchResponse {
  return {};
}
export const MsgSealBatchResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse",
  encode(_: MsgSealBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSealBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSealBatchResponse>): MsgSealBatchResponse {
    const message = createBaseMsgSealBatchResponse();
    return message;
  },
  fromAmino(_: MsgSealBatchResponseAmino): MsgSealBatchResponse {
    const message = createBaseMsgSealBatchResponse();
    return message;
  },
  toAmino(_: MsgSealBatchResponse): MsgSealBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSealBatchResponseAminoMsg): MsgSealBatchResponse {
    return MsgSealBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSealBatchResponseProtoMsg): MsgSealBatchResponse {
    return MsgSealBatchResponse.decode(message.value);
  },
  toProto(message: MsgSealBatchResponse): Uint8Array {
    return MsgSealBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSealBatchResponse): MsgSealBatchResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse",
      value: MsgSealBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSend(): MsgSend {
  return {
    sender: "",
    recipient: "",
    credits: []
  };
}
export const MsgSend = {
  typeUrl: "/regen.ecocredit.v1.MsgSend",
  encode(message: MsgSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.credits) {
      MsgSend_SendCredits.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.credits.push(MsgSend_SendCredits.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.credits = object.credits?.map(e => MsgSend_SendCredits.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSendAmino): MsgSend {
    const message = createBaseMsgSend();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.credits = object.credits?.map(e => MsgSend_SendCredits.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSend): MsgSendAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgSend_SendCredits.toAmino(e) : undefined);
    } else {
      obj.credits = message.credits;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSendAminoMsg): MsgSend {
    return MsgSend.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendProtoMsg): MsgSend {
    return MsgSend.decode(message.value);
  },
  toProto(message: MsgSend): Uint8Array {
    return MsgSend.encode(message).finish();
  },
  toProtoMsg(message: MsgSend): MsgSendProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgSend",
      value: MsgSend.encode(message).finish()
    };
  }
};
function createBaseMsgSend_SendCredits(): MsgSend_SendCredits {
  return {
    batchDenom: "",
    tradableAmount: "",
    retiredAmount: "",
    retirementJurisdiction: ""
  };
}
export const MsgSend_SendCredits = {
  typeUrl: "/regen.ecocredit.v1.SendCredits",
  encode(message: MsgSend_SendCredits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }
    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }
    if (message.retirementJurisdiction !== "") {
      writer.uint32(34).string(message.retirementJurisdiction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSend_SendCredits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend_SendCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.tradableAmount = reader.string();
          break;
        case 3:
          message.retiredAmount = reader.string();
          break;
        case 4:
          message.retirementJurisdiction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSend_SendCredits>): MsgSend_SendCredits {
    const message = createBaseMsgSend_SendCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    return message;
  },
  fromAmino(object: MsgSend_SendCreditsAmino): MsgSend_SendCredits {
    const message = createBaseMsgSend_SendCredits();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
      message.tradableAmount = object.tradable_amount;
    }
    if (object.retired_amount !== undefined && object.retired_amount !== null) {
      message.retiredAmount = object.retired_amount;
    }
    if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
      message.retirementJurisdiction = object.retirement_jurisdiction;
    }
    return message;
  },
  toAmino(message: MsgSend_SendCredits): MsgSend_SendCreditsAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
    obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
    obj.retirement_jurisdiction = message.retirementJurisdiction === "" ? undefined : message.retirementJurisdiction;
    return obj;
  },
  fromAminoMsg(object: MsgSend_SendCreditsAminoMsg): MsgSend_SendCredits {
    return MsgSend_SendCredits.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSend_SendCreditsProtoMsg): MsgSend_SendCredits {
    return MsgSend_SendCredits.decode(message.value);
  },
  toProto(message: MsgSend_SendCredits): Uint8Array {
    return MsgSend_SendCredits.encode(message).finish();
  },
  toProtoMsg(message: MsgSend_SendCredits): MsgSend_SendCreditsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.SendCredits",
      value: MsgSend_SendCredits.encode(message).finish()
    };
  }
};
function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}
export const MsgSendResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgSendResponse",
  encode(_: MsgSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
  fromAmino(_: MsgSendResponseAmino): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
  toAmino(_: MsgSendResponse): MsgSendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse {
    return MsgSendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse {
    return MsgSendResponse.decode(message.value);
  },
  toProto(message: MsgSendResponse): Uint8Array {
    return MsgSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgSendResponse",
      value: MsgSendResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRetire(): MsgRetire {
  return {
    holder: "",
    credits: [],
    jurisdiction: ""
  };
}
export const MsgRetire = {
  typeUrl: "/regen.ecocredit.v1.MsgRetire",
  encode(message: MsgRetire, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }
    for (const v of message.credits) {
      MsgRetire_RetireCredits.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.jurisdiction !== "") {
      writer.uint32(26).string(message.jurisdiction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetire {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetire();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.credits.push(MsgRetire_RetireCredits.decode(reader, reader.uint32()));
          break;
        case 3:
          message.jurisdiction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRetire>): MsgRetire {
    const message = createBaseMsgRetire();
    message.holder = object.holder ?? "";
    message.credits = object.credits?.map(e => MsgRetire_RetireCredits.fromPartial(e)) || [];
    message.jurisdiction = object.jurisdiction ?? "";
    return message;
  },
  fromAmino(object: MsgRetireAmino): MsgRetire {
    const message = createBaseMsgRetire();
    if (object.holder !== undefined && object.holder !== null) {
      message.holder = object.holder;
    }
    message.credits = object.credits?.map(e => MsgRetire_RetireCredits.fromAmino(e)) || [];
    if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
      message.jurisdiction = object.jurisdiction;
    }
    return message;
  },
  toAmino(message: MsgRetire): MsgRetireAmino {
    const obj: any = {};
    obj.holder = message.holder === "" ? undefined : message.holder;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgRetire_RetireCredits.toAmino(e) : undefined);
    } else {
      obj.credits = message.credits;
    }
    obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
    return obj;
  },
  fromAminoMsg(object: MsgRetireAminoMsg): MsgRetire {
    return MsgRetire.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetireProtoMsg): MsgRetire {
    return MsgRetire.decode(message.value);
  },
  toProto(message: MsgRetire): Uint8Array {
    return MsgRetire.encode(message).finish();
  },
  toProtoMsg(message: MsgRetire): MsgRetireProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgRetire",
      value: MsgRetire.encode(message).finish()
    };
  }
};
function createBaseMsgRetire_RetireCredits(): MsgRetire_RetireCredits {
  return {
    batchDenom: "",
    amount: ""
  };
}
export const MsgRetire_RetireCredits = {
  typeUrl: "/regen.ecocredit.v1.RetireCredits",
  encode(message: MsgRetire_RetireCredits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetire_RetireCredits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetire_RetireCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRetire_RetireCredits>): MsgRetire_RetireCredits {
    const message = createBaseMsgRetire_RetireCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgRetire_RetireCreditsAmino): MsgRetire_RetireCredits {
    const message = createBaseMsgRetire_RetireCredits();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgRetire_RetireCredits): MsgRetire_RetireCreditsAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgRetire_RetireCreditsAminoMsg): MsgRetire_RetireCredits {
    return MsgRetire_RetireCredits.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetire_RetireCreditsProtoMsg): MsgRetire_RetireCredits {
    return MsgRetire_RetireCredits.decode(message.value);
  },
  toProto(message: MsgRetire_RetireCredits): Uint8Array {
    return MsgRetire_RetireCredits.encode(message).finish();
  },
  toProtoMsg(message: MsgRetire_RetireCredits): MsgRetire_RetireCreditsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.RetireCredits",
      value: MsgRetire_RetireCredits.encode(message).finish()
    };
  }
};
function createBaseMsgRetireResponse(): MsgRetireResponse {
  return {};
}
export const MsgRetireResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgRetireResponse",
  encode(_: MsgRetireResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetireResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgRetireResponse>): MsgRetireResponse {
    const message = createBaseMsgRetireResponse();
    return message;
  },
  fromAmino(_: MsgRetireResponseAmino): MsgRetireResponse {
    const message = createBaseMsgRetireResponse();
    return message;
  },
  toAmino(_: MsgRetireResponse): MsgRetireResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRetireResponseAminoMsg): MsgRetireResponse {
    return MsgRetireResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetireResponseProtoMsg): MsgRetireResponse {
    return MsgRetireResponse.decode(message.value);
  },
  toProto(message: MsgRetireResponse): Uint8Array {
    return MsgRetireResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRetireResponse): MsgRetireResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgRetireResponse",
      value: MsgRetireResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancel(): MsgCancel {
  return {
    holder: "",
    credits: []
  };
}
export const MsgCancel = {
  typeUrl: "/regen.ecocredit.v1.MsgCancel",
  encode(message: MsgCancel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }
    for (const v of message.credits) {
      MsgCancel_CancelCredits.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.credits.push(MsgCancel_CancelCredits.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCancel>): MsgCancel {
    const message = createBaseMsgCancel();
    message.holder = object.holder ?? "";
    message.credits = object.credits?.map(e => MsgCancel_CancelCredits.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCancelAmino): MsgCancel {
    const message = createBaseMsgCancel();
    if (object.holder !== undefined && object.holder !== null) {
      message.holder = object.holder;
    }
    message.credits = object.credits?.map(e => MsgCancel_CancelCredits.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCancel): MsgCancelAmino {
    const obj: any = {};
    obj.holder = message.holder === "" ? undefined : message.holder;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgCancel_CancelCredits.toAmino(e) : undefined);
    } else {
      obj.credits = message.credits;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCancelAminoMsg): MsgCancel {
    return MsgCancel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelProtoMsg): MsgCancel {
    return MsgCancel.decode(message.value);
  },
  toProto(message: MsgCancel): Uint8Array {
    return MsgCancel.encode(message).finish();
  },
  toProtoMsg(message: MsgCancel): MsgCancelProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCancel",
      value: MsgCancel.encode(message).finish()
    };
  }
};
function createBaseMsgCancel_CancelCredits(): MsgCancel_CancelCredits {
  return {
    batchDenom: "",
    amount: ""
  };
}
export const MsgCancel_CancelCredits = {
  typeUrl: "/regen.ecocredit.v1.CancelCredits",
  encode(message: MsgCancel_CancelCredits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancel_CancelCredits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancel_CancelCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCancel_CancelCredits>): MsgCancel_CancelCredits {
    const message = createBaseMsgCancel_CancelCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgCancel_CancelCreditsAmino): MsgCancel_CancelCredits {
    const message = createBaseMsgCancel_CancelCredits();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgCancel_CancelCredits): MsgCancel_CancelCreditsAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgCancel_CancelCreditsAminoMsg): MsgCancel_CancelCredits {
    return MsgCancel_CancelCredits.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancel_CancelCreditsProtoMsg): MsgCancel_CancelCredits {
    return MsgCancel_CancelCredits.decode(message.value);
  },
  toProto(message: MsgCancel_CancelCredits): Uint8Array {
    return MsgCancel_CancelCredits.encode(message).finish();
  },
  toProtoMsg(message: MsgCancel_CancelCredits): MsgCancel_CancelCreditsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.CancelCredits",
      value: MsgCancel_CancelCredits.encode(message).finish()
    };
  }
};
function createBaseMsgCancelResponse(): MsgCancelResponse {
  return {};
}
export const MsgCancelResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgCancelResponse",
  encode(_: MsgCancelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgCancelResponse>): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
  fromAmino(_: MsgCancelResponseAmino): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
  toAmino(_: MsgCancelResponse): MsgCancelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelResponseAminoMsg): MsgCancelResponse {
    return MsgCancelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelResponseProtoMsg): MsgCancelResponse {
    return MsgCancelResponse.decode(message.value);
  },
  toProto(message: MsgCancelResponse): Uint8Array {
    return MsgCancelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelResponse): MsgCancelResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgCancelResponse",
      value: MsgCancelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassAdmin(): MsgUpdateClassAdmin {
  return {
    admin: "",
    classId: "",
    newAdmin: ""
  };
}
export const MsgUpdateClassAdmin = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
  encode(message: MsgUpdateClassAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin {
    const message = createBaseMsgUpdateClassAdmin();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClassAdminAmino): MsgUpdateClassAdmin {
    const message = createBaseMsgUpdateClassAdmin();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgUpdateClassAdmin): MsgUpdateClassAdminAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassAdminAminoMsg): MsgUpdateClassAdmin {
    return MsgUpdateClassAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassAdminProtoMsg): MsgUpdateClassAdmin {
    return MsgUpdateClassAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateClassAdmin): Uint8Array {
    return MsgUpdateClassAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassAdmin): MsgUpdateClassAdminProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
      value: MsgUpdateClassAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassAdminResponse(): MsgUpdateClassAdminResponse {
  return {};
}
export const MsgUpdateClassAdminResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse",
  encode(_: MsgUpdateClassAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse {
    const message = createBaseMsgUpdateClassAdminResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClassAdminResponseAmino): MsgUpdateClassAdminResponse {
    const message = createBaseMsgUpdateClassAdminResponse();
    return message;
  },
  toAmino(_: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassAdminResponseAminoMsg): MsgUpdateClassAdminResponse {
    return MsgUpdateClassAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassAdminResponseProtoMsg): MsgUpdateClassAdminResponse {
    return MsgUpdateClassAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClassAdminResponse): Uint8Array {
    return MsgUpdateClassAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse",
      value: MsgUpdateClassAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassIssuers(): MsgUpdateClassIssuers {
  return {
    admin: "",
    classId: "",
    addIssuers: [],
    removeIssuers: []
  };
}
export const MsgUpdateClassIssuers = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
  encode(message: MsgUpdateClassIssuers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    for (const v of message.addIssuers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.removeIssuers) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassIssuers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassIssuers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.addIssuers.push(reader.string());
          break;
        case 4:
          message.removeIssuers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers {
    const message = createBaseMsgUpdateClassIssuers();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.addIssuers = object.addIssuers?.map(e => e) || [];
    message.removeIssuers = object.removeIssuers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdateClassIssuersAmino): MsgUpdateClassIssuers {
    const message = createBaseMsgUpdateClassIssuers();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    message.addIssuers = object.add_issuers?.map(e => e) || [];
    message.removeIssuers = object.remove_issuers?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.class_id = message.classId === "" ? undefined : message.classId;
    if (message.addIssuers) {
      obj.add_issuers = message.addIssuers.map(e => e);
    } else {
      obj.add_issuers = message.addIssuers;
    }
    if (message.removeIssuers) {
      obj.remove_issuers = message.removeIssuers.map(e => e);
    } else {
      obj.remove_issuers = message.removeIssuers;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassIssuersAminoMsg): MsgUpdateClassIssuers {
    return MsgUpdateClassIssuers.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassIssuersProtoMsg): MsgUpdateClassIssuers {
    return MsgUpdateClassIssuers.decode(message.value);
  },
  toProto(message: MsgUpdateClassIssuers): Uint8Array {
    return MsgUpdateClassIssuers.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
      value: MsgUpdateClassIssuers.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassIssuersResponse(): MsgUpdateClassIssuersResponse {
  return {};
}
export const MsgUpdateClassIssuersResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse",
  encode(_: MsgUpdateClassIssuersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassIssuersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassIssuersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse {
    const message = createBaseMsgUpdateClassIssuersResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClassIssuersResponseAmino): MsgUpdateClassIssuersResponse {
    const message = createBaseMsgUpdateClassIssuersResponse();
    return message;
  },
  toAmino(_: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassIssuersResponseAminoMsg): MsgUpdateClassIssuersResponse {
    return MsgUpdateClassIssuersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassIssuersResponseProtoMsg): MsgUpdateClassIssuersResponse {
    return MsgUpdateClassIssuersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClassIssuersResponse): Uint8Array {
    return MsgUpdateClassIssuersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse",
      value: MsgUpdateClassIssuersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassMetadata(): MsgUpdateClassMetadata {
  return {
    admin: "",
    classId: "",
    metadata: ""
  };
}
export const MsgUpdateClassMetadata = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
  encode(message: MsgUpdateClassMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata {
    const message = createBaseMsgUpdateClassMetadata();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClassMetadataAmino): MsgUpdateClassMetadata {
    const message = createBaseMsgUpdateClassMetadata();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassMetadataAminoMsg): MsgUpdateClassMetadata {
    return MsgUpdateClassMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassMetadataProtoMsg): MsgUpdateClassMetadata {
    return MsgUpdateClassMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateClassMetadata): Uint8Array {
    return MsgUpdateClassMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
      value: MsgUpdateClassMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassMetadataResponse(): MsgUpdateClassMetadataResponse {
  return {};
}
export const MsgUpdateClassMetadataResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse",
  encode(_: MsgUpdateClassMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse {
    const message = createBaseMsgUpdateClassMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClassMetadataResponseAmino): MsgUpdateClassMetadataResponse {
    const message = createBaseMsgUpdateClassMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassMetadataResponseAminoMsg): MsgUpdateClassMetadataResponse {
    return MsgUpdateClassMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassMetadataResponseProtoMsg): MsgUpdateClassMetadataResponse {
    return MsgUpdateClassMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClassMetadataResponse): Uint8Array {
    return MsgUpdateClassMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse",
      value: MsgUpdateClassMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProjectAdmin(): MsgUpdateProjectAdmin {
  return {
    admin: "",
    newAdmin: "",
    projectId: ""
  };
}
export const MsgUpdateProjectAdmin = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
  encode(message: MsgUpdateProjectAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.projectId !== "") {
      writer.uint32(26).string(message.projectId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.newAdmin = reader.string();
          break;
        case 3:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateProjectAdmin>): MsgUpdateProjectAdmin {
    const message = createBaseMsgUpdateProjectAdmin();
    message.admin = object.admin ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateProjectAdminAmino): MsgUpdateProjectAdmin {
    const message = createBaseMsgUpdateProjectAdmin();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    return message;
  },
  toAmino(message: MsgUpdateProjectAdmin): MsgUpdateProjectAdminAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProjectAdminAminoMsg): MsgUpdateProjectAdmin {
    return MsgUpdateProjectAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProjectAdminProtoMsg): MsgUpdateProjectAdmin {
    return MsgUpdateProjectAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateProjectAdmin): Uint8Array {
    return MsgUpdateProjectAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProjectAdmin): MsgUpdateProjectAdminProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
      value: MsgUpdateProjectAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProjectAdminResponse(): MsgUpdateProjectAdminResponse {
  return {};
}
export const MsgUpdateProjectAdminResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse",
  encode(_: MsgUpdateProjectAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateProjectAdminResponse>): MsgUpdateProjectAdminResponse {
    const message = createBaseMsgUpdateProjectAdminResponse();
    return message;
  },
  fromAmino(_: MsgUpdateProjectAdminResponseAmino): MsgUpdateProjectAdminResponse {
    const message = createBaseMsgUpdateProjectAdminResponse();
    return message;
  },
  toAmino(_: MsgUpdateProjectAdminResponse): MsgUpdateProjectAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProjectAdminResponseAminoMsg): MsgUpdateProjectAdminResponse {
    return MsgUpdateProjectAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProjectAdminResponseProtoMsg): MsgUpdateProjectAdminResponse {
    return MsgUpdateProjectAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateProjectAdminResponse): Uint8Array {
    return MsgUpdateProjectAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProjectAdminResponse): MsgUpdateProjectAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse",
      value: MsgUpdateProjectAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProjectMetadata(): MsgUpdateProjectMetadata {
  return {
    admin: "",
    newMetadata: "",
    projectId: ""
  };
}
export const MsgUpdateProjectMetadata = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
  encode(message: MsgUpdateProjectMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.newMetadata !== "") {
      writer.uint32(18).string(message.newMetadata);
    }
    if (message.projectId !== "") {
      writer.uint32(26).string(message.projectId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.newMetadata = reader.string();
          break;
        case 3:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateProjectMetadata>): MsgUpdateProjectMetadata {
    const message = createBaseMsgUpdateProjectMetadata();
    message.admin = object.admin ?? "";
    message.newMetadata = object.newMetadata ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateProjectMetadataAmino): MsgUpdateProjectMetadata {
    const message = createBaseMsgUpdateProjectMetadata();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.new_metadata !== undefined && object.new_metadata !== null) {
      message.newMetadata = object.new_metadata;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    return message;
  },
  toAmino(message: MsgUpdateProjectMetadata): MsgUpdateProjectMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.new_metadata = message.newMetadata === "" ? undefined : message.newMetadata;
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProjectMetadataAminoMsg): MsgUpdateProjectMetadata {
    return MsgUpdateProjectMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProjectMetadataProtoMsg): MsgUpdateProjectMetadata {
    return MsgUpdateProjectMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateProjectMetadata): Uint8Array {
    return MsgUpdateProjectMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProjectMetadata): MsgUpdateProjectMetadataProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
      value: MsgUpdateProjectMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProjectMetadataResponse(): MsgUpdateProjectMetadataResponse {
  return {};
}
export const MsgUpdateProjectMetadataResponse = {
  typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse",
  encode(_: MsgUpdateProjectMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateProjectMetadataResponse>): MsgUpdateProjectMetadataResponse {
    const message = createBaseMsgUpdateProjectMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateProjectMetadataResponseAmino): MsgUpdateProjectMetadataResponse {
    const message = createBaseMsgUpdateProjectMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateProjectMetadataResponse): MsgUpdateProjectMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProjectMetadataResponseAminoMsg): MsgUpdateProjectMetadataResponse {
    return MsgUpdateProjectMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProjectMetadataResponseProtoMsg): MsgUpdateProjectMetadataResponse {
    return MsgUpdateProjectMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateProjectMetadataResponse): Uint8Array {
    return MsgUpdateProjectMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProjectMetadataResponse): MsgUpdateProjectMetadataResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse",
      value: MsgUpdateProjectMetadataResponse.encode(message).finish()
    };
  }
};