//@ts-nocheck
import { ResourceUnits } from "../../base/v1beta2/resourceunits";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseResource() {
    return {
        resources: ResourceUnits.fromPartial({}),
        count: 0,
        price: DecCoin.fromPartial({})
    };
}
export const Resource = {
    typeUrl: "/akash.deployment.v1beta2.Resource",
    encode(message, writer = BinaryWriter.create()) {
        if (message.resources !== undefined) {
            ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.count !== 0) {
            writer.uint32(16).uint32(message.count);
        }
        if (message.price !== undefined) {
            DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = ResourceUnits.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                case 3:
                    message.price = DecCoin.decode(reader, reader.uint32());
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
        message.resources = object.resources !== undefined && object.resources !== null ? ResourceUnits.fromPartial(object.resources) : undefined;
        message.count = object.count ?? 0;
        message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResource();
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = ResourceUnits.fromAmino(object.resources);
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = DecCoin.fromAmino(object.price);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.resources = message.resources ? ResourceUnits.toAmino(message.resources) : ResourceUnits.toAmino(ResourceUnits.fromPartial({}));
        obj.count = message.count ?? 0;
        obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return Resource.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Resource.decode(message.value);
    },
    toProto(message) {
        return Resource.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.Resource",
            value: Resource.encode(message).finish()
        };
    }
};