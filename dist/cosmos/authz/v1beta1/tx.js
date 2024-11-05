"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_authzAuthorization_ToAmino = exports.Cosmos_authzAuthorization_FromAmino = exports.Cosmos_authzAuthorization_InterfaceDecoder = exports.Sdk_Msg_ToAmino = exports.Sdk_Msg_FromAmino = exports.Sdk_Msg_InterfaceDecoder = exports.MsgRevokeResponse = exports.MsgRevoke = exports.MsgGrantResponse = exports.MsgExec = exports.MsgExecResponse = exports.MsgGrant = void 0;
//@ts-nocheck
const authz_1 = require("./authz");
const any_1 = require("../../../google/protobuf/any");
const authz_2 = require("../../../akash/deployment/v1beta1/authz");
const authz_3 = require("../../../akash/deployment/v1beta2/authz");
const authz_4 = require("../../bank/v1beta1/authz");
const authz_5 = require("../../staking/v1beta1/authz");
const authz_6 = require("../../../cosmwasm/wasm/v1/authz");
const authz_7 = require("../../../injective/exchange/v1beta1/authz");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseMsgGrant() {
    return {
        granter: "",
        grantee: "",
        grant: authz_1.Grant.fromPartial({})
    };
}
exports.MsgGrant = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.grant !== undefined) {
            authz_1.Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.grant = authz_1.Grant.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgGrant();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.grant = object.grant !== undefined && object.grant !== null ? authz_1.Grant.fromPartial(object.grant) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgGrant();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.grant !== undefined && object.grant !== null) {
            message.grant = authz_1.Grant.fromAmino(object.grant);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.grant = message.grant ? authz_1.Grant.toAmino(message.grant) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGrant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrant",
            value: exports.MsgGrant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgGrant.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
            value: exports.MsgGrant.encode(message).finish()
        };
    }
};
function createBaseMsgExecResponse() {
    return {
        results: []
    };
}
exports.MsgExecResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.results) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromPartial(object) {
        const message = createBaseMsgExecResponse();
        message.results = object.results?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExecResponse();
        message.results = object.results?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.results = message.results;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgExecResponse",
            value: exports.MsgExecResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
            value: exports.MsgExecResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExec() {
    return {
        grantee: "",
        msgs: []
    };
}
exports.MsgExec = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        for (const v of message.msgs) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
                    break;
                case 2:
                    message.msgs.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.grantee = object.grantee ?? "";
        message.msgs = object.msgs?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExec();
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        message.msgs = object.msgs?.map(e => Sdk_MsgcosmosauthzAuthorization_FromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? Sdk_MsgcosmosauthzAuthorization_ToAmino(e) : undefined);
        }
        else {
            obj.msgs = message.msgs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgExec",
            value: exports.MsgExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExec.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgExec",
            value: exports.MsgExec.encode(message).finish()
        };
    }
};
function createBaseMsgGrantResponse() {
    return {};
}
exports.MsgGrantResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromPartial(_) {
        const message = createBaseMsgGrantResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgGrantResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGrantResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantResponse",
            value: exports.MsgGrantResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgGrantResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGrantResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
            value: exports.MsgGrantResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRevoke() {
    return {
        granter: "",
        grantee: "",
        msgTypeUrl: ""
    };
}
exports.MsgRevoke = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromPartial(object) {
        const message = createBaseMsgRevoke();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevoke.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevoke",
            value: exports.MsgRevoke.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRevoke.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevoke.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
            value: exports.MsgRevoke.encode(message).finish()
        };
    }
};
function createBaseMsgRevokeResponse() {
    return {};
}
exports.MsgRevokeResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromPartial(_) {
        const message = createBaseMsgRevokeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRevokeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevokeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeResponse",
            value: exports.MsgRevokeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRevokeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevokeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
            value: exports.MsgRevokeResponse.encode(message).finish()
        };
    }
};
const Sdk_Msg_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
exports.Sdk_Msg_InterfaceDecoder = Sdk_Msg_InterfaceDecoder;
const Sdk_Msg_FromAmino = (content) => {
    return any_1.Any.fromAmino(content);
};
exports.Sdk_Msg_FromAmino = Sdk_Msg_FromAmino;
const Sdk_Msg_ToAmino = (content) => {
    return any_1.Any.toAmino(content);
};
exports.Sdk_Msg_ToAmino = Sdk_Msg_ToAmino;
const Cosmos_authzAuthorization_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
            return authz_2.DepositDeploymentAuthorization.decode(data.value);
        case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
            return authz_3.DepositDeploymentAuthorization.decode(data.value);
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return authz_1.GenericAuthorization.decode(data.value);
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return authz_4.SendAuthorization.decode(data.value);
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return authz_5.StakeAuthorization.decode(data.value);
        case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
            return authz_6.ContractExecutionAuthorization.decode(data.value);
        case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
            return authz_6.ContractMigrationAuthorization.decode(data.value);
        case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
            return authz_7.CreateSpotLimitOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
            return authz_7.CreateSpotMarketOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
            return authz_7.BatchCreateSpotLimitOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
            return authz_7.CancelSpotOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
            return authz_7.BatchCancelSpotOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
            return authz_7.CreateDerivativeLimitOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
            return authz_7.CreateDerivativeMarketOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
            return authz_7.BatchCreateDerivativeLimitOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
            return authz_7.CancelDerivativeOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
            return authz_7.BatchCancelDerivativeOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
            return authz_7.BatchUpdateOrdersAuthz.decode(data.value);
        default:
            return data;
    }
};
exports.Cosmos_authzAuthorization_InterfaceDecoder = Cosmos_authzAuthorization_InterfaceDecoder;
const Cosmos_authzAuthorization_FromAmino = (content) => {
    switch (content.type) {
        case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
                value: authz_2.DepositDeploymentAuthorization.encode(authz_2.DepositDeploymentAuthorization.fromPartial(authz_2.DepositDeploymentAuthorization.fromAmino(content.value))).finish()
            });
        case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
                value: authz_3.DepositDeploymentAuthorization.encode(authz_3.DepositDeploymentAuthorization.fromPartial(authz_3.DepositDeploymentAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/GenericAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
                value: authz_1.GenericAuthorization.encode(authz_1.GenericAuthorization.fromPartial(authz_1.GenericAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/SendAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
                value: authz_4.SendAuthorization.encode(authz_4.SendAuthorization.fromPartial(authz_4.SendAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/StakeAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
                value: authz_5.StakeAuthorization.encode(authz_5.StakeAuthorization.fromPartial(authz_5.StakeAuthorization.fromAmino(content.value))).finish()
            });
        case "wasm/ContractExecutionAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
                value: authz_6.ContractExecutionAuthorization.encode(authz_6.ContractExecutionAuthorization.fromPartial(authz_6.ContractExecutionAuthorization.fromAmino(content.value))).finish()
            });
        case "wasm/ContractMigrationAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
                value: authz_6.ContractMigrationAuthorization.encode(authz_6.ContractMigrationAuthorization.fromPartial(authz_6.ContractMigrationAuthorization.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
                value: authz_7.CreateSpotLimitOrderAuthz.encode(authz_7.CreateSpotLimitOrderAuthz.fromPartial(authz_7.CreateSpotLimitOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
                value: authz_7.CreateSpotMarketOrderAuthz.encode(authz_7.CreateSpotMarketOrderAuthz.fromPartial(authz_7.CreateSpotMarketOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
                value: authz_7.BatchCreateSpotLimitOrdersAuthz.encode(authz_7.BatchCreateSpotLimitOrdersAuthz.fromPartial(authz_7.BatchCreateSpotLimitOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
                value: authz_7.CancelSpotOrderAuthz.encode(authz_7.CancelSpotOrderAuthz.fromPartial(authz_7.CancelSpotOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
                value: authz_7.BatchCancelSpotOrdersAuthz.encode(authz_7.BatchCancelSpotOrdersAuthz.fromPartial(authz_7.BatchCancelSpotOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
                value: authz_7.CreateDerivativeLimitOrderAuthz.encode(authz_7.CreateDerivativeLimitOrderAuthz.fromPartial(authz_7.CreateDerivativeLimitOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
                value: authz_7.CreateDerivativeMarketOrderAuthz.encode(authz_7.CreateDerivativeMarketOrderAuthz.fromPartial(authz_7.CreateDerivativeMarketOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
                value: authz_7.BatchCreateDerivativeLimitOrdersAuthz.encode(authz_7.BatchCreateDerivativeLimitOrdersAuthz.fromPartial(authz_7.BatchCreateDerivativeLimitOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
                value: authz_7.CancelDerivativeOrderAuthz.encode(authz_7.CancelDerivativeOrderAuthz.fromPartial(authz_7.CancelDerivativeOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
                value: authz_7.BatchCancelDerivativeOrdersAuthz.encode(authz_7.BatchCancelDerivativeOrdersAuthz.fromPartial(authz_7.BatchCancelDerivativeOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
                value: authz_7.BatchUpdateOrdersAuthz.encode(authz_7.BatchUpdateOrdersAuthz.fromPartial(authz_7.BatchUpdateOrdersAuthz.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.Cosmos_authzAuthorization_FromAmino = Cosmos_authzAuthorization_FromAmino;
const Cosmos_authzAuthorization_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
            return {
                type: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
                value: authz_2.DepositDeploymentAuthorization.toAmino(authz_2.DepositDeploymentAuthorization.decode(content.value, undefined))
            };
        case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
            return {
                type: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
                value: authz_3.DepositDeploymentAuthorization.toAmino(authz_3.DepositDeploymentAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return {
                type: "cosmos-sdk/GenericAuthorization",
                value: authz_1.GenericAuthorization.toAmino(authz_1.GenericAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return {
                type: "cosmos-sdk/SendAuthorization",
                value: authz_4.SendAuthorization.toAmino(authz_4.SendAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return {
                type: "cosmos-sdk/StakeAuthorization",
                value: authz_5.StakeAuthorization.toAmino(authz_5.StakeAuthorization.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
            return {
                type: "wasm/ContractExecutionAuthorization",
                value: authz_6.ContractExecutionAuthorization.toAmino(authz_6.ContractExecutionAuthorization.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
            return {
                type: "wasm/ContractMigrationAuthorization",
                value: authz_6.ContractMigrationAuthorization.toAmino(authz_6.ContractMigrationAuthorization.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
                value: authz_7.CreateSpotLimitOrderAuthz.toAmino(authz_7.CreateSpotLimitOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
                value: authz_7.CreateSpotMarketOrderAuthz.toAmino(authz_7.CreateSpotMarketOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
                value: authz_7.BatchCreateSpotLimitOrdersAuthz.toAmino(authz_7.BatchCreateSpotLimitOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
                value: authz_7.CancelSpotOrderAuthz.toAmino(authz_7.CancelSpotOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
                value: authz_7.BatchCancelSpotOrdersAuthz.toAmino(authz_7.BatchCancelSpotOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
                value: authz_7.CreateDerivativeLimitOrderAuthz.toAmino(authz_7.CreateDerivativeLimitOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
                value: authz_7.CreateDerivativeMarketOrderAuthz.toAmino(authz_7.CreateDerivativeMarketOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
                value: authz_7.BatchCreateDerivativeLimitOrdersAuthz.toAmino(authz_7.BatchCreateDerivativeLimitOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
                value: authz_7.CancelDerivativeOrderAuthz.toAmino(authz_7.CancelDerivativeOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
                value: authz_7.BatchCancelDerivativeOrdersAuthz.toAmino(authz_7.BatchCancelDerivativeOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
                value: authz_7.BatchUpdateOrdersAuthz.toAmino(authz_7.BatchUpdateOrdersAuthz.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_authzAuthorization_ToAmino = Cosmos_authzAuthorization_ToAmino;
