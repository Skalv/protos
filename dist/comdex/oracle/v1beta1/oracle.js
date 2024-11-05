"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = exports.Calldata = exports.Market = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseMarket() {
    return {
        symbol: "",
        scriptId: BigInt(0)
    };
}
exports.Market = {
    typeUrl: "/comdex.oracle.v1beta1.Market",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (message.scriptId !== BigInt(0)) {
            writer.uint32(16).uint64(message.scriptId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.scriptId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarket();
        message.symbol = object.symbol ?? "";
        message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? BigInt(object.scriptId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMarket();
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.script_id !== undefined && object.script_id !== null) {
            message.scriptId = BigInt(object.script_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.script_id = message.scriptId !== BigInt(0) ? (message.scriptId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Market.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Market.decode(message.value);
    },
    toProto(message) {
        return exports.Market.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.Market",
            value: exports.Market.encode(message).finish()
        };
    }
};
function createBaseCalldata() {
    return {
        symbols: [],
        multiplier: BigInt(0)
    };
}
exports.Calldata = {
    typeUrl: "/comdex.oracle.v1beta1.Calldata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.symbols) {
            writer.uint32(10).string(v);
        }
        if (message.multiplier !== BigInt(0)) {
            writer.uint32(16).uint64(message.multiplier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalldata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbols.push(reader.string());
                    break;
                case 2:
                    message.multiplier = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCalldata();
        message.symbols = object.symbols?.map(e => e) || [];
        message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? BigInt(object.multiplier.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalldata();
        message.symbols = object.symbols?.map(e => e) || [];
        if (object.multiplier !== undefined && object.multiplier !== null) {
            message.multiplier = BigInt(object.multiplier);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.symbols) {
            obj.symbols = message.symbols.map(e => e);
        }
        else {
            obj.symbols = message.symbols;
        }
        obj.multiplier = message.multiplier !== BigInt(0) ? (message.multiplier?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Calldata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Calldata.decode(message.value);
    },
    toProto(message) {
        return exports.Calldata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.Calldata",
            value: exports.Calldata.encode(message).finish()
        };
    }
};
function createBaseResult() {
    return {
        rates: []
    };
}
exports.Result = {
    typeUrl: "/comdex.oracle.v1beta1.Result",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.rates) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.rates.push(reader.uint64());
                        }
                    }
                    else {
                        message.rates.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResult();
        message.rates = object.rates?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResult();
        message.rates = object.rates?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rates) {
            obj.rates = message.rates.map(e => e.toString());
        }
        else {
            obj.rates = message.rates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Result.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Result.decode(message.value);
    },
    toProto(message) {
        return exports.Result.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.Result",
            value: exports.Result.encode(message).finish()
        };
    }
};
