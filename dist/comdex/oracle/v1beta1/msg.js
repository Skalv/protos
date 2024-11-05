"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgFetchPriceResponse = exports.MsgFetchPriceRequest = exports.MsgRemoveMarketForAssetResponse = exports.MsgRemoveMarketForAssetRequest = exports.MsgUpdateMarketResponse = exports.MsgUpdateMarketRequest = exports.MsgAddMarketResponse = exports.MsgAddMarketRequest = void 0;
//@ts-nocheck
const client_1 = require("../../../ibc/core/client/v1/client");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseMsgAddMarketRequest() {
    return {
        from: "",
        symbol: "",
        scriptId: BigInt(0),
        id: BigInt(0)
    };
}
exports.MsgAddMarketRequest = {
    typeUrl: "/comdex.oracle.v1beta1.MsgAddMarketRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.scriptId !== BigInt(0)) {
            writer.uint32(24).uint64(message.scriptId);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(32).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.scriptId = reader.uint64();
                    break;
                case 4:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddMarketRequest();
        message.from = object.from ?? "";
        message.symbol = object.symbol ?? "";
        message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? BigInt(object.scriptId.toString()) : BigInt(0);
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddMarketRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.script_id !== undefined && object.script_id !== null) {
            message.scriptId = BigInt(object.script_id);
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.script_id = message.scriptId !== BigInt(0) ? (message.scriptId?.toString)() : undefined;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAddMarketRequest.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.MsgAddMarketRequest",
            value: exports.MsgAddMarketRequest.encode(message).finish()
        };
    }
};
function createBaseMsgAddMarketResponse() {
    return {};
}
exports.MsgAddMarketResponse = {
    typeUrl: "/comdex.oracle.v1beta1.MsgAddMarketResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddMarketResponse();
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
        const message = createBaseMsgAddMarketResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAddMarketResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAddMarketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.MsgAddMarketResponse",
            value: exports.MsgAddMarketResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateMarketRequest() {
    return {
        from: "",
        symbol: "",
        scriptId: BigInt(0)
    };
}
exports.MsgUpdateMarketRequest = {
    typeUrl: "/comdex.oracle.v1beta1.MsgUpdateMarketRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.scriptId !== BigInt(0)) {
            writer.uint32(24).uint64(message.scriptId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
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
        const message = createBaseMsgUpdateMarketRequest();
        message.from = object.from ?? "";
        message.symbol = object.symbol ?? "";
        message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? BigInt(object.scriptId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateMarketRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
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
        obj.from = message.from === "" ? undefined : message.from;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.script_id = message.scriptId !== BigInt(0) ? (message.scriptId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateMarketRequest.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.MsgUpdateMarketRequest",
            value: exports.MsgUpdateMarketRequest.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateMarketResponse() {
    return {};
}
exports.MsgUpdateMarketResponse = {
    typeUrl: "/comdex.oracle.v1beta1.MsgUpdateMarketResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketResponse();
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
        const message = createBaseMsgUpdateMarketResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateMarketResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateMarketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.MsgUpdateMarketResponse",
            value: exports.MsgUpdateMarketResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveMarketForAssetRequest() {
    return {
        from: "",
        id: BigInt(0),
        symbol: ""
    };
}
exports.MsgRemoveMarketForAssetRequest = {
    typeUrl: "/comdex.oracle.v1beta1.MsgRemoveMarketForAssetRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveMarketForAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.symbol = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveMarketForAssetRequest();
        message.from = object.from ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.symbol = object.symbol ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRemoveMarketForAssetRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRemoveMarketForAssetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRemoveMarketForAssetRequest.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRemoveMarketForAssetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.MsgRemoveMarketForAssetRequest",
            value: exports.MsgRemoveMarketForAssetRequest.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveMarketForAssetResponse() {
    return {};
}
exports.MsgRemoveMarketForAssetResponse = {
    typeUrl: "/comdex.oracle.v1beta1.MsgRemoveMarketForAssetResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveMarketForAssetResponse();
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
        const message = createBaseMsgRemoveMarketForAssetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRemoveMarketForAssetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRemoveMarketForAssetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRemoveMarketForAssetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRemoveMarketForAssetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.MsgRemoveMarketForAssetResponse",
            value: exports.MsgRemoveMarketForAssetResponse.encode(message).finish()
        };
    }
};
function createBaseMsgFetchPriceRequest() {
    return {
        from: "",
        sourcePort: "",
        sourceChannel: "",
        timeoutHeight: client_1.Height.fromPartial({}),
        timeoutTimestamp: BigInt(0),
        symbols: [],
        scriptId: BigInt(0),
        feeLimit: [],
        prepareGas: BigInt(0),
        executeGas: BigInt(0)
    };
}
exports.MsgFetchPriceRequest = {
    typeUrl: "/comdex.oracle.v1beta1.MsgFetchPriceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.sourcePort !== "") {
            writer.uint32(18).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(26).string(message.sourceChannel);
        }
        if (message.timeoutHeight !== undefined) {
            client_1.Height.encode(message.timeoutHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(40).uint64(message.timeoutTimestamp);
        }
        for (const v of message.symbols) {
            writer.uint32(50).string(v);
        }
        if (message.scriptId !== BigInt(0)) {
            writer.uint32(56).uint64(message.scriptId);
        }
        for (const v of message.feeLimit) {
            coin_1.Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.prepareGas !== BigInt(0)) {
            writer.uint32(72).uint64(message.prepareGas);
        }
        if (message.executeGas !== BigInt(0)) {
            writer.uint32(80).uint64(message.executeGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFetchPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.sourcePort = reader.string();
                    break;
                case 3:
                    message.sourceChannel = reader.string();
                    break;
                case 4:
                    message.timeoutHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timeoutTimestamp = reader.uint64();
                    break;
                case 6:
                    message.symbols.push(reader.string());
                    break;
                case 7:
                    message.scriptId = reader.uint64();
                    break;
                case 8:
                    message.feeLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.prepareGas = reader.uint64();
                    break;
                case 10:
                    message.executeGas = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgFetchPriceRequest();
        message.from = object.from ?? "";
        message.sourcePort = object.sourcePort ?? "";
        message.sourceChannel = object.sourceChannel ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? client_1.Height.fromPartial(object.timeoutHeight) : undefined;
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        message.symbols = object.symbols?.map(e => e) || [];
        message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? BigInt(object.scriptId.toString()) : BigInt(0);
        message.feeLimit = object.feeLimit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? BigInt(object.prepareGas.toString()) : BigInt(0);
        message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? BigInt(object.executeGas.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgFetchPriceRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.source_port !== undefined && object.source_port !== null) {
            message.sourcePort = object.source_port;
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.sourceChannel = object.source_channel;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = client_1.Height.fromAmino(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeoutTimestamp = BigInt(object.timeout_timestamp);
        }
        message.symbols = object.symbols?.map(e => e) || [];
        if (object.script_id !== undefined && object.script_id !== null) {
            message.scriptId = BigInt(object.script_id);
        }
        message.feeLimit = object.fee_limit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.prepare_gas !== undefined && object.prepare_gas !== null) {
            message.prepareGas = BigInt(object.prepare_gas);
        }
        if (object.execute_gas !== undefined && object.execute_gas !== null) {
            message.executeGas = BigInt(object.execute_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.source_port = message.sourcePort === "" ? undefined : message.sourcePort;
        obj.source_channel = message.sourceChannel === "" ? undefined : message.sourceChannel;
        obj.timeout_height = message.timeoutHeight ? client_1.Height.toAmino(message.timeoutHeight) : {};
        obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? (message.timeoutTimestamp?.toString)() : undefined;
        if (message.symbols) {
            obj.symbols = message.symbols.map(e => e);
        }
        else {
            obj.symbols = message.symbols;
        }
        obj.script_id = message.scriptId !== BigInt(0) ? (message.scriptId?.toString)() : undefined;
        if (message.feeLimit) {
            obj.fee_limit = message.feeLimit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.fee_limit = message.feeLimit;
        }
        obj.prepare_gas = message.prepareGas !== BigInt(0) ? (message.prepareGas?.toString)() : undefined;
        obj.execute_gas = message.executeGas !== BigInt(0) ? (message.executeGas?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgFetchPriceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgFetchPriceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.MsgFetchPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.MsgFetchPriceRequest",
            value: exports.MsgFetchPriceRequest.encode(message).finish()
        };
    }
};
function createBaseMsgFetchPriceResponse() {
    return {};
}
exports.MsgFetchPriceResponse = {
    typeUrl: "/comdex.oracle.v1beta1.MsgFetchPriceResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFetchPriceResponse();
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
        const message = createBaseMsgFetchPriceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgFetchPriceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgFetchPriceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgFetchPriceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgFetchPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.MsgFetchPriceResponse",
            value: exports.MsgFetchPriceResponse.encode(message).finish()
        };
    }
};
