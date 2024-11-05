"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisDeployment = void 0;
//@ts-nocheck
const deployment_1 = require("./deployment");
const group_1 = require("./group");
const params_1 = require("./params");
const binary_1 = require("../../../binary");
function createBaseGenesisDeployment() {
    return {
        deployment: deployment_1.Deployment.fromPartial({}),
        groups: []
    };
}
exports.GenesisDeployment = {
    typeUrl: "/akash.deployment.v1beta2.GenesisDeployment",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deployment !== undefined) {
            deployment_1.Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDeployment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployment = deployment_1.Deployment.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
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
        message.deployment = object.deployment !== undefined && object.deployment !== null ? deployment_1.Deployment.fromPartial(object.deployment) : undefined;
        message.groups = object.groups?.map(e => group_1.Group.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisDeployment();
        if (object.deployment !== undefined && object.deployment !== null) {
            message.deployment = deployment_1.Deployment.fromAmino(object.deployment);
        }
        message.groups = object.groups?.map(e => group_1.Group.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deployment = message.deployment ? deployment_1.Deployment.toAmino(message.deployment) : deployment_1.Deployment.toAmino(deployment_1.Deployment.fromPartial({}));
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? group_1.Group.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisDeployment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisDeployment.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisDeployment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.GenesisDeployment",
            value: exports.GenesisDeployment.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        deployments: [],
        params: params_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/akash.deployment.v1beta2.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.deployments) {
            exports.GenesisDeployment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployments.push(exports.GenesisDeployment.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        message.deployments = object.deployments?.map(e => exports.GenesisDeployment.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.deployments = object.deployments?.map(e => exports.GenesisDeployment.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.deployments) {
            obj.deployments = message.deployments.map(e => e ? exports.GenesisDeployment.toAmino(e) : undefined);
        }
        else {
            obj.deployments = message.deployments;
        }
        obj.params = message.params ? params_1.Params.toAmino(message.params) : params_1.Params.toAmino(params_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
