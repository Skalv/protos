"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAnnualProvisionsResponse = exports.QueryAnnualProvisionsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const mint_1 = require("./mint");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/stargaze.mint.v1beta1.QueryParamsRequest",
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
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: mint_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/stargaze.mint.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            mint_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = mint_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? mint_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = mint_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? mint_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAnnualProvisionsRequest() {
    return {};
}
exports.QueryAnnualProvisionsRequest = {
    typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnnualProvisionsRequest();
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
        const message = createBaseQueryAnnualProvisionsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAnnualProvisionsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAnnualProvisionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAnnualProvisionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAnnualProvisionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsRequest",
            value: exports.QueryAnnualProvisionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAnnualProvisionsResponse() {
    return {
        annualProvisions: new Uint8Array()
    };
}
exports.QueryAnnualProvisionsResponse = {
    typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.annualProvisions.length !== 0) {
            writer.uint32(10).bytes(message.annualProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnnualProvisionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annualProvisions = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAnnualProvisionsResponse();
        message.annualProvisions = object.annualProvisions ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAnnualProvisionsResponse();
        if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
            message.annualProvisions = (0, helpers_1.bytesFromBase64)(object.annual_provisions);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.annual_provisions = message.annualProvisions ? (0, helpers_1.base64FromBytes)(message.annualProvisions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAnnualProvisionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAnnualProvisionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAnnualProvisionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsResponse",
            value: exports.QueryAnnualProvisionsResponse.encode(message).finish()
        };
    }
};
