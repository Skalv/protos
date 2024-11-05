"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ClaimAuthorization = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseClaimAuthorization() {
    return {
        contractAddress: "",
        action: 0
    };
}
exports.ClaimAuthorization = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.action !== 0) {
            writer.uint32(16).int32(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.action = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClaimAuthorization();
        message.contractAddress = object.contractAddress ?? "";
        message.action = object.action ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClaimAuthorization();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.action !== undefined && object.action !== null) {
            message.action = object.action;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
        obj.action = message.action === 0 ? undefined : message.action;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClaimAuthorization.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ClaimAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.ClaimAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization",
            value: exports.ClaimAuthorization.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        airdropEnabled: false,
        airdropStartTime: new Date(),
        durationUntilDecay: duration_1.Duration.fromPartial({}),
        durationOfDecay: duration_1.Duration.fromPartial({}),
        claimDenom: "",
        allowedClaimers: []
    };
}
exports.Params = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.airdropEnabled === true) {
            writer.uint32(8).bool(message.airdropEnabled);
        }
        if (message.airdropStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.durationUntilDecay !== undefined) {
            duration_1.Duration.encode(message.durationUntilDecay, writer.uint32(26).fork()).ldelim();
        }
        if (message.durationOfDecay !== undefined) {
            duration_1.Duration.encode(message.durationOfDecay, writer.uint32(34).fork()).ldelim();
        }
        if (message.claimDenom !== "") {
            writer.uint32(42).string(message.claimDenom);
        }
        for (const v of message.allowedClaimers) {
            exports.ClaimAuthorization.encode(v, writer.uint32(50).fork()).ldelim();
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
                    message.airdropEnabled = reader.bool();
                    break;
                case 2:
                    message.airdropStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.durationUntilDecay = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.durationOfDecay = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.claimDenom = reader.string();
                    break;
                case 6:
                    message.allowedClaimers.push(exports.ClaimAuthorization.decode(reader, reader.uint32()));
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
        message.airdropEnabled = object.airdropEnabled ?? false;
        message.airdropStartTime = object.airdropStartTime ?? undefined;
        message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? duration_1.Duration.fromPartial(object.durationUntilDecay) : undefined;
        message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? duration_1.Duration.fromPartial(object.durationOfDecay) : undefined;
        message.claimDenom = object.claimDenom ?? "";
        message.allowedClaimers = object.allowedClaimers?.map(e => exports.ClaimAuthorization.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.airdrop_enabled !== undefined && object.airdrop_enabled !== null) {
            message.airdropEnabled = object.airdrop_enabled;
        }
        if (object.airdrop_start_time !== undefined && object.airdrop_start_time !== null) {
            message.airdropStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.airdrop_start_time));
        }
        if (object.duration_until_decay !== undefined && object.duration_until_decay !== null) {
            message.durationUntilDecay = duration_1.Duration.fromAmino(object.duration_until_decay);
        }
        if (object.duration_of_decay !== undefined && object.duration_of_decay !== null) {
            message.durationOfDecay = duration_1.Duration.fromAmino(object.duration_of_decay);
        }
        if (object.claim_denom !== undefined && object.claim_denom !== null) {
            message.claimDenom = object.claim_denom;
        }
        message.allowedClaimers = object.allowed_claimers?.map(e => exports.ClaimAuthorization.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.airdrop_enabled = message.airdropEnabled === false ? undefined : message.airdropEnabled;
        obj.airdrop_start_time = message.airdropStartTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.airdropStartTime)) : undefined;
        obj.duration_until_decay = message.durationUntilDecay ? duration_1.Duration.toAmino(message.durationUntilDecay) : undefined;
        obj.duration_of_decay = message.durationOfDecay ? duration_1.Duration.toAmino(message.durationOfDecay) : undefined;
        obj.claim_denom = message.claimDenom === "" ? undefined : message.claimDenom;
        if (message.allowedClaimers) {
            obj.allowed_claimers = message.allowedClaimers.map(e => e ? exports.ClaimAuthorization.toAmino(e) : undefined);
        }
        else {
            obj.allowed_claimers = message.allowedClaimers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
