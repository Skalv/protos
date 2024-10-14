//@ts-nocheck
import { Grant, GrantAmino, GrantSDKType, GenericAuthorization } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization1 } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization2 } from "../../../akash/deployment/v1beta2/authz";
import { SendAuthorization } from "../../bank/v1beta1/authz";
import { StakeAuthorization } from "../../staking/v1beta1/authz";
import { ContractExecutionAuthorization, ContractMigrationAuthorization } from "../../../cosmwasm/wasm/v1/authz";
import { CreateSpotLimitOrderAuthz, CreateSpotMarketOrderAuthz, BatchCreateSpotLimitOrdersAuthz, CancelSpotOrderAuthz, BatchCancelSpotOrdersAuthz, CreateDerivativeLimitOrderAuthz, CreateDerivativeMarketOrderAuthz, BatchCreateDerivativeLimitOrdersAuthz, CancelDerivativeOrderAuthz, BatchCancelDerivativeOrdersAuthz, BatchUpdateOrdersAuthz } from "../../../injective/exchange/v1beta1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
  granter: string;
  grantee: string;
  grant: Grant;
}
export interface MsgGrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant";
  value: Uint8Array;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantAmino {
  granter?: string;
  grantee?: string;
  grant?: GrantAmino;
}
export interface MsgGrantAminoMsg {
  type: "cosmos-sdk/MsgGrant";
  value: MsgGrantAmino;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantSDKType {
  granter: string;
  grantee: string;
  grant: GrantSDKType;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
  results: Uint8Array[];
}
export interface MsgExecResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse";
  value: Uint8Array;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseAmino {
  results?: string[];
}
export interface MsgExecResponseAminoMsg {
  type: "cosmos-sdk/MsgExecResponse";
  value: MsgExecResponseAmino;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseSDKType {
  results: Uint8Array[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
  grantee: string;
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: (Any)[] | Any[];
}
export interface MsgExecProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec";
  value: Uint8Array;
}
export type MsgExecEncoded = Omit<MsgExec, "msgs"> & {
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecAmino {
  grantee?: string;
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs?: AnyAmino[];
}
export interface MsgExecAminoMsg {
  type: "cosmos-sdk/MsgExec";
  value: MsgExecAmino;
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecSDKType {
  grantee: string;
  msgs: (AnySDKType)[];
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {}
export interface MsgGrantResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse";
  value: Uint8Array;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseAmino {}
export interface MsgGrantResponseAminoMsg {
  type: "cosmos-sdk/MsgGrantResponse";
  value: MsgGrantResponseAmino;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseSDKType {}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
  granter: string;
  grantee: string;
  msgTypeUrl: string;
}
export interface MsgRevokeProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke";
  value: Uint8Array;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeAmino {
  granter?: string;
  grantee?: string;
  msg_type_url?: string;
}
export interface MsgRevokeAminoMsg {
  type: "cosmos-sdk/MsgRevoke";
  value: MsgRevokeAmino;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeSDKType {
  granter: string;
  grantee: string;
  msg_type_url: string;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {}
export interface MsgRevokeResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse";
  value: Uint8Array;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseAmino {}
export interface MsgRevokeResponseAminoMsg {
  type: "cosmos-sdk/MsgRevokeResponse";
  value: MsgRevokeResponseAmino;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseSDKType {}
function createBaseMsgGrant(): MsgGrant {
  return {
    granter: "",
    grantee: "",
    grant: Grant.fromPartial({})
  };
}
export const MsgGrant = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
  encode(message: MsgGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.grant = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGrant>): MsgGrant {
    const message = createBaseMsgGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
    return message;
  },
  fromAmino(object: MsgGrantAmino): MsgGrant {
    const message = createBaseMsgGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = Grant.fromAmino(object.grant);
    }
    return message;
  },
  toAmino(message: MsgGrant): MsgGrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.grant = message.grant ? Grant.toAmino(message.grant) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGrantAminoMsg): MsgGrant {
    return MsgGrant.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrant): MsgGrantAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrant",
      value: MsgGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantProtoMsg): MsgGrant {
    return MsgGrant.decode(message.value);
  },
  toProto(message: MsgGrant): Uint8Array {
    return MsgGrant.encode(message).finish();
  },
  toProtoMsg(message: MsgGrant): MsgGrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
      value: MsgGrant.encode(message).finish()
    };
  }
};
function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    results: []
  };
}
export const MsgExecResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
  encode(message: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => base64FromBytes(e));
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse {
    return MsgExecResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgExecResponse",
      value: MsgExecResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message: MsgExecResponse): Uint8Array {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExec(): MsgExec {
  return {
    grantee: "",
    msgs: []
  };
}
export const MsgExec = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec",
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      Any.encode(v! as Any, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.grantee = object.grantee ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    const message = createBaseMsgExec();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    message.msgs = object.msgs?.map(e => Sdk_MsgcosmosauthzAuthorization_FromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Sdk_MsgcosmosauthzAuthorization_ToAmino(e as Any) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecAminoMsg): MsgExec {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExec): MsgExecAminoMsg {
    return {
      type: "cosmos-sdk/MsgExec",
      value: MsgExec.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecProtoMsg): MsgExec {
    return MsgExec.decode(message.value);
  },
  toProto(message: MsgExec): Uint8Array {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message: MsgExec): MsgExecProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
function createBaseMsgGrantResponse(): MsgGrantResponse {
  return {};
}
export const MsgGrantResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
  encode(_: MsgGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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
  fromPartial(_: Partial<MsgGrantResponse>): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  toAmino(_: MsgGrantResponse): MsgGrantResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGrantResponseAminoMsg): MsgGrantResponse {
    return MsgGrantResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantResponse): MsgGrantResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantResponse",
      value: MsgGrantResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantResponseProtoMsg): MsgGrantResponse {
    return MsgGrantResponse.decode(message.value);
  },
  toProto(message: MsgGrantResponse): Uint8Array {
    return MsgGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantResponse): MsgGrantResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
      value: MsgGrantResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevoke(): MsgRevoke {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}
export const MsgRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
  encode(message: MsgRevoke, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevoke>): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeAmino): MsgRevoke {
    const message = createBaseMsgRevoke();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    return message;
  },
  toAmino(message: MsgRevoke): MsgRevokeAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAminoMsg): MsgRevoke {
    return MsgRevoke.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevoke): MsgRevokeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevoke",
      value: MsgRevoke.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeProtoMsg): MsgRevoke {
    return MsgRevoke.decode(message.value);
  },
  toProto(message: MsgRevoke): Uint8Array {
    return MsgRevoke.encode(message).finish();
  },
  toProtoMsg(message: MsgRevoke): MsgRevokeProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
      value: MsgRevoke.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return {};
}
export const MsgRevokeResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
  encode(_: MsgRevokeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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
  fromPartial(_: Partial<MsgRevokeResponse>): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeResponseAminoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeResponse): MsgRevokeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeResponse",
      value: MsgRevokeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeResponseProtoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.decode(message.value);
  },
  toProto(message: MsgRevokeResponse): Uint8Array {
    return MsgRevokeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeResponse): MsgRevokeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
      value: MsgRevokeResponse.encode(message).finish()
    };
  }
};
export const Sdk_Msg_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Sdk_Msg_FromAmino = (content: AnyAmino): Any => {
  return Any.fromAmino(content);
};
export const Sdk_Msg_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};
export const Cosmos_authzAuthorization_InterfaceDecoder = (input: BinaryReader | Uint8Array): DepositDeploymentAuthorization1 | DepositDeploymentAuthorization2 | GenericAuthorization | SendAuthorization | StakeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | CreateSpotLimitOrderAuthz | CreateSpotMarketOrderAuthz | BatchCreateSpotLimitOrdersAuthz | CancelSpotOrderAuthz | BatchCancelSpotOrdersAuthz | CreateDerivativeLimitOrderAuthz | CreateDerivativeMarketOrderAuthz | BatchCreateDerivativeLimitOrdersAuthz | CancelDerivativeOrderAuthz | BatchCancelDerivativeOrdersAuthz | BatchUpdateOrdersAuthz | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
      return DepositDeploymentAuthorization1.decode(data.value);
    case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
      return DepositDeploymentAuthorization2.decode(data.value);
    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return GenericAuthorization.decode(data.value);
    case "/cosmos.bank.v1beta1.SendAuthorization":
      return SendAuthorization.decode(data.value);
    case "/cosmos.staking.v1beta1.StakeAuthorization":
      return StakeAuthorization.decode(data.value);
    case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
      return ContractExecutionAuthorization.decode(data.value);
    case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
      return ContractMigrationAuthorization.decode(data.value);
    case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
      return CreateSpotLimitOrderAuthz.decode(data.value);
    case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
      return CreateSpotMarketOrderAuthz.decode(data.value);
    case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
      return BatchCreateSpotLimitOrdersAuthz.decode(data.value);
    case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
      return CancelSpotOrderAuthz.decode(data.value);
    case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
      return BatchCancelSpotOrdersAuthz.decode(data.value);
    case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
      return CreateDerivativeLimitOrderAuthz.decode(data.value);
    case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
      return CreateDerivativeMarketOrderAuthz.decode(data.value);
    case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
      return BatchCreateDerivativeLimitOrdersAuthz.decode(data.value);
    case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
      return CancelDerivativeOrderAuthz.decode(data.value);
    case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
      return BatchCancelDerivativeOrdersAuthz.decode(data.value);
    case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
      return BatchUpdateOrdersAuthz.decode(data.value);
    default:
      return data;
  }
};
export const Cosmos_authzAuthorization_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
      return Any.fromPartial({
        typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
        value: DepositDeploymentAuthorization1.encode(DepositDeploymentAuthorization1.fromPartial(DepositDeploymentAuthorization1.fromAmino(content.value))).finish()
      });
    case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
      return Any.fromPartial({
        typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
        value: DepositDeploymentAuthorization2.encode(DepositDeploymentAuthorization2.fromPartial(DepositDeploymentAuthorization2.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/GenericAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: GenericAuthorization.encode(GenericAuthorization.fromPartial(GenericAuthorization.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/SendAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        value: SendAuthorization.encode(SendAuthorization.fromPartial(SendAuthorization.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/StakeAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
        value: StakeAuthorization.encode(StakeAuthorization.fromPartial(StakeAuthorization.fromAmino(content.value))).finish()
      });
    case "wasm/ContractExecutionAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
        value: ContractExecutionAuthorization.encode(ContractExecutionAuthorization.fromPartial(ContractExecutionAuthorization.fromAmino(content.value))).finish()
      });
    case "wasm/ContractMigrationAuthorization":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
        value: ContractMigrationAuthorization.encode(ContractMigrationAuthorization.fromPartial(ContractMigrationAuthorization.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
        value: CreateSpotLimitOrderAuthz.encode(CreateSpotLimitOrderAuthz.fromPartial(CreateSpotLimitOrderAuthz.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
        value: CreateSpotMarketOrderAuthz.encode(CreateSpotMarketOrderAuthz.fromPartial(CreateSpotMarketOrderAuthz.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
        value: BatchCreateSpotLimitOrdersAuthz.encode(BatchCreateSpotLimitOrdersAuthz.fromPartial(BatchCreateSpotLimitOrdersAuthz.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
        value: CancelSpotOrderAuthz.encode(CancelSpotOrderAuthz.fromPartial(CancelSpotOrderAuthz.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
        value: BatchCancelSpotOrdersAuthz.encode(BatchCancelSpotOrdersAuthz.fromPartial(BatchCancelSpotOrdersAuthz.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
        value: CreateDerivativeLimitOrderAuthz.encode(CreateDerivativeLimitOrderAuthz.fromPartial(CreateDerivativeLimitOrderAuthz.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
        value: CreateDerivativeMarketOrderAuthz.encode(CreateDerivativeMarketOrderAuthz.fromPartial(CreateDerivativeMarketOrderAuthz.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
        value: BatchCreateDerivativeLimitOrdersAuthz.encode(BatchCreateDerivativeLimitOrdersAuthz.fromPartial(BatchCreateDerivativeLimitOrdersAuthz.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
        value: CancelDerivativeOrderAuthz.encode(CancelDerivativeOrderAuthz.fromPartial(CancelDerivativeOrderAuthz.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
        value: BatchCancelDerivativeOrdersAuthz.encode(BatchCancelDerivativeOrdersAuthz.fromPartial(BatchCancelDerivativeOrdersAuthz.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
        value: BatchUpdateOrdersAuthz.encode(BatchUpdateOrdersAuthz.fromPartial(BatchUpdateOrdersAuthz.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_authzAuthorization_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
      return {
        type: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
        value: DepositDeploymentAuthorization1.toAmino(DepositDeploymentAuthorization1.decode(content.value, undefined))
      };
    case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
      return {
        type: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
        value: DepositDeploymentAuthorization2.toAmino(DepositDeploymentAuthorization2.decode(content.value, undefined))
      };
    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return {
        type: "cosmos-sdk/GenericAuthorization",
        value: GenericAuthorization.toAmino(GenericAuthorization.decode(content.value, undefined))
      };
    case "/cosmos.bank.v1beta1.SendAuthorization":
      return {
        type: "cosmos-sdk/SendAuthorization",
        value: SendAuthorization.toAmino(SendAuthorization.decode(content.value, undefined))
      };
    case "/cosmos.staking.v1beta1.StakeAuthorization":
      return {
        type: "cosmos-sdk/StakeAuthorization",
        value: StakeAuthorization.toAmino(StakeAuthorization.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
      return {
        type: "wasm/ContractExecutionAuthorization",
        value: ContractExecutionAuthorization.toAmino(ContractExecutionAuthorization.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
      return {
        type: "wasm/ContractMigrationAuthorization",
        value: ContractMigrationAuthorization.toAmino(ContractMigrationAuthorization.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
      return {
        type: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
        value: CreateSpotLimitOrderAuthz.toAmino(CreateSpotLimitOrderAuthz.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
      return {
        type: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
        value: CreateSpotMarketOrderAuthz.toAmino(CreateSpotMarketOrderAuthz.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
      return {
        type: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
        value: BatchCreateSpotLimitOrdersAuthz.toAmino(BatchCreateSpotLimitOrdersAuthz.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
      return {
        type: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
        value: CancelSpotOrderAuthz.toAmino(CancelSpotOrderAuthz.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
      return {
        type: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
        value: BatchCancelSpotOrdersAuthz.toAmino(BatchCancelSpotOrdersAuthz.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
      return {
        type: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
        value: CreateDerivativeLimitOrderAuthz.toAmino(CreateDerivativeLimitOrderAuthz.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
      return {
        type: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
        value: CreateDerivativeMarketOrderAuthz.toAmino(CreateDerivativeMarketOrderAuthz.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
      return {
        type: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
        value: BatchCreateDerivativeLimitOrdersAuthz.toAmino(BatchCreateDerivativeLimitOrdersAuthz.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
      return {
        type: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
        value: CancelDerivativeOrderAuthz.toAmino(CancelDerivativeOrderAuthz.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
      return {
        type: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
        value: BatchCancelDerivativeOrdersAuthz.toAmino(BatchCancelDerivativeOrdersAuthz.decode(content.value, undefined))
      };
    case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
      return {
        type: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
        value: BatchUpdateOrdersAuthz.toAmino(BatchUpdateOrdersAuthz.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};