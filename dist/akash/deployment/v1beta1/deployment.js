"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentFilters = exports.Deployment = exports.DeploymentID = exports.MsgCloseDeploymentResponse = exports.MsgCloseDeployment = exports.MsgUpdateDeploymentResponse = exports.MsgUpdateDeployment = exports.MsgDepositDeploymentResponse = exports.MsgDepositDeployment = exports.MsgCreateDeploymentResponse = exports.MsgCreateDeployment = exports.Deployment_StateAmino = exports.Deployment_StateSDKType = exports.Deployment_State = void 0;
exports.deployment_StateFromJSON = deployment_StateFromJSON;
exports.deployment_StateToJSON = deployment_StateToJSON;
//@ts-nocheck
const group_1 = require("./group");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
/** State is an enum which refers to state of deployment */
var Deployment_State;
(function (Deployment_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Deployment_State[Deployment_State["invalid"] = 0] = "invalid";
    /** active - DeploymentActive denotes state for deployment active */
    Deployment_State[Deployment_State["active"] = 1] = "active";
    /** closed - DeploymentClosed denotes state for deployment closed */
    Deployment_State[Deployment_State["closed"] = 2] = "closed";
    Deployment_State[Deployment_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Deployment_State || (exports.Deployment_State = Deployment_State = {}));
exports.Deployment_StateSDKType = Deployment_State;
exports.Deployment_StateAmino = Deployment_State;
function deployment_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Deployment_State.invalid;
        case 1:
        case "active":
            return Deployment_State.active;
        case 2:
        case "closed":
            return Deployment_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Deployment_State.UNRECOGNIZED;
    }
}
function deployment_StateToJSON(object) {
    switch (object) {
        case Deployment_State.invalid:
            return "invalid";
        case Deployment_State.active:
            return "active";
        case Deployment_State.closed:
            return "closed";
        case Deployment_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateDeployment() {
    return {
        id: exports.DeploymentID.fromPartial({}),
        groups: [],
        version: new Uint8Array(),
        deposit: coin_1.Coin.fromPartial({})
    };
}
exports.MsgCreateDeployment = {
    typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
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
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(group_1.GroupSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.version = reader.bytes();
                    break;
                case 4:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? exports.DeploymentID.fromPartial(object.id) : undefined;
        message.groups = object.groups?.map(e => group_1.GroupSpec.fromPartial(e)) || [];
        message.version = object.version ?? new Uint8Array();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? coin_1.Coin.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromAmino(object.id);
        }
        message.groups = object.groups?.map(e => group_1.GroupSpec.fromAmino(e)) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = (0, helpers_1.bytesFromBase64)(object.version);
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = coin_1.Coin.fromAmino(object.deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? exports.DeploymentID.toAmino(message.id) : exports.DeploymentID.toAmino(exports.DeploymentID.fromPartial({}));
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? group_1.GroupSpec.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        obj.version = message.version ? (0, helpers_1.base64FromBytes)(message.version) : "";
        obj.deposit = message.deposit ? coin_1.Coin.toAmino(message.deposit) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
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
            typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
            value: exports.MsgCreateDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDeploymentResponse() {
    return {};
}
exports.MsgCreateDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse",
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
            typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse",
            value: exports.MsgCreateDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositDeployment() {
    return {
        id: exports.DeploymentID.fromPartial({}),
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgDepositDeployment = {
    typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
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
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? exports.DeploymentID.fromPartial(object.id) : undefined;
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDepositDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromAmino(object.id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? exports.DeploymentID.toAmino(message.id) : exports.DeploymentID.toAmino(exports.DeploymentID.fromPartial({}));
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
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
            typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
            value: exports.MsgDepositDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgDepositDeploymentResponse() {
    return {};
}
exports.MsgDepositDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse",
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
            typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse",
            value: exports.MsgDepositDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDeployment() {
    return {
        id: exports.DeploymentID.fromPartial({}),
        groups: [],
        version: new Uint8Array()
    };
}
exports.MsgUpdateDeployment = {
    typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(group_1.GroupSpec.decode(reader, reader.uint32()));
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
        message.id = object.id !== undefined && object.id !== null ? exports.DeploymentID.fromPartial(object.id) : undefined;
        message.groups = object.groups?.map(e => group_1.GroupSpec.fromPartial(e)) || [];
        message.version = object.version ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromAmino(object.id);
        }
        message.groups = object.groups?.map(e => group_1.GroupSpec.fromAmino(e)) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = (0, helpers_1.bytesFromBase64)(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? exports.DeploymentID.toAmino(message.id) : exports.DeploymentID.toAmino(exports.DeploymentID.fromPartial({}));
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? group_1.GroupSpec.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
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
            typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
            value: exports.MsgUpdateDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDeploymentResponse() {
    return {};
}
exports.MsgUpdateDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse",
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
            typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse",
            value: exports.MsgUpdateDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCloseDeployment() {
    return {
        id: exports.DeploymentID.fromPartial({})
    };
}
exports.MsgCloseDeployment = {
    typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            exports.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
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
                    message.id = exports.DeploymentID.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? exports.DeploymentID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCloseDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = exports.DeploymentID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? exports.DeploymentID.toAmino(message.id) : exports.DeploymentID.toAmino(exports.DeploymentID.fromPartial({}));
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
            typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
            value: exports.MsgCloseDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgCloseDeploymentResponse() {
    return {};
}
exports.MsgCloseDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse",
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
            typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse",
            value: exports.MsgCloseDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseDeploymentID() {
    return {
        owner: "",
        dseq: BigInt(0)
    };
}
exports.DeploymentID = {
    typeUrl: "/akash.deployment.v1beta1.DeploymentID",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== BigInt(0)) {
            writer.uint32(16).uint64(message.dseq);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeploymentID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.dseq = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDeploymentID();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeploymentID();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = BigInt(object.dseq);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.dseq = message.dseq ? (message.dseq?.toString)() : "0";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DeploymentID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DeploymentID.decode(message.value);
    },
    toProto(message) {
        return exports.DeploymentID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.DeploymentID",
            value: exports.DeploymentID.encode(message).finish()
        };
    }
};
function createBaseDeployment() {
    return {
        deploymentId: exports.DeploymentID.fromPartial({}),
        state: 0,
        version: new Uint8Array(),
        createdAt: BigInt(0)
    };
}
exports.Deployment = {
    typeUrl: "/akash.deployment.v1beta1.Deployment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deploymentId !== undefined) {
            exports.DeploymentID.encode(message.deploymentId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        if (message.createdAt !== BigInt(0)) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deploymentId = exports.DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.version = reader.bytes();
                    break;
                case 4:
                    message.createdAt = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDeployment();
        message.deploymentId = object.deploymentId !== undefined && object.deploymentId !== null ? exports.DeploymentID.fromPartial(object.deploymentId) : undefined;
        message.state = object.state ?? 0;
        message.version = object.version ?? new Uint8Array();
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeployment();
        if (object.deployment_id !== undefined && object.deployment_id !== null) {
            message.deploymentId = exports.DeploymentID.fromAmino(object.deployment_id);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = (0, helpers_1.bytesFromBase64)(object.version);
        }
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = BigInt(object.created_at);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deployment_id = message.deploymentId ? exports.DeploymentID.toAmino(message.deploymentId) : exports.DeploymentID.toAmino(exports.DeploymentID.fromPartial({}));
        obj.state = message.state ?? 0;
        obj.version = message.version ? (0, helpers_1.base64FromBytes)(message.version) : "";
        obj.created_at = message.createdAt !== BigInt(0) ? (message.createdAt?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Deployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Deployment.decode(message.value);
    },
    toProto(message) {
        return exports.Deployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.Deployment",
            value: exports.Deployment.encode(message).finish()
        };
    }
};
function createBaseDeploymentFilters() {
    return {
        owner: "",
        dseq: BigInt(0),
        state: ""
    };
}
exports.DeploymentFilters = {
    typeUrl: "/akash.deployment.v1beta1.DeploymentFilters",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== BigInt(0)) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.state !== "") {
            writer.uint32(26).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeploymentFilters();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.dseq = reader.uint64();
                    break;
                case 3:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDeploymentFilters();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
        message.state = object.state ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeploymentFilters();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = BigInt(object.dseq);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.dseq = message.dseq ? (message.dseq?.toString)() : "0";
        obj.state = message.state ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DeploymentFilters.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DeploymentFilters.decode(message.value);
    },
    toProto(message) {
        return exports.DeploymentFilters.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.DeploymentFilters",
            value: exports.DeploymentFilters.encode(message).finish()
        };
    }
};
