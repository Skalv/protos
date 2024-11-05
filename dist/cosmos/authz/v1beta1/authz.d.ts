import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization1 } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorizationProtoMsg as DepositDeploymentAuthorization1ProtoMsg } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization1SDKType } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization2 } from "../../../akash/deployment/v1beta2/authz";
import { DepositDeploymentAuthorizationProtoMsg as DepositDeploymentAuthorization2ProtoMsg } from "../../../akash/deployment/v1beta2/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization2SDKType } from "../../../akash/deployment/v1beta2/authz";
import { SendAuthorization, SendAuthorizationProtoMsg, SendAuthorizationSDKType } from "../../bank/v1beta1/authz";
import { StakeAuthorization, StakeAuthorizationProtoMsg, StakeAuthorizationSDKType } from "../../staking/v1beta1/authz";
import { ContractExecutionAuthorization, ContractExecutionAuthorizationProtoMsg, ContractExecutionAuthorizationSDKType, ContractMigrationAuthorization, ContractMigrationAuthorizationProtoMsg, ContractMigrationAuthorizationSDKType } from "../../../cosmwasm/wasm/v1/authz";
import { CreateSpotLimitOrderAuthz, CreateSpotLimitOrderAuthzProtoMsg, CreateSpotLimitOrderAuthzSDKType, CreateSpotMarketOrderAuthz, CreateSpotMarketOrderAuthzProtoMsg, CreateSpotMarketOrderAuthzSDKType, BatchCreateSpotLimitOrdersAuthz, BatchCreateSpotLimitOrdersAuthzProtoMsg, BatchCreateSpotLimitOrdersAuthzSDKType, CancelSpotOrderAuthz, CancelSpotOrderAuthzProtoMsg, CancelSpotOrderAuthzSDKType, BatchCancelSpotOrdersAuthz, BatchCancelSpotOrdersAuthzProtoMsg, BatchCancelSpotOrdersAuthzSDKType, CreateDerivativeLimitOrderAuthz, CreateDerivativeLimitOrderAuthzProtoMsg, CreateDerivativeLimitOrderAuthzSDKType, CreateDerivativeMarketOrderAuthz, CreateDerivativeMarketOrderAuthzProtoMsg, CreateDerivativeMarketOrderAuthzSDKType, BatchCreateDerivativeLimitOrdersAuthz, BatchCreateDerivativeLimitOrdersAuthzProtoMsg, BatchCreateDerivativeLimitOrdersAuthzSDKType, CancelDerivativeOrderAuthz, CancelDerivativeOrderAuthzProtoMsg, CancelDerivativeOrderAuthzSDKType, BatchCancelDerivativeOrdersAuthz, BatchCancelDerivativeOrdersAuthzProtoMsg, BatchCancelDerivativeOrdersAuthzSDKType, BatchUpdateOrdersAuthz, BatchUpdateOrdersAuthzProtoMsg, BatchUpdateOrdersAuthzSDKType } from "../../../injective/exchange/v1beta1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
    $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
