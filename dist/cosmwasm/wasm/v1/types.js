"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractInfoExtension_ToAmino = exports.ContractInfoExtension_FromAmino = exports.ContractInfoExtension_InterfaceDecoder = exports.Model = exports.AbsoluteTxPosition = exports.ContractCodeHistoryEntry = exports.ContractInfo = exports.CodeInfo = exports.Params = exports.AccessConfig = exports.AccessTypeParam = exports.ContractCodeHistoryOperationTypeAmino = exports.ContractCodeHistoryOperationTypeSDKType = exports.ContractCodeHistoryOperationType = exports.AccessTypeAmino = exports.AccessTypeSDKType = exports.AccessType = void 0;
exports.accessTypeFromJSON = accessTypeFromJSON;
exports.accessTypeToJSON = accessTypeToJSON;
exports.contractCodeHistoryOperationTypeFromJSON = contractCodeHistoryOperationTypeFromJSON;
exports.contractCodeHistoryOperationTypeToJSON = contractCodeHistoryOperationTypeToJSON;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const encoding_1 = require("@cosmjs/encoding");
/** AccessType permission types */
var AccessType;
(function (AccessType) {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    AccessType[AccessType["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    AccessType[AccessType["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
    /**
     * ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to a single address
     * Deprecated: use AccessTypeAnyOfAddresses instead
     */
    AccessType[AccessType["ACCESS_TYPE_ONLY_ADDRESS"] = 2] = "ACCESS_TYPE_ONLY_ADDRESS";
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    AccessType[AccessType["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
    /** ACCESS_TYPE_ANY_OF_ADDRESSES - AccessTypeAnyOfAddresses allow any of the addresses */
    AccessType[AccessType["ACCESS_TYPE_ANY_OF_ADDRESSES"] = 4] = "ACCESS_TYPE_ANY_OF_ADDRESSES";
    AccessType[AccessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessType || (exports.AccessType = AccessType = {}));
exports.AccessTypeSDKType = AccessType;
exports.AccessTypeAmino = AccessType;
function accessTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCESS_TYPE_UNSPECIFIED":
            return AccessType.ACCESS_TYPE_UNSPECIFIED;
        case 1:
        case "ACCESS_TYPE_NOBODY":
            return AccessType.ACCESS_TYPE_NOBODY;
        case 2:
        case "ACCESS_TYPE_ONLY_ADDRESS":
            return AccessType.ACCESS_TYPE_ONLY_ADDRESS;
        case 3:
        case "ACCESS_TYPE_EVERYBODY":
            return AccessType.ACCESS_TYPE_EVERYBODY;
        case 4:
        case "ACCESS_TYPE_ANY_OF_ADDRESSES":
            return AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessType.UNRECOGNIZED;
    }
}
function accessTypeToJSON(object) {
    switch (object) {
        case AccessType.ACCESS_TYPE_UNSPECIFIED:
            return "ACCESS_TYPE_UNSPECIFIED";
        case AccessType.ACCESS_TYPE_NOBODY:
            return "ACCESS_TYPE_NOBODY";
        case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
            return "ACCESS_TYPE_ONLY_ADDRESS";
        case AccessType.ACCESS_TYPE_EVERYBODY:
            return "ACCESS_TYPE_EVERYBODY";
        case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
            return "ACCESS_TYPE_ANY_OF_ADDRESSES";
        case AccessType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ContractCodeHistoryOperationType actions that caused a code change */
var ContractCodeHistoryOperationType;
(function (ContractCodeHistoryOperationType) {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractCodeHistoryOperationType || (exports.ContractCodeHistoryOperationType = ContractCodeHistoryOperationType = {}));
exports.ContractCodeHistoryOperationTypeSDKType = ContractCodeHistoryOperationType;
exports.ContractCodeHistoryOperationTypeAmino = ContractCodeHistoryOperationType;
function contractCodeHistoryOperationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
        case 1:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
        case 2:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
        case 3:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ContractCodeHistoryOperationType.UNRECOGNIZED;
    }
}
function contractCodeHistoryOperationTypeToJSON(object) {
    switch (object) {
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
        case ContractCodeHistoryOperationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseAccessTypeParam() {
    return {
        value: 0
    };
}
exports.AccessTypeParam = {
    typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTypeParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccessTypeParam();
        message.value = object.value ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessTypeParam();
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value === 0 ? undefined : message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccessTypeParam.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AccessTypeParam",
            value: exports.AccessTypeParam.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccessTypeParam.decode(message.value);
    },
    toProto(message) {
        return exports.AccessTypeParam.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
            value: exports.AccessTypeParam.encode(message).finish()
        };
    }
};
function createBaseAccessConfig() {
    return {
        permission: 0,
        address: "",
        addresses: []
    };
}
exports.AccessConfig = {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.permission !== 0) {
            writer.uint32(8).int32(message.permission);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        for (const v of message.addresses) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permission = reader.int32();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccessConfig();
        message.permission = object.permission ?? 0;
        message.address = object.address ?? "";
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessConfig();
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = object.permission;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.permission = message.permission === 0 ? undefined : message.permission;
        obj.address = message.address === "" ? undefined : message.address;
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = message.addresses;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccessConfig.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AccessConfig",
            value: exports.AccessConfig.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccessConfig.decode(message.value);
    },
    toProto(message) {
        return exports.AccessConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
            value: exports.AccessConfig.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        codeUploadAccess: exports.AccessConfig.fromPartial({}),
        instantiateDefaultPermission: 0
    };
}
exports.Params = {
    typeUrl: "/cosmwasm.wasm.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeUploadAccess !== undefined) {
            exports.AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateDefaultPermission !== 0) {
            writer.uint32(16).int32(message.instantiateDefaultPermission);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeUploadAccess = exports.AccessConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instantiateDefaultPermission = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.codeUploadAccess = object.codeUploadAccess !== undefined && object.codeUploadAccess !== null ? exports.AccessConfig.fromPartial(object.codeUploadAccess) : undefined;
        message.instantiateDefaultPermission = object.instantiateDefaultPermission ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.code_upload_access !== undefined && object.code_upload_access !== null) {
            message.codeUploadAccess = exports.AccessConfig.fromAmino(object.code_upload_access);
        }
        if (object.instantiate_default_permission !== undefined && object.instantiate_default_permission !== null) {
            message.instantiateDefaultPermission = object.instantiate_default_permission;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_upload_access = message.codeUploadAccess ? exports.AccessConfig.toAmino(message.codeUploadAccess) : undefined;
        obj.instantiate_default_permission = message.instantiateDefaultPermission === 0 ? undefined : message.instantiateDefaultPermission;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseCodeInfo() {
    return {
        codeHash: new Uint8Array(),
        creator: "",
        instantiateConfig: exports.AccessConfig.fromPartial({})
    };
}
exports.CodeInfo = {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeHash.length !== 0) {
            writer.uint32(10).bytes(message.codeHash);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.instantiateConfig !== undefined) {
            exports.AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeHash = reader.bytes();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 5:
                    message.instantiateConfig = exports.AccessConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCodeInfo();
        message.codeHash = object.codeHash ?? new Uint8Array();
        message.creator = object.creator ?? "";
        message.instantiateConfig = object.instantiateConfig !== undefined && object.instantiateConfig !== null ? exports.AccessConfig.fromPartial(object.instantiateConfig) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCodeInfo();
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = (0, helpers_1.bytesFromBase64)(object.code_hash);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.instantiate_config !== undefined && object.instantiate_config !== null) {
            message.instantiateConfig = exports.AccessConfig.fromAmino(object.instantiate_config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_hash = message.codeHash ? (0, helpers_1.base64FromBytes)(message.codeHash) : undefined;
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.instantiate_config = message.instantiateConfig ? exports.AccessConfig.toAmino(message.instantiateConfig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CodeInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/CodeInfo",
            value: exports.CodeInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CodeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.CodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
            value: exports.CodeInfo.encode(message).finish()
        };
    }
};
function createBaseContractInfo() {
    return {
        codeId: BigInt(0),
        creator: "",
        admin: "",
        label: "",
        created: undefined,
        ibcPortId: "",
        extension: undefined
    };
}
exports.ContractInfo = {
    typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.created !== undefined) {
            exports.AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
        }
        if (message.ibcPortId !== "") {
            writer.uint32(50).string(message.ibcPortId);
        }
        if (message.extension !== undefined) {
            any_1.Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.created = exports.AbsoluteTxPosition.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.ibcPortId = reader.string();
                    break;
                case 7:
                    message.extension = (0, exports.ContractInfoExtension_InterfaceDecoder)(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractInfo();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.creator = object.creator ?? "";
        message.admin = object.admin ?? "";
        message.label = object.label ?? "";
        message.created = object.created !== undefined && object.created !== null ? exports.AbsoluteTxPosition.fromPartial(object.created) : undefined;
        message.ibcPortId = object.ibcPortId ?? "";
        message.extension = object.extension !== undefined && object.extension !== null ? any_1.Any.fromPartial(object.extension) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractInfo();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = exports.AbsoluteTxPosition.fromAmino(object.created);
        }
        if (object.ibc_port_id !== undefined && object.ibc_port_id !== null) {
            message.ibcPortId = object.ibc_port_id;
        }
        if (object.extension !== undefined && object.extension !== null) {
            message.extension = (0, exports.ContractInfoExtension_FromAmino)(object.extension);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId !== BigInt(0) ? (message.codeId?.toString)() : undefined;
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.label = message.label === "" ? undefined : message.label;
        obj.created = message.created ? exports.AbsoluteTxPosition.toAmino(message.created) : undefined;
        obj.ibc_port_id = message.ibcPortId === "" ? undefined : message.ibcPortId;
        obj.extension = message.extension ? (0, exports.ContractInfoExtension_ToAmino)(message.extension) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContractInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractInfo",
            value: exports.ContractInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ContractInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ContractInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
            value: exports.ContractInfo.encode(message).finish()
        };
    }
};
function createBaseContractCodeHistoryEntry() {
    return {
        operation: 0,
        codeId: BigInt(0),
        updated: undefined,
        msg: new Uint8Array()
    };
}
exports.ContractCodeHistoryEntry = {
    typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.operation !== 0) {
            writer.uint32(8).int32(message.operation);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.codeId);
        }
        if (message.updated !== undefined) {
            exports.AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractCodeHistoryEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operation = reader.int32();
                    break;
                case 2:
                    message.codeId = reader.uint64();
                    break;
                case 3:
                    message.updated = exports.AbsoluteTxPosition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractCodeHistoryEntry();
        message.operation = object.operation ?? 0;
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.updated = object.updated !== undefined && object.updated !== null ? exports.AbsoluteTxPosition.fromPartial(object.updated) : undefined;
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractCodeHistoryEntry();
        if (object.operation !== undefined && object.operation !== null) {
            message.operation = object.operation;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.updated !== undefined && object.updated !== null) {
            message.updated = exports.AbsoluteTxPosition.fromAmino(object.updated);
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = (0, encoding_1.toUtf8)(JSON.stringify(object.msg));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operation = message.operation === 0 ? undefined : message.operation;
        obj.code_id = message.codeId !== BigInt(0) ? (message.codeId?.toString)() : undefined;
        obj.updated = message.updated ? exports.AbsoluteTxPosition.toAmino(message.updated) : undefined;
        obj.msg = message.msg ? JSON.parse((0, encoding_1.fromUtf8)(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContractCodeHistoryEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractCodeHistoryEntry",
            value: exports.ContractCodeHistoryEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ContractCodeHistoryEntry.decode(message.value);
    },
    toProto(message) {
        return exports.ContractCodeHistoryEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
            value: exports.ContractCodeHistoryEntry.encode(message).finish()
        };
    }
};
function createBaseAbsoluteTxPosition() {
    return {
        blockHeight: BigInt(0),
        txIndex: BigInt(0)
    };
}
exports.AbsoluteTxPosition = {
    typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.blockHeight);
        }
        if (message.txIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.txIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAbsoluteTxPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint64();
                    break;
                case 2:
                    message.txIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAbsoluteTxPosition();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseAbsoluteTxPosition();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.txIndex = BigInt(object.tx_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
        obj.tx_index = message.txIndex !== BigInt(0) ? (message.txIndex?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AbsoluteTxPosition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AbsoluteTxPosition",
            value: exports.AbsoluteTxPosition.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AbsoluteTxPosition.decode(message.value);
    },
    toProto(message) {
        return exports.AbsoluteTxPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
            value: exports.AbsoluteTxPosition.encode(message).finish()
        };
    }
};
function createBaseModel() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.Model = {
    typeUrl: "/cosmwasm.wasm.v1.Model",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModel();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseModel();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, helpers_1.bytesFromBase64)(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Model.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Model",
            value: exports.Model.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Model.decode(message.value);
    },
    toProto(message) {
        return exports.Model.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Model",
            value: exports.Model.encode(message).finish()
        };
    }
};
const ContractInfoExtension_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
exports.ContractInfoExtension_InterfaceDecoder = ContractInfoExtension_InterfaceDecoder;
const ContractInfoExtension_FromAmino = (content) => {
    return any_1.Any.fromAmino(content);
};
exports.ContractInfoExtension_FromAmino = ContractInfoExtension_FromAmino;
const ContractInfoExtension_ToAmino = (content) => {
    return any_1.Any.toAmino(content);
};
exports.ContractInfoExtension_ToAmino = ContractInfoExtension_ToAmino;
