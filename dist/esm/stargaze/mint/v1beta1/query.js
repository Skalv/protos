//@ts-nocheck
import { Params } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/stargaze.mint.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/stargaze.mint.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAnnualProvisionsRequest() {
    return {};
}
export const QueryAnnualProvisionsRequest = {
    typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryAnnualProvisionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAnnualProvisionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAnnualProvisionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsRequest",
            value: QueryAnnualProvisionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAnnualProvisionsResponse() {
    return {
        annualProvisions: new Uint8Array()
    };
}
export const QueryAnnualProvisionsResponse = {
    typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.annualProvisions.length !== 0) {
            writer.uint32(10).bytes(message.annualProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.annualProvisions = bytesFromBase64(object.annual_provisions);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.annual_provisions = message.annualProvisions ? base64FromBytes(message.annualProvisions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAnnualProvisionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAnnualProvisionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAnnualProvisionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.QueryAnnualProvisionsResponse",
            value: QueryAnnualProvisionsResponse.encode(message).finish()
        };
    }
};
