//@ts-nocheck
import { Deployment } from "./deployment";
import { Group } from "./group";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisDeployment() {
    return {
        deployment: Deployment.fromPartial({}),
        groups: []
    };
}
export const GenesisDeployment = {
    typeUrl: "/akash.deployment.v1beta2.GenesisDeployment",
    encode(message, writer = BinaryWriter.create()) {
        if (message.deployment !== undefined) {
            Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployment = Deployment.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(Group.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisDeployment();
        message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
        message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisDeployment();
        if (object.deployment !== undefined && object.deployment !== null) {
            message.deployment = Deployment.fromAmino(object.deployment);
        }
        message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deployment = message.deployment ? Deployment.toAmino(message.deployment) : Deployment.toAmino(Deployment.fromPartial({}));
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? Group.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisDeployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisDeployment.decode(message.value);
    },
    toProto(message) {
        return GenesisDeployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.GenesisDeployment",
            value: GenesisDeployment.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        deployments: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/akash.deployment.v1beta2.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.deployments) {
            GenesisDeployment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployments.push(GenesisDeployment.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.deployments = object.deployments?.map(e => GenesisDeployment.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.deployments = object.deployments?.map(e => GenesisDeployment.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.deployments) {
            obj.deployments = message.deployments.map(e => e ? GenesisDeployment.toAmino(e) : undefined);
        }
        else {
            obj.deployments = message.deployments;
        }
        obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
