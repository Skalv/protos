"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.Params = void 0;
//@ts-nocheck
const duration_1 = require("../../../google/protobuf/duration");
const twap_record_1 = require("./twap_record");
const binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        pruneEpochIdentifier: "",
        recordHistoryKeepPeriod: duration_1.Duration.fromPartial({})
    };
}
exports.Params = {
    typeUrl: "/osmosis.twap.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pruneEpochIdentifier !== "") {
            writer.uint32(10).string(message.pruneEpochIdentifier);
        }
        if (message.recordHistoryKeepPeriod !== undefined) {
            duration_1.Duration.encode(message.recordHistoryKeepPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pruneEpochIdentifier = reader.string();
                    break;
                case 2:
                    message.recordHistoryKeepPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.pruneEpochIdentifier = object.pruneEpochIdentifier ?? "";
        message.recordHistoryKeepPeriod = object.recordHistoryKeepPeriod !== undefined && object.recordHistoryKeepPeriod !== null ? duration_1.Duration.fromPartial(object.recordHistoryKeepPeriod) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.prune_epoch_identifier !== undefined && object.prune_epoch_identifier !== null) {
            message.pruneEpochIdentifier = object.prune_epoch_identifier;
        }
        if (object.record_history_keep_period !== undefined && object.record_history_keep_period !== null) {
            message.recordHistoryKeepPeriod = duration_1.Duration.fromAmino(object.record_history_keep_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.prune_epoch_identifier = message.pruneEpochIdentifier === "" ? undefined : message.pruneEpochIdentifier;
        obj.record_history_keep_period = message.recordHistoryKeepPeriod ? duration_1.Duration.toAmino(message.recordHistoryKeepPeriod) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        twaps: [],
        params: exports.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.twap.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.twaps) {
            twap_record_1.TwapRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.twaps.push(twap_record_1.TwapRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = exports.Params.decode(reader, reader.uint32());
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
        message.twaps = object.twaps?.map(e => twap_record_1.TwapRecord.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.twaps = object.twaps?.map(e => twap_record_1.TwapRecord.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? twap_record_1.TwapRecord.toAmino(e) : undefined);
        }
        else {
            obj.twaps = message.twaps;
        }
        obj.params = message.params ? exports.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/genesis-state",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
