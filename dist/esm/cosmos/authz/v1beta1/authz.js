//@ts-nocheck
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization1 } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization2 } from "../../../akash/deployment/v1beta2/authz";
import { SendAuthorization } from "../../bank/v1beta1/authz";
import { StakeAuthorization } from "../../staking/v1beta1/authz";
import { ContractExecutionAuthorization, ContractMigrationAuthorization } from "../../../cosmwasm/wasm/v1/authz";
import { CreateSpotLimitOrderAuthz, CreateSpotMarketOrderAuthz, BatchCreateSpotLimitOrdersAuthz, CancelSpotOrderAuthz, BatchCancelSpotOrdersAuthz, CreateDerivativeLimitOrderAuthz, CreateDerivativeMarketOrderAuthz, BatchCreateDerivativeLimitOrdersAuthz, CancelDerivativeOrderAuthz, BatchCancelDerivativeOrdersAuthz, BatchUpdateOrdersAuthz } from "../../../injective/exchange/v1beta1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseGenericAuthorization() {
    return {
        $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        msg: ""
    };
}
export const GenericAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return GenericAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenericAuthorization",
            value: GenericAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenericAuthorization.decode(message.value);
    },
    toProto(message) {
        return GenericAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
            value: GenericAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrant() {
    return {
        authorization: undefined,
        expiration: undefined
    };
}
export const Grant = {
    typeUrl: "/cosmos.authz.v1beta1.Grant",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorization = Cosmos_authzAuthorization_InterfaceDecoder(reader);
                    break;
                case 2:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrant();
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = Cosmos_authzAuthorization_FromAmino(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authorization = message.authorization ? Cosmos_authzAuthorization_ToAmino(message.authorization) : undefined;
        obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Grant.decode(message.value);
    },
    toProto(message) {
        return Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.Grant",
            value: Grant.encode(message).finish()
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
export const GrantAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.authorization = Cosmos_authzAuthorization_InterfaceDecoder(reader);
                    break;
                case 4:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
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
            message.authorization = Cosmos_authzAuthorization_FromAmino(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.authorization = message.authorization ? Cosmos_authzAuthorization_ToAmino(message.authorization) : undefined;
        obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GrantAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantAuthorization",
            value: GrantAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GrantAuthorization.decode(message.value);
    },
    toProto(message) {
        return GrantAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
            value: GrantAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrantQueueItem() {
    return {
        msgTypeUrls: []
    };
}
export const GrantQueueItem = {
    typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.msgTypeUrls) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return GrantQueueItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantQueueItem",
            value: GrantQueueItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GrantQueueItem.decode(message.value);
    },
    toProto(message) {
        return GrantQueueItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
            value: GrantQueueItem.encode(message).finish()
        };
    }
};
export const Cosmos_authzAuthorization_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
            return DepositDeploymentAuthorization1.decode(data.value);
        case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
            return DepositDeploymentAuthorization2.decode(data.value);
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return GenericAuthorization.decode(data.value);
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return SendAuthorization.decode(data.value);
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return StakeAuthorization.decode(data.value);
        case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
            return ContractExecutionAuthorization.decode(data.value);
        case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
            return ContractMigrationAuthorization.decode(data.value);
        case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
            return CreateSpotLimitOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
            return CreateSpotMarketOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
            return BatchCreateSpotLimitOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
            return CancelSpotOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
            return BatchCancelSpotOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
            return CreateDerivativeLimitOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
            return CreateDerivativeMarketOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
            return BatchCreateDerivativeLimitOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
            return CancelDerivativeOrderAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
            return BatchCancelDerivativeOrdersAuthz.decode(data.value);
        case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
            return BatchUpdateOrdersAuthz.decode(data.value);
        default:
            return data;
    }
};
export const Cosmos_authzAuthorization_FromAmino = (content) => {
    switch (content.type) {
        case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
            return Any.fromPartial({
                typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
                value: DepositDeploymentAuthorization1.encode(DepositDeploymentAuthorization1.fromPartial(DepositDeploymentAuthorization1.fromAmino(content.value))).finish()
            });
        case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
            return Any.fromPartial({
                typeUrl: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
                value: DepositDeploymentAuthorization2.encode(DepositDeploymentAuthorization2.fromPartial(DepositDeploymentAuthorization2.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/GenericAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
                value: GenericAuthorization.encode(GenericAuthorization.fromPartial(GenericAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/SendAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
                value: SendAuthorization.encode(SendAuthorization.fromPartial(SendAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/StakeAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
                value: StakeAuthorization.encode(StakeAuthorization.fromPartial(StakeAuthorization.fromAmino(content.value))).finish()
            });
        case "wasm/ContractExecutionAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
                value: ContractExecutionAuthorization.encode(ContractExecutionAuthorization.fromPartial(ContractExecutionAuthorization.fromAmino(content.value))).finish()
            });
        case "wasm/ContractMigrationAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
                value: ContractMigrationAuthorization.encode(ContractMigrationAuthorization.fromPartial(ContractMigrationAuthorization.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
                value: CreateSpotLimitOrderAuthz.encode(CreateSpotLimitOrderAuthz.fromPartial(CreateSpotLimitOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
                value: CreateSpotMarketOrderAuthz.encode(CreateSpotMarketOrderAuthz.fromPartial(CreateSpotMarketOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
                value: BatchCreateSpotLimitOrdersAuthz.encode(BatchCreateSpotLimitOrdersAuthz.fromPartial(BatchCreateSpotLimitOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
                value: CancelSpotOrderAuthz.encode(CancelSpotOrderAuthz.fromPartial(CancelSpotOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
                value: BatchCancelSpotOrdersAuthz.encode(BatchCancelSpotOrdersAuthz.fromPartial(BatchCancelSpotOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
                value: CreateDerivativeLimitOrderAuthz.encode(CreateDerivativeLimitOrderAuthz.fromPartial(CreateDerivativeLimitOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
                value: CreateDerivativeMarketOrderAuthz.encode(CreateDerivativeMarketOrderAuthz.fromPartial(CreateDerivativeMarketOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
                value: BatchCreateDerivativeLimitOrdersAuthz.encode(BatchCreateDerivativeLimitOrdersAuthz.fromPartial(BatchCreateDerivativeLimitOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
                value: CancelDerivativeOrderAuthz.encode(CancelDerivativeOrderAuthz.fromPartial(CancelDerivativeOrderAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
                value: BatchCancelDerivativeOrdersAuthz.encode(BatchCancelDerivativeOrdersAuthz.fromPartial(BatchCancelDerivativeOrdersAuthz.fromAmino(content.value))).finish()
            });
        case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
            return Any.fromPartial({
                typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
                value: BatchUpdateOrdersAuthz.encode(BatchUpdateOrdersAuthz.fromPartial(BatchUpdateOrdersAuthz.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Cosmos_authzAuthorization_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/akash.deployment.v1beta1.DepositDeploymentAuthorization":
            return {
                type: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
                value: DepositDeploymentAuthorization1.toAmino(DepositDeploymentAuthorization1.decode(content.value, undefined))
            };
        case "/akash.deployment.v1beta2.DepositDeploymentAuthorization":
            return {
                type: "/akash.deployment.v1beta2.DepositDeploymentAuthorization",
                value: DepositDeploymentAuthorization2.toAmino(DepositDeploymentAuthorization2.decode(content.value, undefined))
            };
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return {
                type: "cosmos-sdk/GenericAuthorization",
                value: GenericAuthorization.toAmino(GenericAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return {
                type: "cosmos-sdk/SendAuthorization",
                value: SendAuthorization.toAmino(SendAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return {
                type: "cosmos-sdk/StakeAuthorization",
                value: StakeAuthorization.toAmino(StakeAuthorization.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
            return {
                type: "wasm/ContractExecutionAuthorization",
                value: ContractExecutionAuthorization.toAmino(ContractExecutionAuthorization.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
            return {
                type: "wasm/ContractMigrationAuthorization",
                value: ContractMigrationAuthorization.toAmino(ContractMigrationAuthorization.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
                value: CreateSpotLimitOrderAuthz.toAmino(CreateSpotLimitOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
                value: CreateSpotMarketOrderAuthz.toAmino(CreateSpotMarketOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
                value: BatchCreateSpotLimitOrdersAuthz.toAmino(BatchCreateSpotLimitOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CancelSpotOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
                value: CancelSpotOrderAuthz.toAmino(CancelSpotOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
                value: BatchCancelSpotOrdersAuthz.toAmino(BatchCancelSpotOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
                value: CreateDerivativeLimitOrderAuthz.toAmino(CreateDerivativeLimitOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
                value: CreateDerivativeMarketOrderAuthz.toAmino(CreateDerivativeMarketOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
                value: BatchCreateDerivativeLimitOrdersAuthz.toAmino(BatchCreateDerivativeLimitOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz":
            return {
                type: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
                value: CancelDerivativeOrderAuthz.toAmino(CancelDerivativeOrderAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
                value: BatchCancelDerivativeOrdersAuthz.toAmino(BatchCancelDerivativeOrdersAuthz.decode(content.value, undefined))
            };
        case "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz":
            return {
                type: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
                value: BatchUpdateOrdersAuthz.toAmino(BatchUpdateOrdersAuthz.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
