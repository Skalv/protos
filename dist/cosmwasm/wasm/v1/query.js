"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryContractsByCreatorResponse = exports.QueryContractsByCreatorRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPinnedCodesResponse = exports.QueryPinnedCodesRequest = exports.QueryCodesResponse = exports.QueryCodesRequest = exports.QueryCodeResponse = exports.CodeInfoResponse = exports.QueryCodeRequest = exports.QuerySmartContractStateResponse = exports.QuerySmartContractStateRequest = exports.QueryRawContractStateResponse = exports.QueryRawContractStateRequest = exports.QueryAllContractStateResponse = exports.QueryAllContractStateRequest = exports.QueryContractsByCodeResponse = exports.QueryContractsByCodeRequest = exports.QueryContractHistoryResponse = exports.QueryContractHistoryRequest = exports.QueryContractInfoResponse = exports.QueryContractInfoRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const encoding_1 = require("@cosmjs/encoding");
function createBaseQueryContractInfoRequest() {
    return {
        address: ""
    };
}
exports.QueryContractInfoRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryContractInfoRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractInfoRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractInfoRequest",
            value: exports.QueryContractInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
            value: exports.QueryContractInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryContractInfoResponse() {
    return {
        address: "",
        contractInfo: types_1.ContractInfo.fromPartial({})
    };
}
exports.QueryContractInfoResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.contractInfo !== undefined) {
            types_1.ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.contractInfo = types_1.ContractInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryContractInfoResponse();
        message.address = object.address ?? "";
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? types_1.ContractInfo.fromPartial(object.contractInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractInfoResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.contract_info !== undefined && object.contract_info !== null) {
            message.contractInfo = types_1.ContractInfo.fromAmino(object.contract_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.contract_info = message.contractInfo ? types_1.ContractInfo.toAmino(message.contractInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractInfoResponse",
            value: exports.QueryContractInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
            value: exports.QueryContractInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryContractHistoryRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryContractHistoryRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        const message = createBaseQueryContractHistoryRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractHistoryRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractHistoryRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractHistoryRequest",
            value: exports.QueryContractHistoryRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractHistoryRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractHistoryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
            value: exports.QueryContractHistoryRequest.encode(message).finish()
        };
    }
};
function createBaseQueryContractHistoryResponse() {
    return {
        entries: [],
        pagination: undefined
    };
}
exports.QueryContractHistoryResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.entries) {
            types_1.ContractCodeHistoryEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(types_1.ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
        const message = createBaseQueryContractHistoryResponse();
        message.entries = object.entries?.map(e => types_1.ContractCodeHistoryEntry.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractHistoryResponse();
        message.entries = object.entries?.map(e => types_1.ContractCodeHistoryEntry.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? types_1.ContractCodeHistoryEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractHistoryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractHistoryResponse",
            value: exports.QueryContractHistoryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractHistoryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractHistoryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
            value: exports.QueryContractHistoryResponse.encode(message).finish()
        };
    }
};
function createBaseQueryContractsByCodeRequest() {
    return {
        codeId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryContractsByCodeRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
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
        const message = createBaseQueryContractsByCodeRequest();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractsByCodeRequest();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId !== BigInt(0) ? (message.codeId?.toString)() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractsByCodeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractsByCodeRequest",
            value: exports.QueryContractsByCodeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractsByCodeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractsByCodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
            value: exports.QueryContractsByCodeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryContractsByCodeResponse() {
    return {
        contracts: [],
        pagination: undefined
    };
}
exports.QueryContractsByCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.contracts) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contracts.push(reader.string());
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
        const message = createBaseQueryContractsByCodeResponse();
        message.contracts = object.contracts?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractsByCodeResponse();
        message.contracts = object.contracts?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e);
        }
        else {
            obj.contracts = message.contracts;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractsByCodeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractsByCodeResponse",
            value: exports.QueryContractsByCodeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractsByCodeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractsByCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
            value: exports.QueryContractsByCodeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllContractStateRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryAllContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        const message = createBaseQueryAllContractStateRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllContractStateRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllContractStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryAllContractStateRequest",
            value: exports.QueryAllContractStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
            value: exports.QueryAllContractStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllContractStateResponse() {
    return {
        models: [],
        pagination: undefined
    };
}
exports.QueryAllContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.models) {
            types_1.Model.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllContractStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.models.push(types_1.Model.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllContractStateResponse();
        message.models = object.models?.map(e => types_1.Model.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllContractStateResponse();
        message.models = object.models?.map(e => types_1.Model.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.models) {
            obj.models = message.models.map(e => e ? types_1.Model.toAmino(e) : undefined);
        }
        else {
            obj.models = message.models;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllContractStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryAllContractStateResponse",
            value: exports.QueryAllContractStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
            value: exports.QueryAllContractStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRawContractStateRequest() {
    return {
        address: "",
        queryData: new Uint8Array()
    };
}
exports.QueryRawContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.queryData.length !== 0) {
            writer.uint32(18).bytes(message.queryData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRawContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.queryData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryRawContractStateRequest();
        message.address = object.address ?? "";
        message.queryData = object.queryData ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRawContractStateRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.query_data !== undefined && object.query_data !== null) {
            message.queryData = (0, helpers_1.bytesFromBase64)(object.query_data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.query_data = message.queryData ? (0, helpers_1.base64FromBytes)(message.queryData) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRawContractStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryRawContractStateRequest",
            value: exports.QueryRawContractStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryRawContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRawContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
            value: exports.QueryRawContractStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRawContractStateResponse() {
    return {
        data: new Uint8Array()
    };
}
exports.QueryRawContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRawContractStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryRawContractStateResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRawContractStateResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRawContractStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryRawContractStateResponse",
            value: exports.QueryRawContractStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryRawContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRawContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
            value: exports.QueryRawContractStateResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySmartContractStateRequest() {
    return {
        address: "",
        queryData: new Uint8Array()
    };
}
exports.QuerySmartContractStateRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.queryData.length !== 0) {
            writer.uint32(18).bytes(message.queryData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySmartContractStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.queryData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySmartContractStateRequest();
        message.address = object.address ?? "";
        message.queryData = object.queryData ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySmartContractStateRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.query_data !== undefined && object.query_data !== null) {
            message.queryData = (0, encoding_1.toUtf8)(JSON.stringify(object.query_data));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.query_data = message.queryData ? JSON.parse((0, encoding_1.fromUtf8)(message.queryData)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySmartContractStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QuerySmartContractStateRequest",
            value: exports.QuerySmartContractStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySmartContractStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySmartContractStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
            value: exports.QuerySmartContractStateRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySmartContractStateResponse() {
    return {
        data: new Uint8Array()
    };
}
exports.QuerySmartContractStateResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySmartContractStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySmartContractStateResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySmartContractStateResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, encoding_1.toUtf8)(JSON.stringify(object.data));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? JSON.parse((0, encoding_1.fromUtf8)(message.data)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySmartContractStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QuerySmartContractStateResponse",
            value: exports.QuerySmartContractStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySmartContractStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySmartContractStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
            value: exports.QuerySmartContractStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCodeRequest() {
    return {
        codeId: BigInt(0)
    };
}
exports.QueryCodeRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeRequest();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodeRequest();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId !== BigInt(0) ? (message.codeId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCodeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodeRequest",
            value: exports.QueryCodeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCodeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
            value: exports.QueryCodeRequest.encode(message).finish()
        };
    }
};
function createBaseCodeInfoResponse() {
    return {
        codeId: BigInt(0),
        creator: "",
        dataHash: new Uint8Array(),
        instantiatePermission: types_1.AccessConfig.fromPartial({})
    };
}
exports.CodeInfoResponse = {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(26).bytes(message.dataHash);
        }
        if (message.instantiatePermission !== undefined) {
            types_1.AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodeInfoResponse();
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
                    message.dataHash = reader.bytes();
                    break;
                case 6:
                    message.instantiatePermission = types_1.AccessConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCodeInfoResponse();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.creator = object.creator ?? "";
        message.dataHash = object.dataHash ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? types_1.AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCodeInfoResponse();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.data_hash !== undefined && object.data_hash !== null) {
            message.dataHash = (0, helpers_1.bytesFromBase64)(object.data_hash);
        }
        if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
            message.instantiatePermission = types_1.AccessConfig.fromAmino(object.instantiate_permission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? (message.codeId?.toString)() : "0";
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.data_hash = message.dataHash ? (0, helpers_1.base64FromBytes)(message.dataHash) : undefined;
        obj.instantiate_permission = message.instantiatePermission ? types_1.AccessConfig.toAmino(message.instantiatePermission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CodeInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/CodeInfoResponse",
            value: exports.CodeInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CodeInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.CodeInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
            value: exports.CodeInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCodeResponse() {
    return {
        codeInfo: undefined,
        data: new Uint8Array()
    };
}
exports.QueryCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeInfo !== undefined) {
            exports.CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfo = exports.CodeInfoResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeResponse();
        message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? exports.CodeInfoResponse.fromPartial(object.codeInfo) : undefined;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodeResponse();
        if (object.code_info !== undefined && object.code_info !== null) {
            message.codeInfo = exports.CodeInfoResponse.fromAmino(object.code_info);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_info = message.codeInfo ? exports.CodeInfoResponse.toAmino(message.codeInfo) : undefined;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCodeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodeResponse",
            value: exports.QueryCodeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCodeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
            value: exports.QueryCodeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCodesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryCodesRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryCodesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCodesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodesRequest",
            value: exports.QueryCodesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCodesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCodesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
            value: exports.QueryCodesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCodesResponse() {
    return {
        codeInfos: [],
        pagination: undefined
    };
}
exports.QueryCodesResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.codeInfos) {
            exports.CodeInfoResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfos.push(exports.CodeInfoResponse.decode(reader, reader.uint32()));
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
        const message = createBaseQueryCodesResponse();
        message.codeInfos = object.codeInfos?.map(e => exports.CodeInfoResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodesResponse();
        message.codeInfos = object.code_infos?.map(e => exports.CodeInfoResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.codeInfos) {
            obj.code_infos = message.codeInfos.map(e => e ? exports.CodeInfoResponse.toAmino(e) : undefined);
        }
        else {
            obj.code_infos = message.codeInfos;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCodesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryCodesResponse",
            value: exports.QueryCodesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCodesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCodesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
            value: exports.QueryCodesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPinnedCodesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryPinnedCodesRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPinnedCodesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
        const message = createBaseQueryPinnedCodesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPinnedCodesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPinnedCodesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryPinnedCodesRequest",
            value: exports.QueryPinnedCodesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPinnedCodesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPinnedCodesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
            value: exports.QueryPinnedCodesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPinnedCodesResponse() {
    return {
        codeIds: [],
        pagination: undefined
    };
}
exports.QueryPinnedCodesResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPinnedCodesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
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
        const message = createBaseQueryPinnedCodesResponse();
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPinnedCodesResponse();
        message.codeIds = object.code_ids?.map(e => BigInt(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e.toString());
        }
        else {
            obj.code_ids = message.codeIds;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPinnedCodesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryPinnedCodesResponse",
            value: exports.QueryPinnedCodesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPinnedCodesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPinnedCodesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
            value: exports.QueryPinnedCodesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryParamsRequest",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: types_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            types_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = types_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? types_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = types_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? types_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryParamsResponse",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryContractsByCreatorRequest() {
    return {
        creatorAddress: "",
        pagination: undefined
    };
}
exports.QueryContractsByCreatorRequest = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creatorAddress !== "") {
            writer.uint32(10).string(message.creatorAddress);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCreatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creatorAddress = reader.string();
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
        const message = createBaseQueryContractsByCreatorRequest();
        message.creatorAddress = object.creatorAddress ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractsByCreatorRequest();
        if (object.creator_address !== undefined && object.creator_address !== null) {
            message.creatorAddress = object.creator_address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator_address = message.creatorAddress === "" ? undefined : message.creatorAddress;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractsByCreatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractsByCreatorRequest",
            value: exports.QueryContractsByCreatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractsByCreatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractsByCreatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
            value: exports.QueryContractsByCreatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryContractsByCreatorResponse() {
    return {
        contractAddresses: [],
        pagination: undefined
    };
}
exports.QueryContractsByCreatorResponse = {
    typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.contractAddresses) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddresses.push(reader.string());
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
        const message = createBaseQueryContractsByCreatorResponse();
        message.contractAddresses = object.contractAddresses?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryContractsByCreatorResponse();
        message.contractAddresses = object.contract_addresses?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.contractAddresses) {
            obj.contract_addresses = message.contractAddresses.map(e => e);
        }
        else {
            obj.contract_addresses = message.contractAddresses;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryContractsByCreatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/QueryContractsByCreatorResponse",
            value: exports.QueryContractsByCreatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryContractsByCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryContractsByCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
            value: exports.QueryContractsByCreatorResponse.encode(message).finish()
        };
    }
};
