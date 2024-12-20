//@ts-nocheck
import { Duration } from "../../../google/protobuf/duration";
import { TwapRecord } from "./twap_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParams() {
    return {
        pruneEpochIdentifier: "",
        recordHistoryKeepPeriod: Duration.fromPartial({})
    };
}
export const Params = {
    typeUrl: "/osmosis.twap.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pruneEpochIdentifier !== "") {
            writer.uint32(10).string(message.pruneEpochIdentifier);
        }
        if (message.recordHistoryKeepPeriod !== undefined) {
            Duration.encode(message.recordHistoryKeepPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pruneEpochIdentifier = reader.string();
                    break;
                case 2:
                    message.recordHistoryKeepPeriod = Duration.decode(reader, reader.uint32());
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
        message.recordHistoryKeepPeriod = object.recordHistoryKeepPeriod !== undefined && object.recordHistoryKeepPeriod !== null ? Duration.fromPartial(object.recordHistoryKeepPeriod) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.prune_epoch_identifier !== undefined && object.prune_epoch_identifier !== null) {
            message.pruneEpochIdentifier = object.prune_epoch_identifier;
        }
        if (object.record_history_keep_period !== undefined && object.record_history_keep_period !== null) {
            message.recordHistoryKeepPeriod = Duration.fromAmino(object.record_history_keep_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.prune_epoch_identifier = message.pruneEpochIdentifier === "" ? undefined : message.pruneEpochIdentifier;
        obj.record_history_keep_period = message.recordHistoryKeepPeriod ? Duration.toAmino(message.recordHistoryKeepPeriod) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        twaps: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.twap.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.twaps) {
            TwapRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.twaps.push(TwapRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        const message = createBaseGenesisState();
        message.twaps = object.twaps?.map(e => TwapRecord.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.twaps = object.twaps?.map(e => TwapRecord.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? TwapRecord.toAmino(e) : undefined);
        }
        else {
            obj.twaps = message.twaps;
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/genesis-state",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
