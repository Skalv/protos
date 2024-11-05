"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const bitcannaid_1 = require("./bitcannaid");
const supplychain_1 = require("./supplychain");
const binary_1 = require("../binary");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        bitcannaidList: [],
        bitcannaidCount: BigInt(0),
        supplychainList: [],
        supplychainCount: BigInt(0)
    };
}
exports.GenesisState = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.bitcannaidList) {
            bitcannaid_1.Bitcannaid.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.bitcannaidCount !== BigInt(0)) {
            writer.uint32(24).uint64(message.bitcannaidCount);
        }
        for (const v of message.supplychainList) {
            supplychain_1.Supplychain.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.supplychainCount !== BigInt(0)) {
            writer.uint32(40).uint64(message.supplychainCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bitcannaidList.push(bitcannaid_1.Bitcannaid.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.bitcannaidCount = reader.uint64();
                    break;
                case 4:
                    message.supplychainList.push(supplychain_1.Supplychain.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.supplychainCount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.bitcannaidList = object.bitcannaidList?.map(e => bitcannaid_1.Bitcannaid.fromPartial(e)) || [];
        message.bitcannaidCount = object.bitcannaidCount !== undefined && object.bitcannaidCount !== null ? BigInt(object.bitcannaidCount.toString()) : BigInt(0);
        message.supplychainList = object.supplychainList?.map(e => supplychain_1.Supplychain.fromPartial(e)) || [];
        message.supplychainCount = object.supplychainCount !== undefined && object.supplychainCount !== null ? BigInt(object.supplychainCount.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.bitcannaidList = object.bitcannaidList?.map(e => bitcannaid_1.Bitcannaid.fromAmino(e)) || [];
        if (object.bitcannaidCount !== undefined && object.bitcannaidCount !== null) {
            message.bitcannaidCount = BigInt(object.bitcannaidCount);
        }
        message.supplychainList = object.supplychainList?.map(e => supplychain_1.Supplychain.fromAmino(e)) || [];
        if (object.supplychainCount !== undefined && object.supplychainCount !== null) {
            message.supplychainCount = BigInt(object.supplychainCount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.bitcannaidList) {
            obj.bitcannaidList = message.bitcannaidList.map(e => e ? bitcannaid_1.Bitcannaid.toAmino(e) : undefined);
        }
        else {
            obj.bitcannaidList = message.bitcannaidList;
        }
        obj.bitcannaidCount = message.bitcannaidCount !== BigInt(0) ? (message.bitcannaidCount?.toString)() : undefined;
        if (message.supplychainList) {
            obj.supplychainList = message.supplychainList.map(e => e ? supplychain_1.Supplychain.toAmino(e) : undefined);
        }
        else {
            obj.supplychainList = message.supplychainList;
        }
        obj.supplychainCount = message.supplychainCount !== BigInt(0) ? (message.supplychainCount?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
