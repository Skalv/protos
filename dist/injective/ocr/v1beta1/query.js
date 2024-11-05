"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QueryOwedAmountResponse = exports.QueryOwedAmountRequest = exports.QueryLatestTransmissionDetailsResponse = exports.QueryLatestTransmissionDetailsRequest = exports.QueryLatestRoundResponse = exports.QueryLatestRoundRequest = exports.QueryFeedConfigInfoResponse = exports.QueryFeedConfigInfoRequest = exports.QueryFeedConfigResponse = exports.QueryFeedConfigRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const ocr_1 = require("./ocr");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: ocr_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            ocr_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = ocr_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? ocr_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = ocr_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? ocr_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeedConfigRequest() {
    return {
        feedId: ""
    };
}
exports.QueryFeedConfigRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryFeedConfigRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeedConfigRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeedConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest",
            value: exports.QueryFeedConfigRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeedConfigResponse() {
    return {
        feedConfigInfo: undefined,
        feedConfig: undefined
    };
}
exports.QueryFeedConfigResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedConfigInfo !== undefined) {
            ocr_1.FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.feedConfig !== undefined) {
            ocr_1.FeedConfig.encode(message.feedConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedConfigInfo = ocr_1.FeedConfigInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feedConfig = ocr_1.FeedConfig.decode(reader, reader.uint32());
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
        message.feedConfigInfo = object.feedConfigInfo !== undefined && object.feedConfigInfo !== null ? ocr_1.FeedConfigInfo.fromPartial(object.feedConfigInfo) : undefined;
        message.feedConfig = object.feedConfig !== undefined && object.feedConfig !== null ? ocr_1.FeedConfig.fromPartial(object.feedConfig) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeedConfigResponse();
        if (object.feed_config_info !== undefined && object.feed_config_info !== null) {
            message.feedConfigInfo = ocr_1.FeedConfigInfo.fromAmino(object.feed_config_info);
        }
        if (object.feed_config !== undefined && object.feed_config !== null) {
            message.feedConfig = ocr_1.FeedConfig.fromAmino(object.feed_config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_config_info = message.feedConfigInfo ? ocr_1.FeedConfigInfo.toAmino(message.feedConfigInfo) : undefined;
        obj.feed_config = message.feedConfig ? ocr_1.FeedConfig.toAmino(message.feedConfig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFeedConfigResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeedConfigResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeedConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse",
            value: exports.QueryFeedConfigResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeedConfigInfoRequest() {
    return {
        feedId: ""
    };
}
exports.QueryFeedConfigInfoRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryFeedConfigInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeedConfigInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeedConfigInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest",
            value: exports.QueryFeedConfigInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeedConfigInfoResponse() {
    return {
        feedConfigInfo: undefined,
        epochAndRound: undefined
    };
}
exports.QueryFeedConfigInfoResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedConfigInfo !== undefined) {
            ocr_1.FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.epochAndRound !== undefined) {
            ocr_1.EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeedConfigInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedConfigInfo = ocr_1.FeedConfigInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.epochAndRound = ocr_1.EpochAndRound.decode(reader, reader.uint32());
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
        message.feedConfigInfo = object.feedConfigInfo !== undefined && object.feedConfigInfo !== null ? ocr_1.FeedConfigInfo.fromPartial(object.feedConfigInfo) : undefined;
        message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? ocr_1.EpochAndRound.fromPartial(object.epochAndRound) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeedConfigInfoResponse();
        if (object.feed_config_info !== undefined && object.feed_config_info !== null) {
            message.feedConfigInfo = ocr_1.FeedConfigInfo.fromAmino(object.feed_config_info);
        }
        if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
            message.epochAndRound = ocr_1.EpochAndRound.fromAmino(object.epoch_and_round);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_config_info = message.feedConfigInfo ? ocr_1.FeedConfigInfo.toAmino(message.feedConfigInfo) : undefined;
        obj.epoch_and_round = message.epochAndRound ? ocr_1.EpochAndRound.toAmino(message.epochAndRound) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFeedConfigInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeedConfigInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeedConfigInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse",
            value: exports.QueryFeedConfigInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLatestRoundRequest() {
    return {
        feedId: ""
    };
}
exports.QueryLatestRoundRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryLatestRoundRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLatestRoundRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLatestRoundRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest",
            value: exports.QueryLatestRoundRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLatestRoundResponse() {
    return {
        latestRoundId: BigInt(0),
        data: undefined
    };
}
exports.QueryLatestRoundResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.latestRoundId !== BigInt(0)) {
            writer.uint32(8).uint64(message.latestRoundId);
        }
        if (message.data !== undefined) {
            ocr_1.Transmission.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLatestRoundResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.latestRoundId = reader.uint64();
                    break;
                case 2:
                    message.data = ocr_1.Transmission.decode(reader, reader.uint32());
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
        message.data = object.data !== undefined && object.data !== null ? ocr_1.Transmission.fromPartial(object.data) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLatestRoundResponse();
        if (object.latest_round_id !== undefined && object.latest_round_id !== null) {
            message.latestRoundId = BigInt(object.latest_round_id);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = ocr_1.Transmission.fromAmino(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.latest_round_id = message.latestRoundId !== BigInt(0) ? (message.latestRoundId?.toString)() : undefined;
        obj.data = message.data ? ocr_1.Transmission.toAmino(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLatestRoundResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLatestRoundResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLatestRoundResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse",
            value: exports.QueryLatestRoundResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLatestTransmissionDetailsRequest() {
    return {
        feedId: ""
    };
}
exports.QueryLatestTransmissionDetailsRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryLatestTransmissionDetailsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLatestTransmissionDetailsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLatestTransmissionDetailsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest",
            value: exports.QueryLatestTransmissionDetailsRequest.encode(message).finish()
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
exports.QueryLatestTransmissionDetailsResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.configDigest.length !== 0) {
            writer.uint32(10).bytes(message.configDigest);
        }
        if (message.epochAndRound !== undefined) {
            ocr_1.EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== undefined) {
            ocr_1.Transmission.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLatestTransmissionDetailsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configDigest = reader.bytes();
                    break;
                case 2:
                    message.epochAndRound = ocr_1.EpochAndRound.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.data = ocr_1.Transmission.decode(reader, reader.uint32());
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
        message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? ocr_1.EpochAndRound.fromPartial(object.epochAndRound) : undefined;
        message.data = object.data !== undefined && object.data !== null ? ocr_1.Transmission.fromPartial(object.data) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLatestTransmissionDetailsResponse();
        if (object.config_digest !== undefined && object.config_digest !== null) {
            message.configDigest = (0, helpers_1.bytesFromBase64)(object.config_digest);
        }
        if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
            message.epochAndRound = ocr_1.EpochAndRound.fromAmino(object.epoch_and_round);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = ocr_1.Transmission.fromAmino(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.config_digest = message.configDigest ? (0, helpers_1.base64FromBytes)(message.configDigest) : undefined;
        obj.epoch_and_round = message.epochAndRound ? ocr_1.EpochAndRound.toAmino(message.epochAndRound) : undefined;
        obj.data = message.data ? ocr_1.Transmission.toAmino(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLatestTransmissionDetailsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLatestTransmissionDetailsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLatestTransmissionDetailsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse",
            value: exports.QueryLatestTransmissionDetailsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOwedAmountRequest() {
    return {
        transmitter: ""
    };
}
exports.QueryOwedAmountRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.transmitter !== "") {
            writer.uint32(10).string(message.transmitter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryOwedAmountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOwedAmountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOwedAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest",
            value: exports.QueryOwedAmountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOwedAmountResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.QueryOwedAmountResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwedAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOwedAmountResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOwedAmountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOwedAmountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOwedAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse",
            value: exports.QueryOwedAmountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest",
            value: exports.QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
exports.QueryModuleStateResponse = {
    typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== undefined) {
            genesis_1.GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = genesis_1.GenesisState.decode(reader, reader.uint32());
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
        message.state = object.state !== undefined && object.state !== null ? genesis_1.GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = genesis_1.GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? genesis_1.GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse",
            value: exports.QueryModuleStateResponse.encode(message).finish()
        };
    }
};
