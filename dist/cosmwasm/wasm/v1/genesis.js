"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequence = exports.Contract = exports.Code = exports.GenesisState = void 0;
//@ts-nocheck
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        params: types_1.Params.fromPartial({}),
        codes: [],
        contracts: [],
        sequences: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmwasm.wasm.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            types_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.codes) {
            exports.Code.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contracts) {
            exports.Contract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            exports.Sequence.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.params = types_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.codes.push(exports.Code.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.contracts.push(exports.Contract.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(exports.Sequence.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? types_1.Params.fromPartial(object.params) : undefined;
        message.codes = object.codes?.map(e => exports.Code.fromPartial(e)) || [];
        message.contracts = object.contracts?.map(e => exports.Contract.fromPartial(e)) || [];
        message.sequences = object.sequences?.map(e => exports.Sequence.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = types_1.Params.fromAmino(object.params);
        }
        message.codes = object.codes?.map(e => exports.Code.fromAmino(e)) || [];
        message.contracts = object.contracts?.map(e => exports.Contract.fromAmino(e)) || [];
        message.sequences = object.sequences?.map(e => exports.Sequence.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? types_1.Params.toAmino(message.params) : undefined;
        if (message.codes) {
            obj.codes = message.codes.map(e => e ? exports.Code.toAmino(e) : undefined);
        }
        else {
            obj.codes = message.codes;
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e ? exports.Contract.toAmino(e) : undefined);
        }
        else {
            obj.contracts = message.contracts;
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e ? exports.Sequence.toAmino(e) : undefined);
        }
        else {
            obj.sequences = message.sequences;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseCode() {
    return {
        codeId: BigInt(0),
        codeInfo: types_1.CodeInfo.fromPartial({}),
        codeBytes: new Uint8Array(),
        pinned: false
    };
}
exports.Code = {
    typeUrl: "/cosmwasm.wasm.v1.Code",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.codeInfo !== undefined) {
            types_1.CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.codeBytes.length !== 0) {
            writer.uint32(26).bytes(message.codeBytes);
        }
        if (message.pinned === true) {
            writer.uint32(32).bool(message.pinned);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.codeInfo = types_1.CodeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codeBytes = reader.bytes();
                    break;
                case 4:
                    message.pinned = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCode();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? types_1.CodeInfo.fromPartial(object.codeInfo) : undefined;
        message.codeBytes = object.codeBytes ?? new Uint8Array();
        message.pinned = object.pinned ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCode();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.code_info !== undefined && object.code_info !== null) {
            message.codeInfo = types_1.CodeInfo.fromAmino(object.code_info);
        }
        if (object.code_bytes !== undefined && object.code_bytes !== null) {
            message.codeBytes = (0, helpers_1.bytesFromBase64)(object.code_bytes);
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = object.pinned;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId !== BigInt(0) ? (message.codeId?.toString)() : undefined;
        obj.code_info = message.codeInfo ? types_1.CodeInfo.toAmino(message.codeInfo) : undefined;
        obj.code_bytes = message.codeBytes ? (0, helpers_1.base64FromBytes)(message.codeBytes) : undefined;
        obj.pinned = message.pinned === false ? undefined : message.pinned;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Code.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Code",
            value: exports.Code.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Code.decode(message.value);
    },
    toProto(message) {
        return exports.Code.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Code",
            value: exports.Code.encode(message).finish()
        };
    }
};
function createBaseContract() {
    return {
        contractAddress: "",
        contractInfo: types_1.ContractInfo.fromPartial({}),
        contractState: [],
        contractCodeHistory: []
    };
}
exports.Contract = {
    typeUrl: "/cosmwasm.wasm.v1.Contract",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.contractInfo !== undefined) {
            types_1.ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contractState) {
            types_1.Model.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.contractCodeHistory) {
            types_1.ContractCodeHistoryEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.contractInfo = types_1.ContractInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.contractState.push(types_1.Model.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.contractCodeHistory.push(types_1.ContractCodeHistoryEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContract();
        message.contractAddress = object.contractAddress ?? "";
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? types_1.ContractInfo.fromPartial(object.contractInfo) : undefined;
        message.contractState = object.contractState?.map(e => types_1.Model.fromPartial(e)) || [];
        message.contractCodeHistory = object.contractCodeHistory?.map(e => types_1.ContractCodeHistoryEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseContract();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.contract_info !== undefined && object.contract_info !== null) {
            message.contractInfo = types_1.ContractInfo.fromAmino(object.contract_info);
        }
        message.contractState = object.contract_state?.map(e => types_1.Model.fromAmino(e)) || [];
        message.contractCodeHistory = object.contract_code_history?.map(e => types_1.ContractCodeHistoryEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
        obj.contract_info = message.contractInfo ? types_1.ContractInfo.toAmino(message.contractInfo) : undefined;
        if (message.contractState) {
            obj.contract_state = message.contractState.map(e => e ? types_1.Model.toAmino(e) : undefined);
        }
        else {
            obj.contract_state = message.contractState;
        }
        if (message.contractCodeHistory) {
            obj.contract_code_history = message.contractCodeHistory.map(e => e ? types_1.ContractCodeHistoryEntry.toAmino(e) : undefined);
        }
        else {
            obj.contract_code_history = message.contractCodeHistory;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Contract.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Contract",
            value: exports.Contract.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Contract.decode(message.value);
    },
    toProto(message) {
        return exports.Contract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Contract",
            value: exports.Contract.encode(message).finish()
        };
    }
};
function createBaseSequence() {
    return {
        idKey: new Uint8Array(),
        value: BigInt(0)
    };
}
exports.Sequence = {
    typeUrl: "/cosmwasm.wasm.v1.Sequence",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.idKey.length !== 0) {
            writer.uint32(10).bytes(message.idKey);
        }
        if (message.value !== BigInt(0)) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idKey = reader.bytes();
                    break;
                case 2:
                    message.value = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSequence();
        message.idKey = object.idKey ?? new Uint8Array();
        message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSequence();
        if (object.id_key !== undefined && object.id_key !== null) {
            message.idKey = (0, helpers_1.bytesFromBase64)(object.id_key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = BigInt(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id_key = message.idKey ? (0, helpers_1.base64FromBytes)(message.idKey) : undefined;
        obj.value = message.value !== BigInt(0) ? (message.value?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Sequence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Sequence",
            value: exports.Sequence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Sequence.decode(message.value);
    },
    toProto(message) {
        return exports.Sequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Sequence",
            value: exports.Sequence.encode(message).finish()
        };
    }
};
