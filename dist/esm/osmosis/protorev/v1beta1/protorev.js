//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseTokenPairArbRoutes() {
    return {
        arbRoutes: [],
        tokenIn: "",
        tokenOut: ""
    };
}
export const TokenPairArbRoutes = {
    typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.arbRoutes) {
            Route.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenIn !== "") {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.tokenOut !== "") {
            writer.uint32(26).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenPairArbRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arbRoutes.push(Route.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tokenIn = reader.string();
                    break;
                case 3:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTokenPairArbRoutes();
        message.arbRoutes = object.arbRoutes?.map(e => Route.fromPartial(e)) || [];
        message.tokenIn = object.tokenIn ?? "";
        message.tokenOut = object.tokenOut ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTokenPairArbRoutes();
        message.arbRoutes = object.arb_routes?.map(e => Route.fromAmino(e)) || [];
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = object.token_in;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = object.token_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.arbRoutes) {
            obj.arb_routes = message.arbRoutes.map(e => e ? Route.toAmino(e) : undefined);
        }
        else {
            obj.arb_routes = message.arbRoutes;
        }
        obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
        obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return TokenPairArbRoutes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/token-pair-arb-routes",
            value: TokenPairArbRoutes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TokenPairArbRoutes.decode(message.value);
    },
    toProto(message) {
        return TokenPairArbRoutes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
            value: TokenPairArbRoutes.encode(message).finish()
        };
    }
};
function createBaseRoute() {
    return {
        trades: []
    };
}
export const Route = {
    typeUrl: "/osmosis.protorev.v1beta1.Route",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.trades) {
            Trade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(Trade.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRoute();
        message.trades = object.trades?.map(e => Trade.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRoute();
        message.trades = object.trades?.map(e => Trade.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map(e => e ? Trade.toAmino(e) : undefined);
        }
        else {
            obj.trades = message.trades;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Route.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/route",
            value: Route.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Route.decode(message.value);
    },
    toProto(message) {
        return Route.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.Route",
            value: Route.encode(message).finish()
        };
    }
};
function createBaseTrade() {
    return {
        pool: BigInt(0),
        tokenIn: "",
        tokenOut: ""
    };
}
export const Trade = {
    typeUrl: "/osmosis.protorev.v1beta1.Trade",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool);
        }
        if (message.tokenIn !== "") {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.tokenOut !== "") {
            writer.uint32(26).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = reader.uint64();
                    break;
                case 2:
                    message.tokenIn = reader.string();
                    break;
                case 3:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTrade();
        message.pool = object.pool !== undefined && object.pool !== null ? BigInt(object.pool.toString()) : BigInt(0);
        message.tokenIn = object.tokenIn ?? "";
        message.tokenOut = object.tokenOut ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTrade();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = BigInt(object.pool);
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = object.token_in;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = object.token_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool !== BigInt(0) ? (message.pool?.toString)() : undefined;
        obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
        obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return Trade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/trade",
            value: Trade.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Trade.decode(message.value);
    },
    toProto(message) {
        return Trade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.Trade",
            value: Trade.encode(message).finish()
        };
    }
};
function createBasePoolStatistics() {
    return {
        profits: [],
        numberOfTrades: "",
        poolId: BigInt(0)
    };
}
export const PoolStatistics = {
    typeUrl: "/osmosis.protorev.v1beta1.PoolStatistics",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.profits) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.numberOfTrades !== "") {
            writer.uint32(18).string(message.numberOfTrades);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(24).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolStatistics();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profits.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.numberOfTrades = reader.string();
                    break;
                case 3:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolStatistics();
        message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
        message.numberOfTrades = object.numberOfTrades ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolStatistics();
        message.profits = object.profits?.map(e => Coin.fromAmino(e)) || [];
        if (object.number_of_trades !== undefined && object.number_of_trades !== null) {
            message.numberOfTrades = object.number_of_trades;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.profits = message.profits;
        }
        obj.number_of_trades = message.numberOfTrades === "" ? undefined : message.numberOfTrades;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PoolStatistics.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/pool-statistics",
            value: PoolStatistics.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PoolStatistics.decode(message.value);
    },
    toProto(message) {
        return PoolStatistics.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.PoolStatistics",
            value: PoolStatistics.encode(message).finish()
        };
    }
};
