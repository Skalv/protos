//@ts-nocheck
import { DeploymentFilters, DeploymentID, Deployment } from "./deployment";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, Group } from "./group";
import { Account } from "../../escrow/v1beta1/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryDeploymentsRequest() {
    return {
        filters: DeploymentFilters.fromPartial({}),
        pagination: undefined
    };
}
export const QueryDeploymentsRequest = {
    typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.filters !== undefined) {
            DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = DeploymentFilters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.filters = object.filters !== undefined && object.filters !== null ? DeploymentFilters.fromPartial(object.filters) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDeploymentsRequest();
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = DeploymentFilters.fromAmino(object.filters);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.filters = message.filters ? DeploymentFilters.toAmino(message.filters) : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDeploymentsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDeploymentsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDeploymentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsRequest",
            value: QueryDeploymentsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDeploymentsResponse() {
    return {
        deployments: [],
        pagination: undefined
    };
}
export const QueryDeploymentsResponse = {
    typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.deployments) {
            QueryDeploymentResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployments.push(QueryDeploymentResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.deployments = object.deployments?.map(e => QueryDeploymentResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDeploymentsResponse();
        message.deployments = object.deployments?.map(e => QueryDeploymentResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.deployments) {
            obj.deployments = message.deployments.map(e => e ? QueryDeploymentResponse.toAmino(e) : undefined);
        }
        else {
            obj.deployments = message.deployments;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDeploymentsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDeploymentsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDeploymentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsResponse",
            value: QueryDeploymentsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDeploymentRequest() {
    return {
        id: DeploymentID.fromPartial({})
    };
}
export const QueryDeploymentRequest = {
    typeUrl: "/akash.deployment.v1beta1.QueryDeploymentRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentRequest();
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
        const message = createBaseQueryDeploymentRequest();
        message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDeploymentRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = DeploymentID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? DeploymentID.toAmino(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDeploymentRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDeploymentRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDeploymentRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryDeploymentRequest",
            value: QueryDeploymentRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDeploymentResponse() {
    return {
        deployment: Deployment.fromPartial({}),
        groups: [],
        escrowAccount: Account.fromPartial({})
    };
}
export const QueryDeploymentResponse = {
    typeUrl: "/akash.deployment.v1beta1.QueryDeploymentResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.deployment !== undefined) {
            Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.escrowAccount !== undefined) {
            Account.encode(message.escrowAccount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeploymentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployment = Deployment.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.groups.push(Group.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.escrowAccount = Account.decode(reader, reader.uint32());
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
        message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
        message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
        message.escrowAccount = object.escrowAccount !== undefined && object.escrowAccount !== null ? Account.fromPartial(object.escrowAccount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDeploymentResponse();
        if (object.deployment !== undefined && object.deployment !== null) {
            message.deployment = Deployment.fromAmino(object.deployment);
        }
        message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
        if (object.escrow_account !== undefined && object.escrow_account !== null) {
            message.escrowAccount = Account.fromAmino(object.escrow_account);
        }
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
        obj.escrow_account = message.escrowAccount ? Account.toAmino(message.escrowAccount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDeploymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDeploymentResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDeploymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryDeploymentResponse",
            value: QueryDeploymentResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupRequest() {
    return {
        id: GroupID.fromPartial({})
    };
}
export const QueryGroupRequest = {
    typeUrl: "/akash.deployment.v1beta1.QueryGroupRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = GroupID.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = GroupID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? GroupID.toAmino(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryGroupRequest",
            value: QueryGroupRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupResponse() {
    return {
        group: Group.fromPartial({})
    };
}
export const QueryGroupResponse = {
    typeUrl: "/akash.deployment.v1beta1.QueryGroupResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.group !== undefined) {
            Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group = Group.decode(reader, reader.uint32());
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
        message.group = object.group !== undefined && object.group !== null ? Group.fromPartial(object.group) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupResponse();
        if (object.group !== undefined && object.group !== null) {
            message.group = Group.fromAmino(object.group);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group = message.group ? Group.toAmino(message.group) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.QueryGroupResponse",
            value: QueryGroupResponse.encode(message).finish()
        };
    }
};
