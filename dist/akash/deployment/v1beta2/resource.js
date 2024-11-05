"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
//@ts-nocheck
const resourceunits_1 = require("../../base/v1beta2/resourceunits");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseResource() {
    return {
        resources: resourceunits_1.ResourceUnits.fromPartial({}),
        count: 0,
        price: coin_1.DecCoin.fromPartial({})
    };
}
exports.Resource = {
    typeUrl: "/akash.deployment.v1beta2.Resource",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.resources !== undefined) {
            resourceunits_1.ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.count !== 0) {
            writer.uint32(16).uint32(message.count);
        }
        if (message.price !== undefined) {
            coin_1.DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = resourceunits_1.ResourceUnits.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                case 3:
                    message.price = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResource();
        message.resources = object.resources !== undefined && object.resources !== null ? resourceunits_1.ResourceUnits.fromPartial(object.resources) : undefined;
        message.count = object.count ?? 0;
        message.price = object.price !== undefined && object.price !== null ? coin_1.DecCoin.fromPartial(object.price) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResource();
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = resourceunits_1.ResourceUnits.fromAmino(object.resources);
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = coin_1.DecCoin.fromAmino(object.price);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.resources = message.resources ? resourceunits_1.ResourceUnits.toAmino(message.resources) : resourceunits_1.ResourceUnits.toAmino(resourceunits_1.ResourceUnits.fromPartial({}));
        obj.count = message.count ?? 0;
        obj.price = message.price ? coin_1.DecCoin.toAmino(message.price) : coin_1.DecCoin.toAmino(coin_1.DecCoin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Resource.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Resource.decode(message.value);
    },
    toProto(message) {
        return exports.Resource.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.Resource",
            value: exports.Resource.encode(message).finish()
        };
    }
};
