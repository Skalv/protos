"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCloseDeploymentResponse = exports.MsgCloseDeployment = exports.MsgUpdateDeploymentResponse = exports.MsgUpdateDeployment = exports.MsgDepositDeploymentResponse = exports.MsgDepositDeployment = exports.MsgCreateDeploymentResponse = exports.MsgCreateDeployment = void 0;
//@ts-nocheck
const deployment_1 = require("./deployment");
const groupspec_1 = require("./groupspec");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseMsgCreateDeployment() {
    return {
        id: deployment_1.DeploymentID.fromPartial({}),
        groups: [],
        version: new Uint8Array(),
        deposit: coin_1.Coin.fromPartial({}),
        depositor: ""
    };
}
exports.MsgCreateDeployment = {
    typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            groupspec_1.GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(42).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(groupspec_1.GroupSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.version = reader.bytes();
                    break;
                case 4:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.depositor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDeployment();
        message.id = object.id !== undefined && object.id !== null ? deployment_1.DeploymentID.fromPartial(object.id) : undefined;
        message.groups = object.groups?.map(e => groupspec_1.GroupSpec.fromPartial(e)) || [];
        message.version = object.version ?? new Uint8Array();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? coin_1.Coin.fromPartial(object.deposit) : undefined;
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = deployment_1.DeploymentID.fromAmino(object.id);
        }
        message.groups = object.groups?.map(e => groupspec_1.GroupSpec.fromAmino(e)) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = (0, helpers_1.bytesFromBase64)(object.version);
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = coin_1.Coin.fromAmino(object.deposit);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? deployment_1.DeploymentID.toAmino(message.id) : deployment_1.DeploymentID.toAmino(deployment_1.DeploymentID.fromPartial({}));
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? groupspec_1.GroupSpec.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        obj.version = message.version ? (0, helpers_1.base64FromBytes)(message.version) : "";
        obj.deposit = message.deposit ? coin_1.Coin.toAmino(message.deposit) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        obj.depositor = message.depositor ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateDeployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDeployment.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDeployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
            value: exports.MsgCreateDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDeploymentResponse() {
    return {};
}
exports.MsgCreateDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgCreateDeploymentResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDeploymentResponse();
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
        const message = createBaseMsgCreateDeploymentResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateDeploymentResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateDeploymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDeploymentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDeploymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgCreateDeploymentResponse",
            value: exports.MsgCreateDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositDeployment() {
    return {
        id: deployment_1.DeploymentID.fromPartial({}),
        amount: coin_1.Coin.fromPartial({}),
        depositor: ""
    };
}
exports.MsgDepositDeployment = {
    typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositDeployment();
        message.id = object.id !== undefined && object.id !== null ? deployment_1.DeploymentID.fromPartial(object.id) : undefined;
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDepositDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = deployment_1.DeploymentID.fromAmino(object.id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? deployment_1.DeploymentID.toAmino(message.id) : deployment_1.DeploymentID.toAmino(deployment_1.DeploymentID.fromPartial({}));
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        obj.depositor = message.depositor ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositDeployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositDeployment.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositDeployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
            value: exports.MsgDepositDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgDepositDeploymentResponse() {
    return {};
}
exports.MsgDepositDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgDepositDeploymentResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositDeploymentResponse();
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
        const message = createBaseMsgDepositDeploymentResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDepositDeploymentResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositDeploymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositDeploymentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositDeploymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgDepositDeploymentResponse",
            value: exports.MsgDepositDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDeployment() {
    return {
        id: deployment_1.DeploymentID.fromPartial({}),
        version: new Uint8Array()
    };
}
exports.MsgUpdateDeployment = {
    typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDeployment();
        message.id = object.id !== undefined && object.id !== null ? deployment_1.DeploymentID.fromPartial(object.id) : undefined;
        message.version = object.version ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = deployment_1.DeploymentID.fromAmino(object.id);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = (0, helpers_1.bytesFromBase64)(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? deployment_1.DeploymentID.toAmino(message.id) : deployment_1.DeploymentID.toAmino(deployment_1.DeploymentID.fromPartial({}));
        obj.version = message.version ? (0, helpers_1.base64FromBytes)(message.version) : "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateDeployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateDeployment.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateDeployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
            value: exports.MsgUpdateDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDeploymentResponse() {
    return {};
}
exports.MsgUpdateDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeploymentResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDeploymentResponse();
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
        const message = createBaseMsgUpdateDeploymentResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateDeploymentResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateDeploymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateDeploymentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateDeploymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeploymentResponse",
            value: exports.MsgUpdateDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCloseDeployment() {
    return {
        id: deployment_1.DeploymentID.fromPartial({})
    };
}
exports.MsgCloseDeployment = {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = deployment_1.DeploymentID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCloseDeployment();
        message.id = object.id !== undefined && object.id !== null ? deployment_1.DeploymentID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCloseDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = deployment_1.DeploymentID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? deployment_1.DeploymentID.toAmino(message.id) : deployment_1.DeploymentID.toAmino(deployment_1.DeploymentID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCloseDeployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCloseDeployment.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCloseDeployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
            value: exports.MsgCloseDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgCloseDeploymentResponse() {
    return {};
}
exports.MsgCloseDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseDeploymentResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseDeploymentResponse();
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
        const message = createBaseMsgCloseDeploymentResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCloseDeploymentResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCloseDeploymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCloseDeploymentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCloseDeploymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgCloseDeploymentResponse",
            value: exports.MsgCloseDeploymentResponse.encode(message).finish()
        };
    }
};
