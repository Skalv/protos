//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** This describes how the endpoint is implemented when the lease is deployed */
export var Endpoint_Kind;
(function (Endpoint_Kind) {
    /** SHARED_HTTP - Describes an endpoint that becomes a Kubernetes Ingress */
    Endpoint_Kind[Endpoint_Kind["SHARED_HTTP"] = 0] = "SHARED_HTTP";
    /** RANDOM_PORT - Describes an endpoint that becomes a Kubernetes NodePort */
    Endpoint_Kind[Endpoint_Kind["RANDOM_PORT"] = 1] = "RANDOM_PORT";
    /** LEASED_IP - Describes an endpoint that becomes a leased IP */
    Endpoint_Kind[Endpoint_Kind["LEASED_IP"] = 2] = "LEASED_IP";
    Endpoint_Kind[Endpoint_Kind["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Endpoint_Kind || (Endpoint_Kind = {}));
export const Endpoint_KindSDKType = Endpoint_Kind;
export const Endpoint_KindAmino = Endpoint_Kind;
export function endpoint_KindFromJSON(object) {
    switch (object) {
        case 0:
        case "SHARED_HTTP":
            return Endpoint_Kind.SHARED_HTTP;
        case 1:
        case "RANDOM_PORT":
            return Endpoint_Kind.RANDOM_PORT;
        case 2:
        case "LEASED_IP":
            return Endpoint_Kind.LEASED_IP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Endpoint_Kind.UNRECOGNIZED;
    }
}
export function endpoint_KindToJSON(object) {
    switch (object) {
        case Endpoint_Kind.SHARED_HTTP:
            return "SHARED_HTTP";
        case Endpoint_Kind.RANDOM_PORT:
            return "RANDOM_PORT";
        case Endpoint_Kind.LEASED_IP:
            return "LEASED_IP";
        case Endpoint_Kind.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseEndpoint() {
    return {
        kind: 0,
        sequenceNumber: 0
    };
}
export const Endpoint = {
    typeUrl: "/akash.base.v1beta2.Endpoint",
    encode(message, writer = BinaryWriter.create()) {
        if (message.kind !== 0) {
            writer.uint32(8).int32(message.kind);
        }
        if (message.sequenceNumber !== 0) {
            writer.uint32(16).uint32(message.sequenceNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEndpoint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.int32();
                    break;
                case 2:
                    message.sequenceNumber = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEndpoint();
        message.kind = object.kind ?? 0;
        message.sequenceNumber = object.sequenceNumber ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEndpoint();
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = object.kind;
        }
        if (object.sequence_number !== undefined && object.sequence_number !== null) {
            message.sequenceNumber = object.sequence_number;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.kind = message.kind === 0 ? undefined : message.kind;
        obj.sequence_number = message.sequenceNumber ?? 0;
        return obj;
    },
    fromAminoMsg(object) {
        return Endpoint.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Endpoint.decode(message.value);
    },
    toProto(message) {
        return Endpoint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta2.Endpoint",
            value: Endpoint.encode(message).finish()
        };
    }
};
