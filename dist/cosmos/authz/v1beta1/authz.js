"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_authzAuthorization_ToAmino = exports.Cosmos_authzAuthorization_FromAmino = exports.Cosmos_authzAuthorization_InterfaceDecoder = exports.GrantQueueItem = exports.GrantAuthorization = exports.Grant = exports.GenericAuthorization = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const authz_1 = require("../../../akash/deployment/v1beta1/authz");
const authz_2 = require("../../../akash/deployment/v1beta2/authz");
const authz_3 = require("../../bank/v1beta1/authz");
const authz_4 = require("../../staking/v1beta1/authz");
const authz_5 = require("../../../cosmwasm/wasm/v1/authz");
const authz_6 = require("../../../injective/exchange/v1beta1/authz");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseGenericAuthorization() {
    return {
        $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        msg: ""
    };
}
exports.GenericAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenericAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenericAuthorization();
        message.msg = object.msg ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenericAuthorization();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg = message.msg === "" ? undefined : message.msg;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenericAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenericAuthorization",
            value: exports.GenericAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenericAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.GenericAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
            value: exports.GenericAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrant() {
    return {
        authorization: undefined,
        expiration: undefined
    };
}
exports.Grant = {
    typeUrl: "/cosmos.authz.v1beta1.Grant",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authorization !== undefined) {
            any_1.Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorization = (0, exports.Cosmos_authzAuthorization_InterfaceDecoder)(reader);
                    break;
                case 2:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.authorization = object.authorization !== undefined && object.authorization !== null ? any_1.Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrant();
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = (0, exports.Cosmos_authzAuthorization_FromAmino)(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authorization = message.authorization ? (0, exports.Cosmos_authzAuthorization_ToAmino)(message.authorization) : undefined;
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: exports.Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Grant.decode(message.value);
    },
    toProto(message) {
        return exports.Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.Grant",
            value: exports.Grant.encode(message).finish()
        };
    }
};
function createBaseGrantAuthorization() {
    return {
        granter: "",
        grantee: "",
        authorization: undefined,
        expiration: undefined
    };
}
exports.GrantAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.authorization !== undefined) {
            any_1.Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantAuthorization();
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
                    message.authorization = (0, exports.Cosmos_authzAuthorization_InterfaceDecoder)(reader);
                    break;
                case 4:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGrantAuthorization();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.authorization = object.authorization !== undefined && object.authorization !== null ? any_1.Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrantAuthorization();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = (0, exports.Cosmos_authzAuthorization_FromAmino)(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.authorization = message.authorization ? (0, exports.Cosmos_authzAuthorization_ToAmino)(message.authorization) : undefined;
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GrantAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantAuthorization",
            value: exports.GrantAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GrantAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.GrantAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
            value: exports.GrantAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrantQueueItem() {
    return {
        msgTypeUrls: []
    };
}
exports.GrantQueueItem = {
    typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.msgTypeUrls) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantQueueItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgTypeUrls.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGrantQueueItem();
        message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrantQueueItem();
        message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.msgTypeUrls) {
            obj.msg_type_urls = message.msgTypeUrls.map(e => e);
        }
        else {
            obj.msg_type_urls = message.msgTypeUrls;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GrantQueueItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantQueueItem",
            value: exports.GrantQueueItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GrantQueueItem.decode(message.value);
    },
    toProto(message) {
        return exports.GrantQueueItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
            value: exports.GrantQueueItem.encode(message).finish()
        };
    }
};
const Cosmos_authzAuthorization_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
            return authz_1.DepositDeploymentAuthorization.decode(data.value);
        case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
            return authz_2.DepositDeploymentAuthorization.decode(data.value);
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return exports.GenericAuthorization.decode(data.value);
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return authz_3.SendAuthorization.decode(data.value);
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return authz_4.StakeAuthorization.decode(data.value);
        case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
            return authz_5.ContractExecutionAuthorization.decode(data.value);
        case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
            return authz_5.ContractMigrationAuthorization.decode(data.value);
        case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
            return authz_6.CreateSpotLimitOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
            return authz_6.CreateSpotMarketOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
            return authz_6.BatchCreateSpotLimitOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
            return authz_6.CancelSpotOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
            return authz_6.BatchCancelSpotOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
            return authz_6.CreateDerivativeLimitOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
            return authz_6.CreateDerivativeMarketOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
            return authz_6.BatchCreateDerivativeLimitOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
            return authz_6.CancelDerivativeOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
            return authz_6.BatchCancelDerivativeOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
            return authz_6.BatchUpdateOrdersAuthz.decode(data.value);
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
                value: authz_1.DepositDeploymentAuthorization.encode(authz_1.DepositDeploymentAuthorization.fromPartial(authz_1.DepositDeploymentAuthorization.fromAmino(content.value))).finish()
            });
        case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
                value: authz_2.DepositDeploymentAuthorization.encode(authz_2.DepositDeploymentAuthorization.fromPartial(authz_2.DepositDeploymentAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/GenericAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
                value: exports.GenericAuthorization.encode(exports.GenericAuthorization.fromPartial(exports.GenericAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/SendAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
                value: authz_3.SendAuthorization.encode(authz_3.SendAuthorization.fromPartial(authz_3.SendAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/StakeAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
                value: authz_4.StakeAuthorization.encode(authz_4.StakeAuthorization.fromPartial(authz_4.StakeAuthorization.fromAmino(content.value))).finish()
            });
        case "wasm/ContractExecutionAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
                value: authz_5.ContractExecutionAuthorization.encode(authz_5.ContractExecutionAuthorization.fromPartial(authz_5.ContractExecutionAuthorization.fromAmino(content.value))).finish()
            });
        case "wasm/ContractMigrationAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
                value: authz_5.ContractMigrationAuthorization.encode(authz_5.ContractMigrationAuthorization.fromPartial(authz_5.ContractMigrationAuthorization.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
                value: authz_6.CreateSpotLimitOrderAuthz.encode(authz_6.CreateSpotLimitOrderAuthz.fromPartial(authz_6.CreateSpotLimitOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
                value: authz_6.CreateSpotMarketOrderAuthz.encode(authz_6.CreateSpotMarketOrderAuthz.fromPartial(authz_6.CreateSpotMarketOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
                value: authz_6.BatchCreateSpotLimitOrdersAuthz.encode(authz_6.BatchCreateSpotLimitOrdersAuthz.fromPartial(authz_6.BatchCreateSpotLimitOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
                value: authz_6.CancelSpotOrderAuthz.encode(authz_6.CancelSpotOrderAuthz.fromPartial(authz_6.CancelSpotOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
                value: authz_6.BatchCancelSpotOrdersAuthz.encode(authz_6.BatchCancelSpotOrdersAuthz.fromPartial(authz_6.BatchCancelSpotOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
                value: authz_6.CreateDerivativeLimitOrderAuthz.encode(authz_6.CreateDerivativeLimitOrderAuthz.fromPartial(authz_6.CreateDerivativeLimitOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
                value: authz_6.CreateDerivativeMarketOrderAuthz.encode(authz_6.CreateDerivativeMarketOrderAuthz.fromPartial(authz_6.CreateDerivativeMarketOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
                value: authz_6.BatchCreateDerivativeLimitOrdersAuthz.encode(authz_6.BatchCreateDerivativeLimitOrdersAuthz.fromPartial(authz_6.BatchCreateDerivativeLimitOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
                value: authz_6.CancelDerivativeOrderAuthz.encode(authz_6.CancelDerivativeOrderAuthz.fromPartial(authz_6.CancelDerivativeOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
                value: authz_6.BatchCancelDerivativeOrdersAuthz.encode(authz_6.BatchCancelDerivativeOrdersAuthz.fromPartial(authz_6.BatchCancelDerivativeOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
            return any_1.Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
                value: authz_6.BatchUpdateOrdersAuthz.encode(authz_6.BatchUpdateOrdersAuthz.fromPartial(authz_6.BatchUpdateOrdersAuthz.fromAmino(content.value))).finish()
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
                value: authz_1.DepositDeploymentAuthorization.toAmino(authz_1.DepositDeploymentAuthorization.decode(content.value, undefined))
            };
        case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
            return {
                type: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
                value: authz_2.DepositDeploymentAuthorization.toAmino(authz_2.DepositDeploymentAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return {
                type: "cosmos-sdk/GenericAuthorization",
                value: exports.GenericAuthorization.toAmino(exports.GenericAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return {
                type: "cosmos-sdk/SendAuthorization",
                value: authz_3.SendAuthorization.toAmino(authz_3.SendAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return {
                type: "cosmos-sdk/StakeAuthorization",
                value: authz_4.StakeAuthorization.toAmino(authz_4.StakeAuthorization.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
            return {
                type: "wasm/ContractExecutionAuthorization",
                value: authz_5.ContractExecutionAuthorization.toAmino(authz_5.ContractExecutionAuthorization.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
            return {
                type: "wasm/ContractMigrationAuthorization",
                value: authz_5.ContractMigrationAuthorization.toAmino(authz_5.ContractMigrationAuthorization.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
                value: authz_6.CreateSpotLimitOrderAuthz.toAmino(authz_6.CreateSpotLimitOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
                value: authz_6.CreateSpotMarketOrderAuthz.toAmino(authz_6.CreateSpotMarketOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
                value: authz_6.BatchCreateSpotLimitOrdersAuthz.toAmino(authz_6.BatchCreateSpotLimitOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
                value: authz_6.CancelSpotOrderAuthz.toAmino(authz_6.CancelSpotOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
                value: authz_6.BatchCancelSpotOrdersAuthz.toAmino(authz_6.BatchCancelSpotOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
                value: authz_6.CreateDerivativeLimitOrderAuthz.toAmino(authz_6.CreateDerivativeLimitOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
                value: authz_6.CreateDerivativeMarketOrderAuthz.toAmino(authz_6.CreateDerivativeMarketOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
                value: authz_6.BatchCreateDerivativeLimitOrdersAuthz.toAmino(authz_6.BatchCreateDerivativeLimitOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
                value: authz_6.CancelDerivativeOrderAuthz.toAmino(authz_6.CancelDerivativeOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
                value: authz_6.BatchCancelDerivativeOrdersAuthz.toAmino(authz_6.BatchCancelDerivativeOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
                value: authz_6.BatchUpdateOrdersAuthz.toAmino(authz_6.BatchUpdateOrdersAuthz.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_authzAuthorization_ToAmino = Cosmos_authzAuthorization_ToAmino;