export interface GenericAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization";
    value: Uint8Array;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationAmino {
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg?: string;
}
export interface GenericAuthorizationAminoMsg {
    type: "cosmos-sdk/GenericAuthorization";
    value: GenericAuthorizationAmino;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationSDKType {
    $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
    msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
    authorization?: GenericAuthorization | DepositDeploymentAuthorization1 | DepositDeploymentAuthorization2 | SendAuthorization | StakeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | CreateSpotLimitOrderAuthz | CreateSpotMarketOrderAuthz | BatchCreateSpotLimitOrdersAuthz | CancelSpotOrderAuthz | BatchCancelSpotOrdersAuthz | CreateDerivativeLimitOrderAuthz | CreateDerivativeMarketOrderAuthz | BatchCreateDerivativeLimitOrdersAuthz | CancelDerivativeOrderAuthz | BatchCancelDerivativeOrdersAuthz | BatchUpdateOrdersAuthz | Any | undefined;
    /**
     * time when the grant will expire and will be pruned. If null, then the grant
     * doesn't have a time expiration (other conditions  in `authorization`
     * may apply to invalidate the grant)
     */
    expiration?: Date;
}
export interface GrantProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.Grant";
    value: Uint8Array;
}
export type GrantEncoded = Omit<Grant, "authorization"> & {
    authorization?: GenericAuthorizationProtoMsg | DepositDeploymentAuthorization1ProtoMsg | DepositDeploymentAuthorization2ProtoMsg | SendAuthorizationProtoMsg | StakeAuthorizationProtoMsg | ContractExecutionAuthorizationProtoMsg | ContractMigrationAuthorizationProtoMsg | CreateSpotLimitOrderAuthzProtoMsg | CreateSpotMarketOrderAuthzProtoMsg | BatchCreateSpotLimitOrdersAuthzProtoMsg | CancelSpotOrderAuthzProtoMsg | BatchCancelSpotOrdersAuthzProtoMsg | CreateDerivativeLimitOrderAuthzProtoMsg | CreateDerivativeMarketOrderAuthzProtoMsg | BatchCreateDerivativeLimitOrdersAuthzProtoMsg | CancelDerivativeOrderAuthzProtoMsg | BatchCancelDerivativeOrdersAuthzProtoMsg | BatchUpdateOrdersAuthzProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantAmino {
    authorization?: AnyAmino;
    /**
     * time when the grant will expire and will be pruned. If null, then the grant
     * doesn't have a time expiration (other conditions  in `authorization`
     * may apply to invalidate the grant)
     */
    expiration?: string;
}
export interface GrantAminoMsg {
    type: "cosmos-sdk/Grant";
    value: GrantAmino;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantSDKType {
    authorization?: GenericAuthorizationSDKType | DepositDeploymentAuthorization1SDKType | DepositDeploymentAuthorization2SDKType | SendAuthorizationSDKType | StakeAuthorizationSDKType | ContractExecutionAuthorizationSDKType | ContractMigrationAuthorizationSDKType | CreateSpotLimitOrderAuthzSDKType | CreateSpotMarketOrderAuthzSDKType | BatchCreateSpotLimitOrdersAuthzSDKType | CancelSpotOrderAuthzSDKType | BatchCancelSpotOrdersAuthzSDKType | CreateDerivativeLimitOrderAuthzSDKType | CreateDerivativeMarketOrderAuthzSDKType | BatchCreateDerivativeLimitOrdersAuthzSDKType | CancelDerivativeOrderAuthzSDKType | BatchCancelDerivativeOrdersAuthzSDKType | BatchUpdateOrdersAuthzSDKType | AnySDKType | undefined;
    expiration?: Date;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorization {
    granter: string;
    grantee: string;
    authorization?: GenericAuthorization | DepositDeploymentAuthorization1 | DepositDeploymentAuthorization2 | SendAuthorization | StakeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | CreateSpotLimitOrderAuthz | CreateSpotMarketOrderAuthz | BatchCreateSpotLimitOrdersAuthz | CancelSpotOrderAuthz | BatchCancelSpotOrdersAuthz | CreateDerivativeLimitOrderAuthz | CreateDerivativeMarketOrderAuthz | BatchCreateDerivativeLimitOrdersAuthz | CancelDerivativeOrderAuthz | BatchCancelDerivativeOrdersAuthz | BatchUpdateOrdersAuthz | Any | undefined;
    expiration?: Date;
}
export interface GrantAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization";
    value: Uint8Array;
}
export type GrantAuthorizationEncoded = Omit<GrantAuthorization, "authorization"> & {
    authorization?: GenericAuthorizationProtoMsg | DepositDeploymentAuthorization1ProtoMsg | DepositDeploymentAuthorization2ProtoMsg | SendAuthorizationProtoMsg | StakeAuthorizationProtoMsg | ContractExecutionAuthorizationProtoMsg | ContractMigrationAuthorizationProtoMsg | CreateSpotLimitOrderAuthzProtoMsg | CreateSpotMarketOrderAuthzProtoMsg | BatchCreateSpotLimitOrdersAuthzProtoMsg | CancelSpotOrderAuthzProtoMsg | BatchCancelSpotOrdersAuthzProtoMsg | CreateDerivativeLimitOrderAuthzProtoMsg | CreateDerivativeMarketOrderAuthzProtoMsg | BatchCreateDerivativeLimitOrdersAuthzProtoMsg | CancelDerivativeOrderAuthzProtoMsg | BatchCancelDerivativeOrdersAuthzProtoMsg | BatchUpdateOrdersAuthzProtoMsg | AnyProtoMsg | undefined;
};
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationAmino {
    granter?: string;
    grantee?: string;
    authorization?: AnyAmino;
    expiration?: string;
}
export interface GrantAuthorizationAminoMsg {
    type: "cosmos-sdk/GrantAuthorization";
    value: GrantAuthorizationAmino;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationSDKType {
    granter: string;
    grantee: string;
    authorization?: GenericAuthorizationSDKType | DepositDeploymentAuthorization1SDKType | DepositDeploymentAuthorization2SDKType | SendAuthorizationSDKType | StakeAuthorizationSDKType | ContractExecutionAuthorizationSDKType | ContractMigrationAuthorizationSDKType | CreateSpotLimitOrderAuthzSDKType | CreateSpotMarketOrderAuthzSDKType | BatchCreateSpotLimitOrdersAuthzSDKType | CancelSpotOrderAuthzSDKType | BatchCancelSpotOrdersAuthzSDKType | CreateDerivativeLimitOrderAuthzSDKType | CreateDerivativeMarketOrderAuthzSDKType | BatchCreateDerivativeLimitOrdersAuthzSDKType | CancelDerivativeOrderAuthzSDKType | BatchCancelDerivativeOrdersAuthzSDKType | BatchUpdateOrdersAuthzSDKType | AnySDKType | undefined;
    expiration?: Date;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItem {
    /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
    msgTypeUrls: string[];
}
export interface GrantQueueItemProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem";
    value: Uint8Array;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemAmino {
    /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
    msg_type_urls?: string[];
}
export interface GrantQueueItemAminoMsg {
    type: "cosmos-sdk/GrantQueueItem";
    value: GrantQueueItemAmino;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemSDKType {
    msg_type_urls: string[];
}
export declare const GenericAuthorization: {
    typeUrl: string;
    encode(message: GenericAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenericAuthorization;
    fromPartial(object: Partial<GenericAuthorization>): GenericAuthorization;
    fromAmino(object: GenericAuthorizationAmino): GenericAuthorization;
    toAmino(message: GenericAuthorization): GenericAuthorizationAmino;
    fromAminoMsg(object: GenericAuthorizationAminoMsg): GenericAuthorization;
    toAminoMsg(message: GenericAuthorization): GenericAuthorizationAminoMsg;
    fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization;
    toProto(message: GenericAuthorization): Uint8Array;
    toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg;
};
export declare const Grant: {
    typeUrl: string;
    encode(message: Grant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Grant;
    fromPartial(object: Partial<Grant>): Grant;
    fromAmino(object: GrantAmino): Grant;
    toAmino(message: Grant): GrantAmino;
    fromAminoMsg(object: GrantAminoMsg): Grant;
    toAminoMsg(message: Grant): GrantAminoMsg;
    fromProtoMsg(message: GrantProtoMsg): Grant;
    toProto(message: Grant): Uint8Array;
    toProtoMsg(message: Grant): GrantProtoMsg;
};
export declare const GrantAuthorization: {
    typeUrl: string;
    encode(message: GrantAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GrantAuthorization;
    fromPartial(object: Partial<GrantAuthorization>): GrantAuthorization;
    fromAmino(object: GrantAuthorizationAmino): GrantAuthorization;
    toAmino(message: GrantAuthorization): GrantAuthorizationAmino;
    fromAminoMsg(object: GrantAuthorizationAminoMsg): GrantAuthorization;
    toAminoMsg(message: GrantAuthorization): GrantAuthorizationAminoMsg;
    fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization;
    toProto(message: GrantAuthorization): Uint8Array;
    toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg;
};
export declare const GrantQueueItem: {
    typeUrl: string;
    encode(message: GrantQueueItem, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GrantQueueItem;
    fromPartial(object: Partial<GrantQueueItem>): GrantQueueItem;
    fromAmino(object: GrantQueueItemAmino): GrantQueueItem;
    toAmino(message: GrantQueueItem): GrantQueueItemAmino;
    fromAminoMsg(object: GrantQueueItemAminoMsg): GrantQueueItem;
    toAminoMsg(message: GrantQueueItem): GrantQueueItemAminoMsg;
    fromProtoMsg(message: GrantQueueItemProtoMsg): GrantQueueItem;
    toProto(message: GrantQueueItem): Uint8Array;
    toProtoMsg(message: GrantQueueItem): GrantQueueItemProtoMsg;
};
export declare const Cosmos_authzAuthorization_InterfaceDecoder: (input: BinaryReader | Uint8Array) => DepositDeploymentAuthorization1 | DepositDeploymentAuthorization2 | GenericAuthorization | SendAuthorization | StakeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | CreateSpotLimitOrderAuthz | CreateSpotMarketOrderAuthz | BatchCreateSpotLimitOrdersAuthz | CancelSpotOrderAuthz | BatchCancelSpotOrdersAuthz | CreateDerivativeLimitOrderAuthz | CreateDerivativeMarketOrderAuthz | BatchCreateDerivativeLimitOrdersAuthz | CancelDerivativeOrderAuthz | BatchCancelDerivativeOrdersAuthz | BatchUpdateOrdersAuthz | Any;
export declare const Cosmos_authzAuthorization_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_authzAuthorization_ToAmino: (content: Any) => AnyAmino;
