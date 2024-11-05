//@ts-nocheck
import { DeploymentID } from "./deployment";
import { GroupSpec } from "./groupspec";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMsgCreateDeployment() {
    return {
        id: DeploymentID.fromPartial({}),
        groups: [],
        version: new Uint8Array(),
        deposit: Coin.fromPartial({}),
        depositor: ""
    };
}
export const MsgCreateDeployment = {
    typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
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
        if (message.depositor !== "") {
            writer.uint32(42).string(message.depositor);
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
        message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
        message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
        message.version = object.version ?? new Uint8Array();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
        message.depositor = object.depositor ?? "";
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
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
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
        obj.depositor = message.depositor ?? "";
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
            typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
            value: MsgCreateDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDeploymentResponse() {
    return {};
}
export const MsgCreateDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgCreateDeploymentResponse",
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
            typeUrl: "/akash.deployment.v1beta2.MsgCreateDeploymentResponse",
            value: MsgCreateDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositDeployment() {
    return {
        id: DeploymentID.fromPartial({}),
        amount: Coin.fromPartial({}),
        depositor: ""
    };
}
export const MsgDepositDeployment = {
    typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
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
        message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.depositor = object.depositor ?? "";
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
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
        obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
        obj.depositor = message.depositor ?? "";
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
            typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
            value: MsgDepositDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgDepositDeploymentResponse() {
    return {};
}
export const MsgDepositDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgDepositDeploymentResponse",
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
            typeUrl: "/akash.deployment.v1beta2.MsgDepositDeploymentResponse",
            value: MsgDepositDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDeployment() {
    return {
        id: DeploymentID.fromPartial({}),
        version: new Uint8Array()
    };
}
export const MsgUpdateDeployment = {
    typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
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
        message.version = object.version ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateDeployment();
        if (object.id !== undefined && object.id !== null) {
            message.id = DeploymentID.fromAmino(object.id);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = bytesFromBase64(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
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
            typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
            value: MsgUpdateDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateDeploymentResponse() {
    return {};
}
export const MsgUpdateDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeploymentResponse",
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
            typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeploymentResponse",
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
    typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
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
            typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
            value: MsgCloseDeployment.encode(message).finish()
        };
    }
};
function createBaseMsgCloseDeploymentResponse() {
    return {};
}
export const MsgCloseDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseDeploymentResponse",
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
            typeUrl: "/akash.deployment.v1beta2.MsgCloseDeploymentResponse",
            value: MsgCloseDeploymentResponse.encode(message).finish()
        };
    }
};
