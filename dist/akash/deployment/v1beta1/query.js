"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGroupResponse = exports.QueryGroupRequest = exports.QueryDeploymentResponse = exports.QueryDeploymentRequest = exports.QueryDeploymentsResponse = exports.QueryDeploymentsRequest = void 0;
//@ts-nocheck
const deployment_1 = require("./deployment");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const group_1 = require("./group");
const types_1 = require("../../escrow/v1beta1/types");
const binary_1 = require("../../../binary");
function createBaseQueryDeploymentsRequest() {
    return {
        filters: deployment_1.DeploymentFilters.fromPartial({}),
        pagination: undefined
    };
}
exports.QueryDeploymentsRequest = {
    typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.filters !== undefined) {
            deployment_1.DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = deployment_1.DeploymentFilters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDeploymentsRequest();
        message.filters = object.filters !== undefined && object.filters !== null ? deployment_1.DeploymentFilters.fromPartial(object.filters) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDeploymentsRequest();
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = deployment_1.DeploymentFilters.fromAmino(object.filters);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.filters = message.filters ? deployment_1.DeploymentFilters.toAmino(message.filters) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDeploymentsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDeploymentsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDeploymentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsRequest",
            value: exports.QueryDeploymentsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDeploymentsResponse() {
    return {
        deployments: [],
        pagination: undefined
    };
}
exports.QueryDeploymentsResponse = {
    typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.deployments) {
            exports.QueryDeploymentResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployments.push(exports.QueryDeploymentResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDeploymentsResponse();
        message.deployments = object.deployments?.map(e => exports.QueryDeploymentResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDeploymentsResponse();
        message.deployments = object.deployments?.map(e => exports.QueryDeploymentResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.deployments) {
            obj.deployments = message.deployments.map(e => e ? exports.QueryDeploymentResponse.toAmino(e) : undefined);
        }
        else {
            obj.deployments = message.deployments;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDeploymentsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDeploymentsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDeploymentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsResponse",
            value: exports.QueryDeploymentsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDeploymentRequest() {
    return {
        id: deployment_1.DeploymentID.fromPartial({})
    };
}
exports.QueryDeploymentRequest = {
    typeUrl: "/akash.deployment.v1beta1.QueryDeploymentRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            deployment_1.DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentRequest();
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
        const message = createBaseQueryDeploymentRequest();
        message.id = object.id !== undefined && object.id !== null ? deployment_1.DeploymentID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDeploymentRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = deployment_1.DeploymentID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? deployment_1.DeploymentID.toAmino(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDeploymentRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDeploymentRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDeploymentRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryDeploymentRequest",
            value: exports.QueryDeploymentRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDeploymentResponse() {
    return {
        deployment: deployment_1.Deployment.fromPartial({}),
        groups: [],
        escrowAccount: types_1.Account.fromPartial({})
    };
}
exports.QueryDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta1.QueryDeploymentResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deployment !== undefined) {
            deployment_1.Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            types_1.Account.encode(message.escrowAccount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployment = deployment_1.Deployment.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.escrowAccount = types_1.Account.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDeploymentResponse();
        message.deployment = object.deployment !== undefined && object.deployment !== null ? deployment_1.Deployment.fromPartial(object.deployment) : undefined;
        message.groups = object.groups?.map(e => group_1.Group.fromPartial(e)) || [];
        message.escrowAccount = object.escrowAccount !== undefined && object.escrowAccount !== null ? types_1.Account.fromPartial(object.escrowAccount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDeploymentResponse();
        if (object.deployment !== undefined && object.deployment !== null) {
            message.deployment = deployment_1.Deployment.fromAmino(object.deployment);
        }
        message.groups = object.groups?.map(e => group_1.Group.fromAmino(e)) || [];
        if (object.escrow_account !== undefined && object.escrow_account !== null) {
            message.escrowAccount = types_1.Account.fromAmino(object.escrow_account);
        }
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
        obj.escrow_account = message.escrowAccount ? types_1.Account.toAmino(message.escrowAccount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDeploymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDeploymentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDeploymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryDeploymentResponse",
            value: exports.QueryDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupRequest() {
    return {
        id: group_1.GroupID.fromPartial({})
    };
}
exports.QueryGroupRequest = {
    typeUrl: "/akash.deployment.v1beta1.QueryGroupRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            group_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = group_1.GroupID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupRequest();
        message.id = object.id !== undefined && object.id !== null ? group_1.GroupID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = group_1.GroupID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? group_1.GroupID.toAmino(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryGroupRequest",
            value: exports.QueryGroupRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupResponse() {
    return {
        group: group_1.Group.fromPartial({})
    };
}
exports.QueryGroupResponse = {
    typeUrl: "/akash.deployment.v1beta1.QueryGroupResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group !== undefined) {
            group_1.Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group = group_1.Group.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupResponse();
        message.group = object.group !== undefined && object.group !== null ? group_1.Group.fromPartial(object.group) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupResponse();
        if (object.group !== undefined && object.group !== null) {
            message.group = group_1.Group.fromAmino(object.group);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group = message.group ? group_1.Group.toAmino(message.group) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryGroupResponse",
            value: exports.QueryGroupResponse.encode(message).finish()
        };
    }
};
