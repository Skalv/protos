//@ts-nocheck
import { Params, FeedConfigInfo, FeedConfig, EpochAndRound, Transmission } from "./ocr";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeedConfigRequest() {
    return {
        feedId: ""
    };
}
export const QueryFeedConfigRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeedConfigRequest();
        message.feedId = object.feedId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeedConfigRequest();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeedConfigRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeedConfigRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFeedConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest",
            value: QueryFeedConfigRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeedConfigResponse() {
    return {
        feedConfigInfo: undefined,
        feedConfig: undefined
    };
}
export const QueryFeedConfigResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedConfigInfo !== undefined) {
            FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.feedConfig !== undefined) {
            FeedConfig.encode(message.feedConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedConfigInfo = FeedConfigInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feedConfig = FeedConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeedConfigResponse();
        message.feedConfigInfo = object.feedConfigInfo !== undefined && object.feedConfigInfo !== null ? FeedConfigInfo.fromPartial(object.feedConfigInfo) : undefined;
        message.feedConfig = object.feedConfig !== undefined && object.feedConfig !== null ? FeedConfig.fromPartial(object.feedConfig) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeedConfigResponse();
        if (object.feed_config_info !== undefined && object.feed_config_info !== null) {
            message.feedConfigInfo = FeedConfigInfo.fromAmino(object.feed_config_info);
        }
        if (object.feed_config !== undefined && object.feed_config !== null) {
            message.feedConfig = FeedConfig.fromAmino(object.feed_config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_config_info = message.feedConfigInfo ? FeedConfigInfo.toAmino(message.feedConfigInfo) : undefined;
        obj.feed_config = message.feedConfig ? FeedConfig.toAmino(message.feedConfig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeedConfigResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeedConfigResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeedConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse",
            value: QueryFeedConfigResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeedConfigInfoRequest() {
    return {
        feedId: ""
    };
}
export const QueryFeedConfigInfoRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeedConfigInfoRequest();
        message.feedId = object.feedId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeedConfigInfoRequest();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeedConfigInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeedConfigInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFeedConfigInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest",
            value: QueryFeedConfigInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeedConfigInfoResponse() {
    return {
        feedConfigInfo: undefined,
        epochAndRound: undefined
    };
}
export const QueryFeedConfigInfoResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedConfigInfo !== undefined) {
            FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.epochAndRound !== undefined) {
            EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedConfigInfo = FeedConfigInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeedConfigInfoResponse();
        message.feedConfigInfo = object.feedConfigInfo !== undefined && object.feedConfigInfo !== null ? FeedConfigInfo.fromPartial(object.feedConfigInfo) : undefined;
        message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeedConfigInfoResponse();
        if (object.feed_config_info !== undefined && object.feed_config_info !== null) {
            message.feedConfigInfo = FeedConfigInfo.fromAmino(object.feed_config_info);
        }
        if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
            message.epochAndRound = EpochAndRound.fromAmino(object.epoch_and_round);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_config_info = message.feedConfigInfo ? FeedConfigInfo.toAmino(message.feedConfigInfo) : undefined;
        obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toAmino(message.epochAndRound) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeedConfigInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeedConfigInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeedConfigInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse",
            value: QueryFeedConfigInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLatestRoundRequest() {
    return {
        feedId: ""
    };
}
export const QueryLatestRoundRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLatestRoundRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLatestRoundRequest();
        message.feedId = object.feedId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLatestRoundRequest();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLatestRoundRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLatestRoundRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLatestRoundRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest",
            value: QueryLatestRoundRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLatestRoundResponse() {
    return {
        latestRoundId: BigInt(0),
        data: undefined
    };
}
export const QueryLatestRoundResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.latestRoundId !== BigInt(0)) {
            writer.uint32(8).uint64(message.latestRoundId);
        }
        if (message.data !== undefined) {
            Transmission.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLatestRoundResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.latestRoundId = reader.uint64();
                    break;
                case 2:
                    message.data = Transmission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLatestRoundResponse();
        message.latestRoundId = object.latestRoundId !== undefined && object.latestRoundId !== null ? BigInt(object.latestRoundId.toString()) : BigInt(0);
        message.data = object.data !== undefined && object.data !== null ? Transmission.fromPartial(object.data) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLatestRoundResponse();
        if (object.latest_round_id !== undefined && object.latest_round_id !== null) {
            message.latestRoundId = BigInt(object.latest_round_id);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Transmission.fromAmino(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.latest_round_id = message.latestRoundId !== BigInt(0) ? (message.latestRoundId?.toString)() : undefined;
        obj.data = message.data ? Transmission.toAmino(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLatestRoundResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLatestRoundResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLatestRoundResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse",
            value: QueryLatestRoundResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLatestTransmissionDetailsRequest() {
    return {
        feedId: ""
    };
}
export const QueryLatestTransmissionDetailsRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLatestTransmissionDetailsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLatestTransmissionDetailsRequest();
        message.feedId = object.feedId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLatestTransmissionDetailsRequest();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLatestTransmissionDetailsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLatestTransmissionDetailsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLatestTransmissionDetailsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest",
            value: QueryLatestTransmissionDetailsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLatestTransmissionDetailsResponse() {
    return {
        configDigest: new Uint8Array(),
        epochAndRound: undefined,
        data: undefined
    };
}
export const QueryLatestTransmissionDetailsResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.configDigest.length !== 0) {
            writer.uint32(10).bytes(message.configDigest);
        }
        if (message.epochAndRound !== undefined) {
            EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== undefined) {
            Transmission.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLatestTransmissionDetailsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configDigest = reader.bytes();
                    break;
                case 2:
                    message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.data = Transmission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLatestTransmissionDetailsResponse();
        message.configDigest = object.configDigest ?? new Uint8Array();
        message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
        message.data = object.data !== undefined && object.data !== null ? Transmission.fromPartial(object.data) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLatestTransmissionDetailsResponse();
        if (object.config_digest !== undefined && object.config_digest !== null) {
            message.configDigest = bytesFromBase64(object.config_digest);
        }
        if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
            message.epochAndRound = EpochAndRound.fromAmino(object.epoch_and_round);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Transmission.fromAmino(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.config_digest = message.configDigest ? base64FromBytes(message.configDigest) : undefined;
        obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toAmino(message.epochAndRound) : undefined;
        obj.data = message.data ? Transmission.toAmino(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLatestTransmissionDetailsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLatestTransmissionDetailsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLatestTransmissionDetailsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse",
            value: QueryLatestTransmissionDetailsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOwedAmountRequest() {
    return {
        transmitter: ""
    };
}
export const QueryOwedAmountRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.transmitter !== "") {
            writer.uint32(10).string(message.transmitter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwedAmountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transmitter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOwedAmountRequest();
        message.transmitter = object.transmitter ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOwedAmountRequest();
        if (object.transmitter !== undefined && object.transmitter !== null) {
            message.transmitter = object.transmitter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOwedAmountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOwedAmountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOwedAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest",
            value: QueryOwedAmountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOwedAmountResponse() {
    return {
        amount: Coin.fromPartial({})
    };
}
export const QueryOwedAmountResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwedAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOwedAmountResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOwedAmountResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOwedAmountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOwedAmountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOwedAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse",
            value: QueryOwedAmountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
export const QueryModuleStateRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateRequest();
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
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest",
            value: QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
export const QueryModuleStateResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== undefined) {
            GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = GenesisState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse",
            value: QueryModuleStateResponse.encode(message).finish()
        };
    }
};
