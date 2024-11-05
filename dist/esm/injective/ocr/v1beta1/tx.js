//@ts-nocheck
import { FeedConfig, Report } from "./ocr";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMsgCreateFeed() {
    return {
        sender: "",
        config: undefined
    };
}
export const MsgCreateFeed = {
    typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.config !== undefined) {
            FeedConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateFeed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.config = FeedConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateFeed();
        message.sender = object.sender ?? "";
        message.config = object.config !== undefined && object.config !== null ? FeedConfig.fromPartial(object.config) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateFeed();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = FeedConfig.fromAmino(object.config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.config = message.config ? FeedConfig.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateFeed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateFeed.decode(message.value);
    },
    toProto(message) {
        return MsgCreateFeed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
            value: MsgCreateFeed.encode(message).finish()
        };
    }
};
function createBaseMsgCreateFeedResponse() {
    return {};
}
export const MsgCreateFeedResponse = {
    typeUrl: "/injective.ocr.v1beta1.MsgCreateFeedResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateFeedResponse();
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
        const message = createBaseMsgCreateFeedResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateFeedResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateFeedResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateFeedResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateFeedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgCreateFeedResponse",
            value: MsgCreateFeedResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateFeed() {
    return {
        sender: "",
        feedId: "",
        signers: [],
        transmitters: [],
        linkPerObservation: undefined,
        linkPerTransmission: undefined,
        linkDenom: "",
        feedAdmin: "",
        billingAdmin: ""
    };
}
export const MsgUpdateFeed = {
    typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.feedId !== "") {
            writer.uint32(18).string(message.feedId);
        }
        for (const v of message.signers) {
            writer.uint32(26).string(v);
        }
        for (const v of message.transmitters) {
            writer.uint32(34).string(v);
        }
        if (message.linkPerObservation !== undefined) {
            writer.uint32(42).string(message.linkPerObservation);
        }
        if (message.linkPerTransmission !== undefined) {
            writer.uint32(50).string(message.linkPerTransmission);
        }
        if (message.linkDenom !== "") {
            writer.uint32(58).string(message.linkDenom);
        }
        if (message.feedAdmin !== "") {
            writer.uint32(66).string(message.feedAdmin);
        }
        if (message.billingAdmin !== "") {
            writer.uint32(74).string(message.billingAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateFeed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.feedId = reader.string();
                    break;
                case 3:
                    message.signers.push(reader.string());
                    break;
                case 4:
                    message.transmitters.push(reader.string());
                    break;
                case 5:
                    message.linkPerObservation = reader.string();
                    break;
                case 6:
                    message.linkPerTransmission = reader.string();
                    break;
                case 7:
                    message.linkDenom = reader.string();
                    break;
                case 8:
                    message.feedAdmin = reader.string();
                    break;
                case 9:
                    message.billingAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateFeed();
        message.sender = object.sender ?? "";
        message.feedId = object.feedId ?? "";
        message.signers = object.signers?.map(e => e) || [];
        message.transmitters = object.transmitters?.map(e => e) || [];
        message.linkPerObservation = object.linkPerObservation ?? undefined;
        message.linkPerTransmission = object.linkPerTransmission ?? undefined;
        message.linkDenom = object.linkDenom ?? "";
        message.feedAdmin = object.feedAdmin ?? "";
        message.billingAdmin = object.billingAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateFeed();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        message.signers = object.signers?.map(e => e) || [];
        message.transmitters = object.transmitters?.map(e => e) || [];
        if (object.link_per_observation !== undefined && object.link_per_observation !== null) {
            message.linkPerObservation = object.link_per_observation;
        }
        if (object.link_per_transmission !== undefined && object.link_per_transmission !== null) {
            message.linkPerTransmission = object.link_per_transmission;
        }
        if (object.link_denom !== undefined && object.link_denom !== null) {
            message.linkDenom = object.link_denom;
        }
        if (object.feed_admin !== undefined && object.feed_admin !== null) {
            message.feedAdmin = object.feed_admin;
        }
        if (object.billing_admin !== undefined && object.billing_admin !== null) {
            message.billingAdmin = object.billing_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        if (message.signers) {
            obj.signers = message.signers.map(e => e);
        }
        else {
            obj.signers = message.signers;
        }
        if (message.transmitters) {
            obj.transmitters = message.transmitters.map(e => e);
        }
        else {
            obj.transmitters = message.transmitters;
        }
        obj.link_per_observation = message.linkPerObservation === null ? undefined : message.linkPerObservation;
        obj.link_per_transmission = message.linkPerTransmission === null ? undefined : message.linkPerTransmission;
        obj.link_denom = message.linkDenom === "" ? undefined : message.linkDenom;
        obj.feed_admin = message.feedAdmin === "" ? undefined : message.feedAdmin;
        obj.billing_admin = message.billingAdmin === "" ? undefined : message.billingAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateFeed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateFeed.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateFeed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
            value: MsgUpdateFeed.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateFeedResponse() {
    return {};
}
export const MsgUpdateFeedResponse = {
    typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeedResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateFeedResponse();
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
        const message = createBaseMsgUpdateFeedResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateFeedResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateFeedResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateFeedResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateFeedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeedResponse",
            value: MsgUpdateFeedResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTransmit() {
    return {
        transmitter: "",
        configDigest: new Uint8Array(),
        feedId: "",
        epoch: BigInt(0),
        round: BigInt(0),
        extraHash: new Uint8Array(),
        report: undefined,
        signatures: []
    };
}
export const MsgTransmit = {
    typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.transmitter !== "") {
            writer.uint32(10).string(message.transmitter);
        }
        if (message.configDigest.length !== 0) {
            writer.uint32(18).bytes(message.configDigest);
        }
        if (message.feedId !== "") {
            writer.uint32(26).string(message.feedId);
        }
        if (message.epoch !== BigInt(0)) {
            writer.uint32(32).uint64(message.epoch);
        }
        if (message.round !== BigInt(0)) {
            writer.uint32(40).uint64(message.round);
        }
        if (message.extraHash.length !== 0) {
            writer.uint32(50).bytes(message.extraHash);
        }
        if (message.report !== undefined) {
            Report.encode(message.report, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.signatures) {
            writer.uint32(66).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransmit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transmitter = reader.string();
                    break;
                case 2:
                    message.configDigest = reader.bytes();
                    break;
                case 3:
                    message.feedId = reader.string();
                    break;
                case 4:
                    message.epoch = reader.uint64();
                    break;
                case 5:
                    message.round = reader.uint64();
                    break;
                case 6:
                    message.extraHash = reader.bytes();
                    break;
                case 7:
                    message.report = Report.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.signatures.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTransmit();
        message.transmitter = object.transmitter ?? "";
        message.configDigest = object.configDigest ?? new Uint8Array();
        message.feedId = object.feedId ?? "";
        message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
        message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
        message.extraHash = object.extraHash ?? new Uint8Array();
        message.report = object.report !== undefined && object.report !== null ? Report.fromPartial(object.report) : undefined;
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTransmit();
        if (object.transmitter !== undefined && object.transmitter !== null) {
            message.transmitter = object.transmitter;
        }
        if (object.config_digest !== undefined && object.config_digest !== null) {
            message.configDigest = bytesFromBase64(object.config_digest);
        }
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.epoch !== undefined && object.epoch !== null) {
            message.epoch = BigInt(object.epoch);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = BigInt(object.round);
        }
        if (object.extra_hash !== undefined && object.extra_hash !== null) {
            message.extraHash = bytesFromBase64(object.extra_hash);
        }
        if (object.report !== undefined && object.report !== null) {
            message.report = Report.fromAmino(object.report);
        }
        message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
        obj.config_digest = message.configDigest ? base64FromBytes(message.configDigest) : undefined;
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.epoch = message.epoch !== BigInt(0) ? (message.epoch?.toString)() : undefined;
        obj.round = message.round !== BigInt(0) ? (message.round?.toString)() : undefined;
        obj.extra_hash = message.extraHash ? base64FromBytes(message.extraHash) : undefined;
        obj.report = message.report ? Report.toAmino(message.report) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e));
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransmit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTransmit.decode(message.value);
    },
    toProto(message) {
        return MsgTransmit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
            value: MsgTransmit.encode(message).finish()
        };
    }
};
function createBaseMsgTransmitResponse() {
    return {};
}
export const MsgTransmitResponse = {
    typeUrl: "/injective.ocr.v1beta1.MsgTransmitResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransmitResponse();
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
        const message = createBaseMsgTransmitResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgTransmitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransmitResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTransmitResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTransmitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgTransmitResponse",
            value: MsgTransmitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgFundFeedRewardPool() {
    return {
        sender: "",
        feedId: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgFundFeedRewardPool = {
    typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.feedId !== "") {
            writer.uint32(18).string(message.feedId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundFeedRewardPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.feedId = reader.string();
                    break;
                case 3:
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
        const message = createBaseMsgFundFeedRewardPool();
        message.sender = object.sender ?? "";
        message.feedId = object.feedId ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgFundFeedRewardPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgFundFeedRewardPool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgFundFeedRewardPool.decode(message.value);
    },
    toProto(message) {
        return MsgFundFeedRewardPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
            value: MsgFundFeedRewardPool.encode(message).finish()
        };
    }
};
function createBaseMsgFundFeedRewardPoolResponse() {
    return {};
}
export const MsgFundFeedRewardPoolResponse = {
    typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundFeedRewardPoolResponse();
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
        const message = createBaseMsgFundFeedRewardPoolResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgFundFeedRewardPoolResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgFundFeedRewardPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgFundFeedRewardPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgFundFeedRewardPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse",
            value: MsgFundFeedRewardPoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawFeedRewardPool() {
    return {
        sender: "",
        feedId: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgWithdrawFeedRewardPool = {
    typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.feedId !== "") {
            writer.uint32(18).string(message.feedId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawFeedRewardPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.feedId = reader.string();
                    break;
                case 3:
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
        const message = createBaseMsgWithdrawFeedRewardPool();
        message.sender = object.sender ?? "";
        message.feedId = object.feedId ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawFeedRewardPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawFeedRewardPool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawFeedRewardPool.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawFeedRewardPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
            value: MsgWithdrawFeedRewardPool.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawFeedRewardPoolResponse() {
    return {};
}
export const MsgWithdrawFeedRewardPoolResponse = {
    typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawFeedRewardPoolResponse();
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
        const message = createBaseMsgWithdrawFeedRewardPoolResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawFeedRewardPoolResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawFeedRewardPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawFeedRewardPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawFeedRewardPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse",
            value: MsgWithdrawFeedRewardPoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetPayees() {
    return {
        sender: "",
        feedId: "",
        transmitters: [],
        payees: []
    };
}
export const MsgSetPayees = {
    typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.feedId !== "") {
            writer.uint32(18).string(message.feedId);
        }
        for (const v of message.transmitters) {
            writer.uint32(26).string(v);
        }
        for (const v of message.payees) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetPayees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.feedId = reader.string();
                    break;
                case 3:
                    message.transmitters.push(reader.string());
                    break;
                case 4:
                    message.payees.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetPayees();
        message.sender = object.sender ?? "";
        message.feedId = object.feedId ?? "";
        message.transmitters = object.transmitters?.map(e => e) || [];
        message.payees = object.payees?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetPayees();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        message.transmitters = object.transmitters?.map(e => e) || [];
        message.payees = object.payees?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        if (message.transmitters) {
            obj.transmitters = message.transmitters.map(e => e);
        }
        else {
            obj.transmitters = message.transmitters;
        }
        if (message.payees) {
            obj.payees = message.payees.map(e => e);
        }
        else {
            obj.payees = message.payees;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetPayees.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSetPayees.decode(message.value);
    },
    toProto(message) {
        return MsgSetPayees.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
            value: MsgSetPayees.encode(message).finish()
        };
    }
};
function createBaseMsgSetPayeesResponse() {
    return {};
}
export const MsgSetPayeesResponse = {
    typeUrl: "/injective.ocr.v1beta1.MsgSetPayeesResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetPayeesResponse();
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
        const message = createBaseMsgSetPayeesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetPayeesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetPayeesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSetPayeesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetPayeesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgSetPayeesResponse",
            value: MsgSetPayeesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTransferPayeeship() {
    return {
        sender: "",
        transmitter: "",
        feedId: "",
        proposed: ""
    };
}
export const MsgTransferPayeeship = {
    typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.transmitter !== "") {
            writer.uint32(18).string(message.transmitter);
        }
        if (message.feedId !== "") {
            writer.uint32(26).string(message.feedId);
        }
        if (message.proposed !== "") {
            writer.uint32(34).string(message.proposed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferPayeeship();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.transmitter = reader.string();
                    break;
                case 3:
                    message.feedId = reader.string();
                    break;
                case 4:
                    message.proposed = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferPayeeship();
        message.sender = object.sender ?? "";
        message.transmitter = object.transmitter ?? "";
        message.feedId = object.feedId ?? "";
        message.proposed = object.proposed ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTransferPayeeship();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.transmitter !== undefined && object.transmitter !== null) {
            message.transmitter = object.transmitter;
        }
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.proposed !== undefined && object.proposed !== null) {
            message.proposed = object.proposed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.proposed = message.proposed === "" ? undefined : message.proposed;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferPayeeship.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTransferPayeeship.decode(message.value);
    },
    toProto(message) {
        return MsgTransferPayeeship.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
            value: MsgTransferPayeeship.encode(message).finish()
        };
    }
};
function createBaseMsgTransferPayeeshipResponse() {
    return {};
}
export const MsgTransferPayeeshipResponse = {
    typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferPayeeshipResponse();
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
        const message = createBaseMsgTransferPayeeshipResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgTransferPayeeshipResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferPayeeshipResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgTransferPayeeshipResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTransferPayeeshipResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse",
            value: MsgTransferPayeeshipResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAcceptPayeeship() {
    return {
        payee: "",
        transmitter: "",
        feedId: ""
    };
}
export const MsgAcceptPayeeship = {
    typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
    encode(message, writer = BinaryWriter.create()) {
        if (message.payee !== "") {
            writer.uint32(10).string(message.payee);
        }
        if (message.transmitter !== "") {
            writer.uint32(18).string(message.transmitter);
        }
        if (message.feedId !== "") {
            writer.uint32(26).string(message.feedId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcceptPayeeship();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payee = reader.string();
                    break;
                case 2:
                    message.transmitter = reader.string();
                    break;
                case 3:
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
        const message = createBaseMsgAcceptPayeeship();
        message.payee = object.payee ?? "";
        message.transmitter = object.transmitter ?? "";
        message.feedId = object.feedId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAcceptPayeeship();
        if (object.payee !== undefined && object.payee !== null) {
            message.payee = object.payee;
        }
        if (object.transmitter !== undefined && object.transmitter !== null) {
            message.transmitter = object.transmitter;
        }
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.payee = message.payee === "" ? undefined : message.payee;
        obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAcceptPayeeship.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAcceptPayeeship.decode(message.value);
    },
    toProto(message) {
        return MsgAcceptPayeeship.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
            value: MsgAcceptPayeeship.encode(message).finish()
        };
    }
};
function createBaseMsgAcceptPayeeshipResponse() {
    return {};
}
export const MsgAcceptPayeeshipResponse = {
    typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcceptPayeeshipResponse();
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
        const message = createBaseMsgAcceptPayeeshipResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAcceptPayeeshipResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAcceptPayeeshipResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAcceptPayeeshipResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAcceptPayeeshipResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse",
            value: MsgAcceptPayeeshipResponse.encode(message).finish()
        };
    }
};
