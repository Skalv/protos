//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** PoolType is an enumeration of all supported pool types. */
export var PoolType;
(function (PoolType) {
    /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
    PoolType[PoolType["Balancer"] = 0] = "Balancer";
    /**
     * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
     * in x/gamm.
     */
    PoolType[PoolType["Stableswap"] = 1] = "Stableswap";
    /**
     * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
     * defined in x/concentrated-liquidity.
     */
    PoolType[PoolType["Concentrated"] = 2] = "Concentrated";
    PoolType[PoolType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PoolType || (PoolType = {}));
export const PoolTypeSDKType = PoolType;
export const PoolTypeAmino = PoolType;
export function poolTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "Balancer":
            return PoolType.Balancer;
        case 1:
        case "Stableswap":
            return PoolType.Stableswap;
        case 2:
        case "Concentrated":
            return PoolType.Concentrated;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PoolType.UNRECOGNIZED;
    }
}
export function poolTypeToJSON(object) {
    switch (object) {
        case PoolType.Balancer:
            return "Balancer";
        case PoolType.Stableswap:
            return "Stableswap";
        case PoolType.Concentrated:
            return "Concentrated";
        case PoolType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseModuleRoute() {
    return {
        poolType: 0
    };
}
export const ModuleRoute = {
    typeUrl: "/osmosis.swaprouter.v1beta1.ModuleRoute",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolType !== 0) {
            writer.uint32(8).int32(message.poolType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleRoute();
        message.poolType = object.poolType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleRoute();
        if (object.pool_type !== undefined && object.pool_type !== null) {
            message.poolType = object.pool_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_type = message.poolType === 0 ? undefined : message.poolType;
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/module-route",
            value: ModuleRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleRoute.decode(message.value);
    },
    toProto(message) {
        return ModuleRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.ModuleRoute",
            value: ModuleRoute.encode(message).finish()
        };
    }
};
