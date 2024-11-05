"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QueryWasmxParamsResponse = exports.QueryWasmxParamsRequest = void 0;
//@ts-nocheck
const wasmx_1 = require("./wasmx");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
function createBaseQueryWasmxParamsRequest() {
    return {};
}
exports.QueryWasmxParamsRequest = {
    typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWasmxParamsRequest();
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
        const message = createBaseQueryWasmxParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryWasmxParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWasmxParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWasmxParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWasmxParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest",
            value: exports.QueryWasmxParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryWasmxParamsResponse() {
    return {
        params: wasmx_1.Params.fromPartial({})
    };
}
exports.QueryWasmxParamsResponse = {
    typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            wasmx_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWasmxParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = wasmx_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryWasmxParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? wasmx_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWasmxParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = wasmx_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? wasmx_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWasmxParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWasmxParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWasmxParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse",
            value: exports.QueryWasmxParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateRequest();
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
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest",
            value: exports.QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
exports.QueryModuleStateResponse = {
    typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== undefined) {
            genesis_1.GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = genesis_1.GenesisState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = object.state !== undefined && object.state !== null ? genesis_1.GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = genesis_1.GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? genesis_1.GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse",
            value: exports.QueryModuleStateResponse.encode(message).finish()
        };
    }
};
