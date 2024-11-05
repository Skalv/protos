//@ts-nocheck
import { GroupSpec } from "./group";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** State is an enum which refers to state of deployment */
export var Deployment_State;
(function (Deployment_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Deployment_State[Deployment_State["invalid"] = 0] = "invalid";
    /** active - DeploymentActive denotes state for deployment active */
    Deployment_State[Deployment_State["active"] = 1] = "active";
    /** closed - DeploymentClosed denotes state for deployment closed */
    Deployment_State[Deployment_State["closed"] = 2] = "closed";
    Deployment_State[Deployment_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Deployment_State || (Deployment_State = {}));
export const Deployment_StateSDKType = Deployment_State;
export const Deployment_StateAmino = Deployment_State;
export function deployment_StateFromJSON(object) {
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
export function deployment_StateToJSON(object) {
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
        id: DeploymentID.fromPartial({}),
        groups: [],
        version: new Uint8Array(),
        deposit: Coin.fromPartial({})
    };
}
export const MsgCreateDeployment = {
    typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        if (message.deposit !== undefined) {
            Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(GroupSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.version = reader.bytes();
                    break;
                case 4:
                    message.deposit = Coin.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
        message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
        message.version = object.version ?? new Uint8Array();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = DeploymentID.fromAmino(object.id);
        }
        message.groups = object.groups?.map(e => GroupSpec.fromAmino(e)) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = bytesFromBase64(object.version);
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = Coin.fromAmino(object.deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        obj.version = message.version ? base64FromBytes(message.version) : "";
        obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : Coin.toAmino(Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDeployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDeployment.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDeployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
            value: MsgCreateDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDeploymentResponse() {
    return {};
}
export const MsgCreateDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateDeploymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDeploymentResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDeploymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse",
            value: MsgCreateDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositDeployment() {
    return {
        id: DeploymentID.fromPartial({}),
        amount: Coin.fromPartial({})
    };
}
export const MsgDepositDeployment = {
    typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDepositDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = DeploymentID.fromAmino(object.id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
        obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositDeployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositDeployment.decode(message.value);
    },
    toProto(message) {
        return MsgDepositDeployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
            value: MsgDepositDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgDepositDeploymentResponse() {
    return {};
}
export const MsgDepositDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgDepositDeploymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositDeploymentResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositDeploymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse",
            value: MsgDepositDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDeployment() {
    return {
        id: DeploymentID.fromPartial({}),
        groups: [],
        version: new Uint8Array()
    };
}
export const MsgUpdateDeployment = {
    typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            GroupSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.version.length !== 0) {
            writer.uint32(26).bytes(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = DeploymentID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(GroupSpec.decode(reader, reader.uint32()));
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
        message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
        message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
        message.version = object.version ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = DeploymentID.fromAmino(object.id);
        }
        message.groups = object.groups?.map(e => GroupSpec.fromAmino(e)) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = bytesFromBase64(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        obj.version = message.version ? base64FromBytes(message.version) : "";
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateDeployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateDeployment.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateDeployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
            value: MsgUpdateDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDeploymentResponse() {
    return {};
}
export const MsgUpdateDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgUpdateDeploymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateDeploymentResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateDeploymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse",
            value: MsgUpdateDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCloseDeployment() {
    return {
        id: DeploymentID.fromPartial({})
    };
}
export const MsgCloseDeployment = {
    typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = DeploymentID.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCloseDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = DeploymentID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCloseDeployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCloseDeployment.decode(message.value);
    },
    toProto(message) {
        return MsgCloseDeployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
            value: MsgCloseDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgCloseDeploymentResponse() {
    return {};
}
export const MsgCloseDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCloseDeploymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCloseDeploymentResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCloseDeploymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse",
            value: MsgCloseDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseDeploymentID() {
    return {
        owner: "",
        dseq: BigInt(0)
    };
}
export const DeploymentID = {
    typeUrl: "/akash.deployment.v1beta1.DeploymentID",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== BigInt(0)) {
            writer.uint32(16).uint64(message.dseq);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return DeploymentID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DeploymentID.decode(message.value);
    },
    toProto(message) {
        return DeploymentID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.DeploymentID",
            value: DeploymentID.encode(message).finish()
        };
    }
};
function createBaseDeployment() {
    return {
        deploymentId: DeploymentID.fromPartial({}),
        state: 0,
        version: new Uint8Array(),
        createdAt: BigInt(0)
    };
}
export const Deployment = {
    typeUrl: "/akash.deployment.v1beta1.Deployment",
    encode(message, writer = BinaryWriter.create()) {
        if (message.deploymentId !== undefined) {
            DeploymentID.encode(message.deploymentId, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deploymentId = DeploymentID.decode(reader, reader.uint32());
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
        message.deploymentId = object.deploymentId !== undefined && object.deploymentId !== null ? DeploymentID.fromPartial(object.deploymentId) : undefined;
        message.state = object.state ?? 0;
        message.version = object.version ?? new Uint8Array();
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeployment();
        if (object.deployment_id !== undefined && object.deployment_id !== null) {
            message.deploymentId = DeploymentID.fromAmino(object.deployment_id);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = bytesFromBase64(object.version);
        }
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = BigInt(object.created_at);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deployment_id = message.deploymentId ? DeploymentID.toAmino(message.deploymentId) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
        obj.state = message.state ?? 0;
        obj.version = message.version ? base64FromBytes(message.version) : "";
        obj.created_at = message.createdAt !== BigInt(0) ? (message.createdAt?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Deployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Deployment.decode(message.value);
    },
    toProto(message) {
        return Deployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.Deployment",
            value: Deployment.encode(message).finish()
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
export const DeploymentFilters = {
    typeUrl: "/akash.deployment.v1beta1.DeploymentFilters",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return DeploymentFilters.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DeploymentFilters.decode(message.value);
    },
    toProto(message) {
        return DeploymentFilters.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.DeploymentFilters",
            value: DeploymentFilters.encode(message).finish()
        };
    }
};
